import {InputTextComponent, ButtonComponent, RadioButtonComponent, SelectComponent, CheckBoxComponent} from "my-lib-ui";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeaderComponent";

const Home = () => {
    return (
        <div>
            <HeadComponent />
            <InputTextComponent />
            <ButtonComponent text="HAHA" />
            <RadioButtonComponent />
            <SelectComponent />
            <CheckBoxComponent />
            <main></main>
            <FooterComponent />
        </div>
    );
};

export default Home;