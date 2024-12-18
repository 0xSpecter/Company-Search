import H from "../h"
import Input from "../input"
import { AnimatePresence, motion } from "motion/react"

function Filter({ ignore, toggle, children, title = "Select Someting" }) {

    return (
        <motion.div className="bg-bg shadow-2xl rounded-xl min-h-[400px] min-w-80 flex flex-col items-center justify-between p-2"
            animate={ignore ? {
                background: "#ddd"
            } : {
                background: "#eee"
            }}
        >
            <h2 className="text-sec font-medium text-2xl">
                {title}
            </h2>
            <>
                {children}
            </>
            <motion.button className="bg-red-400 rounded-xl text-xl px-2 py-1 flex flex-row items-center"
                onClick={toggle}
                whileHover={{
                    scale: 1.1
                }}
                animate={ignore ? {
                    background: "#10bbdd"
                } : {
                    background: "#f66"
                }}
            >
                <img src={ignore ? "/check.svg" : "/cross.svg"} alt="O" className="w-4 h-4 mr-2" />
                {ignore ? "Bruk" : "Ignorer"}
            </motion.button>
        </motion.div>
    )
}

function Choice({ selected, img_src = "/vercel.svg", children = "", toggle = () => {} }) {
    return (
        <motion.button className="h-14 w-full rounded-2xl border border-sec/30 flex flex-row items-center justify-between p-2"
            onClick={toggle} 
            whileHover={{
                scale: 1.03
            }}
            whileFocus={{
                scale: 0.97
            }}
            animate={selected ? {
                background: "#7B34C8",
                borderColor: "#7B34C8",
            } : {
                background: "#7B34C800",
                borderColor: "#7B34C850",
            }}
        >
            <motion.img src={img_src} alt="logo" className="h-full w-fit mr-5 invert"
                animate={ selected ? {
                    filter: "invert(100%)"
                } : {
                    filter: "invert(0%)"
                }}
            /> 
            <motion.span className="w-full text-start text-xl text-fg"
                animate={ selected ? {
                    filter: "invert(100%)"
                } : {
                    filter: "invert(0%)"
                }}
            >
                {children}
            </motion.span>
            <div className="w-20 h-full" >
                <AnimatePresence>
                    { selected &&
                        <motion.img src="/check.svg" alt="logo" className="h-full w-fit invert"
                            initial={{
                                opacity: 0,
                                x: 10,
                                y: -10,
                                rotate: 30,
                            }}
                            animate={{
                                x: 0,
                                y: 0,
                                opacity: 1,
                                rotate: 0,
                            }}
                            exit={{
                                x: 10,
                                y: 10,
                                opacity: 0,
                                rotate: 30,
                            }}
                        /> 
                    }
                </AnimatePresence>
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
                    <Input value={filters.industri} setter={(v : string) => setFilters((pv : object) => {return{...pv, industri: v}})}>
                        Industri
                    </Input>
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
                        <Choice img_src="/instagram.svg" selected={filters.SoMe["instagram"]} toggle={() => toggle("SoMe", "instagram")}>
                            Instagram
                        </Choice>
                        <Choice img_src="/facebook.svg" selected={filters.SoMe["facebook"]} toggle={() => toggle("SoMe", "facebook")}>
                            Facebook
                        </Choice>
                        <Choice img_src="/linkedin.svg" selected={filters.SoMe["linkedin"]} toggle={() => toggle("SoMe", "linkedin")}>
                            Linkedin
                        </Choice>
                        <Choice img_src="/tiktok.svg" selected={filters.SoMe["tiktok"]} toggle={() => toggle("SoMe", "tiktok")}>
                            Tiktok
                        </Choice>
                    </div>
                </Filter>

                <Filter title="Har Nettside" ignore={filters.ignore["nettside"]} toggle={() => toggle("ignore", "nettside")}>
                    <div className="w-full flex items-center justify-center gap-5 flex-col p-10 text-xl">
                        <motion.button className="border w-full text-center h-14 rounded-2xl"
                            onClick={() => setFilters(pv => {return {...pv, nettside: true}})}
                            whileHover={{
                                scale: 1.04
                            }}
                            animate={ filters.nettside ? {
                                background: "#7B34C8",
                                color: "#fff",
                                borderColor: "#7B34C8",
                            } : {
                                background: "#7B34C800",
                                color: "#111",
                                borderColor: "#7B34C870",
                            }}
                        >
                            Ja
                        </motion.button>
                        <motion.button className="border w-full text-center h-14 rounded-2xl"
                            onClick={() => setFilters(pv => {return {...pv, nettside: false}})}
                            whileHover={{
                                scale: 1.04
                            }}
                            animate={ !filters.nettside ? {
                                background: "#7B34C8",
                                color: "#fff",
                                borderColor: "#7B34C8",
                            } : {
                                background: "#7B34C800",
                                color: "#111",
                                borderColor: "#7B34C870",
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
