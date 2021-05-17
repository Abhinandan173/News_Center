import react, { Component } from 'react';
class Statefour extends Component {
    constructor(){
        super();
        this.state= {
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
            name:'',
            price:''
        })
    }
    render() {
        return (
            <div className="center">
                <h3>User Name & Age</h3>
                
                <p>
                    Name : <input type="text" onChange={this.processname} value={this.state.name}/>
                    Age : <input type="text" onChange={this.processprice} value={this.state.price}/>
                    <button onClick={this.save}>Save me</button>
                </p>
                {
                    this.state.newone.map((xname)=>{
                        return(
                            <>
                                <p id="hw"> {xname.name}--{xname.price}</p>
                            </>
                        )
                    })
                }
            </div>
        )
    }

}

export default Statefour;