import { motion } from "framer-motion";

function FacilitiesSection() {
  const facilities = [
    {
      image: "/netpuppyImages/swimming.6fc81e65.webp",
      title: "Swimming",
      description: "Encouraging fitness, confidence and discipline through sports.",
    },
    {
      image: "/netpuppyImages/karate.4020fba5.webp",
      title: "Karate",
      description: "Building focus, confidence and physical strength.",
    },
    {
      image: "/netpuppyImages/polo.973ddbae.webp",
      title: "Sports",
      description: "Creating opportunities for students to explore their talents.",
    },
    {
      image: "/netpuppyImages/dance.88843edb.webp",
      title: "Creative Activities",
      description: "Helping students express themselves through creativity.",
    },
  ];

  return (
<section
  id="facilities"
  className="bg-white py-24 text-gray-900 dark:bg-gray-950 dark:text-white"
>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
            Campus Life
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            More than just a classroom.
          </h2>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
            A vibrant environment where students can learn, play,
            create and discover new interests.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-gray-100 shadow-sm hover:shadow-xl dark:bg-gray-800"
            >
              <div className="h-56 overflow-hidden sm:h-64">
              <motion.img
  src={facility.image}
  alt={facility.title}
  className="h-full w-full object-cover"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 1.05 }}
  transition={{ duration: 0.4 }}
/>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FacilitiesSection;