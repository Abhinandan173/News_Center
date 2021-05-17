import react , {Component} from 'react';

class homework extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            price:"",
            newone:[]
        }
    }

    processname = (obj) =>{
        this.setState({
            name:obj.target.value
        })
    }

    processprice = (obj) =>{
        this.setState({
            price:obj.target.value
        })
    }

    save = () =>{
        let abc = {
            name:this.state.name,
            price:this.state.price
        }
        this.setState ({
            newone:this.state.newone.concat(abc),
            name:"",
            price:""
        })
    }

    render(){
        return(
            <section>
                <h2 align="center">Using Class Component in State</h2>
                <div align="center">
                    Name : <input type="text" onChange={this.processname} value={this.state.name}/>
                   Price :<input type="text" onChange={this.processprice} value={this.state.price}/>
                   <button onClick={this.save}>Save</button>
                </div>
                {
                   this.state.newone.map((xuser)=>{
                       return(
                       <>
                       <p id="abc">{xuser.name} <br/> {xuser.price}</p>
                       </>
                       )
                   })
                }
            </section>
        )
    }
}

export default homework;