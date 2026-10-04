import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimatedToggle from "../animation/AnimatedToggle";

function Navbar({ isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-gray-950/95 shadow-lg backdrop-blur-md"
            : "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/netpuppyImages/schoolLogo.95f6e121.png"
            alt="Tulas International School"
            className="h-12 w-auto"
          />

          <div
            className={`hidden sm:block ${
              isScrolled && !isDark ? "text-gray-900" : "text-white"
            }`}
          >
            <p className="text-sm font-bold tracking-wide">
              TULAS INTERNATIONAL
            </p>

            <p
              className={`text-xs tracking-widest ${
                isScrolled && !isDark
                  ? "text-gray-500"
                  : "text-white/70"
              }`}
            >
              SCHOOL
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className={`text-sm transition ${
              isScrolled && !isDark
                ? "text-gray-800 hover:text-red-700"
                : "text-white hover:text-white/70"
            }`}
          >
            About
          </a>

          <a
            href="#academics"
            className={`text-sm transition ${
              isScrolled && !isDark
                ? "text-gray-800 hover:text-red-700"
                : "text-white hover:text-white/70"
            }`}
          >
            Academics
          </a>

          <a
            href="#facilities"
            className={`text-sm transition ${
              isScrolled && !isDark
                ? "text-gray-800 hover:text-red-700"
                : "text-white hover:text-white/70"
            }`}
          >
            Facilities
          </a>

          <a
            href="#admissions"
            className={`text-sm transition ${
              isScrolled && !isDark
                ? "text-gray-800 hover:text-red-700"
                : "text-white hover:text-white/70"
            }`}
          >
            Admissions
          </a>

          <a
            href="#contact"
            className={`text-sm transition ${
              isScrolled && !isDark
                ? "text-gray-800 hover:text-red-700"
                : "text-white hover:text-white/70"
            }`}
          >
            Contact Us
          </a>

          <AnimatedToggle
            isDark={isDark}
            setIsDark={setIsDark}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`rounded-lg border p-2 shadow-md transition md:hidden ${
            isScrolled && !isDark
              ? "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200"
              : "border-white/40 bg-white/20 text-white hover:bg-white/30"
          }`}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="mx-4 rounded-2xl bg-white p-5 text-gray-900 shadow-xl dark:bg-gray-900 dark:text-white md:hidden"
        >
          <div className="flex flex-col gap-4">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 transition hover:text-red-700 dark:text-gray-200 dark:hover:text-red-400"
            >
              About
            </a>

            <a
              href="#academics"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 transition hover:text-red-700 dark:text-gray-200 dark:hover:text-red-400"
            >
              Academics
            </a>

            <a
              href="#facilities"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 transition hover:text-red-700 dark:text-gray-200 dark:hover:text-red-400"
            >
              Facilities
            </a>

            <a
              href="#admissions"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 transition hover:text-red-700 dark:text-gray-200 dark:hover:text-red-400"
            >
              Admissions
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-semibold text-[#8B0000] transition hover:opacity-70 dark:text-red-400"
            >
              Contact Us
            </a>

            <div className="pt-2">
              <AnimatedToggle
                isDark={isDark}
                setIsDark={setIsDark}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

