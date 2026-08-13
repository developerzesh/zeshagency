"use client";

import { m } from 'framer-motion';
import RevealText from '../../components/RevealText';
import { blogPosts } from '../../lib/blogData';
import { slowEase } from '../../lib/animationEasing';

export default function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);
  return (
    <section className="relative py-16 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-24">
          <div className="md:col-span-6">
            <RevealText>
              <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">INSIGHTS</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-syne text-4xl md:text-6xl font-800 tracking-[-0.03em] leading-tight">
                Latest thinking from our team<span className="text-signal">.</span>
              </h2>
            </RevealText>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <RevealText delay={0.2}>
              <p className="font-lato text-base text-text-secondary leading-[1.85]">
                Perspectives on growth strategy, performance marketing, and the technical systems that drive enterprise acquisition.
              </p>
            </RevealText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <RevealText key={post.slug} delay={i * 0.08} duration={1.4}>
              <a href={`/blog/${post.slug}`} className="group block h-full">
                <m.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.7, ease: slowEase }}
                  className="border border-border/40 hover:border-signal/30 rounded-xl overflow-hidden transition-all duration-700 bg-paper/30 dark:bg-ink/5 h-full flex flex-col justify-between will-change-transform"
                >
                  <div>
                    <div className="aspect-video bg-surface/50 relative overflow-hidden">
                      {post.category === 'SEO & Search' && (
                        <svg viewBox="0 0 400 225" className="w-full h-full">
                          <m.rect x="170" y="15" width="60" height="24" rx="4" fill="currentColor" className="text-signal"
                            initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }} />
                          <m.text x="200" y="31" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fontWeight="600"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>TEMPLATE</m.text>
                          {[80, 140, 200, 260, 320].map((x, idx) => (
                            <m.path key={`line-${idx}`} d={`M 200 39 L 200 65 L ${x} 65 L ${x} 85`}
                              fill="none" stroke="currentColor" strokeWidth="1" className="text-signal/30"
                              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.5 + idx * 0.08 }} />
                          ))}
                          {[80, 140, 200, 260, 320].map((x, idx) => (
                            <g key={`page-${idx}`}>
                              <m.rect x={x - 18} y="85" width="36" height="28" rx="3" fill="currentColor" className="text-signal/20 group-hover:text-signal/35"
                                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.8 + idx * 0.08 }} />
                              <m.line x1={x - 10} y1="93" x2={x + 10} y2="93" stroke="currentColor" strokeWidth="1" className="text-signal/40"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1 + idx * 0.06 }} />
                              <m.line x1={x - 10} y1="99" x2={x + 6} y2="99" stroke="currentColor" strokeWidth="1" className="text-signal/30"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.1 + idx * 0.06 }} />
                              <m.line x1={x - 10} y1="105" x2={x + 8} y2="105" stroke="currentColor" strokeWidth="1" className="text-signal/25"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 1.2 + idx * 0.06 }} />
                            </g>
                          ))}
                          <m.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }}>
                            {[80, 140, 200, 260, 320].map((x, idx) => (
                              <g key={`sub-${idx}`}>
                                <rect x={x - 14} y="125" width="28" height="18" rx="2" fill="currentColor" className="text-signal/10" />
                                <line x1={x - 8} y1="131" x2={x + 6} y2="131" stroke="currentColor" strokeWidth="0.5" className="text-signal/20" />
                                <line x1={x - 8} y1="136" x2={x + 3} y2="136" stroke="currentColor" strokeWidth="0.5" className="text-signal/15" />
                              </g>
                            ))}
                          </m.g>
                          <m.text x="200" y="175" textAnchor="middle" fill="currentColor" fontSize="28" fontFamily="sans-serif" fontWeight="800" className="text-signal/15"
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.3 }}>500+</m.text>
                          <m.text x="200" y="195" textAnchor="middle" fill="currentColor" fontSize="9" fontFamily="sans-serif" className="text-signal/40"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }}>PAGES GENERATED</m.text>
                        </svg>
                      )}
                      {post.category === 'AI & GEO' && (
                        <svg viewBox="0 0 400 225" className="w-full h-full">
                          <m.circle cx="200" cy="112" r="0" fill="currentColor" className="text-signal/30 group-hover:text-signal/50"
                            initial={{ r: 0 }} whileInView={{ r: 28 }} viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }} />
                          <m.circle cx="200" cy="112" r="0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-signal/20"
                            initial={{ r: 0 }} whileInView={{ r: 40 }} viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }} />
                          <m.text x="200" y="108" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="sans-serif" fontWeight="700" className="text-signal"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>YOUR</m.text>
                          <m.text x="200" y="120" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="sans-serif" fontWeight="700" className="text-signal"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.65 }}>BRAND</m.text>
                          {[
                            { cx: 80, cy: 50, label: 'ChatGPT', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25' },
                            { cx: 320, cy: 50, label: 'Claude', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0' },
                            { cx: 80, cy: 175, label: 'Gemini', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25' },
                            { cx: 320, cy: 175, label: 'Perplexity', icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
                            { cx: 200, cy: 205, label: 'Siri', icon: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18' },
                          ].map((node, idx) => (
                            <g key={idx}>
                              <m.line x1="200" y1="112" x2={node.cx} y2={node.cy} stroke="currentColor" strokeWidth="0.5" className="text-signal/25"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 + idx * 0.08 }} />
                              <m.circle cx={node.cx} cy={node.cy} r="0" fill="currentColor" className="text-signal/20 group-hover:text-signal/40"
                                initial={{ r: 0 }} whileInView={{ r: 22 }} viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }} />
                              <m.circle cx={node.cx} cy={node.cy} r="0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-signal/15"
                                initial={{ r: 0 }} whileInView={{ r: 30 }} viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }} />
                              <m.text x={node.cx} y={node.cy + 35} textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="sans-serif" className="text-signal/50"
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 + idx * 0.08 }}>{node.label}</m.text>
                            </g>
                          ))}
                        </svg>
                      )}
                      {post.category === 'Web Performance' && (
                        <svg viewBox="0 0 400 225" className="w-full h-full">
                          <m.path d="M 100 160 A 80 80 0 0 1 300 160" fill="none" stroke="currentColor" strokeWidth="12" className="text-signal/10"
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} />
                          <m.path d="M 100 160 A 80 80 0 0 1 300 160" fill="none" stroke="currentColor" strokeWidth="12" className="text-signal/30"
                            strokeDasharray="251" strokeDashoffset="251"
                            initial={{ strokeDashoffset: 251 }} whileInView={{ strokeDashoffset: 80 }} viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.4, ease: slowEase }} />
                          <m.line x1="200" y1="160" x2="200" y2="90" stroke="currentColor" strokeWidth="2" className="text-signal"
                            initial={{ transform: 'rotate(-90deg)', transformOrigin: '200px 160px' }}
                            whileInView={{ transform: 'rotate(40deg)', transformOrigin: '200px 160px' }}
                            viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.8, ease: slowEase }} />
                          <m.circle cx="200" cy="160" r="6" fill="currentColor" className="text-signal"
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1 }} />
                          <m.text x="200" y="145" textAnchor="middle" fill="currentColor" fontSize="24" fontFamily="sans-serif" fontWeight="800" className="text-signal"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }}>98</m.text>
                          <m.text x="200" y="185" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="sans-serif" className="text-signal/50"
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.3 }}>PERFORMANCE</m.text>
                          {[
                            { label: 'LCP', value: 1.2, max: 2.5, x: 60 },
                            { label: 'CLS', value: 0.05, max: 0.1, x: 160 },
                            { label: 'INP', value: 85, max: 200, x: 260 },
                          ].map((metric, idx) => (
                            <g key={idx}>
                              <m.rect x={metric.x} y="200" width="80" height="6" rx="3" fill="currentColor" className="text-signal/10"
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.4 + idx * 0.1 }} />
                              <m.rect x={metric.x} y="200" width="0" height="6" rx="3" fill="currentColor" className="text-signal/50"
                                initial={{ width: 0 }} whileInView={{ width: 80 * (metric.value / metric.max) }} viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 1.5 + idx * 0.1, ease: slowEase }} />
                              <m.text x={metric.x} y="218" fill="currentColor" fontSize="8" fontFamily="sans-serif" fontWeight="600" className="text-signal/60"
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.6 + idx * 0.1 }}>{metric.label}</m.text>
                              <m.text x={metric.x + 80} y="218" textAnchor="end" fill="currentColor" fontSize="7" fontFamily="sans-serif" className="text-signal/35"
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.7 + idx * 0.1 }}>
                                {metric.label === 'CLS' ? metric.value : `${metric.value}${metric.label === 'LCP' ? 's' : 'ms'}`}
                              </m.text>
                            </g>
                          ))}
                          <m.line x1="60" y1="196" x2="340" y2="196" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" className="text-signal/25"
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.8 }} />
                        </svg>
                      )}
                      {post.category === 'Growth Strategy' && (
                        <svg viewBox="0 0 400 225" className="w-full h-full">
                          {[
                            { x: 40, h: 60 }, { x: 80, h: 90 }, { x: 120, h: 75 },
                            { x: 160, h: 120 }, { x: 200, h: 100 }, { x: 240, h: 140 },
                            { x: 280, h: 130 }, { x: 320, h: 170 }, { x: 360, h: 155 }
                          ].map((bar, idx) => (
                            <m.rect
                              key={idx}
                              x={bar.x}
                              y={200}
                              width={28}
                              height={0}
                              fill="currentColor"
                              className="text-signal/25 group-hover:text-signal/40"
                              initial={{ height: 0, y: 200 }}
                              whileInView={{ height: bar.h, y: 200 - bar.h }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 0.2 + idx * 0.06, ease: slowEase }}
                            />
                          ))}
                          <m.path
                            d="M 54 140 L 94 110 L 134 125 L 174 80 L 214 100 L 254 60 L 294 70 L 334 30 L 374 45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-signal"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.8 }}
                          />
                        </svg>
                      )}
                      {post.category === 'Case Breakdowns' && (
                        <svg viewBox="0 0 400 225" className="w-full h-full">
                          <m.circle cx="140" cy="112" r="70" fill="none" stroke="currentColor" strokeWidth="16" className="text-signal/20"
                            strokeDasharray="330 110" initial={{ strokeDashoffset: 440 }} whileInView={{ strokeDashoffset: 110 }}
                            viewport={{ once: true }} transition={{ duration: 1.2, ease: slowEase }} />
                          <m.circle cx="140" cy="112" r="70" fill="none" stroke="currentColor" strokeWidth="16" className="text-signal/40"
                            strokeDasharray="220 220" initial={{ strokeDashoffset: 440 }} whileInView={{ strokeDashoffset: 220 }}
                            viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2, ease: slowEase }} />
                          <m.circle cx="140" cy="112" r="70" fill="none" stroke="currentColor" strokeWidth="16" className="text-signal/60"
                            strokeDasharray="110 330" initial={{ strokeDashoffset: 440 }} whileInView={{ strokeDashoffset: 330 }}
                            viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4, ease: slowEase }} />
                          {[{ x: 280, h: 80 }, { x: 310, h: 120 }, { x: 340, h: 60 }, { x: 370, h: 100 }].map((bar, idx) => (
                            <m.rect key={idx} x={bar.x} y={200} width={20} height={0} fill="currentColor"
                              className="text-signal/30" initial={{ height: 0, y: 200 }}
                              whileInView={{ height: bar.h, y: 200 - bar.h }} viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }} />
                          ))}
                        </svg>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent pointer-events-none" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-lato text-[9px] tracking-[0.2em] uppercase text-signal">{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="font-lato text-[10px] text-text-muted">{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="font-lato text-[10px] text-text-muted">{post.readTime} read</span>
                      </div>
                      <h4 className="font-syne text-lg font-800 tracking-tight group-hover:text-signal transition-colors duration-700 leading-snug mb-2">
                        {post.title}
                      </h4>
                      <p className="font-lato text-xs text-text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>
                </m.div>
              </a>
            </RevealText>
          ))}
        </div>

        <RevealText delay={0.4}>
          <div className="mt-16 md:mt-20 flex justify-start">
            <a href="/blog" className="font-lato text-sm font-medium text-signal sig-hover">View All Insights →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
