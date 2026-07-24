"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/services", label: "Services" },
    { href: "/customers", label: "For Customers" },
    { href: "/professional", label: "For Professionals" },
];

export default function About() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#F7F3EB] via-[#FCF8F2] to-[#FCF8F2]">

            {/*NAVBAR */}

            <motion.nav
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .6 }}
                className="sticky top-4 z-50 mx-auto mt-4 w-[95%] max-w-7xl rounded-full bg-white shadow-md"
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
                                className="text-sm font-medium text-[#24423F] transition hover:text-[#2B7A78]"
                            >
                                {link.label}
                            </Link>
                        ))}

                    </div>

                    {/* Desktop Buttons */}

                    <div className="hidden lg:flex items-center gap-4">

                        <Link href="/customer">
                            <button className="rounded-full bg-[#2B7A78] px-6 py-3 text-sm text-white transition hover:scale-105">
                                Join Waitlist
                            </button>
                        </Link>

                        <Link href="/professional">
                            <button className="rounded-full bg-[#D8A44D] px-6 py-3 text-sm text-white transition hover:scale-105">
                                Become a Provider
                            </button>
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-[#24423F]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    menuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />

                        </svg>

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
                                    className="text-[#24423F]"
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


            <section className="bg-gradient-to-b from-[#F7F3EB] via-[#FCF8F2] to-[#FCF8F2]">

                <div className="mx-auto max-w-7xl px-5 sm:px-8">

                    <div className="mx-auto max-w-4xl text-center">

                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7 }}
                            className="font-serif text-4xl leading-tight text-[#143B35]
              sm:text-5xl lg:text-6xl xl:text-7xl"
                        >

                            Making trusted wellness
                            <br />
                            more accessible at home.

                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: .2 }}
                            className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg"
                        >

                            We are building a Canada-focused wellness marketplace
                            that connects people with trusted professionals for
                            convenient at-home wellness services.

                        </motion.p>

                    </div>

                </div>
            </section>

            {/* MISSION  */}

            <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F3EB]">

                <div className="mx-auto max-w-6xl px-5 sm:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                        <div className="absolute left-0 top-8 h-16 w-1 rounded-full bg-[#D8A44D]" />
                        <h2 className="ml-4 text-3xl font-serif text-[#143B35] sm:text-4xl lg:text-5xl">
                            Our Mission
                        </h2>
                        <p className="mt-6 ml-4 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
                            To make wellness services
                            <span className="font-semibold text-[#2B7A78]">
                                {" "}easier
                            </span>
                            ,
                            <span className="font-semibold text-[#2B7A78]">
                                {" "}safer
                            </span>
                            ,
                            and
                            <span className="font-semibold text-[#2B7A78]">
                                {" "}more convenient
                            </span>

                            {" "}by connecting customers with verified professionals
                            in their region.

                        </p>

                    </motion.div>

                </div>

            </section>
            {/* WHY WE EXIST */}

            <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">

                <div className="mx-auto max-w-7xl px-5 sm:px-8">

                    {/* Decorative Flowers */}

                    <Image
                        src="/flower-left.svg"
                        alt=""
                        width={170}
                        height={170}
                        className="absolute left-0 top-1/2 hidden -translate-y-1/2 xl:block"
                    />

                    <Image
                        src="/flower-right.svg"
                        alt=""
                        width={170}
                        height={170}
                        className="absolute right-0 top-1/2 hidden -translate-y-1/2 xl:block"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                        className="mx-auto max-w-4xl text-center"
                    >

                        <h2 className="font-serif text-4xl text-[#143B35] sm:text-5xl lg:text-6xl">
                            Why We Exist
                        </h2>

                        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
                            Finding trusted wellness professionals for at-home services
                            can be difficult, fragmented, and time-consuming.
                            Our goal is to simplify that experience while helping
                            professionals reach more customers and grow confidently.
                        </p>

                    </motion.div>

                </div>

            </section>

            {/* ================= VISION ================= */}

            <section className="pb-20 lg:pb-28">

                <div className="mx-auto max-w-6xl px-5 sm:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                        className="relative overflow-hidden rounded-3xl border border-[#D7E5E7] bg-[#EAF4F5] p-6 sm:p-8 lg:p-12"
                    >

                        <div className="absolute right-0 top-10 h-20 w-1 rounded-full bg-[#2F8A82]" />

                        <h2 className="text-center font-serif text-3xl text-[#143B35] sm:text-4xl lg:text-right lg:text-5xl">
                            Our Vision
                        </h2>

                        <p className="mx-auto mt-8 max-w-4xl text-center text-base leading-8 text-gray-600 sm:text-lg">

                            To become a

                            <span className="font-semibold text-[#D8A44D]">
                                {" "}trusted wellness marketplace{" "}
                            </span>

                            where customers feel

                            <span className="font-semibold text-[#D8A44D]">
                                {" "}safe booking services{" "}
                            </span>

                            and professionals can

                            <span className="font-semibold text-[#D8A44D]">
                                {" "}grow with confidence.
                            </span>

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* ================= CTA ================= */}

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