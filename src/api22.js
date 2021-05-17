import react , {Component} from 'react';

import axios from 'axios'

class Apitwo extends Component{
   constructor(){
       super();
       this.state ={
           myuserlist:[]
       }
   }

   getuser = () =>{
       axios.get("user1.json").then(response=>{
           if(response.data.length>0){
               this.setState({
                   myuserlist:response.data
               })
           }
       })
   }

   componentDidMount(){
       this.getuser();
   }

   render () {
       return(
           <div className="container">
               <h2 align="center"> Available user list are : {this.state.myuserlist.length}</h2>
               {
                   this.state.myuserlist.map((xuser , index)=>{
                       return(
                           <div className="userdetails" key={index}>
                               <img src={xuser.photo} />
                               <h4>{xuser.name}</h4>
                           </div>
                       )
                   })
               }
           </div>
       )
   }

}
export default Apitwo;