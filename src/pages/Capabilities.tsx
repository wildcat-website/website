import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const SpotlightCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={() => {
        setIsFocused(true);
        setOpacity(1);
      }}
      onBlur={() => {
        setIsFocused(false);
        setOpacity(0);
      }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-brand-amber/5 hover:border-brand-amber/30 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(245,201,28,0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

const CapabilitySection = ({
  number,
  title,
  subtitle,
  description,
  todos,
  outcome,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  todos: string[];
  outcome: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch relative pb-24 border-b border-neutral-200 last:border-b-0"
    >
      <div className="lg:col-span-1 flex items-start">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 bg-brand-amber/10 rounded-2xl flex items-center justify-center -ml-2 transition-colors duration-500 group-hover:bg-brand-amber/20 cursor-default shrink-0"
        >
          <span className="text-brand-amber font-bold text-2xl">
            {number}
          </span>
        </motion.div>
      </div>
      <div className="lg:col-span-5 relative flex flex-col">
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6 transition-colors duration-500 group-hover:text-brand-amber">
          {title}
        </h2>
        {subtitle && (
          <p className="text-2xl text-brand-charcoal font-serif-display leading-relaxed mb-4">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-lg text-neutral-600 leading-relaxed mb-10">
            {description}
          </p>
        )}

        <div className="mt-auto pt-8 border-t border-neutral-100">
          <h3 className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-6 flex items-center gap-3">
            What we do
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 text-brand-amber" />
            </motion.div>
          </h3>
          <ul className="space-y-4 font-serif-display text-lg lg:text-xl text-brand-charcoal">
            {todos.map((todo, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 group/item cursor-default"
              >
                <motion.span
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.5 }}
                  className="text-brand-amber mt-1.5 text-xs inline-block origin-center transition-transform"
                >
                  ●
                </motion.span>
                <span className="group-hover/item:translate-x-2 transition-transform duration-300">
                  {todo}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:col-span-5 lg:col-start-8 h-full">
        <SpotlightCard className="bg-brand-amber/5 p-8 md:p-10 rounded-3xl border border-brand-amber/20 h-full flex flex-col justify-center min-h-[250px] relative overflow-hidden group/card">
          {/* Visual Highlight Elements */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-amber/20 rounded-full blur-[60px] group-hover/card:bg-brand-amber/30 transition-colors duration-500"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-brand-amber/10 rounded-full blur-[40px]"></div>

          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-white">
              <Sparkles className="w-6 h-6 text-brand-amber drop-shadow-sm" />
            </div>
            <h3 className="text-sm font-mono tracking-widest text-[#B38F14] uppercase mb-4 font-semibold">
              Outcome
            </h3>
            <p className="text-2xl md:text-3xl font-medium text-black leading-tight">
              {outcome}
            </p>
          </div>
        </SpotlightCard>
      </div>
    </motion.div>
  );
};

const Capabilities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-brand-amber selection:text-black font-sans overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 flex flex-col justify-center min-h-[60vh] border-b border-neutral-100 overflow-hidden bg-[#FFFFFF]">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <motion.div
              className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-brand-amber/40 rounded-full blur-[100px]"
              animate={{
                x: [0, -40, 0],
                y: [0, 40, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-neutral-300/50 rounded-full blur-[120px]"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            {/* Interactive floating particles in hero */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-amber rounded-full blur-[2px]"
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-4 h-4 border border-brand-amber/50 rounded-full"
              animate={{
                y: [30, -30, 30],
                rotate: [0, 180, 360],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </div>

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
                What We Do
              </motion.span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif tracking-tighter leading-[0.9] mb-10 max-w-5xl text-black flex flex-col items-center md:items-start overflow-visible py-2">
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
                Built on clarity.
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
                Proven in <span className="bg-brand-amber text-black px-2 py-1 inline-block">execution.</span>
              </motion.span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl font-serif-display leading-relaxed">
              Wildcat is built on four core disciplines that work together to
              solve real business problems—not just produce outputs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE DISCIPLINES */}
      <section
        ref={containerRef}
        className="py-24 md:py-32 px-6 lg:px-12 bg-[#FFFFFF] relative isolate"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 pointer-events-none z-[-1]"
        >
          <div className="absolute top-[20%] right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-brand-amber/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-black/5 rounded-full blur-[120px]" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            <CapabilitySection
              number="01"
              title="Market Intelligence & Opportunity"
              subtitle=""
              description=""
              todos={[
                "Insight & Opportunity Mapping",
                "Market Signals",
                "Audience Understanding",
                "Competitive/Cultural Analysis",
              ]}
              outcome="Uncover where the market is moving and where your brand can win."
            />

            <CapabilitySection
              number="02"
              title="Positioning & Category Strategy"
              subtitle=""
              description=""
              todos={[
                "Positioning & Offer Clarity",
                "Category Design",
                "Strategic Narrative Architecture",
                "Market Differentiation",
              ]}
              outcome="Build a position the market instantly understands and remembers."
            />

            <CapabilitySection
              number="03"
              title="Messaging & Authority Systems"
              subtitle=""
              description=""
              todos={[
                "Messaging & Communication",
                "Founder Narrative",
                "Authority Building",
                "Public Narrative & Thought Leadership",
              ]}
              outcome="Turn expertise into trust, relevance, and market influence."
            />

            <CapabilitySection
              number="04"
              title="Demand & Growth Infrastructure"
              subtitle=""
              description=""
              todos={[
                "Demand Generation",
                "Performance Marketing",
                "Growth Systems",
                "Conversion & Revenue Infrastructure",
              ]}
              outcome="Create scalable systems that convert attention into growth."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Capabilities;
