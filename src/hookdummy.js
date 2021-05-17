import React, { useState } from 'react'
var item = ["aaa" , "bbb" ,"vvv"]
function Nameaa() {
    const [name, chetan] = useState(item)
    const [newname , pname] = useState()

    const save = () =>{
        chetan(name => [...name ,newname])
        pname("")
    }
    const del = (index) =>{
        name.splice(index , 1);
        chetan(name => [...name])
    }
    return (
        <div>
            <center>
                <input onChange={obj => pname(obj.target.value)} value={newname}/>
                <button onClick={save}>save</button>
                {
                name.map((xx , index)=>{
                    return(
                        <p>{xx} <button onClick={del.bind(this , index)}>delet</button></p>
                    )
                })
                }
            </center>
        </div>
    )
}
export default Nameaa;