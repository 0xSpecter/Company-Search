"use client"
import H from "../h"
import HollowButton from "../hollowButton"
import { motion } from "motion/react"

export default function Info({ point, goBack }) {
    return (
        <div className="relative h-full w-full px-24 pt-32 pb-20 flex flex-col">
            <H>
                {point.name}
            </H>
            
            <span className="mt-3 text-xl text-fg/70">
                {point.industry}
            </span>

            <div className="flex flex-row w-fit h-fit gap-10 mt-40 pl-3">
                <div className="flex flex-col text-fg text-xl gap-8">
                    <h2 className="text-sec text-2xl font-semibold">
                        Generell informasjon
                    </h2>
                    <span className="pl-4">
                        {point.employees} - Ansatte
                    </span>
                    <span className="pl-4">
                        {point.hasCookies ? "Har cookies" : "Har ikke cookies"}
                    </span>
                    <span className="pl-4">
                        {point.description}
                    </span>
                </div>
                <div className="flex flex-col text-fg text-xl gap-8">
                    <h2 className="text-sec text-2xl font-semibold">
                        Kontakt informasjon
                    </h2>
                    <span className="pl-4">
                        Email: {point.email}
                    </span>
                    <span className="pl-4">
                        Tlf: {point.mobile}
                    </span>
                    <a className="pl-4 text-ter transition-all hover:scale-105" href={point.website}>
                        Nettside: {point.website}
                    </a>
                    <div className="flex flex-row items-center justify-center gap-5">
                        { point.social_media &&
                            Object.keys(point.social_media).map((item, i) => {
                                return (
                                    <motion.a href={point.social_media[item]} key={`${i} collect magazines`}
                                        target="_blank"
                                        whileHover={{
                                            scale: 1.03
                                        }}
                                    >
                                        <img src={`/${item}.svg`} alt={item}  className="w-7 h-7"/>
                                    </motion.a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <HollowButton onClick={() => goBack()}>
                Tilbake
            </HollowButton>
        </div>
    )
}
