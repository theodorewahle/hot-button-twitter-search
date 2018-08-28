import {
  GET_TWEETS_SUCCESS,
  GET_TWEETS_FAIL,
  GET_TWEETS
} from './Actions';

const INITIAL_STATE = {
  username: null,
  tweets: {},
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TWEETS_SUCCESS:
      return { ...state, user: action.payload.user, tweets: action.payload.tweets, loading: false  };
    case GET_TWEETS_FAIL
      return INITIAL_STATE
      case GET_TWEETS
        return { ...state, loading: true}
    default:
      return state;
  }
};
