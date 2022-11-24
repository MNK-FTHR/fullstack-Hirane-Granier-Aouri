import type { NextPage } from "next";
import { InputTextComponent } from "my-lib-ui";

import FooterComponent from "../components/Footer";
import HeadComponent from "../components/Navbar";

const Home: NextPage = () => {
    return (
        <div>
            <HeadComponent />
            <InputTextComponent label="Email" placeholder="email" />
            <main></main>
            <FooterComponent />
        </div>
    );
};

export default Home;