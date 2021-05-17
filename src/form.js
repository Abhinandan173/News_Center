import react, { Component } from 'react';
class Form extends Component {
    constructor() {
        super();
        this.state = {
            feilds: {},
            errors: {},
            citylist:["kudachi", "ugar" , "raibag", "chinchali"],
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
        if (!feilds["fname"]) {
            formstatus = false;
            errors["nameerror"] = " please enter your name !"
        } else {
            errors["nameerror"] = ""
        }

        //address validation
        if ( (!feilds["address"]) || (feilds["address"].length <50) ) {
            formstatus = false;
            errors["addresserror"] = " please enter your Address minimum 50 charecter!"
        } else {
            errors["addresserror"] = ""
        }

        //city validation
        if (!feilds["citylist"]) {
            formstatus = false;
            errors["cityerror"] = " please enter city name !"
        } else {
            errors["cityerror"] = ""
        }

        //mobile validation
        let mpattern = /^[6-9]\d{9}$/;  // d for digit , starting [6-9] , {9} -10 digit
        if ( (!feilds["mobile"]) || ( ! mpattern.test(feilds["mobile"])) ) {
            formstatus = false;
            errors["mobileerror"] = " please enter valid mobile number !"
        } else {
            errors["mobileerror"] = "";
        }
        
        //email validation
        let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( (!feilds["email"]) || ( !epattern.test(feilds["email"]) ) ){
            formstatus = false;
            errors["emailerror"] = " please enter valid email-id !"
        } else {
            errors["emailerror"] = "";
        }

        this.setState({
            errors: errors
        })

        //if entire form status is filled correctly then=>
        if(formstatus == true){
           
        }
    }  //save function end  //hr.infocampus@gmail.com

    render() {
        return (
            <section>
                <h2>form validation</h2>
                <form method="POST" onSubmit={this.save}>
                    <table align="center" cellPadding="15">
                        <tbody>
                            <tr>
                                <th> Full Name</th>
                                <td>
                                    <input type="text" name="fname" onChange={this.processinput} />
                                    <i>{this.state.errors.nameerror}</i>
                                </td>
                            </tr>
                            <tr>
                                <th> Mobile No.</th>
                                <td>
                                    <input  type="text" name="mobile" onChange={this.processinput} />
                                    <i>{this.state.errors.mobileerror}</i>
                                </td>
                            </tr>
                            <tr>
                                <th> Email</th>
                                <td>
                                    <input type="text" name="email" onChange={this.processinput} />
                                    <i>{this.state.errors.emailerror}</i>
                                </td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>
                                    <select name="city" onChange={this.processinput}>
                                        <option value="">Choose</option>
                                        {
                                            this.state.citylist.map((xcity , index)=>{
                                                return(
                                                    <option key={index}>{xcity}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <i>{this.state.errors.cityerror}</i>
                                </td>
                            </tr>
                            <tr>
                                <th>Adress</th>
                                <td>
                                    <textarea name="address" onChange={this.processinput}></textarea>
                                    <i>{this.state.errors.addresserror}</i>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="2">
                                    <button id="btn" >Submitt</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </section>
        )
    }
}
export default Form;