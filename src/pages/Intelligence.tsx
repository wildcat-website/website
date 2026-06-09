import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const clarityPrinciples = [
  {
    title: "Who you are",
    body:
      "Not in the sense of your values statement, but in the sense of how your market should understand you. What you do that others don't. Where you sit in the mind of the person you're trying to reach.",
  },
  {
    title: "Who you're for",
    body:
      "Not as a demographic, but as a set of problems, motivations, and decision-making conditions. The market segment that is most likely to understand your value immediately, without you having to explain it.",
  },
  {
    title: "Why now",
    body:
      "What about the current market, cultural moment, or category shift makes your company the right answer at this specific time.",
  },
];

const claritySignals = [
  "Your sales conversations involve a lot of education. You find yourself explaining what you do more than selling why it matters.",
  "Your marketing and your sales team describe the company differently. Not wildly differently, just slightly. Enough that the message fractures depending on who delivers it.",
  "Competitors with weaker products are winning deals. Not because of price. Because their positioning is cleaner and their narrative is sharper.",
  "You get traction in some segments and near-silence in others, without a clear reason why.",
];

const categories = [
  "All",
  "Clarity",
  "Positioning",
  "Narrative",
  "Strategy",
  "Growth",
  "Market Signals",
  "Founder-Led Brands",
];

const Observations = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      className="min-h-screen flex flex-col bg-[#FFFFFF] text-black selection:bg-brand-amber selection:text-black font-sans"
      ref={containerRef}
    >
      <Navbar />

      <main className="flex-1">
        {/* PARALLAX HERO SECTION */}
        <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 lg:px-12 flex flex-col justify-center min-h-[90vh] overflow-hidden bg-white">
          {/* Advanced Motion Background */}
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            {/* Soft grid and background subtle images */}
            <div className="absolute inset-0 bg-[#FFFFFF] z-[-1]"></div>

            <motion.div
              className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-brand-amber/10 rounded-full blur-[150px]"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -100, 50, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[10%] left-[10%] w-[35vw] h-[35vw] max-w-[600px] max-h-[600px] bg-neutral-300/40 rounded-full blur-[120px]"
              animate={{
                x: [0, -80, 40, 0],
                y: [0, 80, -40, 0],
                scale: [1, 1.4, 0.9, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5,
              }}
            />
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_60%,transparent_100%)]"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-center md:justify-start items-center gap-4 mb-6 overflow-hidden py-1">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-[2px] w-16 bg-brand-amber origin-left"
                />
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-sm md:text-base font-mono uppercase tracking-widest text-brand-amber inline-block"
                >
                  The Journal
                </motion.span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-serif tracking-tighter leading-[0.9] mb-10 max-w-5xl text-black flex flex-col items-center md:items-start overflow-visible py-2">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.6,
                  }}
                  className="block"
                >
                  Observations
                </motion.span>
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.8,
                  }}
                  className="italic text-transparent bg-clip-text bg-gradient-to-r from-black to-neutral-400 block"
                >
                  for the <span className="bg-brand-amber text-black px-2 py-1 inline-block">bold.</span>
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.0 }}
                className="flex flex-col md:flex-row gap-8 md:items-center max-w-3xl border-t border-neutral-200 pt-8 mt-8 w-full"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed flex-1"
                >
                  Field notes on clarity, positioning, narrative, and the
                  strategy layer behind growth.
                </motion.p>
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="hidden md:block w-px h-16 bg-neutral-200 origin-bottom"
                ></motion.div>
                <div className="flex flex-col gap-1 items-center md:items-start">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 1.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-4xl md:text-5xl font-serif text-brand-amber block"
                  >
                    01
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 1.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-xs font-mono uppercase tracking-widest text-neutral-500 block z-10"
                  >
                    Published Observation
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* HORIZONTAL CATEGORIES MARQUEE */}
        <div className="w-full overflow-hidden border-y border-neutral-200 bg-white/80 py-6 backdrop-blur-md relative z-20">
          <motion.div
            className="flex whitespace-nowrap gap-16 px-6 items-center"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...categories, ...categories, ...categories, ...categories].map(
              (cat, i) => (
                <span
                  key={i}
                  className="text-lg md:text-2xl font-serif italic text-neutral-400 hover:text-brand-amber cursor-pointer transition-colors duration-300"
                >
                  • {cat}
                </span>
              ),
            )}
          </motion.div>
        </div>

        {/* BENTO GRID FEATURED ARTICLE */}
        <section className="px-6 lg:px-12 py-24 relative z-20 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative group cursor-pointer block rounded-[2.5rem] overflow-hidden bg-white border border-neutral-200 hover:border-brand-amber/50 hover:shadow-2xl hover:shadow-brand-amber/5 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row min-h-[60vh]">
                <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10 bg-gradient-to-r from-white via-white to-transparent">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
                    <span className="px-3 py-1.5 bg-brand-amber text-black font-bold rounded-full">
                      Featured
                    </span>
                    <span className="text-black font-bold">Clarity</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                    <span>5 min read</span>
                  </div>

                  <h2 className="text-5xl md:text-6xl font-serif tracking-tight leading-[1.1] mb-8 text-black group-hover:text-brand-amber transition-colors duration-500">
                    The Clarity Problem
                  </h2>

                  <p className="text-xl text-neutral-600 mb-10 leading-relaxed font-light">
                    Execution can be fine, even excellent, while the brand
                    remains unclear. The problem often lives upstream, in the
                    thinking that came before any campaign started.
                  </p>

                  <div className="mt-auto flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black group-hover:text-brand-amber transition-colors duration-500">
                    <span className="relative overflow-hidden pr-2">
                      Read Observation
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                    </span>
                    <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center group-hover:border-brand-amber group-hover:bg-brand-amber group-hover:text-black transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 lg:relative lg:w-1/2 h-full overflow-hidden z-0 lg:z-10 bg-white">
                  <div className="absolute inset-0 bg-white/20 lg:hidden z-10" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
                      alt="Featured Article"
                      className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OBSERVATION ARTICLE */}
        <section className="px-6 lg:px-12 pt-12 pb-32 bg-[#FFFFFF] relative z-20 overflow-hidden">
          {/* Ambient Live Animation Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
              className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] max-w-[700px] max-h-[700px] bg-brand-amber/10 rounded-full blur-[120px]"
              animate={{
                x: [0, -100, 50, 0],
                y: [0, 150, -100, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-neutral-300/30 rounded-full blur-[150px]"
              animate={{
                x: [0, 150, -100, 0],
                y: [0, -100, 50, 0],
                scale: [1, 1.3, 0.9, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-8 mb-12 gap-4">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 rounded-full border-2 border-dashed border-brand-amber flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse" />
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-serif text-black">
                  Latest Observation
                </h3>
              </div>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-neutral-200 rounded-[2rem] p-8 md:p-14 lg:p-20 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
                <span className="px-3 py-1.5 bg-brand-amber text-black font-bold rounded-full">
                  Observation 01
                </span>
                <span className="text-brand-amber font-bold">Clarity</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                <span>5 min read</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-serif tracking-tight leading-[1.05] mb-10 text-black">
                The Clarity Problem
              </h2>

              <div className="space-y-8 text-lg md:text-xl text-neutral-700 font-light leading-relaxed max-w-4xl">
                <p>
                  As a founder, we believe that you have clarity in your vision
                  and trust on your agency to translate that for you. While
                  campaigns and posts crowd your brand's presence, we mostly see
                  a blurred brand identity. A brand that clearly does so much
                  but not exactly clear on what it is.
                </p>
                <p>
                  Here's what we've repeatedly seen across founder-led brands,
                  especially in the early-to-growth phase: the execution is
                  fine. Sometimes the execution is excellent. The problem lives
                  upstream, in the thinking that came before any execution
                  started.
                </p>
                <p>
                  Positioning that's vague. A narrative that sounds like every
                  competitor's. A market that doesn't fully understand what
                  makes the company different, or why it should care.
                </p>
                <p>
                  When those things are broken, execution doesn't fix them. It
                  amplifies them.
                </p>
                <p>
                  You can pour media budget into a weak narrative and generate
                  traffic that doesn't convert. You can produce content at scale
                  around messaging that isn't sharp enough to hold attention. You
                  can optimize a funnel that leads people to a value proposition
                  they don't quite believe.
                </p>
                <p>
                  This is the clarity problem. It isn't visible on your
                  dashboards. It doesn't show up as a specific metric you can
                  point to. But that's why growth feels inconsistent even when
                  effort is high.
                </p>
              </div>

              <div className="mt-16 border-t border-neutral-200 pt-12">
                <h3 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
                  What clarity actually means
                </h3>
                <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed max-w-4xl mb-10">
                  Clarity is not simplicity for simplicity's sake. It's
                  precision about three things:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {clarityPrinciples.map((principle) => (
                    <div
                      key={principle.title}
                      className="border border-neutral-200 bg-neutral-50/60 p-6 rounded-2xl"
                    >
                      <h4 className="text-2xl font-serif mb-4">
                        {principle.title}
                      </h4>
                      <p className="text-neutral-600 font-light leading-relaxed">
                        {principle.body}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed max-w-4xl">
                  When these three things are sharp, marketing becomes easier.
                  Conversion improves not because you've optimized the funnel,
                  but because the people arriving at your funnel already
                  understand why they're there.
                </p>
              </div>

              <div className="mt-16 border-t border-neutral-200 pt-12">
                <h3 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
                  How to know if you have a clarity problem
                </h3>
                <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed max-w-4xl mb-8">
                  A few signals we look for:
                </p>

                <ul className="space-y-6 max-w-4xl">
                  {claritySignals.map((signal, index) => (
                    <li
                      key={signal}
                      className="flex gap-5 text-lg md:text-xl text-neutral-700 font-light leading-relaxed"
                    >
                      <span className="text-brand-amber font-mono text-sm pt-1">
                        0{index + 1}
                      </span>
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed max-w-4xl mt-10">
                  These are not execution signals. These are clarity signals.
                  And clarity is a strategy problem, not a marketing problem.
                </p>
              </div>

              <div className="mt-16 border-t border-neutral-200 pt-12">
                <h3 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
                  What we do about it
                </h3>
                <div className="space-y-8 text-lg md:text-xl text-neutral-700 font-light leading-relaxed max-w-4xl">
                  <p>
                    This is where Wildcat sits. Not in execution. Not in
                    campaigns or content or channel management. In the thinking
                    that happens before any of that.
                  </p>
                  <p>
                    We work with founders and leadership teams to diagnose where
                    clarity has broken down, and to rebuild positioning,
                    narrative, and direction with enough sharpness that
                    execution actually has something to work with.
                  </p>
                  <p>
                    We operate at the strategy layer. It's a quieter place to
                    work. The outputs are decisions, not assets. But the
                    downstream effect, when it's done right, is that everything
                    downstream becomes more efficient.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Observations;
