// import data from './Projects.json';

// export default () => data;

export default (state = null, action) => {
    switch (action.type) {
        case 'load_projects':
            return action.payload;
        default:
            return state;
    }
};