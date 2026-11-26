interface ContactPayload {
  fullName?: unknown;
  email?: unknown;
  websiteUrl?: unknown;
  message?: unknown;
  recaptchaToken?: unknown;
}

interface RecaptchaVerification {
  success?: boolean;
  hostname?: string;
}

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let parsedPayload: unknown;

  try {
    parsedPayload = await request.json();
  } catch {
    return jsonError('Invalid form submission.', 400);
  }

  if (typeof parsedPayload !== 'object' || parsedPayload === null) {
    return jsonError('Invalid form submission.', 400);
  }

  const payload = parsedPayload as ContactPayload;

  const fullName = typeof payload.fullName === 'string' ? payload.fullName.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const websiteUrl = typeof payload.websiteUrl === 'string' ? payload.websiteUrl.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';
  const recaptchaToken = typeof payload.recaptchaToken === 'string' ? payload.recaptchaToken : '';

  if (!fullName || fullName.length > 160 || !email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError('Please provide a valid name and email address.', 400);
  }

  if (websiteUrl.length > 2048 || message.length > 5000 || !recaptchaToken || recaptchaToken.length > 4096) {
    return jsonError('Please complete the form and reCAPTCHA challenge.', 400);
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (!recaptchaSecret) {
    return jsonError('Form verification is not configured. Please try again later.', 503);
  }

  let recaptchaResult: RecaptchaVerification;

  try {
    const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: recaptchaSecret, response: recaptchaToken }),
      cache: 'no-store',
    });

    if (!verificationResponse.ok) {
      return jsonError('Could not verify reCAPTCHA. Please try again.', 502);
    }

    recaptchaResult = await verificationResponse.json();
  } catch {
    return jsonError('Could not verify reCAPTCHA. Please try again.', 502);
  }

  if (recaptchaResult.success !== true) {
    return jsonError('reCAPTCHA could not verify this request. Please try again.', 403);
  }

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey || serviceId.includes('here') || templateId.includes('here') || publicKey.includes('here')) {
    if (process.env.NODE_ENV === 'development') {
      return Response.json({ success: true, preview: true });
    }

    return jsonError('Contact form delivery is temporarily unavailable.', 503);
  }

  try {
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: fullName,
          reply_to: email,
          website_url: websiteUrl,
          message,
        },
      }),
      cache: 'no-store',
    });

    if (!emailResponse.ok) {
      return jsonError('Your request could not be sent. Please try again.', 502);
    }
  } catch {
    return jsonError('Your request could not be sent. Please try again.', 502);
  }

  return Response.json({ success: true });
}
