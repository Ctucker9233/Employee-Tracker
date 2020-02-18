import React from "react"



function SearchBar(props) {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={props.onChange}
                />
            </form>
        </div>
    );

}

export default SearchBar