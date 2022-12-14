import FooterComponent from "../components/Footer/FooterComponent";
import HeadComponent from "../components/HeaderComponent";
import TopNavComponent from "../components/TopNav/TopNavComponent"
import MainComponent from "../components/Main/MainComponent"
import ConnectionComponent from "../components/Connection/ConnectionComponent";
import { useState } from "react";
const Home = () => {
    let [conAdmin, setConAdmin] = useState(false);
    const handleSubmit = (event, data) => {
        console.log(data);
        setConAdmin(true);
    };
    const goBack = () =>{
        console.log("hOOOOO");
        setConAdmin(false);
    }
    return (
        <div>
            <HeadComponent />
            <TopNavComponent handleSubmit={handleSubmit} />
            {conAdmin === false ? <MainComponent /> : (
                <ConnectionComponent goBack={goBack}/>
            )}
            <FooterComponent />
        </div>
    );
};

export default Home;