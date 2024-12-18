"use client"
import { motion } from "motion/react"
import { useRouter } from "next/navigation"

export default function Button({ onClick = () => {}, children, redirect = null, className = "" }) {
    const router = useRouter()

    return (
        <motion.button className={"rounded-full bg-pri text-fg px-5 py-2 w-fit text-xl flex flex-row items-center" + " " + className}
            onClick={() => redirect ? router.push(redirect) : onClick()} 

            whileHover={{
                scale: 1.05
            }}
        >
            {children}
        </motion.button> 
    )
}
