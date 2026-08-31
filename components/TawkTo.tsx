"use client";

import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    var Tawk_API = (window as any).Tawk_API || {},
      Tawk_LoadStart = new Date();
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/6a954822d8a8563441ca95d7/1k1bi3i5i";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  }, []);

  return null;
}
