import React,{useEffect} from "react";
import App from "./App";
import './App.css';
const Map = (props) => {
    const latitude= props.lat;
    const longitude= props.lon;
     useEffect(()=>{
        const iframeData=document.getElementById('iframeId');
        if(latitude && longitude){
        iframeData.src=`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`
        }
        else{
                iframeData.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597907.4303657326!2d73.52815909206556!3d26.91745732435699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c6e03fa7f3c3f%3A0x52606cddbe02ec3f!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1650880579202!5m2!1sen!2sin`
        
     }
    },[latitude,longitude])
        return(
        <div className="flex-child map">
        <iframe id="iframeId"></iframe>
        </div>
        )
}
export default Map;