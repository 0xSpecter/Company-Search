import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"

function Progress_point({ selected, src = "/vercel.svg" }) {
    return (
        <>
            <div className="flex items-center justify-center relative">
                <img src={src} alt="lmao" className="w-16 h-16 z-20" />
                <AnimatePresence>
                    {selected && 
                        <motion.div className="absolute w-32 h-20 bg-sec z-10 rounded-2xl"
                            initial={{
                                x: -130
                            }}
                            animate={{
                                x: -5
                            }}
                            exit={{
                                x: -130
                            }}
                        />
                    }
                </AnimatePresence>
            </div>

            
        </>
    )
}

export default function Sidepanal({ progress }) {
    return (
        <div className="flex flex-col items-center justify-center gap-20 w-20 h-full bg-pri">
            <Progress_point selected={progress == "start"}/>
            <Progress_point selected={progress == "filters"}/>
            <Progress_point selected={progress == "loading"}/>
        </div>
    )
}
