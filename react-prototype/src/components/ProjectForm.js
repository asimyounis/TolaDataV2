import React, { Component } from 'react';

class ProjectForm extends Component{
    createProject(e){
        e.preventDefault();
        const project = {
            project_code: this.project_code.value,
            program: this.program.value,
            project_name: this.project_name.value
        }
        console.log(project);
        this.ProjectForm.reset();
    }
    render(){
        return(
            <div>
                <h1>Form</h1>
                <form ref={(input) => this.ProjectForm = input} className="portfolio-edit" onSubmit={this.createProject.bind(this)}>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Project Code</label>
                        <div className="col-10">
                            <input ref={(input) => this.project_code = input} className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Project Name</label>
                        <div className="col-10">
                            <input ref={(input) => this.project_name = input} className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Program</label>
                        <div className="col-10">
                            <select className="custom-select" ref={(input) => this.program = input}>
                                <option value="available">CASH: Cash Assistance to Smallholder Farmers of Tolastan</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn">+ Add Project</button>
                </form>
            </div>
        );
    }
}

export default ProjectForm;