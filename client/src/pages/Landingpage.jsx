//import { LampDemo, LampContainer } from "../components/Lamp-header"
import { motion } from "framer-motion"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { GlassmorphismCard } from "../components/Glassmorphism-card"
import { LayoutGrid } from "../components/LayoutGrid"
import { ContainerScroll } from "../components/Container-Scroll-animation"
import { LampContainer } from "../components/Lamp-header"
import  SignupFormDemo  from "./Signup"
import  SignInFormDemo  from "./Signin"

export const Landingpage = () => {
    return (
        <div className="bg-slate-950 w-full">
            <Navbar />
            <Header />
            
            <div className="flex flex-col items-center overflow-hidden m-0 p-0">
                <ContainerScroll/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="max-w-lg">
                    <div className="text-center text-5xl font-medium tracking-tight text-transparent md:text-6xl max-w-2xl mb-0">
                        <span className="text-white">Unlike any tool </span><span className="text-white py-4 bg-clip-text">you've used before</span>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-slate-300 mt-8 text-2xl text-center">Designed to the last pixel and engineered</p>
                        <p className="text-slate-300 text-2xl text-center">with unforgiving precision, Linear combines</p>
                        <p className="text-slate-300 text-2xl text-center">UI elegance with world-class performance.</p>
                    </div>
                </div>
            </div>
            <LayoutGrid />

            <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden z-0 mt-32">
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                        }}
                        className="w-full bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center tracking-tight text-transparent"
                    >
                        {/* <div className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl">
                            Build lamps <br /> the right way
                        </div> */}
                        <div className="flex justify-center m-0 p-0">
                            <GlassmorphismCard />
                        </div>
                    </motion.h1>
                </LampContainer>

                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                        }}
                        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                    >
                        Build lamps <br /> the right way
                    </motion.h1>
                </LampContainer>
            </div>
            <SignupFormDemo />
            <SignInFormDemo/>
            <Footer />
        </div>
        
    )
}