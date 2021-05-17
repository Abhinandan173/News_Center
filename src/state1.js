import react ,{Component} from 'react';
class Stateone extends Component{
    constructor(){
        super();
        this.state={
            loc:"bengaluru"
        }
    }

     processinput = (a) =>{
        this.setState({
            loc: a.target.value
        })
     }

     processinput2 = (myobj) =>{
        this.setState({
            loc: myobj.target.name
        })
     }

    render(){
        return(
            <div className="center">
                <h2  >State Management in class component</h2>
                <h1 >the city name is : {this.state.loc} </h1>
                <p>
                    change : <input type="text" onChange={this.processinput}/>
                </p>
                <p>
                    change : <input type="text" name="Name_targeted" onChange={this.processinput2}/>
                </p>
            </div>
        )
    }
}

export default Stateone;