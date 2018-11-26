// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import "./home.scss";
import { Resources } from "resources";
import * as React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../../redux/modules/users/users";

interface IHomeComponentState {
}

const initialState: IHomeComponentState = {
};

interface IHomeComponentProps {
  history: any;
  isAuthed: boolean;
  isFetching: boolean;
  error: string;
  fetchAndHandleAuthentication: (history: any) => void;
}

class HomeComponent extends React.Component<IHomeComponentProps, IHomeComponentState> {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthentication: PropTypes.func.isRequired
  }
  constructor(props: IHomeComponentProps) {
    super(props);
    this.state = initialState;
  }
  handleAuth = () => {
    this.props.fetchAndHandleAuthentication(this.props.history);
  }
  render() {
    return (
      <div className="container-fluid home">
        <div className="row">
          <div className="hero-container">
            {!this.props.isAuthed ? (
                <button className="btn btn-white hero-sign-in" onClick={this.handleAuth}>
                  {Resources.Home.SignIn}
                  <i className="glyphicon glyphicon-menu-right"></i>
                </button>
              ) : (
                <h1 className="hero-sign-in welcome">Welcome to Home!</h1>
              )
            }
            {this.props.isFetching ? (
                <button className="btn btn-white hero-sign-in">
                  {Resources.Home.SigningIn}
                </button>
              ) : ("")
            }
          </div>
        </div>
      </div>
    )
  }
}

export const Home = connect(
  (state: any) => {
    return ({ isFetching: state.isFetching, error: state.error, isAuthed: state.isAuthed });
  },
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(HomeComponent);

