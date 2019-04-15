import React, { Component } from "react";
import Banner from "../components/banner";
import ResultSaved from "../components/resultSaved";
import API from "../utils/API";
import Nav from "../components/Nav";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getBook();
    };

    getBook = () => {
        API.getBooks()
            .then(res => {
                this.setState({books: res.data});
                console.log(this.state.books);
            })
            .catch(err => console.log(err));
    };

    removeBook = id => {
        API.deleteBook(id)
            .then(res => this.getBook())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Nav 
                    page={"saved"}
                />
                <Banner>
                    <h2 className="innerBanner">All of your saved books!</h2>
                </Banner>
                {this.state.books.map(book => (
                    <ResultSaved
                        key={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        picture={book.picture}
                        info={book.infoLink}
                        deleteBook={() => this.removeBook(book._id)}
                    />
                ))}
                
            </div>
        )
    }

}

export default Saved;
