import FooterComponent from "../components/Footer/FooterComponent";
import HeadComponent from "../components/HeaderComponent";
import TopNavComponent from "../components/TopNav/TopNavComponent"
import MainComponent from "../components/Main/MainComponent"
import ConnectionComponent from "../components/Connection/ConnectionComponent";
import { useState } from "react";
import AdminComponent from "../components/Admin/AdminComponent";
const Home = () => {
    let [conAdmin, setConAdmin] = useState(false);
    let [admin, setAdmin] = useState(false);
    const handleSubmit = (event, data) => {
        setConAdmin(true);
    };
    const goBack = () =>{
        setConAdmin(false);
    }
    const connectIt = () =>{
        setAdmin(true);
    }
    return (
        <div>
            <HeadComponent />
            <TopNavComponent handleSubmit={handleSubmit} />
            {conAdmin === false ? <MainComponent /> : (
                <div>
                    {
                        admin ? 
                            <AdminComponent/>
                        :
                            <ConnectionComponent goBack={goBack} connect={connectIt}/>
                    }
                </div>
            )}
            <FooterComponent />
        </div>
    );
};

export default Home;