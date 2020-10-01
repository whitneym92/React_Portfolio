
import React from "react";
import { Footer, FooterSection } from "react-mdl";

const styles = {
    design: {
        background: "none",
        padding: "5em",
        position: "relative",
        left: 550,
        fontFamily: 'Montserrat sans-serif',
    }
}

function Foot() {
    return (
        <div>
        <Footer size="mini" style={styles.design}>
            <FooterSection logo="Copyright &copy; 2020 | Whitney Monk">
            </FooterSection>
        </Footer>
        </div>
    )
}

export default Foot