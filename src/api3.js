import react , {Component} from 'react';

import axios from 'axios'

class Apithree extends Component{
   constructor(){
       super();
       this.state ={
           mycitylist:[]
       }
   }

   getcity = () =>{
       let url = "http://firstenquiry.com/api/react/live/allcity.php"
       axios.get(url).then(response=>{
           if(response.data.length>0){
               this.setState({
                   mycitylist:response.data
               })
           }
       })
   }

   componentDidMount(){
       this.getcity();
       console.log(("aaa"));
   }

   render () {
       return(
           <div className="container">
               <h2 align="center"> Available city are : {this.state.mycitylist.length}</h2>
               {
                   this.state.mycitylist.map((xcity , index)=>{
                       return(
                           <p className="city" key={index}>{index+1} ). {xcity.name} - {xcity.name.length}</p>
                       )
                   })
               }
           </div>
       )
   }

}
export default Apithree;