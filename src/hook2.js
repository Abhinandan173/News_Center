import React, { useState } from 'react';
function Hooktwo() {
    const [item, updateitem] = useState(["apple", "banana", "chikku", "orange", "mango"]);
    const [message, updatemessage] = useState()
    
    const deletitem = (index) => {
        updatemessage(item[index] + "  removed from list");
        item.splice(index, 1);
        updateitem(item => [...item]); //to update available item in states
    }
  
    const [newitem, processitem] = useState();

    const saveitem = () => {
        updateitem(item => [...item, newitem]);  //( ... ) => object expression to be expanded wherever placed.
        updatemessage(newitem + " added in list");
        processitem("");
    }
    return (
        <section>
            <h2 align="center"> Single Dimensional Array Manipulation </h2>
            <p align="center"> {message} </p>
            {/* kkkkk */}
            <table align="left" cellpadding="20" bgcolor="pink">
                <tr>
                    <th>New Item</th>
                    <td> <input type="text"
                        onChange={obj => processitem(obj.target.value)}
                        value={newitem}/>
                    </td>
                </tr>
                <tr>
                    <th colSpan="2">
                        <button id="btn" onClick={saveitem}>Save</button>
                    </th>
                </tr>
            </table>

            <table align="center" cellpadding="10" border="4">
                <thead>
                    <tr>
                        <th>Item Index</th>
                        <th>Item Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map((xitem, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{xitem}</td>
                                    <td>
                                        <button id="btn" onClick={deletitem.bind(this, index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Hooktwo;