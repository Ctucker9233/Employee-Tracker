import React from "react"

function SearchBar(props) {
    return (
        <div>
            <form>
                <input type="text" placeholder="Search Users" onChange={props.onChange} />
            </form>
        </div>
    )
}

export default SearchBar