import { connect } from "react-redux";
import React from "react";

import * as followerActions from "../../actions/followerActions";
import * as friendActions from "../../actions/friendActions";

@connect(state => ({
  followers: state.followers.items,
  friends: state.friends.items,
}))
export default class Public extends React.Component {
  static propTypes = {
    followers: React.PropTypes.array,
    friends: React.PropTypes.array,
  };

  handleSubmit(e) {
    const { dispatch } = this.props;
    const { user_1, user_2 } = this.refs;
    if (user_1.value === "" || user_2.value === "") {
      e.preventDefault();
      throw new Error("We need at least 2 users to compare");
    } else {
      dispatch(followerActions.compareFollowers(user_1.value, user_2.value));
      dispatch(friendActions.compareFriends(user_1.value, user_2.value));
    }
  }

  render() {
    const { followers, friends } = this.props;

    const followersList = followers.map((screen_name, i) => {
      return <li key={i}>{screen_name}</li>;
    });

    const friendsList = friends.map((screen_name, i) => {
      return <li key={i}>{screen_name}</li>;
    });

    return (
      <section class="text-center">
        <h1>
          Twitter Compare
        </h1>

        <p class="lead">
          Simple App to test a number of different techs all at once.
        </p>

        <div>
          <div>
            <input
              class="col-md-6"
              name="user_1"
              ref="user_1"
              type="text"
            />
            <input
              class="col-md-6"
              name="user_2"
              ref="user_2"
              type="text"
            />
            <button
              class="submit"
              onClick={::this.handleSubmit}
              type="submit"
            >Compare!</button>
          </div>
          <div class="follower col-xs-6 col-md-6">
            <h3>Followers</h3>
            <hr />
            <ol>{followersList}</ol>
          </div>
          <div class="friends col-xs-6 col-md-6">
            <h3>Friends</h3>
            <hr />
            <ol>{friendsList}</ol>
          </div>
        </div>
      </section>
    );
  }
}
