
import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-100 px-6 py-16 text-gray-900 lg:px-10 dark:bg-gray-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* School */}
          <div className="lg:col-span-2">
            <img
              src="/netpuppyImages/schoolLogo.95f6e121.png"
              alt="Tulas International School"
              className="h-16 w-auto"
            />

            <p className="mt-6 max-w-md leading-7 text-gray-600 dark:text-gray-300">
              Creating meaningful learning experiences that help
              students discover their potential and prepare for the future.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-gray-600 dark:text-gray-300">
              <a
                href="#about"
                className="transition hover:text-red-700"
              >
                About
              </a>

              <a
                href="#academics"
                className="transition hover:text-red-700"
              >
                Academics
              </a>

              <a
                href="#facilities"
                className="transition hover:text-red-700"
              >
                Facilities
              </a>

              <a
                href="#admissions"
                className="transition hover:text-red-700"
              >
                Admissions
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-gray-600 dark:text-gray-300">

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tulas+International+School+Dhoolkot+Selaqui+Chakrata+Road+Dehradun+248011+Uttarakhand"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-red-700"
              >
                Dhoolkot, P.O – Selaqui,
                <br />
                Chakrata Road,
                <br />
                Dehradun-248011, Uttarakhand
              </a>

              {/* Landline */}
              <p>
                <span className="font-semibold">
                  Landline:
                </span>{" "}
                <a
                  href="tel:01352699444"
                  className="transition hover:text-red-700"
                >
                  0135-2699444
                </a>
                ,{" "}
                <a
                  href="tel:01352699666"
                  className="transition hover:text-red-700"
                >
                  0135-2699666
                </a>
              </p>

              {/* Admission Helpline */}
              <p>
                <span className="font-semibold">
                  Admission:
                </span>{" "}
                <a
                  href="tel:+919837983791"
                  className="transition hover:text-red-700"
                >
                  +91-9837983791
                </a>
              </p>

              {/* Email */}
              <p>
                <a
                  href="mailto:info@tis.edu.in"
                  className="transition hover:text-red-700"
                >
                  info@tis.edu.in
                </a>
              </p>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-gray-300 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between dark:border-white/10">

          <p>
            © {new Date().getFullYear()} Tulas International School.
            All rights reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 transition hover:text-red-700"
          >
            Back to top
            <ArrowUp size={16} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

