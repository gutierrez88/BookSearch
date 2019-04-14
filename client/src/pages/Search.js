import React, { Component } from "react";
import Banner from "../components/banner"
import SearchBar from "../components/searchBar"
import Result from "../components/result"
import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        search: ""
    };

    componentDidMount() {
        this.searchBooks("The Giver");
    };

    searchBooks = (name) => {
        API.search(name)
            .then(res => this.setState({books: res.data.data}))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGiphy(this.state.search);
    };

    render() {
        return (
            <div>
                <Banner>
                    <h2 className="innerBanner">What book would you like to search for?</h2>
                </Banner>
                <SearchBar 
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Result />
            </div>
        )
    }

}

export default Search;
