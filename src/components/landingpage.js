import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style= {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="https://webcdn.appcloudbox.net/zmoji/wp-content/uploads/2019/11/5-Incredible-Avatar-Maker-Free-Tools-You%E2%80%99ve-Missed-Before.jpg"
                        alt="avatar-img"
                        className="avatar-img"
                        />
                        <div>
                            
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;