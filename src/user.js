import react from 'react';
import AAA from './itemlist'
const user = ["abhi", "ravi", "chetan", "sandy", "virat"]

function userlist() {
    return (
        <div>
            <h2 align="center">available users : {user.length}</h2>
            <table align="center" cellPadding="12">
                <thead bgcolor="orange">
                <tr>
                    <th>index</th>
                    <th> Name</th>
                    <th>button</th>
                </tr>
                </thead>
                <tbody>
                    {
                        user.map((xuser , index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{xuser}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <hr/>
            <AAA
            itemname = "laptop"
            price = "40000"
            quantity = "3"
            supplier = "dell"
            />
        </div>
    )
};
export default userlist;