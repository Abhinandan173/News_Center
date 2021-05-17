import react ,{Component} from 'react';
class Statetwo extends Component{
    constructor(){
        super();
        this.state={
            loc:"bengaluru",
            citylist:["mumbai", "chennai", "kolkatta"," hydrabad"]
        }
    }

     processinput = (myobj) =>{
        this.setState({
            loc: myobj.target.value
        })
     }
     
     save = () =>{
         this.setState({
             citylist: this.state.citylist.concat(this.state.loc), 
             loc:""
         })
     }

    render(){
        return(
            <div className="center">
                <h2  >array handing using state</h2>
                <h1 >the city name is : {this.state.loc} </h1>
                <p>
                    change : <input type="text" onChange={this.processinput}  value={this.state.loc}/>
                    <button onClick={this.save}>Save</button>
                </p>
                <table align="center" cellpadding="15">
                    <tr>
                        <th>city id</th>
                        <th>city name</th>
                    </tr>
    
                        {
                            this.state.citylist.map((xcity, index)=>{
                                return(
                                <tr  key={index} align="center">
                                <td>{index + 1}</td>
                                <td>{xcity}</td>
                                </tr>
                                )
                            })
                        }
                
                </table>
            </div>
        )
    }
}

export default Statetwo;