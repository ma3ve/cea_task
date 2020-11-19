import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component {
    handleItemClick = {};

    render() {
        const { activeItem } = this.props;
        return (
            <div>
                <Menu secondary>
                    <Menu.Item name="home" active={activeItem === "/"}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item
                        name="liked"
                        active={activeItem === "/liked"}
                    >
                        <Link to="/liked">liked</Link>
                    </Menu.Item>
                    <Menu.Item
                        name="disliked"
                        active={activeItem === "/disliked"}
                    >
                        <Link to="/disliked">disliked</Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return { activeItem: state.others.nav_page };
};

export default connect(mapStatetoProps)(Navbar);
