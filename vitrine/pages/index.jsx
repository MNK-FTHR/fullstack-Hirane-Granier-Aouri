import FooterComponent from "../components/Footer/FooterComponent";
import HeadComponent from "../components/HeaderComponent";
import TopNavComponent from "../components/TopNav/TopNavComponent"
import MainComponent from "../components/Main/MainComponent"
const Home = () => {
    return (
        <div>
            <HeadComponent />
            <TopNavComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
};

export default Home;