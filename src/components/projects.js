import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Projects extends Component {
    render() {
        return(
            
            <Card style={{ width: '18rem' }}>
                
                <Card.Body>
                <Card.Title>Recipe Hub</Card.Title>
                <Card.Text>
                A responsive application that allows the user to input ingredients and outputs recipes pulled from a third-party API.
                </Card.Text>
                <a href="https://dbreznay.github.io/Recipe-Hub/" class="btn btn-outline-info" target="_blank" rel="noopener noreferrer">Live Demo</a>
                      <a href="https://github.com/dbreznay/Recipe-Hub" class="btn btn-outline-info" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/> Github</a>
                </Card.Body>
                <hr/>

                
                <Card.Body>
                <Card.Title>Popcorn Bucket List</Card.Title>
                <Card.Text>
                An application that allows movie lovers to search for and save movies to a watchlist. The application was created using Node.js, Express, Sequelize, Handlebars.js, MySQL and Passport.js
                </Card.Text>
                <a href="https://still-reef-39883.herokuapp.com/" class="btn btn-outline-info" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/demi0504/brutal-butterflies" class="btn btn-outline-info" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/> Github</a>
                </Card.Body>
                <hr/>

                
                <Card.Body>
                <Card.Title>Eat the Burger</Card.Title>
                <Card.Text>
                An application that utilizies MySQL and Handlebars to make a list of burgers to be eaten and keeps track of the ones devoured.
                </Card.Text>
                <a href="https://dry-scrubland-72305.herokuapp.com/" class="btn btn-outline-info" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/whitneym92/burger_app" class="btn btn-outline-info" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/> Github</a>
                </Card.Body>
                <hr/>

                
                <Card.Body>
                <Card.Title>Employee Tracker</Card.Title>
                <Card.Text>
                A CLI program that allows the user to track employee information via a MySQL database
                </Card.Text>
                <a href="https://github.com/whitneym92/employee_tracker" class="btn btn-outline-info" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/> Github</a>
                </Card.Body>
            </Card>
            
            
        )
    }
}

export default Projects;