import React, { Component } from 'react';
import axios from 'axios'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            feilds: {},
            errors: {},
            message:'',
            accoutlist:[],
            btnstatus : false
        }
    }

    processinput = (obj) => {
        let feilds = this.state.feilds;
        feilds[obj.target.name] = obj.target.value;
        this.setState({
            feilds
        })
        console.log(this.state.feilds)
    }

    save = (obj) => {
        obj.preventDefault(); //to prevent from perticuler bydefault function from where we called this function
        let errors = this.state.errors;
        let feilds = this.state.feilds;
        let formstatus = true;

        //name validation
        if (!feilds["password"]) {
            formstatus = false;
            errors["passworderror"] = " please enter your password !"
        } else {
            errors["passworderror"] = ""
        }


        
        //email validation
        let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( (!feilds["email"]) || ( !epattern.test(feilds["email"]) ) ){
            formstatus = false;
            errors["emailerror"] = " please enter valid email-id !";
        } else {
            errors["emailerror"] = "";
        }

        this.setState({
            errors: errors
        })

        //if entire form status is filled correctly then=>
        if(formstatus == true){
            this.setState({
                message:"please wait processing",
                btnstatus : true
            })
            let status = false;
            let email = this.state.feilds["email"]
            let pass = this.state.feilds["password"]
            axios.get("accout.json").then(response =>{
                if(response.data.length>0){
                    response.data.map(xuser =>{
                       if((xuser.email==email) && (xuser.password==pass)){
                        status=true;
                        localStorage.setItem("userid" , xuser.id);
                        localStorage.setItem("name" , xuser.name);
                        window.location.reload();
                        //break;
                       }
                    })  //end of map loop
                    if(status == false){
                        this.setState({
                            message:"fail : invalid or not exist",
                            btnstatus:false
                        })
                    }
                } //end of firdt if
            })
        }
    }  //save function end

    render() {
        return (
            <section>
                <h2 align="center">Login</h2>
                <p align="center">{this.state.message}</p>
                <form method="POST" onSubmit={this.save}>
                    <table align="center" cellPadding="15">
                        <tbody>
                            
                            <tr>
                                <th> Email</th>
                                <td>
                                    <input type="text" name="email" onChange={this.processinput} />
                                    <i>{this.state.errors.emailerror}</i>
                                </td>
                            </tr>
                            <tr>
                                <th> Password</th>
                                <td>
                                    <input  type="password" name="password" onChange={this.processinput} />
                                    <i>{this.state.errors.passworderror}</i>
                                </td>
                            </tr>

                            <tr>
                                <th colSpan="2">
                                    <button id="btn" disabled={this.state.btnstatus}>Login</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </section>
        )
    }
}
export default Login;