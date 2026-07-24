"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useState } from "react";
const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/services", label: "Services" },
    { href: "/customers", label: "For Customers" },
    { href: "/professional", label: "For Professionals" },
];
export default function Safety() {
    const sectionRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false);
    const [openFAQ, setOpenFAQ] = useState(0);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const flowerX = useTransform(scrollYProgress, [0, 0.5], [300, 0]);
    const flowerRotate = useTransform(scrollYProgress, [0, 0.5], [-360, 0]);
    const flowerOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1,]);
    return (

        <main className="min-h-screen bg-gradient-to-b from-[#F7F3EB] via-[#FCF8F2] to-[#FCF8F2] ">
            {/* Navbar */}
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
            <section className="py-24 bg-gradient-to-b bg-[#F2E4D0]  to-[#F7F3EB]">
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

            <section className="py-16 ">
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

            <section ref={sectionRef} className="relative overflow-hidden bg-[#F9F8E4] py-20 mt-10">

                {/* Bottom Right Decoration */}
                <div className="pointer-events-none absolute right-0 top-10 hidden lg:block">
                    <div className="relative h-60 w-44">

                        {/* Curves */}
                        <Image
                            src="/Curves2.svg"
                            alt=""
                            width={180}
                            height={240}
                            className="absolute inset-0 h-full w-full object-contain"
                        />

                        {/* Flower */}
                        <motion.img
                            src="/flower.svg"
                            alt=""
                            style={{
                                x: flowerX,
                                rotate: flowerRotate,
                                opacity: flowerOpacity,
                            }}
                            className="absolute bottom-5 left-5 h-24 w-24"
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
                <div className="absolute inset-0 grid grid-cols-5 grid-rows-2 opacity-30 pointer-events-none">
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
                            {
                                text: "Reviewed providers",
                                icon: "/Approve2.svg",
                            },
                            {
                                text: "Service-category checks",
                                icon: "/handshake3.svg",
                            },
                            {
                                text: "Safer launch standards",
                                icon: "/shield2.svg",
                            },
                            {
                                text: "Transparent expectations",
                                icon: "/star.svg",
                            },
                        ].map((item) => (
                            <div
                                key={item.text}
                                className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
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