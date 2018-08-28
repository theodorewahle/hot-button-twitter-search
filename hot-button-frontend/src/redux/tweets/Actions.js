export const GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS';
export const GET_TWEETS_FAIL = 'GET_TWEETS_FAIL';
export const GET_TWEETS = 'GET_TWEETS';

export const getTweetsSuccess = ({ tweets, user}) => ({
  type: GET_TWEETS_SUCCESS,
  payload: { tweets, user }
});

export const getTweetsFail = e => ({
  type: GET_TWEETS_FAIL,
  error: e
});
