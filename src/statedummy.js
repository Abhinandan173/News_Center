import React , {Component} from 'react'
class Name extends Component {
    constructor(){
        super();
        this.state={
            name:"abhi"
        }
    }
    change = () =>{
        this.setState({
            name:"chetan"
        })
    }
   render(){
       return(
           <div>
               <h1>{this.state.name}</h1>
               <button onClick={this.change}>change</button>
           </div>
       )
   }
}
export default Name;