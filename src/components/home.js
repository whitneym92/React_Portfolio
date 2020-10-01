import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../assets/avatAR.jpg';
import { Spring } from 'react-spring/renderprops';


class Home extends Component {
    render() {
        return (
            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            >
                { props => (
                    <div style={props}>
                        <div>
                            <Grid style={styles.design}>
                                <Cell col={12} style={styles.layout}>
                                    <img
                                    src={avatar}
                                    alt="avatar"
                                    style={styles.avatar}
                                    />
                                </Cell>
                            </Grid>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}


export default Home;