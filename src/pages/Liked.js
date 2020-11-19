import React, { Component } from "react";
import { connect } from "react-redux";
import changepage from "../redux/others/actions";
import LikeCard from "../components/LikeCard";
export class Liked extends Component {
    componentDidMount = () => {
        this.props.changeNavPage(this.props.location.pathname);
    };

    render() {
        return (
            <div>
                {this.props.likedposts.map((post, array_id) => {
                    return (
                        <div key={array_id}>
                            <LikeCard
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
        likedposts: state.liked.liked,
    };
};
const mapDispatchtoProps = (dispatch) => {
    return {
        changeNavPage: (page) => {
            dispatch(changepage(page));
        },
    };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Liked);
