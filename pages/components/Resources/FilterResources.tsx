import React from 'react'
import { useRouter } from "next/router"

type Props ={
    type: string,
}

const FilterResource: React.FC<Props> = ({type}) => {

    const router = useRouter()
    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "web-dev") {
            router.push("/resources/web-development")
        }
        if (e.target.value === "app-dev") {
            router.push("/resources/app-development")
        }
        if (e.target.value === "python") {
            router.push("/resources/python")
        }
        if (e.target.value === "aiml") {
            router.push("/resources/ai-ml")
        }
        if (e.target.value === "uiux") {
            router.push("/resources/ui-ux")
        }
        if (e.target.value === "web3") {
            router.push("/resources/web3")
        }
        if (e.target.value === "All") {
            router.push("/resources")
        }
    }

    return (
        <div>
            <select name="" id="" className=' border-2 border-gray-500 rounded text-center py-1 mt-5 sm:mt-0' defaultValue={type} onChange={(e): void => { handleFilter(e) }}>
                <option value="All">All</option>
                <option value="web-dev">Web-developement</option>
                <option value="app-dev">App-developement</option>
                <option value="python">Python</option>
                <option value="aiml">AI & ML</option>
                <option value="uiux">UI & UX</option>
                <option value="web3">Web 3.0</option>
            </select>
        </div>
    )
}

export default FilterResource