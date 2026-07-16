"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {useRef } from "react";
import Image from "next/image";
import {
  Hand,
  Scissors,
  Sparkles,
  HeartHandshake,
  Flower,
  Flower2,
  Activity,
} from "lucide-react";
export default function Home() {
  const serviceRef = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: serviceRef,
      offset: ["start end", "end start"],
    }
  );
  const flowerX = useTransform(scrollYProgress,  [0, 0.35, 0.8, 1], [300, 0, 0, 300]);
  const flowerRotate = useTransform(scrollYProgress, [0, 0.35, 0.8, 1], [-360, 0, 0, 360]);
  const flowerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  
    return (
        <main className="min-h-screen bg-[#F9F7F2] p-4 md:p-8">
            {/*Navbar */}
            <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-7xl bg-white rounded-full px-8 py-4 shadow-sm flex items-center justify-between">

                
                <div className="text-2xl font-bold text-[#2B7A78]">
                    LOCOVO
                </div>
                <div className="hidden lg:flex gap-8 text-sm text-gray-700">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">How it works</a>
                    <a href="#">Services</a>
                    <a href="#">For Customers</a>
                    <a href="#">For Professionals</a>
                </div>

                <div className="hidden lg:flex gap-4">
                    <button className="px-5 py-2 rounded-full bg-[#2B7A78] text-white text-sm">
                        Join the waitlist
                    </button>
                    <button className="px-5 py-2 rounded-full bg-[#D8A44D] text-white text-sm">
                        Become a provider
                    </button>
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
                            Trusted at-home
                            <br />
                            wellness, delivered
                            <br />
                            by{" "}
                            <span className="italic text-[#2B7A78]">verified</span>
                            <br />
                            professionals.
                        </h1>
                        <p className="mt-6 text-gray-600 max-w-xl">
                            Book massage, beauty, skincare, nails,
                            hair styling and more from trusted
                            professionals—conveniently delivered
                            to your home.
                        </p>  
                        <div className="flex flex-wrap gap-4 mt-10">
                             <button className="px-7 py-3 rounded-full bg-[#2B7A78] text-white font-medium"> Join early access   </button>
                             <button className="px-7 py-3 rounded-full bg-[#D8A44D] text-white font-medium"> Become a provider   </button>
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
                            src ="illustration.svg"
                            alt="Illustration"
                            fill
                            className="object-containp-6"
                            priority
                            />
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
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                          duration: 0.5,
                          delay: index * 0.15,
                          }}
                          whileHover={{ y: -5 }}
                          className="rounded-2xl border border-[#E8E2D8] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        
                          <p className="text-center text-base font-medium leading-6 text-gray-900">
                              {item}
                          </p>
                        </motion.div>
                    
                    ))}

                </div>
            </section>

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
                    title:"Massage Therapy",
                    text:"Relaxation, recovery, and wellness-focused massage services at home.",
                    color: "#2B7A78",
                    icon: <Hand size={40} className="text-[#2B7A78]" strokeWidth={1.5} />,
                  },
                  {
                    title:"Beauty Services",
                    text:"Personal care and beauty treatments delivered with convenience.",
                    color: "#D89B32",
                    icon: <Sparkles size={40} className="text-[#D89B32]" strokeWidth={1.5} />,
                  },
                  {
                    title:"Hair Styling",
                    text:"At-home styling support for everyday needs and special occasions.",
                    color: "#A8B88A",
                    icon: <Scissors size={40} className="text-[#A8B88A]" strokeWidth={1.5} />,
                  },
                  {
                    title:"Skincare",
                    text:"Personalized skincare and facial wellness services.",
                    color: "#8A9B7A",
                    icon: <Flower2 size={40} className="text-[#8A9B7A]" strokeWidth={1.5} />,
                  },
                  {
                    title:"Nails",
                    text:"Convenient nail care services from experienced professionals.",
                    color: "#C4A78A",
                    icon: <HeartHandshake size={40} className="text-[#C4A78A]" strokeWidth={1.5} />,
                  },
                  {
                    title:"Future Services",
                    text:"Physiotherapy, chiropractic, yoga, personal training and more.",
                    color: "#9A8B7A",
                    icon: <Activity size={40} className="text-[#9A8B7A]" strokeWidth={1.5} />,
                  },
                ].map((service,index)=>(
                   <motion.div
                   key={index}
                   whileHover={{y:-5}}
                   className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                   >
                    <div className="w-10 h-1 rounded-full bg-[#2B7A78] mb-6"/>
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
              className="absolute right-30 top-40">
              < Flower size={80} strokeWidth={1.5}  className="text-[#E8A04A]"/>

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
                          title:"Explore Services",
                          text:"Browse massage, beauty, skincare, nails and more."
                        },
                        {
                          title:"Tell us what you need",
                          text:"Share your city and preferred wellness services."
                        },
                        {
                          title:"Get launch updates",
                          text:"Receive updates when providers become available."
                        },
                        {
                          title:"Book with confidence",
                          text:"Connect with verified professionals."
                        }
                      ].map((step,index)=>(
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
                            {index+1}
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
                    <button className="  
                      mt-10
                      rounded-full
                      bg-[#2B7A78]
                      px-7
                      py-3
                      text-sm
                      font-medium
                      text-white">
                        Join Early Access
                    </button>
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
                          title:"Apply as a provider",
                          text:"Share your services and professional background."
                        },
                        {
                          title:"Complete verification",
                          text:"Submit your information for review."
                        },
                        {
                          title:"Set your service area",
                          text:"Choose where and when you work."
                        },
                        {
                          title:"Prepare for Launch",
                          text:"GConnect with customers when we launch."
                        }
                      ].map((step,index)=>(
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
                            {index+1}
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
                  </motion.div>
                </div>
              </div>
            </section>
        </main>
    );
}
