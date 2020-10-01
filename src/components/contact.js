import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

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
                        <div style={styles.layout}>
                            <h1 style={styles.heading}>Let's Talk</h1>
                            <h4>style={styles.desc}>I'm always looking to chat, collaborate, network and just talk code</h4>

                        </div>
                        <div>
                            <a href="mailto:whitneym92@gmail.com?" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInbox} size="5x" style={styles.icons} /></a>
                            <a href="https://github.com/whitneym92" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="5x" style={styles.icons} /></a>
                            <a href="https://www.linkedin.com/in/whitney-monk/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="5x" style={styles.icons} /></a>

                        </div>
                    </div>
                )}
            </Spring>

        )
    }
}

export default Contact;