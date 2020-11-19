import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";
import { remove_liked } from "../redux/liked/actions";
import { connect } from "react-redux";

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
                            <div className="ui  buttons">
                                <Button
                                    basic
                                    color="red"
                                    onClick={() => {
                                        this.props.remove_liked(
                                            this.props.array_id
                                        );
                                    }}
                                >
                                    Remove
                                </Button>
                            </div>
                        </Card.Content>
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
        remove_liked: (array_id) => {
            dispatch(remove_liked(array_id));
        },
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(PostCard);
