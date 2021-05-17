import React, { Component } from 'react';
import axios from 'axios';
class crud extends Component {
    constructor() {
        super();
        this.state = {
            datalist: [],
            name: "",
            email: "",
            mobile: "",
            message: "Please fill the form"
        }
    }
    getdata = () => {
        let url = "https://www.firstenquiry.com/api/react/crud/list.php";
        axios.get(url).then(godavn => {
            if (godavn.data.length > 0) {
                this.setState({
                    datalist: godavn.data
                })
            }
        })
    }

    componentDidMount() {
        this.getdata();
    }

    processname = (obj) => {
        this.setState({
            name: obj.target.value
        })
    }

    processmobile = (obj) => {
        this.setState({
            mobile: obj.target.value
        })
    }

    processemail = (obj) => {
        this.setState({
            email: obj.target.value
        })
    }

    save = () => {
        this.setState({
            message: " please wait processing "
        })
        let url = "https://www.firstenquiry.com/api/react/crud/save.php"
        let input = new FormData();
        input.append("name", this.state.name);
        input.append("mobile", this.state.mobile);
        input.append("email", this.state.email);
        axios.post(url, input).then(godavn => {
            this.setState({
                message: godavn.data,
                name: "",
                email: "",
                mobile: "",
                datalist: []
            })
            this.getdata(); //toreload the list after saving
        })
    }

    deletrecord = (recordid) => {
        let url = "https://www.firstenquiry.com/api/react/crud/delete.php";
        let input = new FormData();
        input.append("id", recordid);
        axios.post(url, input).then(godavn => {
            this.setState({
                message: godavn.data.status,
                datalist: []
            })
            this.getdata()  //to reload the list
        })
    }
    render() {
        return (
            <div className="container">
                <h2> CRUD - Create, Read, Update, Delet</h2>
                <table align="center" cellpadding="10">
                    <tr>
                        <td>
                            Name : <br/>
                            <input type="text" value={this.state.name} onChange={this.processname} />
                        </td>
                        <td>
                            Mobile : <br />
                            <input type="text" value={this.state.mobile} onChange={this.processmobile} />
                        </td>
                        <td>
                            e-Mail : <br />
                            <input type="text" value={this.state.email} onChange={this.processemail} />
                        </td>
                        <td>   <br /><button onClick={this.save}>Send Message</button>     </td>
                    </tr>
                </table>

                <p align="center"> {this.state.message} </p>

                <table align="center" cellpadding="10">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>e-Mail</th>
                        <th>Post-date</th>
                        <th>Delet</th>
                    </tr>
                    {
                        this.state.datalist.map((xdata, index) => {
                            return (
                                <tr key={index}>
                                    <td>{xdata.id}</td>
                                    <td>{xdata.name}</td>
                                    <td>{xdata.mobile}</td>
                                    <td>{xdata.email}</td>
                                    <td>{xdata.postdate}</td>
                                    <td><button onClick={this.deletrecord.bind(this, xdata.id)}>Delet</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}

export default crud;