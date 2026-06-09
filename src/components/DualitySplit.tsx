import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const articles = [
  "The Decline of Performative Authenticity",
  "Gen Z's Post-Ironic Brand Loyalty",
  "Algorithmic Culture & Human Desire",
];

const caseStudies = [
  { client: "ATLAS COLLECTIVE", type: "Brand Strategy", metric: "+340%" },
  { client: "MERIDIAN LABS", type: "Growth Systems", metric: "+127%" },
  { client: "VANTAGE GROUP", type: "Digital Experience", metric: "+89%" },
];

const DualitySplit = () => {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  return (
    <section className="border-t border-foreground/10">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        {/* Left: What We See */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="relative p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-foreground/10 cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
        >
          {/* Accent line */}
          <motion.div
            className="absolute left-0 top-0 w-[3px] bg-primary"
            animate={{ height: hoveredLeft ? "100%" : "0%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          <div>
            <motion.span
              className="text-xs font-sans uppercase tracking-widest text-muted-foreground block"
              animate={{ letterSpacing: hoveredLeft ? "0.25em" : "0.1em" }}
              transition={{ duration: 0.4 }}
            >
              Observations
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter mt-4 uppercase">
              What We
              <br />
              <motion.span
                className="text-primary inline-block"
                animate={{ x: hoveredLeft ? 12 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                See
              </motion.span>
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {articles.map((title, i) => (
              <motion.div
                key={i}
                className="border-b border-foreground/10 pb-4"
                animate={{ opacity: hoveredLeft ? 1 : 0.6 }}
                transition={{
                  duration: 0.4,
                  delay: hoveredLeft ? i * 0.08 : 0,
                }}
              >
                <div className="flex items-baseline gap-3">
                  <motion.span
                    className="text-2xl md:text-3xl font-serif text-primary/30 tabular"
                    animate={{
                      opacity: hoveredLeft ? 1 : 0.4,
                      scale: hoveredLeft ? 1.1 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: hoveredLeft ? i * 0.08 : 0,
                    }}
                  >
                    0{i + 1}
                  </motion.span>
                  <p className="text-sm md:text-base font-serif">{title}</p>
                </div>
              </motion.div>
            ))}
            <Link
              to="/observations"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold tracking-tight text-primary mt-4"
            >
              Explore Observations
              <motion.span
                animate={{ x: hoveredLeft ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </motion.div>

        {/* Right: What We Build */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="relative p-8 md:p-16 flex flex-col justify-between bg-foreground text-background cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
        >
          {/* Animated corner accent */}
          <motion.div
            className="absolute top-0 right-0 bg-primary"
            animate={{
              width: hoveredRight ? 80 : 0,
              height: hoveredRight ? 80 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="relative z-10">
            <motion.span
              className="text-xs font-sans uppercase tracking-widest opacity-60 block"
              animate={{ letterSpacing: hoveredRight ? "0.25em" : "0.1em" }}
              transition={{ duration: 0.4 }}
            >
              Case Studies
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter mt-4 uppercase">
              What We
              <br />
              <motion.span
                className="text-primary inline-block"
                animate={{ x: hoveredRight ? 12 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Build
              </motion.span>
            </h2>
          </div>

          <div className="mt-12 space-y-6 relative z-10">
            {caseStudies.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between border-b border-background/15 pb-5"
                animate={{ opacity: hoveredRight ? 1 : 0.6 }}
                transition={{
                  duration: 0.4,
                  delay: hoveredRight ? i * 0.08 : 0,
                }}
              >
                <div className="flex items-baseline gap-3">
                  <motion.span
                    className="text-2xl md:text-3xl font-serif text-primary/30 tabular"
                    animate={{
                      opacity: hoveredRight ? 1 : 0.4,
                      scale: hoveredRight ? 1.1 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: hoveredRight ? i * 0.08 : 0,
                    }}
                  >
                    0{i + 1}
                  </motion.span>
                  <div>
                    <p className="text-sm md:text-base font-sans font-semibold tracking-tight">
                      {item.client}
                    </p>
                    <p className="text-xs opacity-50 mt-0.5">{item.type}</p>
                  </div>
                </div>
                <motion.span
                  className="text-lg md:text-xl font-serif text-primary tabular"
                  animate={{ opacity: hoveredRight ? 1 : 0 }}
                  transition={{
                    duration: 0.3,
                    delay: hoveredRight ? 0.15 + i * 0.08 : 0,
                  }}
                >
                  {item.metric}
                </motion.span>
              </motion.div>
            ))}
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold tracking-tight text-primary mt-4"
            >
              View Case Studies
              <motion.span
                animate={{ x: hoveredRight ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DualitySplit;
