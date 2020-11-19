import React, { Component } from "react";

export class Search extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>seach page {this.props.location.search}</h1>
            </div>
        );
    }
}

export default Search;
