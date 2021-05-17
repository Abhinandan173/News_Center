import react, {Component} from 'react'
import {Link} from 'react-router-dom'
class DDD extends Component{
    constructor(){
        super();
        this.state={
            mydata:[
               {name:"aaa", age:12 , qty:12},
               {name:"aaa", age:12 , qty:12},
               {name:"aaa", age:12 , qty:12},
            ],
            mname:'',
            mage:'',
            mqty:'',
        }
    }
    pname =(obj) =>{
        this.setState({
            mname:obj.target.value
        })
    }
    page =(obj) =>{
        this.setState({
            mage:obj.target.value
        })
    }
    pqty =(obj) =>{
        this.setState({
            mqty:obj.target.value
        })
    }

    save = () =>{
        let data = {
            name:this.state.mname,
            age:this.state.mage,
            qty:this.state.mqty,
        }
        this.setState({
            mydata:this.state.mydata.concat(data),
            mname:'',
            mage:'',
            mqty:'',
        })
    }
   
   render(){
       return(
           <div>
               <center>
                   <h3> from my side</h3>
                   <p>
                       <input value={this.state.mname} onChange={this.pname}/>
                       <input value={this.state.mage} onChange={this.page}/>
                       <input value={this.state.mqty} onChange={this.pqty}/>
                       <button onClick={this.save}>save</button>
                   </p>
                   <table cellPadding="14" border="1">
                       <tr>
                           <th>Sr No</th>
                           <th>Name</th>
                           <th>age</th>
                           <th>qty</th>
                       </tr>
                       {
                           this.state.mydata.map((xx , index)=>{
                               return(
                                   <tr key={index}>
                                       <td>{index+1}</td>
                                       <td>{xx.name}</td>
                                       <td>{xx.age}</td>
                                       <td>{xx.qty}</td>
                                   </tr>
                               )
                           })
                       }
                   </table>
                   <br/>
                   <Link to='/zz'><button>Go_Boot</button></Link>
               </center>
           </div>
       )
   }
}
export default DDD;