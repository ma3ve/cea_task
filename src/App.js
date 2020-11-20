import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Disliked from "./pages/Disliked";
import Liked from "./pages/Liked";
import Post from "./pages/Post";
import PostUpdate from "./pages/PostUpdate";
import Search from "./pages/Search";
import axios from "axios";
import { connect } from "react-redux";
import { get_posts } from "./redux/posts/actions";

import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";

import React, { Component } from "react";

export class App extends Component {
    componentDidMount = async () => {
        try {
            const res = await axios({
                method: "get",
                url: "https://jsonplaceholder.typicode.com/posts",
            });
            console.log(res.data);
            this.props.getPosts(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <Router>
                <div>
                    <div style={{ width: "95%", margin: "auto" }}>
                        <Navbar />
                    </div>
                    <Container>
                        <Switch>
                            <Route path="/cea" component={Home} exact />
                            <Route
                                path="/cea/liked"
                                component={Liked}
                                exact
                            />
                            <Route
                                path="/cea/disliked"
                                component={Disliked}
                                exact
                            />
                            <Route
                                path="cea/posts/create"
                                component={Create}
                                exact
                            />
                            <Route
                                path="/cea/posts/:id"
                                component={Post}
                                exact
                            />
                            <Route
                                path="/cea/posts/:id/update"
                                component={PostUpdate}
                                exact
                            />
                            <Route path="/search" component={Search} />
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        posts: state.posts,
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        getPosts: (posts) => {
            dispatch(get_posts(posts));
        },
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
