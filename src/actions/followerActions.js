import axios from "axios";
import { intersection } from "lodash";

export function fetchFollowers(screen_name) {
  const query = `
    query API($screen_name: String) {
      followers(screen_name: $screen_name) {
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
        return {type: 'RECEIVE_FOLLOWERS_ERROR', errors: response.data.errors};
      }

      return {
        type: "RECEIVE_FOLLOWERS",
        payload: response.data.data.followers.map((follower) => follower.screen_name),
      };
    })
  ;
}

export function compareFollowers(screen_name1, screen_name2) {
  return Promise
    .all([
      fetchFollowers(screen_name1),
      fetchFollowers(screen_name2),
    ])
    .then((response) => {
      const userOneFollowers = response[0].payload;
      const userTwoFollowers = response[1].payload;
      const sharedFollowers = intersection(userOneFollowers, userTwoFollowers).sort();

      return {
        type: "RECEIVE_SHARED_FOLLOWERS",
        payload: sharedFollowers,
      };
    })
  ;
}
