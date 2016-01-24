export default function reducer(state = {
    isFetching: false,
    isFetched: false,
    items: [],
  }, action) {

  switch (action.type) {

    case 'RECEIVE_FOLLOWERS': {
      return Object.assign({}, state, {
        items: action.payload,
        isFetching: false,
        isFetched: true,
      });
    }

    case 'RECEIVE_SHARED_FOLLOWERS': {
      return Object.assign({}, state, {
        items: action.payload,
        isFetching: false,
        isFetched: true,
      });
    }

    case 'REQUEST_FOLLOWERS': {
      return Object.assign({}, state, {isFetching: true});
    }

    default:
      return state;
  }
}
