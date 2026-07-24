"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const serviceRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);
  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ["start end", "end start"],
  });
  const flowerX = useTransform(scrollYProgress, [0, 0.35, 0.8, 1], [300, 0, 0, 300]);
  const flowerRotate = useTransform(scrollYProgress, [0, 0.35, 0.8, 1], [-360, 0, 0, 360]);
  const flowerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/services", label: "Services" },
    { href: "/customers", label: "For Customers" },
    { href: "/professional", label: "For Professionals" },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#F7F3EB] via-[#FCF8F2] to-[#FCF8F2]">

      {/* Navbar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-4 z-50 mx-auto w-[95%] max-w-7xl rounded-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300"
      >
        <div className="flex items-center justify-between px-5 py-4 lg:px-8">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <Image
              src="/logo.svg"
              alt="Locovo"
              width={38}
              height={38}
            />

            <Link
              href="/"
              className="text-2xl font-extrabold tracking-wide text-[#2B7A78]"
            >
              LOCOVO
            </Link>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-[#24423F] transition hover:text-[#2B7A78]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/customer">
              <button className="rounded-full bg-[#2B7A78] px-6 py-2.5 text-sm font-medium text-white transition hover:scale-105">
                Join Waitlist
              </button>
            </Link>

            <Link href="/provider">
              <button className="rounded-full bg-[#D8A44D] px-6 py-2.5 text-sm font-medium text-white transition hover:scale-105">
                Become Provider
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 7 : 0,
              }}
              className="h-0.5 w-6 bg-[#24423F]"
            />

            <motion.span
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
              className="h-0.5 w-6 bg-[#24423F]"
            />

            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -7 : 0,
              }}
              className="h-0.5 w-6 bg-[#24423F]"
            />
          </button>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="space-y-2 border-t border-gray-100 px-6 py-5">

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-3 text-[#24423F] transition hover:bg-[#F3F6F4]"
                  >
                    {link.label}
                  </Link>
                ))}


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 lg:mt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-[#B4C0A5] px-4 py-2 text-xs sm:text-sm text-[#6F5C2F]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D8A44D]" />
              Coming soon to selected Canadian cities
            </span>

            {/* Heading */}
            <h1 className="mt-8 font-serif text-[#24423F] leading-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl max-w-3xl mx-auto lg:mx-0">
              Trusted at-home wellness, delivered by{" "}
              <span className="italic text-[#2B7A78]">
                verified
              </span>{" "}
              professionals.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 lg:mx-0">
              Book massage, beauty, skincare, nails, hair styling and more from trusted
              professionals—conveniently delivered to your home.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <Link href="/customer">
                <button className="w-full rounded-full bg-[#2B7A78] px-7 py-3 font-medium text-white transition duration-300 hover:scale-105 sm:w-auto">
                  Join Early Access
                </button>
              </Link>

              <Link href="/professional">
                <button className="w-full rounded-full bg-[#D8A44D] px-7 py-3 font-medium text-white transition duration-300 hover:scale-105 sm:w-auto">
                  Become a Provider
                </button>
              </Link>

            </div>

            {/* Bottom Text */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#6F5C2F]">

              <span className="h-2.5 w-2.5 rounded-full bg-[#D8A44D]" />

              Be among the first to know when we launch in your city.

            </div>

          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative w-full max-w-lg aspect-square rounded-3xl p-6">
              <Image src="/illustrationbg.svg" alt="Illustration" fill className="object-contain p-7" priority />
            </div>
          </motion.div>

        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8 lg:mt-24 ">

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            {
              text: "Verified wellness professionals",
              icon: "/Approve2.svg",
            },
            {
              text: "At-home convenience",
              icon: "/house2.svg",
            },
            {
              text: "Safety-first onboarding",
              icon: "/shield.svg",
            },
            {
              text: "Launching across selected Canadian regions",
              icon: "/star.svg",
            },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-4 bg-white min-h-[88px] px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <Image
                src={item.icon}
                alt=""
                width={22}
                height={22}
              />

              <span className="text-sm font-medium text-[#143B35]">
                {item.text}
              </span>
            </div>
          ))}
        </div>

      </section>
      <section
        ref={serviceRef}
        className="relative mx-auto mt-20 w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.25em] text-[#2B7A78] uppercase">
            Service Categories
          </p>

          <h2 className="mt-4 text-3xl font-serif leading-tight text-[#24423F] sm:text-4xl lg:text-5xl">
            Wellness services designed
            <br className="hidden sm:block" />
            around your home and
            <br className="hidden sm:block" />
            schedule.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600">
            Explore the categories planned for launch and let us know what
            you'd like to see in your city.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "Massage Therapy",
              text: "Relaxation, recovery, and wellness-focused massage services at home.",
              icon: "/massage.svg",
            },
            {
              title: "Beauty Services",
              text: "Personal care and beauty treatments delivered with convenience.",
              icon: "/beauty.svg",
            },
            {
              title: "Hair Styling",
              text: "At-home styling support for everyday needs and special occasions.",
              icon: "/scissors.svg",
            },
            {
              title: "Skincare",
              text: "Personalized skincare and facial wellness services.",
              icon: "/skincare.svg",
            },
            {
              title: "Nails",
              text: "Convenient nail care services from experienced professionals.",
              icon: "/nails.svg",
            },
            {
              title: "Future Services",
              text: "Physiotherapy, chiropractic, yoga, personal training and more.",
              icon: "/future-service.svg",
            },
          ].map((service, index) => {

            const stickColors = [
              "#2B7A78", // Teal
              "#E9C8B5", // Peach
              "#A6B88C", // Olive
            ];

            return (
              <motion.div
                key={service.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm"
              >
                {/* Top Stick */}
                <div
                  className="mb-6 h-1.5 w-12 rounded-full"
                  style={{
                    backgroundColor: stickColors[index % 3],
                  }}
                />

                <img
                  src={service.icon}
                  alt={service.title}
                  className="mb-6 h-14 w-14"
                />

                <h3 className="text-xl font-semibold text-[#24423F]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-gray-500">
          ◉ Availability may vary by city, province, provider eligibility,
          and launch phase.
        </p>

        {/* Decoration */}
        <div className="pointer-events-none absolute right-0 top-10 hidden lg:block">

          <div className="relative w-52 h-60">

            {/* Curved Decoration */}
            <Image
              src="/Curves1.svg"
              alt=""
              fill
              className="object-contain object-top-right"
              priority
            />

            {/* Animated Flower */}
            <motion.div
              style={{
                x: flowerX,
                rotate: flowerRotate,
                opacity: flowerOpacity,
              }}
              className="absolute bottom-5 left-5"
            >
              <Image
                src="/flower.svg"
                alt=""
                width={90}
                height={90}
              />
            </motion.div>

          </div>

        </div>
      </section>


      <section
        className="relative overflow-hidden bg-[#FBF8F2] py-24"
        style={{ backgroundImage: "url('/bg3.svg')", backgroundRepeat: "repeat", backgroundSize: "13.33% auto" }}
      >
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#2B7A78]">HOW IT WORKS</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-[#24423F]">How the platform will work</h2>
            <p className="mt-5 text-gray-600 leading-7">
              Simple on both sides of the marketplace — whether you're booking wellness at home or growing your practice.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] border border-[#CFE3E0] bg-[#EAF6F5] p-8 lg:p-10"
            >
              <span className="inline-block rounded-full bg-[#2B7A78] px-4 py-2 text-xs uppercase tracking-wide text-white">
                For Customers
              </span>
              <h3 className="mt-6 text-3xl sm:text-4xl font-serif text-[#24423F]">Find wellness that fits your routine</h3>

              <div className="mt-10 space-y-7">
                {[
                  { title: "Explore Services", text: "Browse massage, beauty, skincare, nails and more." },
                  { title: "Tell us what you need", text: "Share your city and preferred wellness services." },
                  { title: "Get launch updates", text: "Receive updates when providers become available." },
                  { title: "Book with confidence", text: "Connect with verified professionals." },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2B7A78] text-white text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#24423F]">{step.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={"/customer"}>
                <button className="mt-10 rounded-full bg-[#2B7A78] px-7 py-3 text-sm font-medium text-white">
                  Join Early Access
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] border border-[#E9D9C2] bg-[#FFF4E6] p-8 lg:p-10"
            >
              <span className="inline-block rounded-full bg-[#D8A44D] px-4 py-2 text-xs uppercase tracking-wide text-white">
                For Professionals
              </span>
              <h3 className="mt-6 text-3xl sm:text-4xl font-serif text-[#24423F]">Grow your practice with confidence</h3>

              <div className="mt-10 space-y-7">
                {[
                  { title: "Apply as a provider", text: "Share your services and professional background." },
                  { title: "Complete verification", text: "Submit your information for review." },
                  { title: "Set your service area", text: "Choose where and when you work." },
                  { title: "Prepare for Launch", text: "Connect with customers when we launch." },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D8A44D] text-white text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#24423F]">{step.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={"/professional"}>
                <button className="mt-10 rounded-full bg-[#D8A44D] px-7 py-3 text-sm font-medium text-white">
                  Become a Provider
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl overflow-hidden py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 opacity-50 blur-[100px]" />
        </div>
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-wider text-[#2B7A78]">
            WHY LOCOVO
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#24423F] sm:text-5xl">
            A Better way to access wellness
            <br className="hidden sm:block" />
            at home.
          </h2>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="rounded-t-[100px] rounded-b-[20px] border border-[#9DD7D2] bg-white p-8 text-center shadow-sm">
              <img src="/handshake.svg" alt="Handshake" className="mx-auto h-12 w-12" />
              <h3 className="mt-4 font-semibold text-gray-700">Convenient</h3>
              <p className="mt-3 text-sm text-gray-500">
                Book wellness services without leaving home.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-t-[100px] rounded-b-[20px] border border-[#9DD7D2] bg-white p-8 text-center shadow-sm">
              <img src="/Background.svg" alt="Background" className="mx-auto h-14 w-14" />
              <h3 className="mt-4 font-semibold text-gray-700">Trust-focused</h3>
              <p className="mt-3 text-sm text-gray-500">
                Verified professionals and transparent onboarding.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-t-[100px] rounded-b-[20px] border border-[#9DD7D2] bg-white p-8 text-center shadow-sm">
              <img src="/Human.svg" alt="Human" className="mx-auto h-12 w-12" />
              <h3 className="mt-4 font-semibold text-gray-700">Human &amp; Personal</h3>
              <p className="mt-3 text-sm text-gray-500">
                Designed around meaningful interactions.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-t-[100px] rounded-b-[20px] border border-[#9DD7D2] bg-white p-8 text-center shadow-sm">
              <img src="/Building.svg" alt="Building" className="mx-auto h-12 w-12" />
              <h3 className="mt-4 font-semibold text-gray-700">Built for Canada</h3>
              <p className="mt-3 text-sm text-gray-500">
                Launching city-by-city across the country.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto py-32 overflow-hidden">
        <img
          src="/flower-left.svg"
          alt="Flower Left"
          className="hidden lg:block absolute left-0 top-1/4 -translate-y-1/2 w-64 h-32 xl:w-[30rem] xl:h-60 pointer-events-none"
        />
        <img
          src="/flower-right.svg"
          alt="Flower Right"
          className="hidden lg:block absolute right-0 top-1/4 -translate-y-1/2 w-64 h-32 xl:w-[30rem] xl:h-60 pointer-events-none"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#2B7A78]">Safety & Verification</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-[#24423F] leading-tight">
            Safety and trust are built <br className="hidden sm:block" /> into the platform.
          </h2>
          <p className="mt-6 text-gray-600">
            Before launching the marketplace, we're building a verification <br className="hidden lg:block" /> first
            foundation for both customers and providers.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Link href={"/safety"}>
            <button className="px-6 py-3 rounded-full bg-[#E8A04A] text-white font-medium hover:scale-105 transition">
              Learn about Safety
            </button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFF1DE] flex items-center justify-center">
              <img src="/man.svg" alt="Man" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="font-semibold text-gray-500">Professional background review</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E8F5F3] flex items-center justify-center">
              <img src="/Review.svg" alt="Review" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="font-semibold text-gray-500">Ratings & reviews after marketplace launch.</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E7EFE3] flex items-center justify-center">
              <img src="/Certificate.svg" alt="Certificate" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="font-semibold text-gray-500">License & Certifications checks</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFF1DE] flex items-center justify-center">
              <img src="/support.svg" alt="Support" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="font-semibold text-gray-500">Support & Escalation processes</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E8F5F3] flex items-center justify-center">
              <img src="/verification.svg" alt="Verification" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="font-semibold text-gray-500">Identity Verification</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E7EFE3] flex items-center justify-center">
              <img src="/insurance.svg" alt="Insurance" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="font-semibold text-gray-500">Insurance details where applicable</h3>
          </div>
        </div>
      </section>

      <section className="bg-[#E7EFE3] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-[3px] bg-[#E8A04A] rounded-full"></div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#2B7A78]">Launch Cities</p>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-[#24423F] mt-4">
                Where should we launch <br className="hidden sm:block" /> first?
              </h2>
              <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
                Join early access and tell us which city you're located in. Your interest will help decide our first
                launch regions.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                {["Toronto", "Vancouver", "Calgary", "Ottawa", "Montreal", "Edmonton", "+ your city"].map((city) => (
                  <div
                    key={city}
                    className="px-5 py-2 bg-white rounded-full text-[#24423F] font-medium transition-all duration-300 hover:bg-[#E8A04A] hover:text-white hover:-translate-y-1 cursor-pointer"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 shadow-sm min-h-[450px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#24423F] mb-2">Province</label>
                  <input
                    type="text"
                    placeholder="select your province"
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-[#FAF9F6] text-[#24423F]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#24423F] mb-2">City</label>
                  <input
                    type="text"
                    placeholder="e.g. Toronto"
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-[#FAF9F6] text-[#24423F]"
                  />
                </div>
                <div className="sm:mt-5">
                  <label className="block text-sm font-medium text-[#24423F] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@gmail.com"
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-[#FAF9F6] text-[#24423F]"
                  />
                </div>
                <div className="sm:mt-5">
                  <label className="block text-sm font-medium text-[#24423F] mb-2">Service interest</label>
                  <input
                    type="text"
                    placeholder="Choose a service"
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-[#FAF9F6] text-[#24423F]"
                  />
                </div>
                <div className="flex items-center gap-3 mt-8 sm:col-span-2">
                  <input type="checkbox" className="w-5 h-5 accent-[#2B7A78] shrink-0" />
                  <p className="text-sm text-gray-600">
                    I agree to receive updates about launch, availability, and early access.
                  </p>
                </div>
              </div>
              <Link href={"/customer"}>
                <button className="mt-10 w-full sm:w-auto bg-[#2A746A] text-white px-8 py-4 rounded-full">
                  Join Early Access
                </button>
              </Link>
              <p className="w-full py-4 text-gray-400 text-sm">
                Free to join. No spam — just a launch notification for your city.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E8E3D8] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="hidden lg:block absolute -left-45 -top-16 pointer-events-none">
                <div className="relative w-48 h-64">
                  <div className="absolute top-0 left-0 pointer-events-none">
                    <div className="relative h-104 w-50">
                      <div className="absolute inset-0 pointer-events-none rounded-tr-full border-r-[20px] border-t-[20px] border-[#A6B88C]" />
                    </div>
                  </div>
                  <div className="absolute top-6 left-0 pointer-events-none">
                    <div className="relative h-98 w-44">
                      <div className="absolute inset-0 pointer-events-none rounded-tr-full border-r-[20px] border-t-[20px] border-[#F2C6B6]" />
                    </div>
                  </div>
                  <img src="/flower.svg" alt="Flower" className="absolute top-0 left-26 w-30" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 lg:ml-24 text-gray-700">
                {["Reach new customers", "Build your professional profile", "Work on a flexible schedule", "Join before public launch"].map(
                  (item) => (
                    <div key={item} className="bg-white rounded-2xl shadow-md p-5 text-center text-sm font-medium">
                      {item}
                    </div>
                  )
                )}
                <div className="col-span-2 bg-white rounded-2xl shadow-md p-5 text-center text-sm font-medium">
                  Be part of a safety-first marketplace
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left max-w-md mx-auto">
              <p className="uppercase tracking-[0.25em] text-[#6E9C8D] text-xs mb-4">For Wellness Professionals</p>
              <h2 className="text-4xl sm:text-5xl font-serif text-[#23443E] mb-6">Are you a wellness professional?</h2>
              <p className="text-gray-500 mb-8">
                Join early and help shape a trusted at-home wellness marketplace in Canada.
              </p>
              <Link href={"/professional"}>
                <button className="bg-[#2F7C73] hover:bg-[#27675F] text-white px-8 py-4 rounded-full transition">
                  Become an early provider
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative mt-16 overflow-hidden py-24"
        style={{
          backgroundImage: "url('/bg.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "33.33% auto",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "url('/leaf-top-left.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "250px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">

          {/* Heading */}

          <div className="mb-12 text-center">

            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-[3px] w-12 rounded-full bg-[#E8A04A]" />
              <p className="text-xs uppercase tracking-[0.45em] text-[#8BA18E]">
                FAQ
              </p>
            </div>

            <h2 className="font-serif text-4xl text-[#23443E] sm:text-5xl">
              Questions, answered.
            </h2>

          </div>

          <div className="space-y-5">

            {[
              {
                question: "Is the platform live now?",
                answer:
                  "Not yet. Locovo is currently collecting early access registrations while we prepare for launch.",
              },
              {
                question: "Which cities will you launch in?",
                answer:
                  "We're prioritizing cities based on demand. Joining the waitlist helps determine where Locovo launches first.",
              },
              {
                question: "Are providers verified?",
                answer:
                  "Yes. Every wellness professional will go through an identity and credential verification process before joining the platform.",
              },
              {
                question: "Can professionals apply now?",
                answer:
                  "Absolutely. Providers can register early so they're ready once onboarding officially begins.",
              },
              {
                question: "Is joining early access free?",
                answer:
                  "Yes. Joining the waitlist is completely free for both customers and wellness professionals.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                layout
                className="overflow-hidden rounded-2xl bg-white shadow-md"
              >

                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <span className="pr-5 text-base font-semibold text-[#23443E] sm:text-lg">
                    {item.question}
                  </span>

                  <span className="text-2xl font-light text-[#23443E]">
                    {openFAQ === index ? "−" : "+"}
                  </span>

                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="overflow-hidden"
                >

                  <div className="px-6 pb-6 text-gray-600 leading-7">
                    {item.answer}
                  </div>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <section className="relative overflow-hidden rounded-t-3xl bg-[#F8F6F1] py-20">

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-serif text-4xl leading-tight text-[#23443E] sm:text-5xl">
            Wellness, your way.
            <br />
            Coming soon.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-gray-500">
            Personalized wellness services at home and exclusive experiences at premium destinations.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-16 max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center">

            {/* Customer */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#E9F0E9]">
                <img src="/human-icon.svg" alt="" />
              </div>

              <h3 className="text-2xl font-semibold text-[#23443E]">
                LOOKING FOR A
                <br />
                WELLNESS SERVICE?
              </h3>

              <p className="mt-4 text-gray-500">
                Be the first to access personalized wellness services and exclusive offers.
              </p>

              <Link href="/customer">
                <button className="mt-8 rounded-full bg-[#2A746A] px-8 py-4 text-white">
                  Join Early Access
                </button>
              </Link>

              <p className="mt-4 text-xs text-gray-400">
                ✓ No spam. Just updates that matter.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden lg:flex flex-col items-center">
              <div className="h-40 w-px bg-[#CFC8BC]" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-xs">
                OR
              </div>
              <div className="h-40 w-px bg-[#CFC8BC]" />
            </div>

            {/* Provider */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8E9C9]">
                <img src="/suitcase.svg" alt="" />
              </div>

              <h3 className="text-2xl font-semibold text-[#23443E]">
                OFFERING A
                <br />
                WELLNESS SERVICE?
              </h3>

              <p className="mt-4 text-gray-500">
                Be the first to join as a verified provider and get early access to new clients.
              </p>

              <Link href="/professional">
                <button className="mt-8 rounded-full bg-[#D8A03B] px-8 py-4 text-white">
                  Become a Provider
                </button>
              </Link>

              <p className="mt-4 text-xs text-gray-400">
                ✓ Quick application. We'll be in touch.
              </p>
            </div>

          </div>
        </div>

        {/* Decorative Images */}

        <Image
          src="/flower3.svg"
          alt=""
          width={170}
          height={170}
          className="pointer-events-none absolute bottom-0 left-0 hidden md:block"
        />

        <Image
          src="/grass.svg"
          alt=""
          width={150}
          height={110}
          className="pointer-events-none absolute bottom-0 left-8 hidden lg:block"
        />

        <Image
          src="/leaf-left.svg"
          alt=""
          width={160}
          height={160}
          className="pointer-events-none absolute bottom-0 right-24 hidden xl:block"
        />

        <Image
          src="/leaf-right.svg"
          alt=""
          width={180}
          height={180}
          className="pointer-events-none absolute bottom-0 right-0 hidden lg:block"
        />

        <Image
          src="/grass-right.svg"
          alt=""
          width={170}
          height={120}
          className="pointer-events-none absolute bottom-0 right-8 hidden lg:block"
        />

      </section>

      {/* Footer */}
      <footer className="bg-[#0F3432] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
            <div className="sm:col-span-2 md:col-span-1">
              <Link href={"/"}>
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/logo.svg" alt="Locovo" width={36} height={36} />
                  <span className="text-2xl font-semibold">LOCOVO</span>
                </div>
              </Link>
              <p className="text-sm text-[#C6D2CE] max-w-xs">
                Join the early access list and help decide where Locovo launches first.
              </p>
            </div>

            <div>
              <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-[#C6D2CE] text-sm">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">Policies</h4>
              <ul className="space-y-3 text-[#C6D2CE] text-sm">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">Trust</h4>
              <ul className="space-y-3 text-[#C6D2CE] text-sm">
                <li><a href="#">Safety & Verification</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">Social Links</h4>
              <div className="flex gap-4 text-xl">
                <i className="ri-instagram-line"></i>
                <i className="ri-whatsapp-line"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-linkedin-box-line"></i>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-[#C6D2CE] text-sm">
              Product experience powered by <span className="ml-2 tracking-[0.35em] text-white">STRIX</span>
            </p>
            <p className="text-[#C6D2CE] text-sm">© 2026 Locovo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}