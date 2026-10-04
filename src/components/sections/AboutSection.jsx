import { motion } from "framer-motion";

function AboutSection() {
  return (
  <section
  id="about"
  className="bg-white py-24 text-gray-900 dark:bg-gray-950 dark:text-white"
>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
            About Tulas
          </p>

       <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Where curiosity becomes confidence.
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <motion.div 
            className="h-[320px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[400px] lg:h-[450px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <img
             src="/netpuppyImages/school.29985869.png"
              alt="Students at Tulas International School"
              className="h-[450px] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
           <h3 className="text-2xl font-bold sm:text-3xl">
  A Vision for Something Different
</h3>

<p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
  But even as the corridors of Tulas Institute echoed with the aspirations
  of countless students, Mr. Jain felt there was more to be done.
</p>

<p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">
  Dehradun, a city steeped in the legacy of education, had long been a hub
  for learning. Yet, Mr. Jain envisioned something different: a school that
  didn’t just educate but inspired—a place that celebrated individuality
  of each student.
</p>

        <a
  href="#academics"
  className="mt-8 inline-block rounded-full bg-red-700 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105"
>
  Discover TIS
</a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;