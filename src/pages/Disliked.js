import React, { Component } from "react";
import { connect } from "react-redux";
import changepage from "../redux/others/actions";
import DisLikeCard from "../components/DisLikeCard";

export class Disliked extends Component {
    componentDidMount = () => {
        this.props.changeNavPage(this.props.location.pathname);
    };
    render() {
        return (
            <div>
                {this.props.dislikedposts.map((post, array_id) => {
                    return (
                        <div key={array_id}>
                            <DisLikeCard
                                title={post.title}
                                body={post.body}
                                array_id={array_id}
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
        dislikedposts: state.disliked.disliked,
    };
};
const mapDispatchtoProps = (dispatch) => {
    return {
        changeNavPage: (page) => {
            dispatch(changepage(page));
        },
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Disliked);
