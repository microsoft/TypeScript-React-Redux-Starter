// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import "./navigation.scss";
import { Resources } from "resources"
import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../../redux/modules/users/users";

interface INavigationComponentState {
}

const initialState: INavigationComponentState = {
};

interface INavigationComponentProps {
    history: any;
    isAuthed: boolean;
    isFetching: boolean;
    error: string;
    unauthUser: () => void;
    fetchAndHandleAuthentication: (history: any) => void;
}

class NavigationComponent extends React.Component<INavigationComponentProps, INavigationComponentState> {
    static propTypes = {
        isAuthed: PropTypes.bool.isRequired,
        isFetching: PropTypes.bool.isRequired,
        error: PropTypes.string.isRequired,
        unauthUser: PropTypes.func.isRequired,
        fetchAndHandleAuthentication: PropTypes.func.isRequired
    }
    constructor(props: INavigationComponentProps) {
        super(props);
        this.state = initialState;
    }
    handleAuth = () => {
        this.props.fetchAndHandleAuthentication(this.props.history);
    }
    handleUnauth = () => {
        this.props.unauthUser();
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="navigation">
                <div className="navigation-logo">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-logo" aria-expanded="false">
                                    <span className="sr-only">{Resources.Navigation.ToggleNavigation}</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="/"><span>Brand</span></a>
                            </div>
                            <div className="collapse navbar-collapse" id="nav-logo">
                                {this.props.isAuthed ? (
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="hidden-md hidden-lg"><Link to="/">Brand</Link></li>
                                        <li className="hidden-md hidden-lg"><Link to="/dashboard">{Resources.Navigation.Dashboard}</Link></li>
                                        <li><Link to="/settings">{Resources.Navigation.Settings}</Link></li>
                                        <li><a href="#" onClick={this.handleUnauth}>{Resources.Navigation.SignOut}</a></li>
                                    </ul>
                                ) : (
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="hidden-md hidden-lg"><Link to="/">Brand</Link></li>
                                        {!this.props.isFetching ? (
                                            <li><a href="#" onClick={this.handleAuth}>{Resources.Navigation.SignIn}</a></li>
                                        ) : ("")
                                        }
                                    </ul>
                                )
                                }
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="navigation">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand hidden-xs hidden-sm" to="/">React-Redux Starer</Link>
                            </div>
                            <div className="collapse navbar-collapse" id="nav">
                                {this.props.isAuthed ? (
                                    <ul className="nav navbar-nav">
                                        <li><Link to="/dashboard">{Resources.Navigation.Dashboard}</Link></li>
                                    </ul>
                                ) : ("")
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export const Navigation = connect(
    (state: any) => {
        return ({isAuthed: state.isAuthed, isFetching: state.isFetching, error: state.error });
    },
    (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(NavigationComponent);