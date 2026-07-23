"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-[50] mx-auto max-w-7xl bg-white  rounded-full px-8 py-4 shadow-sm flex items-center justify-between">
        <div className="text-2xl font-bold text-[#2B7A78]">
          LOCOVO
        </div>
        <div className="hidden lg:flex gap-8 text-sm text-gray-700">
          <Link href="/" className="hover:scale-110 transition-all duration-300"> Home </Link>
          <Link href="/about" className="nav-link">About </Link>
          <Link href="/how-it-works" className="hover:scale-110 transition-all duration-300">How it works</Link>
          <Link href="/services" className="hover:scale-110 transition-all duration-300">Services</Link>
          <Link href="/customers" className="hover:scale-110 transition-all duration-300">For Customers</Link>
          <Link href="/safety" className="hover:scale-110 transition-all duration-300">For Professionals</Link>
        </div>
        <div className="hidden lg:flex gap-4">
          <button className="px-5 py-2 rounded-full bg-[#2B7A78] text-white text-sm">
            Join the waitlist
          </button>
          <Link href={"/provider"}>
            <button className="px-5 py-2 rounded-full bg-[#D8A44D] text-white text-sm">
              Become a provider
            </button>
          </Link>
        </div>
      </motion.nav>


      <section className="py-24  bg-gradient-to-b bg-[#F2E4D0] via-[#F7F3EB] to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-serif text-[#143B35]">
              Explore upcoming at-home
              <br />
              wellness services.
            </h2>

            <p className="mt-6 text-gray-500">
              We're building a marketplace for trusted wellness services,
              delivered at home across selected Canadian regions
            </p>
          </div>

          {/* Flower */}
          <div className="flex justify-center my-8">
            <Image
              src="/flower.svg"
              alt=""
              width={80}
              height={80}
            />
          </div>


          {/* Services Grid */}
          <div className="grid lg:grid-cols-4 gap-6 mt-12">

            {/* Massage */}
            <div className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-200  transition-all duration-300 hover:bg-[#EEF2EE] hover:shadow-md hover:scale-[1.02]">

              <div className="w-12 h-1 bg-[#2F8A82] rounded-full mb-6" />

              <img
                src="/massage.svg"
                alt="Massage "
                className="w-18 h-18"
              />
              <h3 className="text-3xl font-serif text-[#143B35]">
                Massage Therapy
              </h3>

              <p className="mt-3 text-gray-500 text-sm">
                Relaxation, recovery, and wellness-focused massage services at home.
              </p>

              <div className="h-px bg-gray-300 my-6" />

              <div className="space-y-2">
                {[
                  "Registered massage therapist (RMT)",
                  "Deep Tissue",
                  "Swedish",
                  "Prenatal",
                  "Sports Massage",
                  "Lymphatic Drainage",
                ].map((item) => (
                  <button
                    key={item}
                    className="group w-full flex items-center gap-3 px-3 py-2 rounded-full transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#2F8A82] text-white flex items-center justify-center text-xs transition-transform duration-300 group-hover:rotate-12">
                      ✓
                    </div>

                    <span className="text-sm text-[#143B35]">
                      {item}
                    </span>
                  </button>
                ))}
              </div>

            </div>

            {/* Beauty */}
            <div className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-200  transition-all duration-300 hover:bg-[#FFF8EC] hover:shadow-md hover:scale-[1.02]">

              <div className="w-12 h-1 bg-[#D9A548] rounded-full mb-6" />

              <img
                src="/beauty.svg"
                alt="Beauty "
                className="w-15 h-15"
              />
              <h3 className="text-3xl font-serif text-[#143B35]">
                Beauty Services
              </h3>

              <p className="mt-3 text-gray-500 text-sm">
                Personal care and beauty treatments delivered with convenience.
              </p>

              <div className="h-px bg-gray-300 my-6" />

              <div className="space-y-2">
                {[
                  "Makeup Artist",
                  "Hair Stylist",
                  "Blow Dry",
                  "Bridal Makeup",
                ].map((item) => (
                  <button
                    key={item}
                    className="group w-full flex items-center gap-3 px-3 py-2 rounded-full transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#D9A548] text-white flex items-center justify-center text-xs transition-transform duration-300 group-hover:rotate-12">
                      ✓
                    </div>

                    <span className="text-sm text-[#143B35]">
                      {item}
                    </span>
                  </button>
                ))}
              </div>

            </div>

            {/* Nails */}
            <div className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-200  transition-all duration-300 hover:bg-[#F5F8EF] hover:shadow-md hover:scale-[1.02]">

              <div className="w-12 h-1 bg-[#A6B68A] rounded-full mb-6" />

              <img
                src="/nails(2).svg"
                alt="Nails "
                className="w-15 h-15"
              />
              <h3 className="text-3xl font-serif text-[#143B35]">
                Nails
              </h3>

              <p className="mt-3 text-gray-500 text-sm">
                Convenient nail care services from experienced professionals.
              </p>

              <div className="h-px bg-gray-300 my-6" />

              <div className="space-y-2">
                {[
                  "Manicure",
                  "Pedicure",
                  "Gel Nails",
                ].map((item) => (
                  <button
                    key={item}
                    className="group w-full flex items-center gap-3 px-3 py-2 rounded-full transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#A6B68A] text-white flex items-center justify-center text-xs transition-transform duration-300 group-hover:rotate-12">
                      ✓
                    </div>

                    <span className="text-sm text-[#143B35]">
                      {item}
                    </span>
                  </button>
                ))}
              </div>

            </div>

            {/* Skincare */}
            <div className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-200  transition-all duration-300 hover:bg-[#EEF7F6] hover:shadow-md hover:scale-[1.02]">

              <div className="w-12 h-1 bg-[#2F8A82] rounded-full mb-6" />

              <img
                src="/skincare.svg"
                alt="Skincare "
                className="w-15 h-15"
              />
              <h3 className="text-3xl font-serif text-[#143B35]">
                Skincare
              </h3>

              <p className="mt-3 text-gray-500 text-sm">
                At-home skincare treatments focused on comfort and self care.
              </p>

              <div className="h-px bg-gray-300 my-6" />

              <div className="space-y-2">
                {[
                  "Facial",
                  "Hydra Facial",
                ].map((item) => (
                  <button
                    key={item}
                    className="group w-full flex items-center gap-3 px-3 py-2 rounded-full transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#2F8A82] text-white flex items-center justify-center text-xs transition-transform duration-300 group-hover:rotate-12">
                      ✓
                    </div>

                    <span className="text-sm text-[#143B35]">
                      {item}
                    </span>
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* What To Expect */}
      <section className="max-w-7xl mx-auto mt-16 px-6">

        <div className="bg-[#F8F3EC] border border-[#E5D8C5] rounded-[28px] p-10 shadow-sm">

          <div className="grid lg:grid-cols-4 gap-8 items-start">

            {/* Left */}
            <div>
              <h2 className="text-5xl font-serif text-[#143B35]">
                What to expect?
              </h2>

              <p className="mt-4 text-gray-500">
                Our goal is to make wellness at home simple,
                trustworthy and convenient.
              </p>

              <div className="h-px bg-[#D8CDBF] my-5"></div>

              <p className="text-xs text-gray-400">
                ⓘ Initial availability may vary by launch area.
              </p>
            </div>

            {/* Verification */}
            <div className="text-center border-l border-[#D8CDBF] pl-6">

              <div className="w-14 h-14 rounded-full border-4 border-[#2F8A82] mx-auto flex items-center justify-center text-[#2F8A82] text-2xl">
                ✓
              </div>

              <h3 className="font-semibold text-[#143B35] mt-4">
                Verification First
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Every professional is carefully reviewed
                for your peace of mind.
              </p>
            </div>

            {/* Rollout */}
            <div className="text-center border-l border-[#D8CDBF] pl-6">

              <div className="w-14 h-14 rounded-full border-4 border-[#D9A548] mx-auto flex items-center justify-center text-[#D9A548] text-2xl">
                📍
              </div>

              <h3 className="font-semibold text-[#143B35] mt-4">
                City-by-city rollout
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                We launch in selected cities to ensure
                quality and trust.
              </p>
            </div>

            {/* Convenience */}
            <div className="text-center border-l border-[#D8CDBF] pl-6">

              <div className="w-14 h-14 rounded-full border-4 border-[#A6B68A] mx-auto flex items-center justify-center text-[#A6B68A] text-2xl">
                🏠
              </div>

              <h3 className="font-semibold text-[#143B35] mt-4">
                At-home convenience
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Convenient, professional care in
                the comfort of your home.
              </p>
            </div>

          </div>
        </div>

        {/* Future Services */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10 items-center">

          <div>
            <h3 className="text-3xl font-serif text-[#143B35]">
              Future services we may add
            </h3>

            <p className="text-gray-500 mt-4">
              Additional categories may be added over time
              based on demand, provider availability,
              and regional requirements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "Physiotherapy",
              "Chiropractic",
              "Acupuncture",
              "Personal Trainers",
              "Yoga Instructors",
            ].map((service) => (
              <button
                key={service}
                className="
            px-8 py-3
            bg-white
            rounded-full
            border
            shadow-sm
            hover:shadow-md
            hover:-translate-y-1
            transition-all
          "
              >
                {service}
              </button>
            ))}
          </div>

        </div>

      </section>

      <section className="py-24 mt-16"
        style={{
          backgroundImage: "url('/bg.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "33.33% auto",
        }}>

        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-5xl font-serif text-[#143B35] mb-12">
            Questions, answered.
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-2xl p-6">
              <summary className="cursor-pointer font-medium">
                What types of wellness services are available?
              </summary>
              <p className="mt-4 text-gray-600">
                Massage therapy, yoga, fitness coaching, nutrition and more.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6">
              <summary className="cursor-pointer font-medium">
                How does booking work?
              </summary>

              <p className="mt-4 text-gray-600">
                Choose a provider, select a time slot and confirm your booking.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6">
              <summary className="cursor-pointer font-medium">
                Are providers verified?
              </summary>

              <p className="mt-4 text-gray-600">
                Yes. All professionals go through a verification process.
              </p>
            </details>

          </div>

        </div>
      </section>

      <section className="py-24 bg-[#F7F3EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F8F3EC] rounded-[32px] p-12 relative overflow-hidden">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-serif text-[#143B35] leading-tight">
                Wellness, your way.<br />Coming soon.
              </h2>
              <p className="text-gray-500 mt-6 max-w-xl mx-auto">
                Personalized wellness services at home and
                exclusive experiences at premium destinations.
              </p>
            </div>
            {/* Content */}
            <div className="grid md:grid-cols-2 mt-20 relative">
              {/* Divider */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border flex items-center justify-center text-sm">
                  OR
                </div>
              </div>
              {/* Left */}
              <div className="text-center px-10">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#E8F1E7] flex items-center justify-center mb-6">
                  <img
                    src="/wellness.svg"
                    alt=""
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#143B35] uppercase">
                  Looking for a<br />Wellness Service?
                </h3>
                <p className="text-gray-500 mt-4">
                  Be the first to access personalized
                  wellness services and exclusive offers.
                </p>
                <Link href={"/early-access"}>
                  <button className="mt-8 bg-[#2F7D74] hover:scale-105 transition text-white px-10 py-4 rounded-full shadow-lg">
                    Join early access
                  </button>
                </Link>
                <p className="text-sm text-gray-400 mt-4">
                  No spam. Just updates that matter.
                </p>
              </div>

              {/* Right */}
              <div className="text-center px-10 mt-12 md:mt-0">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#F6E7C6] flex items-center justify-center mb-6">
                  <img
                    src="/provider.svg"
                    alt=""
                    className="w-14 h-14"
                  />
                </div>

                <h3 className="text-3xl font-bold text-[#143B35] uppercase">
                  Looking for a<br />Wellness Provider?
                </h3>
                <p className="text-gray-500 mt-4">
                  Be the first to access personalized
                  wellness services and exclusive offers.
                </p>

                <Link href={"/provider"}>
                <button className="mt-8 bg-[#D9A548] hover:scale-105 transition text-white px-10 py-4 rounded-full shadow-lg">
                  Become a provider
                </button>
                </Link>

                <p className="text-sm text-gray-400 mt-4">
                  Quick application. We'll be in touch.
                </p>
              </div>
              <Image
                src="/mortar.svg"
                alt=""
                width={160}
                height={160}
                className="absolute bottom-0 left-0 opacity-100" />
              <Image
                src="/pebble.svg"
                alt=""
                width={190}
                height={120}
                className="absolute bottom-0 right-0 opacity-100" />

            </div>

          </div>
        </div>

      </section>

      <footer className="bg-[#0F3432] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Top Footer */}
          <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.svg" alt="Locovo" width={36} height={36} />
                <span className="text-2xl font-semibold">LOCOVO</span>
              </div>

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