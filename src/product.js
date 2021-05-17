import react from 'react'
const team = ["RCB " ,"PKS", "MI" , "KKR" ,"CSK" , "DC", "SRH" , "RR"]
function Myproduct(){
   return(
       <div>
           <table align="center" cellPadding="15" style={{marginTop:"20PX"}}>
               <tr>
                   <th>Sr No.</th>
                   <th>Name</th>
               </tr>
               {
                   team.map((xx , index)=>{
                       return(
                           <tr key={index}>
                               <td>{index +1 }</td>
                               <td>{xx}</td>
                           </tr>
                       )
                   })
               }
               
           </table>
       </div>
   )
}
export default Myproduct;