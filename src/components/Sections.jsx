import React, {useState,useEffect} from "react";
import "./cardContainer.css"
import Card from "./cards/CardsFile";




const Sections = (props) => {
    const {data} = props;
    
    const [adminData, setAdminData] = useState([]);
    const [membersData,setMembersData] = useState([]);

    console.log(data);

    useEffect(() => {
        filterAdminData();
        filterMembersData();
    },[data])

    const filterAdminData = () => {
        let filterdData = data?.filter((e) => e?.role === "admin" ) 
        setAdminData(filterdData);
    };
    const filterMembersData = () => {
        let filterdData = data?.filter((e) => e?.role === "member" ) 
        setMembersData(filterdData);
    }



    return (
        <>
            <div>
                <h1>Administrators</h1>
                <div className="card-container" >
                    {
                        adminData && adminData?.map((element) => {
                            return (
                                <Card  
                                    name = {element?.first_name ? element?.first_name : " "}
                                    email = {element?.email ? element?.email : " "}
                                    avatarSrc={element?.img ? element?.img : " "}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div>
                <h1>Members</h1>
                <div>
                    <div className="card-container">
                    {
                        membersData && membersData?.map((element) => {
                            return (
                                <Card  
                                    name = {element?.first_name ? element?.first_name : " "}
                                    email = {element?.email ? element?.email : " "}
                                    avatarSrc={element?.img ? element?.img : " "}
                                />
                            )
                        })
                    }
                    </div>
                </div>
            </div>

        </>
    )
}


export default Sections;