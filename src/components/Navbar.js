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
                    <Menu.Item
                        name="home"
                        active={activeItem === "/ceatask"}
                    >
                        <Link to="/ceatask">Home</Link>
                    </Menu.Item>
                    <Menu.Item
                        name="liked"
                        active={activeItem === "/ceatask/liked"}
                    >
                        <Link to="/ceatask/liked">liked</Link>
                    </Menu.Item>
                    <Menu.Item
                        name="disliked"
                        active={activeItem === "/ceatask/disliked"}
                    >
                        <Link to="/ceatask/disliked">disliked</Link>
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
