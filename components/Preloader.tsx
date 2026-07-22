import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from './ThemeContext';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const hardTruths = [
  'Your website is not a brochure. It is a revenue engine. Treat it like one or watch your competitors wave goodbye.',
  'If your SEO strategy hasn\x27t changed since ChatGPT launched, you do not have a strategy — you have a nostalgic habit.',
  'Hiring an agency because your nephew knows WordPress is not a growth strategy. It is a tax on your ambition.',
  'The best time to optimize for AI search was yesterday. The second best time is before your competitor closes the gap.',
  'Most businesses spend more on office coffee than on understanding their search traffic. That tracks.',
  'Your competitors are not outranking you because they have better content. They have better architecture. Big difference.',
  'A beautiful website that does not convert is just an expensive art project. Hope your investors appreciate modern art.',
  'If your page load time exceeds two seconds, you are not losing visitors — you are curating for the patient. There are fewer of them every day.',
  'Your CRM is full of leads you paid for. Your organic search pipeline is full of leads you earned. Guess which one gets ignored.',
  'Algorithm updates do not hate your website. They simply do not trust it yet. There is a cure for that.',
  'The seven-figure site you built three years ago now loads slower than your grandmother dial-up. Progress has a cost.',
  'You do not need more traffic. You need traffic that converts. Unless you enjoy subsidizing bandwidth you cannot monetize.',
  'Your content strategy has more buzzwords than actual substance. We can fix that. Or you can keep leveraging synergies.',
  'If schema markup feels optional, imagine how your website looks to Google. Spoiler: it looks transparent.',
  'That growth playbook from 2022 is now optimizing for a search environment that no longer exists. The market moved.',
  'Your mobile experience was designed on a 27-inch monitor. It shows in every bounce rate metric.',
  'The average B2B site bleeds a third of mobile users before they reach the headline. Your bounce rate is not a mystery.',
  'You have a content team producing twenty posts a month and none of them answer a real question. That is not content. That is noise.',
  'Your competitors are investing in technical infrastructure. You are investing in another brand awareness campaign. May the best budget win.',
  'If your analytics dashboard makes you feel good but cannot trace revenue to source, it is a pacifier, not a tool.',
  'Chasing rankings without conversion architecture is like owning the best storefront on an empty street. Proud but unprofitable.',
  'Your last redesign was driven by aesthetics, not performance. Your users noticed. Your conversion rate noticed more.',
  'You have a data problem, not a creativity problem. Every insight you need is buried in search console.',
  'Hiring for culture fit is great. Hiring people who can read analytics is better. Hire both or prepare for surprises.',
  'The gap between your brand messaging and your technical execution is visible to every search engine. They index the gap.',
  'Your Q4 growth plan relies on channels you do not control. Organic search is the only channel you can own. Just a thought.',
  'If your homepage takes five seconds to load, your value proposition does not matter. Nobody waited to read it.',
  'You have seventeen tracking scripts and zero understanding of which ones drive decisions. That is a lot of JavaScript for very little wisdom.',
  'Your competitors are not smarter. They are just better at structured data. That is a fixable problem, which makes it your problem.',
  'The average founder spends more time choosing a font than auditing their crawl budget. Priorities are a fascinating thing.',
  'You are paying for Google Ads because your organic presence is invisible. We can fix the root cause or you can keep renting clicks.',
  'Your technical debt is not a technology problem. It is a revenue problem that happens to manifest in your codebase.',
  'If you cannot explain your growth strategy in one sentence, neither can your website. Search engines agree.',
  'The most expensive words in business are "we have always done it this way." Usually followed by "and now we are stuck."',
  'Your SEO agency sends you a monthly report. Read it. The answers to your revenue questions are in there.',
  'A fast website is not a luxury. It is a conversion requirement. Treat speed like compliance, not optimization.',
  'Your brand authority is built one credible citation at a time. There are no shortcuts, only consistent execution.',
  'If your content answers questions your customers are not asking, you are writing for an audience of yourself.',
  'The difference between a growth strategy and a wishlist is structural execution. Wishes are free. Strategies require work.',
  'You cannot AI-generate your way out of a trust deficit. Authority is earned, not prompted.',
  'The search landscape shifts every quarter. Your strategy should shift faster. Static plans lose to dynamic markets.',
  'Your competitors are not winning on budget. They are winning on architecture. Money cannot fix a broken foundation.',
  'If your website was a house, it would have a beautiful front door and a crumbling foundation. Priorities are revealing.',
  'Founders who ignore technical SEO usually discover it the day their traffic drops 40%. That day has a way of arriving.',
  'Your load time is not a developer problem. It is a revenue problem that developers can solve. There is a difference.',
  'Google evaluates your expertise, experience, authoritativeness, and trustworthiness. Does your website pass that test?',
  'You have a content calendar. What you need is a content strategy. A calendar tells you when to post. A strategy tells you why.',
  'If your search traffic feels random, your architecture probably is. Randomness is not a strategy. It is a symptom.',
  'The most dangerous metric is the one that makes you feel good without telling you anything useful. Vanity is expensive.',
  'Your website is competing for attention in a world of infinite distractions. Every millisecond of load time is a negotiation.',
];

const actions = [
  'Rewiring', 'Untangling', 'Fortifying', 'Streamlining', 'Rescuing',
  'Future-proofing', 'Re-architecting', 'Decluttering', 'Amplifying', 'Automating',
  'Eliminating', 'Reviving', 'Consolidating', 'Pruning', 'Decoupling',
  'Hardening', 'Accelerating', 'Unblocking', 'Refactoring', 'De-risking',
];

const nouns = [
  'conversion funnel', 'content architecture', 'technical foundation', 'organic pipeline', 'brand authority',
  'search presence', 'information architecture', 'content silo', 'backlink ecosystem', 'crawl budget',
  'schema layer', 'entity map', 'topic cluster', 'revenue attribution', 'tech debt',
  'growth engine', 'competitive moat', 'acquisition channel', 'user experience', 'marketing stack',
  'mobile footprint', 'page weight', 'content surface area', 'referral network', 'authority depth',
  'query coverage', 'index health', 'load profile', 'site topology', 'trust signal',
];

const observations = [
  'rarely gets the attention it deserves',
  'is actively leaking revenue without notice',
  'could be generating three times more pipeline',
  'has more tech debt than your product team admits',
  'is held together by good intentions and duct tape',
  'thinks it is optimized but has not been tested',
  'is competing with one hand tied behind its back',
  'has not been audited since the last redesign',
  'is speaking a language search engines ignore',
  'is invisible to half your potential buyers',
  'is optimized for vanity, not revenue',
  'has too many dependencies and not enough coherence',
  'is suffering from legacy thinking in modern clothes',
  'is the reason your growth has plateaued',
  'is burning budget on the wrong channels',
  'has more redirects than a political campaign',
  'is a conversion killer in slow motion',
  'passed the point of diminishing returns months ago',
  'is fighting yesterday war with yesterday weapons',
  'looks fine on desktop and falls apart on mobile',
  'has not been touched since your last funding round',
  'is optimized for what you want to hear, not what is true',
  'would fail a basic stress test',
  'is competing against your own priorities and losing',
  'has more unused potential than used',
];

const punchlines = [
  'We just fixed that. You are welcome.',
  'Your future self will thank us.',
  'Someone had to say it.',
  'We are not judging. We are fixing.',
  'This is the part where things get better.',
  'Consider this your weekly dose of architectural honesty.',
  'Your competitors just got nervous. Good.',
  'We call this the "stop leaving money on the table" phase.',
  'This is what due diligence looks like.',
  'Not all heroes wear capes. Some write JSON-LD.',
  'Your CPA is about to look a lot better.',
  'The algorithm appreciates your cooperation.',
  'This is the grown-up part of growth.',
  'Your pipeline is about to get interesting.',
  'Consider this an intervention, but a profitable one.',
  'We turned your weakness into a footnote. You are welcome.',
  'Your search console just sent a thank-you note.',
  'This is the part where your competitors fall behind.',
  'The ROI on this one is embarrassing in the best way.',
  'This is why you hired us. This exact moment.',
  'Your board will not understand it. They will love the numbers.',
  'Another crisis averted. You are welcome.',
  'This is the difference between busy and productive.',
  'Your organic traffic just got a promotion.',
  'We are earning your trust one micro-optimization at a time.',
];

const contexts = [
  'across every search vertical that matters',
  'before your next quarterly review',
  'while your competitors double down on irrelevant tactics',
  'ahead of the next core update',
  'under the hood of your marketing engine',
  'at the intersection of engineering and growth',
  'beyond the vanity metrics that distract you',
  'inside every LLM that cites your domain',
  'at the pace your market actually moves',
  'against the competitive landscape you actually face',
  'through the lens of buyer intent signals',
  'within your existing infrastructure budget',
  'across the entire buyer journey arc',
  'ahead of the algorithm shifts you cannot predict',
  'behind every conversion data point you ignore',
  'at the edge of what your stack can deliver',
  'before your next growth board presentation',
  'under the radar of your slower competitors',
  'on the timeline your investors expect',
  'past the point of incremental improvement',
  'across the surfaces your customers actually use',
  'inside every search feature you are not visible in',
  'before your organic share erodes further',
  'at the speed your market demands',
  'against the benchmarks you should be beating',
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateStatement(seed: number): string {
  const r = (offset: number) => seededRandom(seed + offset);
  const category = Math.floor(r(0) * 10);

  if (category < 3) {
    const i = Math.floor(r(1) * hardTruths.length);
    return hardTruths[i];
  }

  const action = actions[Math.floor(r(1) * actions.length)];
  const noun = nouns[Math.floor(r(2) * nouns.length)];
  const observation = observations[Math.floor(r(3) * observations.length)];
  const punchline = punchlines[Math.floor(r(4) * punchlines.length)];
  const context = contexts[Math.floor(r(5) * contexts.length)];

  const templates = [
    `${action} your ${noun} ${context}. ${punchline}`,
    `Your ${noun} ${observation}. ${action} ${context}.`,
    `${action} your ${noun} — your ${observation} ${context}.`,
    `${context}: your ${noun} ${observation}. ${punchline}`,
    `${action} your ${noun}. ${observation.charAt(0).toUpperCase() + observation.slice(1)}. ${punchline}`,
    `We are ${action.toLowerCase()} your ${noun} ${context}. ${punchline}`,
    `Your ${noun} ${observation}. We ${action.toLowerCase()} it ${context}. ${punchline}`,
  ];

  return templates[Math.floor(r(6) * templates.length)];
}

const cycleDuration = 2800;

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const { isDark } = useTheme();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const progressMotion = useMotionValue(0);
  const smoothProgress = useSpring(progressMotion, { damping: 30, stiffness: 60, mass: 1.5 });
  const progressWidth = useTransform(smoothProgress, [0, 100], ['0%', '100%']);

  const seed = useMemo(() => Date.now() + Math.random(), []);
  const [statementIndex, setStatementIndex] = useState(0);
  const statement = useMemo(
    () => generateStatement(seed + statementIndex),
    [seed, statementIndex],
  );

  useEffect(() => {
    const steps = [8, 18, 30, 42, 55, 67, 78, 88, 95, 100];
    let i = 0;
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += 220;
      if (i < steps.length) {
        progressMotion.set(steps[i]);
        setProgress(steps[i]);
        i++;
      }
      if (elapsed % cycleDuration < 220) {
        setStatementIndex((prev) => prev + 1);
      }
      if (i >= steps.length) {
        clearInterval(interval);
        setTimeout(() => { setIsExiting(true); setTimeout(onComplete, 1200); }, 400);
      }
    }, 220);
    return () => clearInterval(interval);
  }, [onComplete, progressMotion]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div exit={{ y: '-100%' }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }} className="fixed inset-0 z-[9998] bg-paper flex items-center justify-center">
          <div className="relative z-10 flex flex-col items-center max-w-lg px-6">
            <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 1.2, ease: slowEase }} className="mb-28">
              <img src={isDark ? "/images/zesh_logo.png" : "/images/zesh_logo_light.png"} alt="ZESH." className="h-6 md:h-7 w-auto" />
            </motion.div>
            <motion.div initial={{ opacity: 0, filter: 'blur(8px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ delay: 0.3, duration: 1, ease: slowEase }} className="flex items-end gap-1 mb-10">
              <span className="font-lato text-7xl md:text-9xl font-700 tabular-nums leading-none text-ink">{progress}</span>
              <span className="font-lato text-lg font-light text-text-muted mb-3">%</span>
            </motion.div>
            <div className="w-48 md:w-64 h-[1px] bg-border overflow-hidden">
              <motion.div style={{ width: progressWidth }} className="h-full bg-ink transition-none" />
            </div>
            <div className="mt-8 min-h-[3.5rem] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={statementIndex}
                  initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(6px)' }}
                  transition={{ duration: 0.5, ease: slowEase }}
                  className="text-center font-lato text-xs md:text-sm text-text-muted leading-[1.7]"
                >{statement}</motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
