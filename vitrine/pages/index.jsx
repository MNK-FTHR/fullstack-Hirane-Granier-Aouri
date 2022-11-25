import {InputTextComponent} from "my-lib-ui";

import FooterComponent from "../components/Footer";
import HeadComponent from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <HeadComponent />
            <InputTextComponent />
            <main></main>
            <FooterComponent />
        </div>
    );
};

export default Home;