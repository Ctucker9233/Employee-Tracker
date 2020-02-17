import axios from "axios";
export default {
    // Gets all users
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?nat=us&results=200")
            .then(newData => this.setState({ loading: false, users: newData.data.results, filteredUsers: newData.data.results }))
            .catch(function (error) {
                console.log(error);
            })
    }
};

