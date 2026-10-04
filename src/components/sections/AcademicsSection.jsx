import { motion } from "framer-motion";
import { BookOpen, Microscope, Palette } from "lucide-react";

function AcademicsSection() {
  const programs = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description:
        "A strong learning foundation that encourages students to understand, explore and apply their knowledge.",
    },
    {
      icon: Microscope,
      title: "Experiential Learning",
      description:
        "Students learn through exploration, practical activities, experiments and real-world experiences.",
    },
    {
      icon: Palette,
      title: "Creative Development",
      description:
        "Creative activities help students discover their interests, express themselves and build confidence.",
    },
  ];

  return (
   <section
  id="academics"
  className="bg-gray-50 py-24 text-gray-900 dark:bg-gray-900 dark:text-white"
>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
            Academics
          </p>

         <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Learning designed for the future.
          </h2>

         <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
            We create meaningful learning experiences that encourage
            curiosity, creativity and confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-700">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold">
                  {program.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                  {program.description}
                </p>
<a
  href="#facilities"
  className="mt-6 inline-block text-sm font-semibold text-red-700 transition hover:translate-x-1"
>
  Learn More →
</a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default AcademicsSection;