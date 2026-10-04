import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function CTASection() {
  return (
    <section
  id="admissions"
  className="bg-red-700 px-6 py-24 text-white lg:px-10 dark:bg-red-900"
>
      <div className="mx-auto max-w-5xl">
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="rounded-[2.5rem] border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm md:p-14 dark:bg-black/20"
>
  <img
    src="/netpuppyImages/tis-gurukul.37066609.png"
    alt="Tulas International School Gurukul campus"
    className="mx-auto mb-8 h-56 w-full max-w-3xl rounded-3xl object-cover shadow-xl md:h-72"
  />

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
    Admissions
  </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Give your child a place to grow.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Discover a learning environment designed to encourage
            curiosity, confidence, creativity and growth.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <motion.a
  href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-red-700"
            >
              Enquire Now
              <ArrowRight size={18} />
            </motion.a>

           <motion.a
  href="#contact"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="rounded-full border border-white px-7 py-3.5 text-center font-semibold text-white"
>
  Schedule a Visit
</motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;