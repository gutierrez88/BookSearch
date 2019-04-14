import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <div className="form row">
            <form className="center-align col s8 push-s2">
                <div>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="bookTitle"
                        placeholder="Search for a Book"
                        id="search"
                    />
                    <button onClick={props.handleFormSubmit} className="google" >Search</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
