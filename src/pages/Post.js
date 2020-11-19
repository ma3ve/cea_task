import React, { Component } from "react";
import { connect } from "react-redux";
import SinglePostCard from "../components/SinglePostCard";

export class Post extends Component {
    render() {
        return (
            <div>
                <SinglePostCard
                    title={
                        this.props.posts[this.props.match.params.id].title
                    }
                    body={
                        this.props.posts[this.props.match.params.id].body
                    }
                    array_id={this.props.match.params.id}
                    history={this.props.history}
                />
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        posts: state.posts.posts,
    };
};

export default connect(mapStatetoProps, {})(Post);
