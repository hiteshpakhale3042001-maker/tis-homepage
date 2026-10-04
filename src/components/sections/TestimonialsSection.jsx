import { motion } from "framer-motion";
import { Quote } from "lucide-react";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Parent of a TIS Student",
      role: "Parent",
      message:
        "The school provides a supportive environment where students are encouraged to learn, explore and grow with confidence.",
    },
    {
      name: "TIS Student",
      role: "Student",
      message:
        "I enjoy learning through different activities and getting opportunities to participate in sports and creative programs.",
    },
    {
      name: "TIS Parent",
      role: "Parent",
      message:
        "The combination of academics and activities creates a positive learning experience for students.",
    },
  ];

  return (
  <section
  id="testimonials"
  className="bg-gray-50 py-24 text-gray-900 dark:bg-gray-900 dark:text-white"
>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
            Testimonials
          </p>

         <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Voices from our community.
          </h2>

    <p className="text-gray-600 dark:text-gray-300">
            Experiences that reflect the learning journey at Tulas
            International School.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name + index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
            >
              <Quote
                size={32}
                className="mb-6 text-red-700"
              />

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                "{testimonial.message}"
              </p>

              <div className="mt-8 border-t border-gray-100 pt-5">
                <p className="font-bold">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;