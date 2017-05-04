import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';

class App extends Component {
    constructor(props){
        super(props);
        this.renderProjects = this.renderProjects.bind(this);
        this.state = {
            loading: true
        };
    }
    componentWillMount() {
        var config = {
            headers: {'Authorization': 'Token e935e4d825be4a4327a85c4ce49553deb5a1601a'}
        };

        axios
            .get('http://188.166.85.210:8000/api/projectagreements/', config)  
            .then(response => {
                this.setState({ loading: false })
                this.props.loadCurrentProjects(response.data);
            });

        axios.options('http://188.166.85.210:8000/api/projectagreements/', config)  
            .then(function(response){
                const data = response.data.actions.POST;
                const dataKeys = Object.keys(data);
            
                const filtered = dataKeys.map(project => {
                    if(data[project]['required']){
                        // console.log(data[project]);
                        return data[project];
                    }
                });
                // console.log(filtered);
                // console.log(data);
            }); 
    }
    renderProjects() {
        if (!this.props.projects) {
            return <p>Loading</p>;
        }
        return(
            <div>
                <ProjectList projects={this.props.projects} />
            </div>
        );
    }
    render(){
        return(
            <div className="container">
                <ProjectForm />
                { this.renderProjects() }
            </div>  
        );
    }
}

const mapStateToProps = state => {
    return { 
        loggedIn: state.loggedIn,
        projects: state.projects
    };
};

export default connect(mapStateToProps, actions)(App);
