import react, { useState } from 'react';
 const fruits = [];
const Hookhw = () => {
    const [fruit , updatefruit] = useState(fruits);
    const [name, processname] = useState();
    const [price, processprice] = useState();

    const save = () => {
        let newuser = [name , price]
        updatefruit(fruit => [...fruit, newuser]);
        processname("");
        processprice("")
    }

    return (
        <section>
            <h2 align="center"> Hook Home Work </h2>
            <div align="center">
                Name : <input type="text" onChange={obj => processname(obj.target.value)} value={name} /> 
               Price : <input type="text" onChange={obj => processprice(obj.target.value)} value={price}/>
               <button onClick={save}>Save</button>
            </div>
            {
               fruit.map((xfruit)=>{
                   return(
                   <p id="abc">{xfruit}</p>
                   )
               })
            }
        </section>
    )
}
export default Hookhw;