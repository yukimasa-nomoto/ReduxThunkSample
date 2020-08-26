import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonplaceholder';

export const fetchPostsAndUsers = () => async (dispatch , getState) =>{
    // console.log('about to fetche posts');
    await dispatch(fetchPosts());
    //console.log(getState().posts.data);
    const userIds = _.uniq(_.map(getState().posts.data , 'userId'));
    // console.log(userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    console.log(response);
    dispatch({type:'FETCH_POSTS', payload:response});
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    //console.log(response);
    dispatch({type:'FETCH_USER', payload:response.data});
};


// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//     //console.log(response);
//     dispatch({type:'FETCH_USER', payload:response.data});
// });

