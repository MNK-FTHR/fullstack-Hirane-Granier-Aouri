import {InputTextComponent, ButtonComponent} from "my-lib-ui";

import FooterComponent from "../components/Footer";
import HeadComponent from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <HeadComponent />
            <InputTextComponent />
            <ButtonComponent text="button" />
            <main></main>
            <FooterComponent />
        </div>
    );
};

export default Home;