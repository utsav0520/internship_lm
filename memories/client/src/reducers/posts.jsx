export default (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payloud;
        case 'REAT':
            return [...posts,action.payloud];
        default:
            return posts;
    }
}