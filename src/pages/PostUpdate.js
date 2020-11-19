import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { update_post } from "../redux/posts/actions";

export class PostUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            body: this.props.body,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.update_post(this.state, this.props.match.params.id);
        this.props.history.push(`/posts/${this.props.match.params.id}`);
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>title</label>
                        <input
                            placeholder="title"
                            value={this.state.title}
                            name="title"
                            onChange={(e) => {
                                this.setState({
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                    </Form.Field>
                    <Form.TextArea
                        label="body"
                        placeholder="Tell us more about you..."
                        value={this.state.body}
                        name="body"
                        onChange={(e) => {
                            this.setState({
                                [e.target.name]: e.target.value,
                            });
                        }}
                    />

                    <Button type="submit">Update</Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        update_post: (updated_post, array_id) => {
            dispatch(update_post(updated_post, array_id));
        },
    };
};

const mapStatetoProps = (state, props) => {
    console.log(state);
    return {
        title: state.posts.posts[props.match.params.id].title,
        body: state.posts.posts[props.match.params.id].body,
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(PostUpdate);
