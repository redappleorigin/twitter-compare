import axios from "axios";
import { intersection } from "lodash";

export function fetchFriends(screen_name) {
  const query = `
    query API($screen_name: String) {
      friends(screen_name: $screen_name) {
        screen_name
      }
    }
  `;

  return axios
    .post("/api", {
      query,
      variables: { screen_name },
    })
    .then((response) => {
      if (response.data.errors) {
        return {type: 'RECEIVE_FRIENDS_ERROR', errors: response.data.errors};
      }

      return {
        type: "RECEIVE_FRIENDS",
        payload: response.data.data.friends.map((friend) => friend.screen_name),
      };
    })
  ;
}

export function compareFriends(screen_name1, screen_name2) {
  return Promise
    .all([
      fetchFriends(screen_name1),
      fetchFriends(screen_name2),
    ])
    .then((response) => {
      const userOneFriends = response[0].payload;
      const userTwoFriends = response[1].payload;

      const sharedFriends = intersection(userOneFriends, userTwoFriends).sort();

      return {
        type: "RECEIVE_SHARED_FRIENDS",
        payload: sharedFriends,
      };
    })
  ;
}
