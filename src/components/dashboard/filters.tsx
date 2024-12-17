import H from "../h"
import Input from "../input"

function Filter({ children }) {

    return (
        <div className="bg-bg shadow-2xl rounded-xl min-h-[400px] min-w-80 flex flex-col items-center justify-between p-2">
            <h2 className="text-sec text-2xl">
                fuck
            </h2>
            <>
                {children}
            </>
            <button className="bg-red-400 rounded-xl text-xl px-2 py-1">
                Ignorer
            </button>
        </div>
    )
}

export default function Filters({ filters, setFilters }) {
    

    return (
        <div className="w-full h-full flex flex-col justify-center gap-10 p-20">
            <H>
                Hva ønsker du å søke etter?
            </H>
            <div className="mt-5 w-full h-fit flex flex-row items-center justify-start gap-5">
                <Filter>
                    <Input value={filters.industri} setter={(v : string) => setFilters((pv : object) => {return{...pv, industri: v}})} />
                </Filter>
                <Filter>
                    <div className="flex flex-row items-center w-60 gap-4 justify-around">
                        <Input type="number" value={filters.antall_ansatte[0]} setter={(v : number) => setFilters((pv : object) => {return{...pv, antall_ansatte: [v, pv["antall_ansatte"][1]]}})} />
                        <span className="w-4 h-1 bg-pri" />
                        <Input type="number" value={filters.antall_ansatte[1]} setter={(v : number) => setFilters((pv : object) => {return{...pv, antall_ansatte: [pv["antall_ansatte"][0], v]}})} />
                    </div>
                </Filter>
            </div>
        </div>
    )
}
