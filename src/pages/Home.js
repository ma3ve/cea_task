import React, { Component } from "react";
import { connect } from "react-redux";
import changepage from "../redux/others/actions";
import { get_posts } from "../redux/posts/actions";
import PostCard from "../components/PostCard";
import { Button } from "semantic-ui-react";
export class Home extends Component {
    componentDidMount() {
        this.props.changeNavPage(this.props.location.pathname);
    }

    render() {
        const { posts } = this.props.posts;
        return (
            <div>
                <Button
                    fluid
                    onClick={() => {
                        this.props.history.push("/posts/create");
                    }}
                >
                    create a new one?
                </Button>
                {posts.map((post, array_id) => {
                    return (
                        <div key={array_id}>
                            <PostCard
                                title={post.title}
                                body={post.body}
                                array_id={array_id}
                                history={this.props.history}
                            />
                        </div>
                    );
                })}
            </div>
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
        changeNavPage: (page) => {
            dispatch(changepage(page));
        },
        getPosts: (posts) => {
            dispatch(get_posts(posts));
        },
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
