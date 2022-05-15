import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';

//thunk takes 2 args, dispatch func and getState func
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //when calling action creator within action creator, you need to dispatch the result
    await dispatch(fetchPosts())
    //getState can be called to get state of redux store 
    const posts = await getState().posts

    //map over posts and get uniq instances of 'userId' prop using lodash
    const userIds = _.uniq(_.map(getState().posts, 'userId'))

    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts')
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    };

export const fetchUser = (userId) => async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${userId}`)
        dispatch({ type: 'FETCH_USER', payload: response.data })
}

