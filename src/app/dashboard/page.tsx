"use client"
// import { motion } from "motion/react";
import useSession from "@/hooks/useSession";
import Sidepanal from "@/components/dashboard/sidepanal";
import H from "@/components/h";
import Filters from "@/components/dashboard/filters";
import Button from "@/components/button";
import { useEffect, useState } from "react";
import { createRequest } from "@/firebase/store";



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
                            <Button onClick={() => {
                                    createRequest(filters)
                                    setProgress("loading")
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

                    </>
                : progress == "element" &&
                    <>

                    </>
                }
            </div>
        </div>
    );
}
