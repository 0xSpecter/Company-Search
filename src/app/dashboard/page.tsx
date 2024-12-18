"use client"
// import { motion } from "motion/react";
import useSession from "@/hooks/useSession";
import Sidepanal from "@/components/dashboard/sidepanal";
import H from "@/components/h";
import Filters from "@/components/dashboard/filters";
import Button from "@/components/button";
import { useEffect, useState } from "react";
import { createRequest, getRequest } from "@/firebase/store";



export default function Home() {
    useSession(true, "/")
    const [progress, setProgress] = useState("start")
    const [filters, setFilters] = useState({
        industri: "fuck",
        antall_ansatte: [0, 1000],
        SoMe: {
            instagram: false,
            facebook: false,
            linkedin: false,
            tiktok: false 
        },
        nettside: true,
        ignore: {
            industri: false,
            antall_ansatte: false,
            SoMe: false,
            nettside: false
        }
    })

    useEffect(() => {
        if (typeof window != "undefined") {
            window.location.href = `/dashboard#${progress}`
        }
    }, [progress])


    const [table, setTable] = useState(null)

    useEffect(() => {
        if (table != null) {
            console.log(table)
            setProgress("table")
        } 
    }, [table])

    return (
        <div className="flex flex-row h-screen w-screen overflow-hidden">
            <Sidepanal progress={progress} />

            <div className="flex flex-col items-center justify-center w-[calc(100%-80px)] h-full">
                { progress == "start" 
                ? 
                    <>
                        <Button onClick={() => setProgress("filters")}>
                            Start!
                        </Button>                        
                    </>
                : progress == "filters" 
                ?
                    <>
                        <Filters filters={filters} setFilters={setFilters} />          
                        <div className="h-40 w-full pl-32">
                            <Button onClick={async () => {
                                    setProgress("loading")
                                    const id = await createRequest(filters)
                                    getRequest(id)
                                        .then(data => setTable(data))
                                }}
                            >
                                Godkjenn og søk
                            </Button>
                        </div>
                    </>
                : progress == "loading"
                ?
                    <>
                        <div className="flex flex-col items-center justify-center gap-10">
                            <H>
                                Laster Inn ...
                            </H>
                            <Button onClick={() => setProgress("filters")}>
                                Avslutt søk tidlig
                            </Button>
                        </div>
                    </>
                : progress == "table"
                ? 
                    <>
                        <div className="w-full h-full flex flex-col pl-20 pt-20 pr-20">
                            <H>
                                Vi Fant {table.data.length} bedrifter!
                            </H>
                            <span className="ml-1 mt-4">
                                Vi Fant {table.data.length} bedrifter som er i {table.industry}
                            </span>
                            <div className="w-full h-full overflow-y-scroll flex flex-col gap-1 items-center justify-start pr-5 mt-10">
                            { table.data &&
                                table.data.map((point, i) => {
                                    return (
                                        <div className="w-full h-14 p-1 border border-fg/60 flex flex-row gap-5"
                                            key={`${i} like icecream`}
                                        >
                                            <span className="w-[20%] h-full truncate pt-[2px] pl-[3px]">
                                                {point.name}
                                            </span> 
                                            <button className="w-[15%] h-full rounded-md bg-green-400">
                                                ja
                                            </button>
                                            <div className="flex flex-row items-center justify-around w-[25%] h-full border border-fg/80 rounded-md">
                                                map SoMe profiler
                                            </div>
                                            <span className="border border-fg/80 rounded-md text-center w-[20%] h-full">
                                                {point.industry}
                                            </span>
                                            <span className="w-[20%] text-center h-full">
                                                {point.employees ? point.employees : "Not accesible"}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </>
                : progress == "element" &&
                    <>

                    </>
                }
            </div>
        </div>
    );
}
