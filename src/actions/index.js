export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const selectReddit = (reddit) => ({
    type: 
        SELECT_REDDIT,
        reddit
});

export const invalidateReddit = (reddit) => ({
    type: 
        INVALIDATE_REDDIT,
        reddit
});
    
export const requestPosts = (reddit) => ({
    type: 
        REQUEST_POSTS,
        reddit
});
    
export const receivePosts = (reddit, posts) => ({
    type: 
        RECEIVE_POSTS,
        reddit,
        posts,
    receivedAt: 
        Date.now()
});
