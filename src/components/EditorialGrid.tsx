import { motion } from "framer-motion";

const articles = [
  {
    number: "01",
    title: "The Post-Authentic Economy",
    category: "Cultural Mapping",
    readTime: "8 min",
    excerpt:
      "How consumer skepticism is reshaping brand trust frameworks across emerging markets.",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    number: "02",
    title: "Algorithmic Desire",
    category: "Research",
    readTime: "5 min",
    excerpt: "When recommendation engines become taste-makers.",
    span: "md:col-span-5",
  },
  {
    number: "03",
    title: "Decoding Cultural Velocity",
    category: "Data Analysis",
    readTime: "12 min",
    excerpt:
      "Mapping the speed at which cultural signals translate to consumer behavior.",
    span: "md:col-span-5",
  },
  {
    number: "04",
    title: "The Trust Deficit Index",
    category: "Observations",
    readTime: "6 min",
    excerpt:
      "Our proprietary metric measuring institutional trust erosion across 12 global markets.",
    span: "md:col-span-4",
  },
  {
    number: "05",
    title: "Gen Z's Paradox of Choice",
    category: "Insights",
    readTime: "4 min",
    excerpt:
      "Abundance breeds paralysis. How brands can cut through the noise.",
    span: "md:col-span-4",
  },
  {
    number: "06",
    title: "Sentiment & Signal",
    category: "Brand Strategy",
    readTime: "7 min",
    excerpt: "Separating meaningful cultural shifts from social media noise.",
    span: "md:col-span-4",
  },
];

const EditorialGrid = () => {
  return (
    <section className="border-t border-foreground/10 py-16 md:py-32">
      <div className="container">
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <span className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
              Observations Hub
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tighter mt-2 uppercase">
              Recent <span className="text-primary">Observations</span>
            </h2>
          </div>
          <span className="hidden md:inline text-sm font-sans text-muted-foreground tracking-tight">
            6 observations →
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-foreground/10">
          {articles.map((article, i) => (
            <motion.article
              key={article.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${article.span} bg-background p-6 md:p-8 flex flex-col justify-between group cursor-pointer hover:bg-foreground hover:text-background transition-colors duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl md:text-5xl font-serif text-muted-foreground group-hover:text-background/40 transition-colors tabular">
                    {article.number}
                  </span>
                  <div className="flex gap-3 text-xs font-sans text-muted-foreground group-hover:text-background/60 transition-colors">
                    <span>{article.category}</span>
                    <span>·</span>
                    <span className="tabular">{article.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif tracking-tight leading-tight">
                  {article.title}
                </h3>
              </div>
              <p className="text-sm font-sans text-muted-foreground group-hover:text-background/70 leading-relaxed mt-4 max-w-[55ch] transition-colors">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialGrid;
