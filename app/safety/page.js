"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Safety() {
    return (

        <main className="min-h-screen bg-[#F9F7F2]">
            {/* Navbar */}
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
            <section className="py-24 bg-gradient-to-b bg-[#F2E4D0] via-[#F7F3EB] to-white">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h1 className="text-6xl font-serif text-[#143B35] leading-tight">
                        Built around safety, trust,
                        and professional standards.
                    </h1>

                    <p className="mt-6 text-gray-500 max-w-3xl mx-auto">
                        Trust is essential when services happen at home.
                        Our platform is being designed with verification
                        and safety principles from the beginning.
                    </p>

                </div>
            </section>
            <section className="py-16 bg-[#F6EBDD]">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-center text-5xl font-serif text-[#143B35] mb-12">
                        How trust is built on Locovo
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#E8F1EF] flex items-center justify-center mb-4">
                                <Image
                                    src="/verification.svg"
                                    alt="Identity"
                                    width={24}
                                    height={24}
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-[#143B35]">
                                Identity verification
                            </h3>

                            <div className="h-px bg-gray-200 my-4" />

                            <p className="text-sm text-gray-500">
                                Providers may be required to verify
                                their identity before approval.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#F8EBCF] flex items-center justify-center mb-4">
                                <Image
                                    src="/review.svg"
                                    alt="Review"
                                    width={24}
                                    height={24}
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-[#143B35]">
                                Professional Review
                            </h3>

                            <div className="h-px bg-gray-200 my-4" />

                            <p className="text-sm text-gray-500">
                                Relevant experience, certifications,
                                or licenses may be reviewed.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#E8F1EF] flex items-center justify-center mb-4">
                                <Image
                                    src="/insurance.svg"
                                    alt="Insurance"
                                    width={24}
                                    height={24}
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-[#143B35]">
                                Insurance Information
                            </h3>

                            <div className="h-px bg-gray-200 my-4" />

                            <p className="text-sm text-gray-500">
                                Where applicable, providers may be
                                asked to share insurance details.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#E8F1EF] flex items-center justify-center mb-4">
                                <Image
                                    src="/human.svg"
                                    alt="Safety"
                                    width={24}
                                    height={24}
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-[#143B35]">
                                Customer Safety
                            </h3>

                            <div className="h-px bg-gray-200 my-4" />

                            <p className="text-sm text-gray-500">
                                Features may include support,
                                reporting, and safety resources.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#F8EBCF] flex items-center justify-center mb-4">
                                <Image
                                    src="/Review.svg"
                                    alt="Ratings"
                                    width={24}
                                    height={24}
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-[#143B35]">
                                Ratings & Reviews
                            </h3>

                            <div className="h-px bg-gray-200 my-4" />

                            <p className="text-sm text-gray-500">
                                Customer feedback helps maintain
                                service quality after launch.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#E8F1EF] flex items-center justify-center mb-4">
                                <Image
                                    src="/support.svg"
                                    alt="Support"
                                    width={24}
                                    height={24}
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-[#143B35]">
                                Support & Reporting
                            </h3>

                            <div className="h-px bg-gray-200 my-4" />

                            <p className="text-sm text-gray-500">
                                Clear communication and reporting
                                pathways help build trust.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[#E7EFE3] py-20 mt-10">
                <div className="absolute -right-20 bottom-3 pointer-events-none">
                    {/* Bottom Right Decoration */}
                    <div className="absolute bottom-0 right-0 pointer-events-none overflow-hidden">

                        {/* Outer Green Arc */}
                        <div className="absolute bottom-0 right-0 w-[180px] h-[180px]">
                            <div className="absolute inset-0 rounded-tl-full border-l-[14px] border-t-[14px] border-[#A6B88C]" />
                        </div>

                        {/* Inner Peach Arc */}
                        <div className="absolute bottom-0 right-[14px] w-[145px] h-[145px]">
                            <div className="absolute inset-0 rounded-tl-full border-l-[10px] border-t-[10px] border-[#E9C8B5]" />
                        </div>

                        {/* Flower */}
                        <Image
                            src="/flower.svg"
                            alt=""
                            width={80}
                            height={80}
                            className="absolute bottom-2 right-2 z-10"
                        />
                    </div>

                </div>
                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-5xl font-serif text-[#143B35]">
                        Designed for both customers
                        and professionals
                    </h2>

                    <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
                        Locovo is building a trusted at-home wellness
                        experience through verification, clear standards,
                        and safer booking expectations for everyone.
                    </p>

                </div>
            </section>
            <section className="relative py-24 overflow-hidden bg-[#F9F7F2]">

                {/* Background Pattern */}
                <div className="absolute inset-0 grid grid-cols-5 grid-rows-2 opacity-100 pointer-events-none">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="flex items-center justify-center" >
                            <Image
                                src="/bg2.svg"
                                alt=""
                                width={600}
                                height={300}
                            />
                        </div>
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">

                    {/* Top Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">

                        {[
                            "Reviewed providers",
                            "Service-category checks",
                            "Safer launch standards",
                            "Transparent expectations",
                        ].map((item) => (
                            <div
                                key={item}
                                className=" bg-white  px-6  py-3 rounded-xl  border border-gray-100 shadow-sm  hover:-translate-y-1  hover:shadow-md  transition-all duration-300"
                            >
                                <span className="text-sm text-[#143B35] font-medium">
                                    {item}
                                </span>
                            </div>
                        ))}

                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">

                        {/* Left Side */}
                        <div className="lg:translate-y-4 bg-[#FBF8F3] rounded-2xl  ">

                            <h2 className="text-5xl font-serif text-[#143B35] leading-tight ">
                                Safety questions,
                                <br />
                                answered.
                            </h2>

                            <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
                                Here are some of the most common questions
                                about how we're building trust and safety
                                on Locovo.
                            </p>

                        </div>

                        {/* Right Side FAQ */}
                        <div className="space-y-4">

                            {[
                                "How are providers reviewed on Locovo?",
                                "Will all professionals be verified before launch?",
                                "What safety measures are planned for customers?",
                                "Do providers need licences or insurance?",
                                "How will ratings and reporting work?",
                            ].map((question) => (
                                <details
                                    key={question}
                                    className="  bg-white  rounded-2xl  border border-gray-100 shadow-sm overflow-hidden group "
                                >
                                    <summary
                                        className=" flex items-center justify-between cursor-pointer list-none px-6 py-5 "
                                    >
                                        <span className="font-medium text-[#143B35]">
                                            {question}
                                        </span>

                                        <div
                                            className="  w-8  h-8  rounded-full bg-[#E7EFE3]  flex items-center justify-center text-[#143B35] group-open:rotate-45 transition "
                                        >
                                            +
                                        </div>
                                    </summary>

                                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                                        We are designing platform policies and
                                        onboarding processes to help create a
                                        trusted experience for customers and
                                        professionals.
                                    </div>

                                </details>
                            ))}

                        </div>

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
                                </button></Link>

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