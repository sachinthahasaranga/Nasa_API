import { useEffect, useState } from "react";
import { Card,Button } from 'antd';
import axios from "axios";
import NavBar from "../Components/NavBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import Footers from "../Components/Footer";
AOS.init();

export default function AstronomyPictureOfTheDay() {
    const [APOD, setAPOD] = useState([]);
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    
    useEffect(() => {
        
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=fdNSKBqbucYi4XGdZy0f0ZBNDITXO91dpMdlj36x")
            .then((response) => setAPOD(response.data))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${APOD.hdurl})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }, [APOD]);



    return (
        <div>
            <NavBar />
            <p style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold',color:'rgba(255, 255, 255, 0.74)' }}> {APOD.title}</p>

            <Card data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" style={{  margin: 50, backgroundColor: 'rgba(255, 255, 255, 0.5)', marginTop:"100vh", marginBottom:200 }}>
                <p style={{fontWeight:"bold"}}>Title: {APOD.title}</p>
                <p style={{fontWeight:"bold"}}>Explanation: {APOD.explanation}</p>
                <p style={{fontWeight:"bold"}}>Date: {APOD.date}</p>
            </Card>

            <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>
                    <Button style={{color:"white",backgroundColor:'rgba(0, 0, 0, 0.60)'}}>---Scroll Down for more Information---</Button>
                </div>

        
            <Footers/>
        </div>
    );
}
