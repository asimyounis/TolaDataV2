export default (state = false, action) => {
    switch (action.type) {
        case 'logged_in':
            return action.payload;
        default:
            return state;
    }
};