import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HorizontalCapabilities = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const cards = [
    {
      num: "01",
      title: "Market Intelligence & Opportunity",
      desc: "Uncover where the market is moving and where your brand can win.",
      color: "from-brand-amber/20",
    },
    {
      num: "02",
      title: "Positioning & Category Strategy",
      desc: "Build a position the market instantly understands and remembers.",
      color: "from-brand-amber/15",
    },
    {
      num: "03",
      title: "Messaging & Authority Systems",
      desc: "Turn expertise into trust, relevance, and market influence.",
      color: "from-brand-amber/15",
    },
    {
      num: "04",
      title: "Demand & Growth Infrastructure",
      desc: "Create scalable systems that convert attention into growth.",
      color: "from-brand-amber/20",
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-neutral-50">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* CREATIVE LIVE ANIMATED BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Ambient Glowing Orbs */}
          <motion.div
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-amber/10 rounded-full blur-[100px] mix-blend-multiply"
            animate={{
              x: [0, 50, 0, -50, 0],
              y: [0, 50, -50, 0, 0],
              scale: [1, 1.2, 0.9, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-black/[0.03] rounded-full blur-[100px] mix-blend-multiply"
            animate={{
              x: [0, -80, 0, 40, 0],
              y: [0, -60, 40, -20, 0],
              scale: [1, 1.1, 1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-brand-amber/5 rounded-full blur-[120px] mix-blend-multiply"
            animate={{
              x: [0, 60, -40, 20, 0],
              y: [0, -80, 0, 60, 0],
              scale: [1, 0.8, 1.1, 0.9, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Infinite Panning Architectural Grid */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
              maskImage:
                "radial-gradient(ellipse 100% 100% at 50% 50%, #000 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 100% 100% at 50% 50%, #000 30%, transparent 80%)",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "64px 64px"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-8 px-6 lg:px-12 items-stretch z-10 w-max"
        >
          {/* Introductory Massive Text Panel */}
          <div className="w-[90vw] md:w-[60vw] lg:w-[45vw] shrink-0 pr-8 md:pr-20 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full mb-8 self-start">
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                Capabilities
              </span>
            </div>
            <h3 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight mb-8 leading-[1.05] text-black">
              Four disciplines.
              <br />{" "}
              <span className="text-brand-amber">
                One unified system.
              </span>
            </h3>
            <p className="text-xl md:text-2xl text-neutral-600 font-serif-display leading-relaxed max-w-2xl">
              An integrated approach that connects insight to action, strategy
              to growth.
            </p>
          </div>

          {/* Cards */}
          {cards.map((cap) => (
            <div
              key={cap.num}
              className="w-[85vw] md:w-[50vw] lg:w-[35vw] h-[70vh] shrink-0 group relative bg-white/50 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-neutral-200 hover:border-brand-amber/40 transition-all duration-700 overflow-hidden text-left shadow-xl hover:shadow-2xl hover:-translate-y-2 flex flex-col my-auto"
            >
              <div className="absolute -bottom-12 -right-6 text-[12rem] md:text-[18rem] font-serif font-black text-black/[0.03] group-hover:text-brand-amber/10 transition-colors duration-700 pointer-events-none leading-none select-none z-0">
                {cap.num}
              </div>
              {/* LIVE AMBIENT BACKGROUND */}
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Always-on subtle animation */}
                <motion.div
                  className={`absolute -top-[50%] -right-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,var(--tw-gradient-from),transparent_50%)] ${cap.color} opacity-30 group-hover:opacity-100 transition-opacity duration-1000`}
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* Added layer on hover for more depth */}
                <motion.div
                  className="absolute -bottom-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(245,201,28,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  animate={{
                    rotate: [360, 270, 180, 90, 0],
                    scale: [1, 1.1, 0.9, 1.1, 1],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Floating micro-particles that appear on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <motion.div
                    className="absolute top-[20%] left-[20%] w-3 h-3 rounded-full border border-brand-amber/40"
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 20, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute bottom-[30%] right-[20%] w-2 h-2 rounded-full bg-brand-amber/50"
                    animate={{
                      y: [0, 40, 0],
                      x: [0, -20, 0],
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.div
                    className="absolute top-[40%] right-[30%] w-1.5 h-1.5 rounded-full bg-black/10"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />
                </div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-6 mb-10 group-hover:-translate-x-2 transition-transform duration-500">
                  <span className="text-brand-amber font-sans text-xl font-bold border-b-2 border-transparent group-hover:border-brand-amber transition-colors duration-500">
                    &mdash; {cap.num}
                  </span>
                </div>

                <h4 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight mb-8 text-black group-hover:text-brand-amber transition-colors duration-500">
                  {cap.title}
                </h4>

                <p className="text-neutral-600 text-lg md:text-xl font-serif-display leading-relaxed mb-10">
                  {cap.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-neutral-200 flex items-center justify-between group-hover:border-brand-amber/30 transition-colors duration-500">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-black transition-colors duration-500">
                    Explore Capability
                  </span>
                  <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-brand-amber group-hover:bg-brand-amber group-hover:text-black transition-all duration-500">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End CTA Card */}
          <div className="w-[90vw] md:w-[60vw] lg:w-[40vw] shrink-0 flex flex-col justify-center items-center text-center p-12 pr-12 lg:pr-24">
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-black">
              From insight to growth—
              <br />
              everything connected.
            </h3>
            <Link
              to="/capabilities"
              className="group inline-flex items-center gap-4 bg-brand-amber text-black px-10 py-5 text-sm font-medium uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
            >
              Explore All Capabilities{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-brand-amber selection:text-black font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 flex flex-col justify-center min-h-[90vh] border-b border-neutral-100 overflow-hidden bg-white">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#FFFFFF]">
          <div className="absolute inset-0 opacity-30">
            {/* Base Dynamic Gradient */}
            <motion.div
              className="absolute inset-0 mix-blend-multiply"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(245,201,28,0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(245,201,28,0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, rgba(245,201,28,0.15) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Large Primary Golden Blob */}
            <motion.div
              className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-brand-amber/60 rounded-full blur-[100px]"
              animate={{
                x: [0, -70, 0],
                y: [0, 80, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Secondary Darker Neutral Blob */}
            <motion.div
              className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-neutral-400/50 rounded-full blur-[120px]"
              animate={{
                x: [0, 90, 0],
                y: [0, -60, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            {/* Tertiary Intense Golden Center Blob */}
            <motion.div
              className="absolute top-1/2 left-1/4 w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] bg-brand-amber/40 rounded-full blur-[80px]"
              animate={{
                x: [0, 120, 0],
                y: [0, -120, 0],
                opacity: [0.6, 1, 0.6],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
            />

            {/* Creative Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]"></div>

            {/* Micro-interactions: Floating Rings & Particles */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full border-2 border-brand-amber/60"
              animate={{
                y: [0, -60, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
                rotate: [0, 90, 180],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-brand-amber/80 rounded-full"
              animate={{
                y: [0, -40, 0],
                x: [0, 30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-black/50 rounded-full"
              animate={{
                y: [0, 80, 0],
                opacity: [0.2, 0.9, 0.2],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            {/* Subtle sweep line */}
            <motion.div
              className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-amber/60 to-transparent"
              animate={{
                y: [-300, 300, -300],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-[-0.02em] leading-[1.05] mb-8 max-w-5xl">
              Build with clarity. <br />
              <span className="text-brand-amber">Grow with intent.</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl font-serif-display leading-relaxed mb-16">
              We bring cultural insight, strategy, and narrative into one
              system—so growth has direction.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-t border-neutral-200 pt-8 mt-12 w-full">
              <p className="text-sm font-mono tracking-widest text-neutral-500 uppercase">
                Culture. Strategy. Narrative. Growth
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  (window as any).Calendly?.initPopupWidget({
                    url: "https://calendly.com/wildcatdigitalconsulting/30min",
                  });
                }}
                className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest bg-brand-amber text-black px-6 py-4 hover:opacity-80 transition-opacity"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HORIZONTAL CAPABILITIES SCROLL */}
      <HorizontalCapabilities />

      {/* INTERVENTIONS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden border-t border-neutral-100"
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          {/* Animated motion background for full section */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/10 via-white to-amber-100"></div>

          {/* Floating animated shapes */}
          <motion.div
            className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-tr from-brand-amber/40 to-transparent rounded-lg"
            animate={{
              rotate: [45, 90, 45],
              scale: [1, 1.1, 1],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-8 left-6 w-24 h-24 bg-gradient-to-bl from-black/20 to-transparent rounded-full"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 0.9, 1],
              x: [0, -15, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-brand-amber/15 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Moving particles */}
          <motion.div
            className="absolute top-12 left-12 w-4 h-4 bg-brand-amber/60 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-16 right-16 w-6 h-6 bg-black/40 rounded-full"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-brand-amber/70 rounded-full"
            animate={{
              x: [0, -60, 0],
              y: [0, -80, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Additional floating element */}
          <motion.div
            className="absolute top-2/3 left-1/3 w-5 h-5 bg-gradient-to-r from-brand-amber/50 to-transparent rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              x: [0, 40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "linear-gradient(45deg, transparent 30%, rgba(245,201,28,0.2) 50%, transparent 70%)",
                "linear-gradient(225deg, transparent 30%, rgba(0,0,0,0.2) 50%, transparent 70%)",
                "linear-gradient(45deg, transparent 30%, rgba(245,201,28,0.2) 50%, transparent 70%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-8">
                  Interventions
                </h2>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-6 text-black">
                  We don't take on projects.
                  <br />
                  <span className="text-brand-amber">
                    We step in when something needs to change.
                  </span>
                </h3>
              </div>
              <Link
                to="/interventions"
                className="group hidden lg:inline-flex items-center gap-3 text-black mt-12 hover:text-brand-amber transition-colors uppercase tracking-widest text-sm font-medium"
              >
                See how we intervene
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center relative overflow-hidden rounded-2xl border border-neutral-200"
            >
              <div className="relative bg-white/60 backdrop-blur-sm p-8 md:p-12">
                <ul className="space-y-8 text-2xl md:text-3xl font-serif-display italic text-brand-charcoal">
                  {[
                    "Outgrown identity",
                    "Stalled growth",
                    "Misaligned teams",
                    "Weak positioning",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                      className="flex items-center gap-6 group"
                    >
                      <span className="text-xs text-neutral-300 transition-colors group-hover:text-brand-amber">
                        ●
                      </span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300 text-black">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  to="/interventions"
                  className="group inline-flex lg:hidden items-center gap-3 text-black mt-12 hover:text-brand-amber transition-colors uppercase tracking-widest text-sm font-medium"
                >
                  See how we intervene
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* OBSERVATIONS PREVIEW */}
      <section className="py-24 md:py-32 bg-white text-black px-6 lg:px-12">
        <div className="max-w-7xl mx-auto border-t border-neutral-200 pt-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-mono tracking-widest text-black/60 uppercase mb-8">
              Observations
            </h2>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-6">
              On markets, culture, and brands.
            </h3>
            <p className="text-xl md:text-2xl text-black/80 font-serif-display">
              What we're seeing. What it means.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/observations"
              className="group flex items-center gap-3 text-black hover:text-black/70 transition-colors uppercase tracking-widest text-sm font-medium border-b border-black pb-2 hover:border-black/70"
            >
              <ArrowRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              Read Observations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-32 md:py-48 px-6 lg:px-12 bg-white text-center flex flex-col items-center justify-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-brand-amber/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 w-full border-t border-neutral-200 pt-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-16 px-4 text-black"
          >
            If you're building something that needs to last,{" "}
            <span className="text-brand-amber">start with clarity.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  (window as any).Calendly?.initPopupWidget({
                    url: "https://calendly.com/wildcatdigitalconsulting/30min",
                  });
                }}
                className="inline-flex items-center gap-3 bg-brand-amber text-black px-8 py-5 text-sm font-medium uppercase tracking-widest hover:opacity-80 transition-transform hover:scale-105 active:scale-95 duration-300 group"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
