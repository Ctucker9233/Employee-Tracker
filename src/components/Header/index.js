import React from "react";

const styles = {
    headerDiv: {
        backgroundColor: "navy",
        borderBottom: "5px red solid"
    },
    h1: {
        textAlign: "center",
        color: "white"
    }
}
function Header() {
    return (
        <div style={styles.headerDiv}>
            <h1 style={styles.h1}>Employee Directory</h1>
        </div>
    )
}

export default Header;