import React from "react";
import UserBody from "../UserBody/index"
const styles = {
    h1: {
        textAlign: "center"
    }
}

function Main(){
    return(
        <div>
            <h1 style={styles.h1}>Employee Directory</h1>
            <UserBody />
        </div>


        
    )
}

export default Main;