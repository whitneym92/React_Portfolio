import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import resume from '../assets/Whitney_Monk_Resume.pdf';

const styles = {
    layout: {
        position: "relative",
        background: "linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)",
        zIndex: 0,
    },
    desc: {
        position: "relative",
        top: -350,
        textAlign: "center",
        background: "#d9d9ed",
        boxShadow: "10px 5px #d46fbb",
        border: "0 1px solid #d46fbb",
        marginLeft: "10em",
        marginRight: "10em",
        padding: 20,
        zIndex: -1,
        fontFamily: "Montserrat sans-serif",
    },
    icons: {
        position: "relative",
        top: -250,
        left: 300,
        display: "inline",
        marginLeft: "1em",
        marginRight: "1em",
        justifyContent: "center",
        color: "#ffffff",
    }
}
class Contact extends Component {
    render() {
        return(
            <Spring
            from={{ opacity:0 }}
            to={{ opacity:1 }}
            config={{ delay: 3000, duration: 2000, }}
            >
                {props => (
                    <div style={props}>
                       
                        <div>
                            <a href="mailto:whitneym92@gmail.com?" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInbox} size="5x" style={styles.icons} /></a>
                            <a href="https://github.com/whitneym92" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="5x" style={styles.icons} /></a>
                            <a href="https://www.linkedin.com/in/whitney-monk/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="5x" style={styles.icons} /></a>
                            <a href={resume} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} size="5x" style={styles.icons} /></a>

                        </div>
                    </div>
                )}
            </Spring>

        )
    }
}

export default Contact;