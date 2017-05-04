export const changeStatus = (status) => {
    return {
        type: 'logged_in',
        payload: status
    };
};

export const loadCurrentProjects = (projects) => {
    return {
        type: 'load_projects',
        payload: projects
    };
};