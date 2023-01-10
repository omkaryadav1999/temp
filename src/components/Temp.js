import React, { useEffect, useState } from "react"
import "./css/style.css"

const Temp = () => {
    const [output, setOutput] = useState(null)
    const [serchvalue, setSearchvalue] = useState("pune")

    const fetchApi = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${serchvalue}&units=metric&appid=381d1678600a8fa1ec57e2b39d01b179`)

        const responjson = await response.json()
        setOutput(responjson.main)
    }

    useEffect(() => {
        fetchApi()
    }, [serchvalue])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild" onChange={(e) => { setSearchvalue(e.target.value) }} />

                </div>

                {!output ? <p>No Data Found</p> : (
                    <div>
                        <div className="info">
                            <h2 className="location">{serchvalue}</h2>
                            <h1 className="temp">
                                {output.temp} cel
                            </h1>
                            <h3 className="tempin_max">Min:{output.temp_min} | Max :{output.temp_max} cel</h3>
                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )}

            </div>

        </>

    )
}

export default Temp



