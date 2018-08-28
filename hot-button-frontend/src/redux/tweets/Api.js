import axios from 'axios'
import { getTweetsSuccess, getTweetsFail, GET_TWEETS } from './Actions';

export const getTweets = user => async dispatch => {
  try {
    dispatch({ type: GET_TWEETS });
    const url = "https://us-east1-hot-button-twitter-search.cloudfunctions.net/sorted-tweets-1"
    const request = {
      method: 'POST',
      url,
      data: { user },
    }
    const response = await axios(request);
    dispatch(getTweetsSuccess({ user, tweets: response.data.tweets }));
  } catch (e) {
    console.log(e);
    dispatch(getTweetsFail(e));
  }
};
