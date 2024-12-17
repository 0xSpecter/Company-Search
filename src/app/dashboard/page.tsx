"use client"
// import { motion } from "motion/react";
import useSession from "@/hooks/useSession";
import Sidepanal from "@/components/dashboard/sidepanal";
import Filters from "@/components/dashboard/filters";
import Button from "@/components/button";
import { useState } from "react";



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
            tiktoc: false 
        },
        nettside: true
    })


    return (
        <div className="flex flex-row h-screen w-screen overflow-hidden">
            <Sidepanal progress={progress} />

            <div className="flex items-center justify-center w-full h-full">
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
                    </>
                : progress == "loading"
                ?
                    <>

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
