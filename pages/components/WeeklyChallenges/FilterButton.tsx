import React from 'react'
import { useRouter } from "next/router"

type Props ={
    type: string,
}

const FilterButton: React.FC<Props> = ({type}) => {

    const router = useRouter()
    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "JavaScript") {
            router.push("/weekly-challenges/javascript-thursday")
        }
        if (e.target.value === "CSS") {
            router.push("/weekly-challenges/css-sunday")
        }
        if (e.target.value === "Python") {
            router.push("/weekly-challenges/python-saturday")
        }
        if (e.target.value === "All") {
            router.push("/weekly-challenges")
        }
    }

    return (
        <div>
            <select name="" id="" className=' border-2 border-gray-500 rounded text-center py-1 px-2 mt-5 sm:mt-0' defaultValue={type} onChange={(e): void => { handleFilter(e) }}>
                <option value="All">All</option>
                <option value="JavaScript">JavaSciprt Thursday</option>
                <option value="Python">Python Saturday</option>
                <option value="CSS">CSS Sunday</option>
            </select>
        </div>
    )
}

export default FilterButton