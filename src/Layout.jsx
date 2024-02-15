import React, {useState, useEffect} from "react";
import Sections from "./components/Sections";
import TopBar from "./components/TopBar";


const Layout = () => {
    const [data, setData] =  useState([]);

    useEffect(() => {
        fetchMockData();
    },[])

    const fetchMockData = async() => {
        const url = "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098";
        const rawData = await fetch(url)
        const data =  await rawData?.json();
        console.log(data);
        setData(data);
    }
    
    return (
        <>
            <div>
                <div>
                    <TopBar />
                </div>
                <div>
                    <Sections data = {data} />    
                </div>
                <div></div>
                
            </div>
        </>
    )
}
export default Layout;