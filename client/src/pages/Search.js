import React, { Component } from "react";
import Banner from "../components/banner"
import SearchBar from "../components/searchBar"
import Result from "../components/result"
import API from "../utils/API";
import Nav from "../components/Nav";

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
            .then(res => {
                let book = res.data.items;
                this.setState({books: book, search: ""});
            })
            .catch(err => console.log(err));
    };

    saveBook = book => {
        API.saveBook(book)
            .then(res => console.log("The book was saved", res))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    render() {
        return (
            <div>
                <Nav 
                    page={"search"}
                />
                <Banner>
                    <h2 className="innerBanner">What book would you like to search for?</h2>
                </Banner>
                <SearchBar 
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                {this.state.books.map(book => (

                    <Result
                        key={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        picture={book.volumeInfo.imageLinks.thumbnail}
                        info={book.volumeInfo.infoLink}
                        saveBook={() => this.saveBook({
                            title: book.volumeInfo.title,
                            authors: book.volumeInfo.authors ? book.volumeInfo.authors.toString().split(",").join(", ") : "Not Listed",
                            description: book.volumeInfo.description,
                            picture: book.volumeInfo.imageLinks.thumbnail,
                            info: book.volumeInfo.infoLink
                        })
                    }
                    />
                ))}
                
            </div>
        )
    }

}

export default Search;
