import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const secret = request.headers.get('x-sanity-secret');

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const { _type, slug } = body;

  if (_type === 'blogPost') {
    revalidatePath('/blog');
    if (slug) revalidatePath(`/blog/${slug}`);
  } else if (_type === 'jobOpening') {
    revalidatePath('/careers');
  } else if (_type === 'caseStudy') {
    revalidatePath('/case-studies');
    if (slug) revalidatePath(`/case-studies/${slug}`);
  }

  revalidatePath('/sitemap.xml');

  return NextResponse.json({ revalidated: true, timestamp: Date.now() });
}
