import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX - 10);
      mouseY.set(event.clientY - 10);

 const target = event.target;

if (
  target instanceof Element &&
  (target.closest("a") || target.closest("button"))
) {
  setIsHovering(true);
} else {
  setIsHovering(false);
}
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden rounded-full border-2 border-white md:block"
      animate={{
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
        opacity: isHovering ? 0.7 : 1,
      }}
      transition={{
        duration: 0.2,
      }}
      style={{
        x: smoothX,
        y: smoothY,
      }}
    />
  );
}

export default CustomCursor;