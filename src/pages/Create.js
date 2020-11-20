import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { add_post } from "../redux/posts/actions";

export class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add_post(this.state);
        this.props.history.push("/ceatask");
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

                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        add_post: (new_post) => {
            dispatch(add_post(new_post));
        },
    };
};

const mapStatetoProps = (state) => {
    return {
        state,
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Create);
