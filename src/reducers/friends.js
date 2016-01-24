export default function reducer(state = {
    isFetching: false,
    isFetched: false,
    items: [],
  }, action) {

  switch (action.type) {

    case 'RECEIVE_FRIENDS': {
      return Object.assign({}, state, {
        items: action.payload,
        isFetching: false,
        isFetched: true,
      });
    }

    case 'RECEIVE_SHARED_FRIENDS': {
      return Object.assign({}, state, {
        items: action.payload,
        isFetching: false,
        isFetched: true,
      });
    }

    case 'REQUEST_FRIENDS': {
      return Object.assign({}, state, {isFetching: true});
    }

    default:
      return state;
  }
}
