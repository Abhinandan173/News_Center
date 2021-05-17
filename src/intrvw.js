import react , {Component} from 'react'
import axios from 'axios'
class Interview extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    one = ()=>{
        axios.get("user.json").then(godavn=>{
            this.setState({
                data:godavn.data
            })
        })
    }
    render(){
        return(
            <div>
                <center>
                    <button onClick={this.one} id="btn">SHOW</button>
                    <table border="1" cellPadding="14">
                        <tr>
                            <th>INDEX</th>
                            <th>NAME</th>
                            <th>AGE</th>
                        </tr>
                        {
                            this.state.data.map((xx , index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index=1}</td>
                                        <td>{xx.name}</td>
                                        <td>{xx.age}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </center>
            </div>
        )
    }
}
export default Interview;