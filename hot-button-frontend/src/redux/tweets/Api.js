import axios from 'axios'
import { getTweetsSuccess, getTweetsFail, GET_TWEETS } from './Actions';

export const getTweets = user => async dispatch => {
  try {
    dispatch({ type: GET_TWEETS });
    const url = "https://us-east1-hot-button-twitter-search.cloudfunctions.net/sorted-tweets-1"
    const response = await axios.post(url, {user});
    dispatch(getTweetsSuccess({ user, tweets: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getTweetsFail(e));
  }
};
