"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const serviceRef = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: serviceRef,
      offset: ["start end", "end start"],
    }
  );
  const flowerX = useTransform(scrollYProgress, [0, 0.35, 0.8, 1], [300, 0, 0, 300]);
  const flowerRotate = useTransform(scrollYProgress, [0, 0.35, 0.8, 1], [-360, 0, 0, 360]);
  const flowerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <main className="min-h-screen bg-[#F9F7F2] p-4 md:p-8">
      {/*Navbar */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-[50] mx-auto max-w-7xl bg-white  rounded-full px-8 py-4 shadow-sm flex items-center justify-between"
      >
        <div className="text-2xl font-bold text-[#2B7A78]">
          LOCOVO
        </div>
        <div className="hidden lg:flex gap-8 text-sm text-gray-700">
          <Link href="/" className="hover:scale-110 transition-all duration-300"> Home </Link>
          <Link href="/about" className="hover:scale-110 transition-all duration-300">About </Link>
          <Link href="/how-it-works" className=" hover:scale-110 transition-all duration-300">How it works</Link>
          <Link href="/services" className="hover:scale-110 transition-all duration-300">Services</Link>
          <Link href="/customers" className="hover:scale-110 transition-all duration-300">For Customers</Link>
          <Link href="/safety" className="hover:scale-110 transition-all duration-300">For Professionals</Link>
        </div>
        <div className="hidden lg:flex gap-4 ">
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} >
            <span className="inline-block bg-[#EFE7C8] text-[#6F5C2F] px-4 py-2 rounded-full text-sm">
              Coming soon to selected cities
            </span>
            <h1 className="mt-8 text-5xl lg:text-7xl font-serif leading-tight text-[#24423F]">
              Trusted at-home<br /> wellness, delivered <br />by{" "}
              <span className="italic text-[#2B7A78]">verified</span>
              <br />professionals.
            </h1>
            <p className="mt-6 text-gray-600 max-w-xl">
              Book massage, beauty, skincare, nails,
              hair styling and more from trusted
              professionals—conveniently delivered
              to your home.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-7 py-3 rounded-full bg-[#2B7A78] text-white font-medium"> Join early access   </button>
              <Link href={"/provider"}><button className="px-7 py-3 rounded-full bg-[#D8A44D] text-white font-medium"> Become a provider   </button></Link>
            </div>
            <p className="mt-4 text-sm text-gray-500"> • Be among the first to know when we launch in your city. </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-[#F0E8D8] p-6">
              <Image
                src="/illustration.svg"
                alt="Illustration"
                fill
                className="object-contain p-6"
                priority />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-20">
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["Verified wellness professionals",
            "At-home convenience",
            "Safety-first onboarding",
            "Launching across regions",
          ].map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15, }} whileHover={{ y: -5 }} className="rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">

              <p className="text-center text-base font-medium leading-6 text-gray-900">
                {item}
              </p>
            </motion.div>
          ))}

        </div>
      </section>
      {/* Services */}
      <section
        ref={serviceRef}
        className="relative max-w-7xl mx-auto mt-24 overflow-hidden">
        <div className="max-w-xl">
          <p className="text-xs tracking-widest text-[#2B7A78]">
            SERVICE CATEGORIES
          </p>

          <h2 className="mt-3 text-4xl font-serif text-[#24423F]">
            Wellness services designed
            <br />
            around your home and
            <br />
            schedule.
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Explore the categories planned for launch — and tell us
            what you would like to see in your city.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {[
            {
              title: "Massage Therapy",
              text: "Relaxation, recovery, and wellness-focused massage services at home.",
              color: "#2B7A78",
              icon: (
                <img
                  src="/massage.svg"
                  alt="Massage "
                  className="w-15 h-15"
                />
              ),
            },
            {
              title: "Beauty Services",
              text: "Personal care and beauty treatments delivered with convenience.",
              color: "#D89B32",
              icon: (
                <img
                  src="/beauty.svg"
                  alt="Beauty "
                  className="w-15 h-15"
                />
              ),
            },
            {
              title: "Hair Styling",
              text: "At-home styling support for everyday needs and special occasions.",
              color: "#A8B88A",
              icon: (
                <img
                  src="/scissors.svg"
                  alt="Scissors "
                  className="w-15 h-15"
                />
              ),
            },
            {
              title: "Skincare",
              text: "Personalized skincare and facial wellness services.",
              color: "#8A9B7A",
              icon: (
                <img
                  src="/skincare.svg"
                  alt="Skincare "
                  className="w-15 h-15"
                />
              ),
            },
            {
              title: "Nails",
              text: "Convenient nail care services from experienced professionals.",
              color: "#C4A78A",
              icon: (
                <img
                  src="/nails.svg"
                  alt="Nails "
                  className="w-20 h-20"
                />
              ),
            },
            {
              title: "Future Services",
              text: "Physiotherapy, chiropractic, yoga, personal training and more.",
              color: "#9A8B7A",
              icon: (
                <img
                  src="/future-service.svg"
                  alt="Future Service "
                  className="w-15 h-15"
                />
              ),
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="w-10 h-1 rounded-full bg-[#2B7A78] mb-6" />
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-lg font-medium text-[#24423F]">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.text}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-5 text-xs text-gray-500">
          ◉ Availability may vary by city, province, provider eligibility, and launch phase.
        </p>

        <div className="absolute top-5 right-0 pointer-events-none">
          <div className="relative h-60 w-40">
            <div className="absolute right-0 top-0 h-full w-full rounded-bl-full border-l-[16px] border-b-[16px] border-[#A6B88C]" />
          </div>
        </div>
        <div className="absolute top-5 right-0 pointer-events-none">
          <div className="relative h-55 w-35">
            <div className="absolute right-0 top-0 h-full w-full rounded-bl-full border-l-[16px] border-b-[16px] border-[#F2C6B6]" />
          </div>
        </div>
        <motion.div
          style={{
            x: flowerX,
            rotate: flowerRotate,
            opacity: flowerOpacity,
          }}
          className="absolute right-20 top-40">
          <img
            src="/flower.svg"
            alt="Flower"
            className="w-30 h-30"
          />

        </motion.div>
      </section>

      <section className="relative mt-32 overflow-hidden bg-[#FBF8F2] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#2B7A78]">HOW IT WORKS</p>
            <h2 className="mt-4 text-5xl font-serif text-[#24423F]">How the platform will work</h2>
            <p className="mt-5 text-gray-600 leading-7">
              Simple on both sides of the marketplace — whether you're booking wellness at home or growing your practice.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                  rounded-3xl
                  border
                  border-[#CFE3E0]
                  bg-[#EAF6F5]
                  p-8 ">
              <span className="
                    inline-block
                    rounded-full
                    bg-[#2B7A78]
                    px-4
                    py-2
                    text-xs
                    uppercase
                    tracking-wide
                    text-white
                    ">
                For Customers
              </span>
              <h3 className="
                    mt-6
                    text-3xl
                    font-serif
                    text-[#24423F]">
                Find wellness that fits your routine
              </h3>

              <div className="mt-10 space-y-7">
                {[
                  {
                    title: "Explore Services",
                    text: "Browse massage, beauty, skincare, nails and more."
                  },
                  {
                    title: "Tell us what you need",
                    text: "Share your city and preferred wellness services."
                  },
                  {
                    title: "Get launch updates",
                    text: "Receive updates when providers become available."
                  },
                  {
                    title: "Book with confidence",
                    text: "Connect with verified professionals."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex 
                          h-9 
                          w-9 
                          shrink-0 
                          items-center 
                          justify-center 
                          rounded-full 
                          bg-[#2B7A78] 
                          text-white 
                          text-sm 
                          font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#24423F]">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={"/early-access"}>
                <button className=" mt-10 rounded-full bg-[#2B7A78] px-7 py-3 text-sm font-medium text-white">
                  Join Early Access
                </button>

              </Link>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                   rounded-3xl
                   border
                   border-[#E9D9C2]
                   bg-[#FFF4E6]
                    p-8">
              <span className="
                    inline-block
                    rounded-full
                    bg-[#D8A44D]
                    px-4
                    py-2
                    text-xs
                    uppercase
                    tracking-wide
                    text-white
                    ">
                For Professionals
              </span>
              <h3 className="
                    mt-6
                    text-3xl
                    font-serif
                    text-[#24423F]">
                Grow your practice with confidence
              </h3>
              <div className="mt-10 space-y-7">
                {[
                  {
                    title: "Apply as a provider",
                    text: "Share your services and professional background."
                  },
                  {
                    title: "Complete verification",
                    text: "Submit your information for review."
                  },
                  {
                    title: "Set your service area",
                    text: "Choose where and when you work."
                  },
                  {
                    title: "Prepare for Launch",
                    text: "GConnect with customers when we launch."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex 
                          h-9 
                          w-9 
                          shrink-0 
                          items-center 
                          justify-center 
                          rounded-full 
                          bg-[#D8A44D] 
                          text-white 
                          text-sm 
                          font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#24423F]">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={"/provider"}>
              <button className="  
                    mt-10
                    rounded-full
                    bg-[#D8A44D]
                    px-7
                    py-3
                    text-sm
                    font-medium
                    text-white">
                Become a Provider
              </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-32">
        <p className="text-sm uppercase tracking-wider text-[#2B7A78]">
          WHY LOCOVO
        </p>
        <h2 className="text-5xl font-serif text-[#24423F] mt-4">
          A Better way to access wellness <br /> at home.
        </h2>
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white rounded-t-[100px] rounded-b-[20px] p-8 text-center shadow-sm border border-[#9DD7D2]">
            <img
              src="/handshake.svg"
              alt="Handshake"
              className="mx-auto w-12 h-12"
            />
            <h3 className="font-semibold text-gray-700">Convenient</h3>
            <p className="text-sm text-gray-500 mt-3">
              Book wellness services without leaving home.
            </p>
          </div>

          <div className="bg-white rounded-t-[100px] rounded-b-[20px] p-8 text-center shadow-sm border border-[#9DD7D2]">
            <img
              src="/background.svg"
              alt="Background"
              className="mx-auto w-15 h-15"
            />
            <h3 className="font-semibold text-gray-700">Trust-focused</h3>
            <p className="text-sm text-gray-500 mt-3">
              Verified professionals and transparent onboarding.
            </p>
          </div>

          <div className="bg-white rounded-t-[100px] rounded-b-[20px] p-8 text-center shadow-sm border border-[#9DD7D2]">
            <img
              src="/human.svg"
              alt="Human"
              className="mx-auto w-12 h-12"
            />
            <h3 className="font-semibold text-gray-700">Human & personal</h3>
            <p className="text-sm text-gray-500 mt-3">
              Designed around meaningful interactions.
            </p>
          </div>
          <div className="bg-white rounded-t-[100px] rounded-b-[20px] p-8 text-center shadow-sm border border-[#9DD7D2]">
            <img
              src="/Building.svg"
              alt="Building"
              className="mx-auto w-12 h-12"
            />
            <h3 className="font-semibold text-gray-700">Built for Canada</h3>
            <p className="text-sm text-gray-500 mt-3">
              Launching city-by-city across the country.
            </p>
          </div>
        </div>
      </section>


      <section className="relative max-w-7xl mx-auto py-32">
        <img
          src="/flower-left.svg"
          alt="Flower Left"
          className="absolute left-0 top-1/4 -translate-y-1/2 w-120 h-60"
        />
        <img
          src="/flower-right.svg"
          alt="Flower Right"
          className="absolute right-0 top-1/4 -translate-y-1/2 w-120 h-60"
        />
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#2B7A78]">
            Safety &  Verification

          </p>
          <h2 className="mt-4 text-5xl font-serif text-[#24423F] leading-tight">
            Safety and trust are built <br /> into the platform.
          </h2>
          <p className="mt-6 text-gray-600">
            Before launching the marketplace, we're building a verification <br /> first foundation for both customers and providers.
          </p>
        </div>

        <div className=" flex justify-center mt-8">
          <button className=
            "px-6 py-3 rounded-full bg-[#E8A04A] text-white font-medium hover:scale-105 transition" >
            Learn about Safety
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFF1DE] flex items-center justify-center">
              <img
                src="/man.svg"
                alt="Man"
                className="mx-auto w-12 h-12"
              />
            </div>

            <h3 className="font-semibold text-gray-500"> Professional background review</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E8F5F3] flex items-center justify-center">
              <img
                src="/Review.svg"
                alt="Review"
                className="mx-auto w-13 h-13"
              />
            </div>

            <h3 className="font-semibold text-gray-500"> Ratings & reviews after marketplace launch.</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E7EFE3] flex items-center justify-center">
              <img
                src="/certificate.svg"
                alt="Certificate"
                className="mx-auto w-12 h-12"
              />
            </div>

            <h3 className="font-semibold text-gray-500"> License $ Certifications checks</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFF1DE] flex items-center justify-center">
              <img
                src="/support.svg"
                alt="Support"
                className="mx-auto w-12 h-12"
              />
            </div>

            <h3 className="font-semibold text-gray-500"> Support $ Escalation processes</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E8F5F3] flex items-center justify-center">
              <img
                src="/verification.svg"
                alt="Verification"
                className="mx-auto w-12 h-12"
              />
            </div>

            <h3 className="font-semibold text-gray-500">Identity Verification </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E7EFE3] flex items-center justify-center">
              <img
                src="/insurance.svg"
                alt="Insurance"
                className="mx-auto w-12 h-12"
              />
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
                <p className="text-sm uppercase tracking-[0.2em] text-[#2B7A78]">
                  Launch Cities
                </p>
              </div>
              <h2 className="text-5xl lg:text-6xl font-serif leading-tight text-[#24423F] mt-4">
                Where should we launch <br /> first?
              </h2>

              <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
                Join early access and tell us which city you're located in.
                Your interest will help decide our first launch regions.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <div className="px-5 py-2 bg-white rounded-full text-[#24423F] font-medium transition-all duration-300 hover:bg-[#E8A04A] hover:text-white hover:-translate-y-1 cursor-pointer">
                  Toronto                        </div>
                <div className="px-5 py-2 bg-white rounded-full text-[#24423F] font-medium transition-all duration-300 hover:bg-[#E8A04A] hover:text-white hover:-translate-y-1 cursor-pointer">
                  Vancouver
                </div>
                <div className="px-5 py-2 bg-white rounded-full text-[#24423F] font-medium transition-all duration-300 hover:bg-[#E8A04A] hover:text-white hover:-translate-y-1 cursor-pointer">
                  Calgary
                </div>
                <div className="px-5 py-2 bg-white rounded-full text-[#24423F] font-medium transition-all duration-300 hover:bg-[#E8A04A] hover:text-white hover:-translate-y-1 cursor-pointer">
                  Ottawa
                </div>
                <div className="px-5 py-2 bg-white rounded-full text-[#24423F] font-medium transition-all duration-300 hover:bg-[#E8A04A] hover:text-white hover:-translate-y-1 cursor-pointer">
                  Montreal
                </div>
                <div className="px-5 py-2 bg-white rounded-full text-[#24423F] font-medium transition-all duration-300 hover:bg-[#E8A04A] hover:text-white hover:-translate-y-1 cursor-pointer">
                  Edmonton
                </div>
                <div className="px-5 py-2 bg-white rounded-full text-[#24423F] font-medium transition-all duration-300 hover:bg-[#E8A04A] hover:text-white hover:-translate-y-1 cursor-pointer">
                  + your city
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[32px] p-8 shadow-sm min-h-[450px]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#24423F] mb-2">
                    Province
                  </label>
                  <input
                    type="text"
                    placeholder="select your province"
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-[#FAF9F6] text-[#24423F] " />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#24423F] mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Toronto"
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-[#FAF9F6] text-[#24423F] " />

                </div>
                <div className="mt-5">
                  <label className="block text-sm font-medium text-[#24423F] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@gmail.com"
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-[#FAF9F6] text-[#24423F] " />
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-medium text-[#24423F] mb-2">
                    Service interest
                  </label>
                  <input
                    type="text"
                    placeholder="Choose a service"
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-[#FAF9F6] text-[#24423F] " />
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#2B7A78]" />
                  <p className="text-sm text-gray-600">
                    I agree to receive updates about launch, availability, and early access.
                  </p>
                </div>
              </div>
              <Link href={"/early-access"}>
                <button className="mt-10 bg-[#2A746A] text-white px-8 py-4 rounded-full">
                  Join Early Access
                </button>
              </Link>
              <h2 className="w-full px-4 py-4 text-gray-400">Free to join. No spam — just a launch notification for your city.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E8E3D8] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative">
              <div className="absolute -left-45 -top-16">
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
                  <img
                    src="/flower.svg"
                    alt="Flower"
                    className="absolute top-0 left-26 w-30" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-md ml-24 text-gray-700">
                {[
                  "Reach new customers",
                  "Build your professional profile",
                  "Work on a flexible schedule",
                  "Join before public launch",
                ].map((item) => (
                  <div key={item} className="bg-white rounded-2xl shadow-md p-5 text-center text-sm font-medium">
                    {item}
                  </div>
                ))}
                <div className="col-span-2 bg-white rounded-2xl shadow-md p-5 text-center text-sm font-medium">
                  Be part of a safety-first marketplace
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left max-w-md mx-auto">
              <p className="uppercase tracking-[0.25em] text-[#6E9C8D] text-xs mb-4">
                For Wellness Professionals
              </p>
              <h2 className="text-5xl font-serif text-[#23443E] mb-6">
                Are you a wellness professional?
              </h2>
              <p className="text-gray-500 mb-8">
                Join early and help shape a trusted at-home wellness
                marketplace in Canada.
              </p>
              <Link href={"/provider"}>
              <button className="bg-[#2F7C73] hover:bg-[#27675F] text-white px-8 py-4 rounded-full transition">
                Become an early provider
              </button></Link>
            </div>
          </div>
        </div>
      </section>



      <section className="py-24 mt-16"
        style={{
          backgroundImage: "url('/bg.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "33.33% auto",
        }}>
        <div className="absolute inset-0  pointer-events-none opacity-10" style={{ backgroundImage: "url('/leaf-top-left.svg')", backgroundRepeat: "repeat", backgroundSize: "250px", }} />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 ">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-[3px] bg-[#E8A04A] rounded-full"></div>
              <p className="uppercase tracking-[0.45em] text-[#8BA18E] text-xs mb-3">
                FAQ
              </p>
            </div>
            <h2 className="text-5xl font-serif text-[#23443E]">
              Questions, answered.
            </h2>
          </div>
          <div className="space-y-4">
            <details open className="bg-white rounded-2xl shadow-md p-6 group ">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="font-medium text-gray-700">
                  Is the platform live now?
                </h3>
                <span className="text-lg text-gray-700">x</span>
              </summary>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Not yet. This is an early access website to understand demand and prepare for launch.
              </p>
            </details>
            {[
              "Which cities will you launch in?",
              "Are providers verified?",
              "Can professionals apply now?",
              "Is joining early access free?",
            ].map((question) => (
              <details
                key={question}
                className="bg-white rounded-2xl shadow-md p-6 text-gray-500"
              >
                <summary className="cursor-pointer font-medium flex justify-between">
                  {question}
                  <span>+</span>
                </summary>
              </details>
            ))}
          </div>
        </div>
      </section>


      <section className="relative bg-[#F8F6F1] py-20 overflow-hidden rounded-t-3xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-[#23443E] leading-none">
            Wellness, your way.<br /> Coming soon.
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Personalized wellness services at home and
            exclusive experiences at premium destinations.
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-12">

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#E9F0E9] mx-auto mb-6 flex items-center justify-center">
                <img
                  src="/human-icon.svg"
                  alt=""
                />
              </div>
              <h3 className="font-semibold text-2xl text-[#23443E]">
                LOOKING FOR A <br /> WELLNESS SERVICE?
              </h3>
              <p className="text-gray-500 mt-4">
                Be the first to access personalized
                wellness services and exclusive offers.
              </p>
              <Link href={"/early-access"}>
                <button className="mt-10 bg-[#2A746A] text-white px-8 py-4 rounded-full">
                  Join Early Access
                </button>
              </Link>
              <p className="text-xs text-gray-400 mt-4">
                ✓ No spam. Just updates that matter.
              </p>
            </div>

            <div className="hidden lg:flex flex-col items-center">
              <div className="h-40 w-px bg-[#CFC8BC]" />

              <div className="w-10 h-10 rounded-full border bg-white flex items-center justify-center text-xs">
                OR
              </div>
              <div className="h-40 w-px bg-[#CFC8BC]" />
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#F8E9C9] mx-auto mb-6 flex items-center justify-center">
                <img
                  src="/suitcase.svg"
                  alt=""
                />
              </div>
              <h3 className="font-semibold text-2xl text-[#23443E]">
                LOOKING FOR A <br /> WELLNESS SERVICE?
              </h3>

              <p className="text-gray-500 mt-4">
                Be the first to access personalized
                wellness services and exclusive offers.
              </p>

              <Link href={"/provider"}><button className="mt-8 bg-[#D8A03B] text-white px-10 py-4 rounded-full">
                Become a provider
              </button></Link>

              <p className="text-xs text-gray-400 mt-4">
                ✓ Quick application. We'll be in touch.
              </p>
            </div>
          </div>
        </div>

        <Image
          src="/flower3.svg"
          alt=""
          width={180}
          height={180}
          className="absolute bottom-0 left-30 opacity-80" />
        <Image
          src="/leaf-left.svg"
          alt=""
          width={180}
          height={180}
          className="absolute bottom-0 right-320 opacity-80" />
        <Image
          src="/grass.svg"
          alt=""
          width={180}
          height={180}
          className="absolute bottom-0 left-10 opacity-100" />
        <Image src="/leaf-right.svg"
          alt=""
          width={220}
          height={220}
          className="absolute bottom-0 left-310 opacity-100" />
        <Image src="/grass-right.svg"
          alt=""
          width={190}
          height={120}
          className="absolute bottom-0 left-320 opacity-100" />

      </section>

      {/* Footer*/}
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
  )

}
