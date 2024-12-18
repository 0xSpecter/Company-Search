"use client"
// import { motion } from "motion/react";
import useSession from "@/hooks/useSession";
import Sidepanal from "@/components/dashboard/sidepanal";
import H from "@/components/h";
import Filters from "@/components/dashboard/filters";
import Button from "@/components/button";
import { useEffect, useState } from "react";
import { createRequest, getRequest } from "@/firebase/store";
import Table from "@/components/dashboard/table";



export default function Home() {
    useSession(true, "/")
    const [progress, setProgress] = useState("start")
    const [filters, setFilters] = useState({
        industri: "",
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
                                <img src="/check.svg" alt="" className="w-6 h-6 mr-3"/> Godkjenn og søk
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
                        <Table table={table} />
                    </>
                : progress == "element" &&
                    <>

                    </>
                }
            </div>
        </div>
    );
}
