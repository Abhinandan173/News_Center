import react , { Component} from 'react';

import axios from 'axios';

class Apihw extends Component{
    constructor(){
        super();
        this.state = {
            citylist : [],
            userlist:[]
        }
    }

    showcity = () => {
        axios.get("city.json").then(godavn=>{
            this.setState({
                citylist : godavn.data
            })
        })
    }

    showuser = () =>{
        axios.get("user.json").then(godavn=>{
            this.setState({
                userlist :godavn.data
            })
        })
    }

    render(){
        return(
            <div>
                
                <table id="city" align="left" cellPadding="15" border="3px">
                <caption><button id="btn" onClick={this.showcity}>Show city</button></caption>
                <th colspan="2">  the Number of cities : {this.state.citylist.length}</th>
                    <tr bgcolor="skyblue">
                        <th>Sl No.</th>
                        <th>Name</th>
                    </tr>
                    {
                        this.state.citylist.map((xcity , index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{xcity.name}</td>
                                </tr>
                            )
                        })
                    }
                </table><br/>


                <table id="user" align="right" cellPadding="15" border="3px">
                    <caption><button id="btn" onClick={this.showuser}> Show user </button></caption>
                    <th colspan="3">  the Number of user : {this.state.userlist.length}</th>
                    <tr bgcolor="skyblue">
                        <th>Sl No.</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    {
                        this.state.userlist.map((xuser , index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index + 1} </td>
                                    <td> {xuser.name} </td>
                                    <td> {xuser.age} </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}

export default Apihw;