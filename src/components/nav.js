import React from 'react';
import { Header } from 'react-mdl';
import { Spring } from 'react-spring/renderprops';

const styles={
    design: {
        background: 'none',
        position: 'fixed',
        top: 0,
        zIndex: '5',
        fontFamily: 'Monstserrat sans-serif',
        fontSize: 25,
    },
    
}

function Nav() {
    return (
        <Spring 
        from= {{ opacity: 0, marginTop:-500 }}
        to= {{ opacity: 1, marginTop:0 }}
        >
            {props => (
                <div style={props}>
                    <div className="demo-big-content">
                        <div style={styles.design}>
                            <Header style={styles.design} scroll>
                                Whitney Monk Development
                            </Header>
                        </div>
                    </div>
                </div>
            )}
        </Spring>
    )
}
export default Nav