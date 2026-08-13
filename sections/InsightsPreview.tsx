import { m } from 'framer-motion';
import RevealText from '../components/RevealText';
import { articles } from '../data/articles';

export default function InsightsPreview() {
  return (
    <section className="py-16 md:py-48 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16">
        <div className="text-center mb-20">
          <RevealText><p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal mb-4">Thinking</p></RevealText>
          <RevealText delay={0.1}><h2 className="font-syne text-4xl md:text-6xl lg:text-7xl font-800 tracking-[-0.03em]">Insights<span className="text-signal">.</span></h2></RevealText>
        </div>
        <div className="space-y-0">
          {articles.slice(0, 3).map((article, i) => (
            <RevealText key={article.slug} delay={i * 0.08}>
              <a href={`/insights/${article.slug}`}>
                <m.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="group py-8 border-b border-border"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-lato text-[10px] tracking-[0.15em] uppercase text-signal">{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted/20" />
                    <span className="font-lato text-[10px] text-text-muted">{article.date} Â· {article.readTime}</span>
                  </div>
                  <h3 className="font-syne text-lg md:text-2xl font-800 group-hover:text-signal transition-colors duration-700">{article.title}</h3>
                </m.div>
              </a>
            </RevealText>
          ))}
        </div>
        <RevealText delay={0.3}>
          <div className="text-center mt-14">
            <a href="/insights" className="font-lato text-sm text-signal sig-hover">Read more insights →</a>
          </div>
        </RevealText>
      </div>
    </section>
  );
}

