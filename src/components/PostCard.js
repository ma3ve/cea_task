import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";
import { remove_post } from "../redux/posts/actions";
import { connect } from "react-redux";
import { add_liked } from "../redux/liked/actions";
import { add_disliked } from "../redux/disliked/actions";
export class PostCard extends Component {
    render() {
        // console.log(this.props.like)
        return (
            <div className="row justify-content-center">
                <div className="col-md-6 mt-4">
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>{this.props.title}</Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <Card.Description>
                                {this.props.body}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className="ui three buttons">
                                <Button
                                    basic
                                    color="green"
                                    onClick={() => {
                                        this.props.add_liked(
                                            this.props.posts.posts[
                                                this.props.array_id
                                            ]
                                        );
                                    }}
                                >
                                    like
                                </Button>
                                <Button
                                    basic
                                    color="red"
                                    onClick={() => {
                                        this.props.add_disliked(
                                            this.props.posts.posts[
                                                this.props.array_id
                                            ]
                                        );
                                    }}
                                >
                                    dislike
                                </Button>
                                <Button
                                    basic
                                    color="red"
                                    onClick={() => {
                                        this.props.remove_post(
                                            this.props.array_id
                                        );
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Card.Content>
                        <Button
                            onClick={() => {
                                this.props.history.push(
                                    `/cea/posts/${this.props.array_id}`
                                );
                            }}
                        >
                            Preview
                        </Button>
                    </Card>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = (state, props) => {
    return {
        posts: state.posts,
    };
};
const mapDispatchtoProps = (dispatch) => {
    return {
        remove_post: (array_id) => {
            dispatch(remove_post(array_id));
        },
        add_liked: (post) => {
            dispatch(add_liked(post));
        },
        add_disliked: (post) => {
            dispatch(add_disliked(post));
        },
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(PostCard);
