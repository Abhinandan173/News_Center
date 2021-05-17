import react , {useState} from 'react';
const Hookone = () =>{
    //const [ var/array , FunctionName] = useState(initial value)
    //const [ currentval , updateval] = useState(initial value)
     const [ counter , updatecounter] = useState(1);
     const [ message , updatemessage] = useState();

     const one = () =>{
         if(counter <100){
          updatecounter ( counter + 1);
         }else{
             updatemessage("Sorry Max Is 100 You Are Out Of Range")
         }
     }
     const two =() =>{
         updatecounter ( counter - 1);
         if(counter<=100){
             updatemessage("")
         }
     }
    return(
        <section>
            <h1 align="center"> Hook simple example </h1>
            <h2 align="center"> The Value is :  {counter} </h2>
            <div align="center">
                <button onClick={one} id="btn"> + by 5</button>
                <button onClick={two} id="btn"> - by 5</button>
                <p align="center"> {message} </p>
            </div>
        </section>
    );
}
export default Hookone;