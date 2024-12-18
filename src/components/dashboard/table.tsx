"use client"
import H from "../h"
import { motion } from "motion/react"

function Title({ width = "w-[20%]", children = "" }) {
    return (
        <span className={"h-full pl-5 flex flex-row items-center justify-start gap-2" + " " + width}>
            {children}
            <img src="/arrow.svg" alt="|" className="w-5 h-5"/>
        </span>
    )
}

export default function Table({ table, setInfopoint }) {
    return (
        <div className="w-full h-full flex flex-col pl-20 pt-20 pr-20">
            <H>
                Vi Fant {table && table.data.length} bedrifter!
            </H>
            <span className="ml-1 mt-4">
                Vi Fant {table && table.data.length} bedrifter som er i {table && table.industry}
            </span>
            <div className="w-full h-10 flex flex-row mt-10 text-xl font-semibold">
                <Title width="w-[20%]">
                    Bedrift
                </Title>
                <Title width="w-[15%]">
                    Nettside
                </Title>
                <Title width="w-[25%]">
                    Sosial Medier
                </Title>
                <Title width="w-[20%]">
                    Industri
                </Title>
                <Title width="w-[20%]">
                    Ansatte
                </Title>
            </div>
            <motion.div className="w-full h-full overflow-y-scroll flex flex-col gap-4 items-center justify-start pr-5"
                variants={{
                    hidden: { opacity: 1 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                initial="hidden"
                animate="show"
            >
                { table.data &&
                    table.data.map((point, i) => {
                        return (
                            <motion.div className="w-full h-14 p-2 border-2 border-ter/60 flex flex-row gap-5 rounded-2xl "
                                key={`${i} like icecream`}
                                variants={{
                                    hidden: { 
                                        opacity: 0,
                                        y: -30,
                                    },
                                    show: { 
                                        opacity: 1,
                                        y: 0
                                    }
                                }}           
                            >
                                <button className="w-[20%] h-full flex items-center truncate text-xl pl-[3px]"
                                    onClick={() => setInfopoint(point)}
                                >
                                    {point.name}
                                </button> 
                                { point.website ?
                                    <a className="w-[15%] h-full rounded-md bg-green-400 flex justify-center text-fg text-xl items-center"
                                        href={point.website}
                                        target="_blank"
                                    >
                                        Ja
                                    </a>
                                :
                                    <span className="w-[15%] h-full rounded-md bg-red-400 flex justify-center text-fg text-xl items-center">
                                        Nei
                                    </span>
                                }
                                <div className="flex flex-row items-center justify-center gap-5 w-[25%] h-full">
                                    { point.social_media &&
                                        Object.keys(point.social_media).map((item, i) => {
                                            return (
                                                <motion.a href={point.social_media[item]} key={`${i} collect taxes`}
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
                                <span className="rounded-md w-[20%] h-full text-start truncate overflow-ellipsis flex items-center px-2">
                                    {point.industry}
                                </span>
                                <span className="w-[20%] flex items-center justify-center h-full">
                                    {point.employees ? point.employees : "Not accesible"}
                                </span>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </div>

    )
}
