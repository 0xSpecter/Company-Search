"use client"
import { motion } from "motion/react"
import { useRouter } from "next/navigation"

export default function HollowButton({ onClick = () => {}, children = "", redirect = null }) {
    const router = useRouter()

    return (
        <motion.button className="rounded-full border border-pri bg-transparent w-fit text-fg px-5 py-2 text-xl"
            onClick={() => redirect ? router.push(redirect) : onClick()} 
        >
            {children}
        </motion.button> 
    )
}
