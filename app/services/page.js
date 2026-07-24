"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/services", label: "Services" },
  { href: "/customers", label: "For Customers" },
  { href: "/professional", label: "For Professionals" },
];

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);
  const faqs = [
    {
      question: "Which services will be available at launch?",
      answer:
        "Not yet. This is an early access website created to understand demand, build our community, and prepare for launch.",
    },
    {
      question: "Can I request a service which is not available yet?",
      answer:
        "Professionals can apply early, complete verification, and prepare their profiles before the platform launches.",
    },
    {
      question: "Will all services be available in every launch area?",
      answer:
        "Bookings are not available yet. Join the waitlist and we'll notify you as soon as Locovo launches in your city.",
    },
    {
      question: "Are providers reviewed before they join Locovo?",
      answer:
        "Your application will be reviewed and you'll receive updates about verification and onboarding before launch.",
    },
    {
      question: "Can I apply as a provider for one of these services?",
      answer:
        "Providers go through an identity and credential verification process before becoming available on Locovo.",
    },
  ];
  const [openFAQ, setOpenFAQ] = useState(0);
  return (
    <main className="min-h-screen overflow-x-hidden  bg-gradient-to-b from-[#F7F3EB] via-[#FCF8F2] to-[#FCF8F2]">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-4 z-50 mx-auto mt-4 w-[95%] max-w-7xl rounded-full bg-white shadow-md"
      >
        <div className="flex items-center justify-between px-5 py-4 lg:px-8">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/logo.svg"
              alt="Locovo"
              width={40}
              height={40}
            />

            <span className="text-2xl font-bold tracking-wide text-[#2B7A78]">
              LOCOVO
            </span>

          </Link>

          {/* Desktop Links */}

          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                className={`transition duration-300 hover:text-[#2B7A78] ${link.href === "/how-it-works"
                  ? "font-semibold text-[#2B7A78]"
                  : "text-[#24423F]"
                  }`}
              >
                {link.label}
              </Link>

            ))}

          </div>

          {/* Desktop Buttons */}

          <div className="hidden lg:flex items-center gap-4">

            <Link href="/customer">

              <button className="rounded-full bg-[#2B7A78] px-6 py-3 text-white transition hover:scale-105">
                Join Waitlist
              </button>

            </Link>

            <Link href="/professional">

              <button className="rounded-full bg-[#D8A44D] px-6 py-3 text-white transition hover:scale-105">
                Become a Provider
              </button>

            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            aria-label="Toggle navigation menu"
          >

            {menuOpen ? (

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

            ) : (

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

            )}

          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <div className="border-t bg-white lg:hidden">

            <div className="flex flex-col gap-5 p-6">

              {navLinks.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${link.href === "/how-it-works"
                    ? "font-semibold text-[#2B7A78]"
                    : "text-[#24423F]"
                    }`}
                >
                  {link.label}
                </Link>

              ))}

              <Link href="/customer">

                <button className="w-full rounded-full bg-[#2B7A78] py-3 text-white">
                  Join Waitlist
                </button>

              </Link>

              <Link href="/professional">

                <button className="w-full rounded-full bg-[#D8A44D] py-3 text-white">
                  Become a Provider
                </button>

              </Link>

            </div>

          </div>

        )}

      </motion.nav>


      <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F3EB] via-[#FCF8F2] to-[#FCF8F2] py-20 sm:py-24 lg:py-32">

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >

            <span className="inline-flex rounded-full bg-[#F5E7CF] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C58C27]">
              LOCOVO SERVICES
            </span>

            <h1 className="mt-8 font-serif text-4xl leading-tight text-[#143B35] sm:text-5xl lg:text-6xl xl:text-7xl">
              Explore upcoming
              <br />
              at-home wellness
              <br />
              services.
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              We're building a trusted marketplace for wellness professionals,
              bringing massage, beauty, skincare, and more directly to your
              doorstep across selected Canadian regions.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link href="/customer">
                <button className="rounded-full bg-[#2B7A78] px-8 py-4 text-white transition duration-300 hover:scale-105">
                  Join Early Access
                </button>
              </Link>

              <Link href="/how-it-works">
                <button className="rounded-full border border-[#143B35] px-8 py-4 text-[#143B35] transition duration-300 hover:bg-[#143B35] hover:text-white">
                  Learn More
                </button>
              </Link>

            </div>

          </motion.div>

          {/* Decorative Flower */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 flex justify-center"
          >

            <Image
              src="/flower-leaf.svg"
              alt="Flower"
              width={90}
              height={90}
              className="w-16 sm:w-70 lg:w-74 h-auto"
            />

          </motion.div>

        </div>

      </section>

      {/* What To Expect */}
      <section className="w-full bg-[#F9F7F2] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Main Card */}

          <div className="rounded-[28px] border border-[#E5D8C5] bg-[#F8F3EC] p-6 shadow-sm sm:p-8 lg:p-12">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">

              {/* Left */}

              <div className="lg:pr-6">

                <h2 className="font-serif text-3xl text-[#143B35] sm:text-4xl lg:text-5xl">
                  What to expect?
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  Our goal is to make wellness at home simple,
                  trustworthy and convenient.
                </p>

                <div className="my-6 h-px bg-[#D8CDBF]" />

                <p className="text-sm text-gray-500">
                  ⓘ Initial availability may vary by launch area.
                </p>

              </div>

              {/* Feature 1 */}

              <div className="border-t border-[#D8CDBF] pt-8 text-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">

                <Image
                  src="/Approve.svg"
                  alt="Verification"
                  width={56}
                  height={56}
                  className="mx-auto"
                />

                <h3 className="mt-5 text-xl font-semibold text-[#143B35]">
                  Verification First
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Every professional is carefully reviewed
                  before joining the platform.
                </p>

              </div>

              {/* Feature 2 */}

              <div className="border-t border-[#D8CDBF] pt-8 text-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">

                <Image
                  src="/Location.svg"
                  alt="City Coverage"
                  width={56}
                  height={56}
                  className="mx-auto"
                />

                <h3 className="mt-5 text-xl font-semibold text-[#143B35]">
                  City-by-city Rollout
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We launch gradually to ensure quality,
                  trust and availability.
                </p>

              </div>

              {/* Feature 3 */}

              <div className="border-t border-[#D8CDBF] pt-8 text-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">

                <Image
                  src="/House.svg"
                  alt="Home Service"
                  width={56}
                  height={56}
                  className="mx-auto"
                />

                <h3 className="mt-5 text-xl font-semibold text-[#143B35]">
                  At-home Convenience
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Wellness professionals come to you,
                  making appointments easy and comfortable.
                </p>

              </div>

            </div>

          </div>

          {/* Future Services */}

          <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            <div>

              <h3 className="font-serif text-3xl text-[#143B35] sm:text-4xl">
                Future services we may add
              </h3>

              <p className="mt-5 max-w-xl leading-8 text-gray-600">
                Additional wellness categories may be added over
                time based on community demand, provider
                availability and regional requirements.
              </p>

            </div>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-end">

              {[
                "Physiotherapy",
                "Chiropractic",
                "Acupuncture",
                "Personal Trainers",
                "Yoga Instructors",
              ].map((service) => (
                <button
                  key={service}
                  className="rounded-full border bg-white px-6 py-3 text-sm shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {service}
                </button>
              ))}

            </div>

          </div>

        </div>
      </section>

      <section
        className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: "url('/bg.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "33.33% auto",
        }}
      >
        {/* Background Decoration */}

        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "url('/leaf-top-left.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "250px",
          }}
        />

        <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-8 lg:px-10">

          {/* Heading */}

          <div className="mb-12 text-center">

            <div className="mb-4 flex items-center justify-center gap-3">

              <div className="h-[3px] w-12 rounded-full bg-[#E8A04A]" />

              <p className="text-xs uppercase tracking-[0.45em] text-[#8BA18E]">
                FAQ
              </p>

            </div>

            <h2 className="font-serif text-3xl text-[#143B35] sm:text-4xl lg:text-5xl">
              Questions, answered.
            </h2>

          </div>

          {/* FAQ Cards */}

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <motion.div
                key={index}
                layout
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >

                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >

                  <span className="text-base font-medium text-[#143B35] sm:text-lg">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: openFAQ === index ? 45 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-3xl font-light text-[#2B7A78]"
                  >
                    +
                  </motion.span>

                </button>

                <AnimatePresence>

                  {openFAQ === index && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >

                      <div className="px-6 pb-6">

                        <p className="leading-8 text-gray-600">
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

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

      <footer className="bg-[#0F3432] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Top Footer */}
          <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">
            {/* Brand */}
            <div>
              <Link href={"/"}>
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/logo.svg" alt="Locovo" width={36} height={36} />
                  <span className="text-2xl font-semibold">LOCOVO</span>
                </div>
              </Link>

              <p className="text-sm text-[#C6D2CE] max-w-xs">
                Join the early access list and help decide
                where Locovo launches first.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">
                Company
              </h4>

              <ul className="space-y-3 text-[#C6D2CE] text-sm">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">
                Policies
              </h4>

              <ul className="space-y-3 text-[#C6D2CE] text-sm">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            {/* Trust */}
            <div>
              <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">
                Trust
              </h4>

              <ul className="space-y-3 text-[#C6D2CE] text-sm">
                <li><a href="#">Safety & Verification</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-[#E8A04A] text-sm font-semibold mb-4">
                Social Links
              </h4>

              <div className="flex gap-4 text-xl">
                <i className="ri-instagram-line"></i>
                <i className="ri-whatsapp-line"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-linkedin-box-line"></i>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#C6D2CE] text-sm">
              Product experience powered by
              <span className="ml-2 tracking-[0.35em] text-white">
                STRIX
              </span>
            </p>

            <p className="text-[#C6D2CE] text-sm">
              © 2026 Locovo. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}