import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-red-700 text-white">
        <div className="pointer-events-none absolute inset-0">
  <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-black/10 blur-3xl" />
</div>
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 lg:px-10">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-white/80"
          >
            Tulas International School
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
           className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Empowering
            <br />
            Young Minds.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-8 text-white/80"
          >
            Inspiring bright futures through learning, creativity,
            exploration and discovery.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
<motion.a
  href="#about"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  transition={{ duration: 0.2 }}
  className="rounded-full bg-white px-7 py-3 font-semibold text-red-700 shadow-lg transition-shadow hover:shadow-xl"
>
  Explore Our School
</motion.a>

<motion.a
  href="#admissions"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  transition={{ duration: 0.2 }}
  className="rounded-full border border-white px-7 py-3 font-semibold transition duration-300 hover:bg-white hover:text-red-700"
>
  Admissions
</motion.a>
          </motion.div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden w-1/2 lg:block"
        >
<div className="relative ml-auto max-w-xl">
<div className="absolute -inset-3 rounded-[2.7rem] border border-white/20" />
  {/* Decorative circle */}
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -right-6 -top-6 h-24 w-24 rounded-full border-2 border-white/30"
  />

  {/* Main image */}
  <motion.img
    src="/netpuppyImages/schoolTopView.6e263e02.webp"
    alt="Tulas International School campus"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 1.02 }}  
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative h-[550px] w-full rounded-[2.5rem] object-cover shadow-2xl"
  />

  {/* Image overlay */}
  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/30 to-transparent" />

</div>
        </motion.div>

      </div>
    </section>
  );

}
 

export default HeroSection;