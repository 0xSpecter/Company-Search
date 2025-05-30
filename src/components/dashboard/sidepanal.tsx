import { motion, AnimatePresence } from "motion/react"

function Progress_point({ selected, src = "/vercel.svg", onClick = () => {} }) {
    return (
        <>
            <button className="flex items-center justify-center relative">
                <motion.img src={src} alt="lmao" className="w-16 h-16 z-20"  
                    animate={selected ? {
                        filter: "invert(100%)"
                    } : {
                        filter: "invert(0%)"
                    }}
                    onClick={onClick}
                />
                <AnimatePresence>
                    {selected && 
                        <motion.div className="absolute w-32 h-20 bg-sec z-10 rounded-2xl"
                            initial={{
                                x: -130
                            }}
                            animate={{
                                x: -5
                            }}
                            exit={{
                                x: -130
                            }}
                        />
                    }
                </AnimatePresence>
            </button>

            
        </>
    )
}

export default function Sidepanal({ progress, setProgress }) {
    return (
        <div className="relative flex flex-col items-center justify-center gap-20 w-20 h-full bg-pri">
            <img src="/do.png" alt="do" className="w-16 h-16 absolute top-2 right-0 left-0 m-auto invert" /> 
            <Progress_point src="/filter.svg" selected={progress == "filters"} onClick={() => setProgress("filters")}/>
            <Progress_point src="/table.svg" selected={progress == "table"} onClick={() => setProgress("table")}/>
            <Progress_point src="/info.svg" selected={progress == "info"} onClick={() => setProgress("info")}/>
        </div>
    )
}
