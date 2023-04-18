import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/category/categorySlice";

const BreweryAbout = () =>{
    const { dataStore, isLoading } = useSelector((store) => store.brewery);
    const dispatch = useDispatch();

       useEffect(() => {
        if(!dataStore){
           dispatch(getData());
        }
    },[dispatch,dataStore]);

        if(isLoading){
            return(
                <div>Loading</div>
            )
        }
    return(
        <div>
            {dataStore((data) => (
                <div className="aboutData" key={data.id}>
                    <h1>data.name</h1>
                </div>
            ))}
        </div>
    )
}

export default BreweryAbout;