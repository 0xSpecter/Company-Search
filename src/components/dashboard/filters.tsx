import H from "../h"
import Input from "../input"
import { motion } from "motion/react"

function Filter({ ignore, toggle, children, title = "Select Someting" }) {

    return (
        <motion.div className="bg-bg shadow-2xl rounded-xl min-h-[400px] min-w-80 flex flex-col items-center justify-between p-2"
            animate={ignore ? {
                background: "#ddd"
            } : {
                background: "#eee"
            }}
        >
            <h2 className="text-sec text-2xl">
                {title}
            </h2>
            <>
                {children}
            </>
            <motion.button className="bg-red-400 rounded-xl text-xl px-2 py-1"
                onClick={toggle}
                animate={ignore ? {
                    background: "#10ffaa"
                } : {
                    background: "#f66"
                }}
            >
                {ignore ? "Bruk" : "Ignorer"}
            </motion.button>
        </motion.div>
    )
}

function Choice({ selected, img_src = "/vercel.svg", children = "", toggle = () => {} }) {
    return (
        <motion.button className="h-14 w-full rounded-xl border border-sec/30 flex flex-row items-center justify-between p-2"
            onClick={toggle} 
            animate={selected ? {
                background: "#DAB8FF"
            } : {
                background: "#DAB8FF00"
            }}
        >
            <img src={img_src} alt="logo" className="h-full w-fit mr-5"/> 
            <span className="w-full text-start text-xl text-fg">
                {children}
            </span>
            <div className="w-20 h-full">
                { selected &&
                    <img src="/vercel.svg" alt="logo" className="h-full w-fit"/> 
                }
            </div>
        </motion.button>
    )
}

export default function Filters({ filters, setFilters }) {

    function toggle(section : string, key : string) {
        setFilters(pv => {
            return {
                ...pv,
                [section]: {
                    ...pv[section],
                    [key]: !pv[section][key]
                }
            }
        })
    }

    return (
        <div className="w-full h-full flex flex-col justify-center gap-10 p-20">
            <H>
                Hva ønsker du å søke etter?
            </H>
            <div className="mt-5 w-full h-fit overflow-scrol flex flex-col lg:flex-row items-center justify-start gap-5">
                <Filter title="Industri" ignore={filters.ignore["industri"]} toggle={() => toggle("ignore", "industri")}>
                    <Input value={filters.industri} setter={(v : string) => setFilters((pv : object) => {return{...pv, industri: v}})} />
                </Filter>

                <Filter title="Antall Ansatte" ignore={filters.ignore["antall_ansatte"]} toggle={() => toggle("ignore", "antall_ansatte")}>
                    <div className="flex flex-row items-center w-60 gap-4 justify-around">
                        <Input type="number" value={filters.antall_ansatte[0]} setter={(v : number) => setFilters((pv : object) => {return{...pv, antall_ansatte: [v, pv["antall_ansatte"][1]]}})} />
                        <span className="w-4 h-1 bg-pri" />
                        <Input type="number" value={filters.antall_ansatte[1]} setter={(v : number) => setFilters((pv : object) => {return{...pv, antall_ansatte: [pv["antall_ansatte"][0], v]}})} />
                    </div>
                </Filter>

                <Filter title="SoMe Profiler" ignore={filters.ignore["SoMe"]} toggle={() => toggle("ignore", "SoMe")}>
                    <div className="flex flex-col items-center justify-center p-2 w-full h-full gap-3">
                        <Choice selected={filters.SoMe["instagram"]} toggle={() => toggle("SoMe", "instagram")}>
                            Instagram
                        </Choice>
                        <Choice selected={filters.SoMe["facebook"]} toggle={() => toggle("SoMe", "facebook")}>
                            Facebook
                        </Choice>
                        <Choice selected={filters.SoMe["linkedin"]} toggle={() => toggle("SoMe", "linkedin")}>
                            Linkedin
                        </Choice>
                        <Choice selected={filters.SoMe["tiktok"]} toggle={() => toggle("SoMe", "tiktok")}>
                            Tiktok
                        </Choice>
                    </div>
                </Filter>

                <Filter title="Har Nettside" ignore={filters.ignore["nettside"]} toggle={() => toggle("ignore", "nettside")}>
                    <div className="w-full flex items-center justify-center gap-5 flex-col p-10 text-xl">
                        <motion.button className="border border-sec w-full text-center h-14 rounded-xl"
                            onClick={() => setFilters(pv => {return {...pv, nettside: true}})}
                            animate={ filters.nettside ? {
                                background: "#7B34C8",
                                color: "#fff"
                            } : {
                                    background: "#7B34C800",
                                    color: "#111"
                                }}
                        >
                            Ja
                        </motion.button>
                        <motion.button className="border border-sec w-full text-center h-14 rounded-xl"
                            onClick={() => setFilters(pv => {return {...pv, nettside: false}})}
                            animate={ !filters.nettside ? {
                                background: "#7B34C8",
                                color: "#fff"
                            } : {
                                    background: "#7B34C800",
                                    color: "#111"
                                }}
                        >
                            Nei
                        </motion.button>
                    </div>
                </Filter>
            </div>
            
        </div>
    )
}
