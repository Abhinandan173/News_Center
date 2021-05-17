import react , {Component} from 'react'
class ZZ extends Component{
    constructor(){
        super();
        this.state={
            data : [{name:"abhi" , age:22 , cls:12},
            {name:"abhi" , age:22 , cls:12},
            {name:"abhi" , age:22 , cls:12},],
            nname:"",
            nage:"",
            ncls:"",
        }
    }
    pname = (obj) =>{
        this.setState({
            nname:obj.target.value
        })
    }
    page = (obj) =>{
        this.setState({
            nage:obj.target.value
        })
    }
    pcls = (obj) =>{
        this.setState({
            ncls:obj.target.value
        })
    }
    save = () =>{
        let newdata = {name:this.state.nname , age:this.state.nage , cls:this.state.ncls}
        this.setState({
            data:this.state.data.concat(newdata),
            nname:"",
            nage:"",
            ncls:"",
        })
    }
    del = (index) =>{
        this.state.data.splice(index ,1)
        this.setState({
            data:this.state.data
        })
    }
   render(){
       return(
           <div>
               <center>
                   <input onChange={this.pname} value={this.state.nname}/>
                   <input onChange={this.page} value={this.state.nage}/>
                   <input onChange={this.pcls} value={this.state.ncls}/>
                   <button onClick={this.save}>save</button>
                   <table>
                       <tr>
                           <th>index</th>
                           <th>name</th>
                           <th>age</th>
                           <th>cls</th>
                           <th>delet</th>
                       </tr>
                       {
                           this.state.data.map((xx , index)=>{
                               return(
                                   <tr key={index}>
                                       <td>{index+1}</td>
                                       <td>{xx.name}</td>
                                       <td>{xx.age}</td>
                                       <td>{xx.cls}</td>
                                       <td><button onClick={this.del.bind(this ,index)}>delet</button></td>
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
export default ZZ;
