"use client"
import { motion } from "motion/react"

export default function Input({ value, setter, children = "", type = "text" }) {

    return (
        <motion.input className="min-w-5 appearance-none border bg-transparent rounded-xl border-pri focus:outline-none text-fg py-2 px-4 text-lg font-semibold placeholder:text-fg/60" 
            type={type}
            value={value}
            onChange={event => setter(event.target.value)}
            placeholder={children}
        />
    )
}
