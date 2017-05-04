import React from 'react';

const ProjectList = (props) => {
    return(
        <div>
            <h2>Project List</h2>
            { props.projects.map(project => <p key={project.id}>{project.project_name}</p>) }  
        </div>
    );
};

ProjectList.propTypes = {
    // projects: React.PropTypes.object.isRequired
}

export default ProjectList;