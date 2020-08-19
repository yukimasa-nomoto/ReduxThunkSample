import jsonPlaceholder from '../apis/jsonplaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    console.log(response);
    dispatch({type:'FETCH_POSTS', payload:response});
};


