import React from "react";
import axios from "axios";
import getUsers from "../../utils/API"
import SearchBar from "../SearchBar/index"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            users: [],
            filteredUsers: []
        }

    }

    filterList = (event) => {
        //let items = this.state.users;
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });

        // var person = items.filter((obj) => {
        //     var flag = false;

        //     Object.values(obj).forEach((val) => {
        //         if ((val.toString().toLowerCase()).indexOf(event.target.value.toString().toLowerCase()) > -1) {
        //             flag = true;
        //             return;
        //         }
        //     });
        //     if (flag) return obj;
        // })
        // this.setState({ filteredUsers: person });
    }


    componentDidMount() {
        axios.get("https://randomuser.me/api/?nat=us&results=200")
            .then(newData => this.setState({ loading: false, users: newData.data.results, filteredUsers: newData.data.results }))
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }

        return (

            <div>
                <SearchBar onChange={this.filterList} />
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.filteredUsers.map(person => (
                            <tr>
                                <td><img src={person.picture.thumbnail}/></td>
                                <td>{person.name.first} {person.name.last}</td>
                                <td>{person.phone}</td>
                                <td>{person.email}</td>
                                <td>{person.dob.date.substring(0, person.dob.date.length - 14)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Search