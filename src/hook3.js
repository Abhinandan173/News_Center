import react , {useState} from 'react'
const Hoookthree = () => {
    const user = [{ name: "ramesh", mobile: 9886543810, age: "20 years" }];
    const [userlist, updateuser] = useState(user);
    const [fullname, processname] = useState();
    const [mobile, processmobile] = useState();
    const [age, processage] = useState();
    const [ message , updatemessage] = useState ();

    const save = () => {
        let newuser = { name: fullname, mobile: mobile, age: age }
        updateuser(userlist => [...userlist, newuser]);
        processname("");
        processmobile("");
        processage("");
        updatemessage("user info added successfully")
    }
    
    const delitem = (index) =>{
        userlist.splice(index, 1);
        updateuser(userlist => [...userlist]);
        updatemessage("user info deleted successfully")
    }

    return (
        <section>
            <h2 align="center"> Multi dimensional array using Hoooks</h2>
            <p align="center"> { message} </p>
            <table align="left" cellpadding="15" bgcolor="skyblue">
                <tr>
                    <th>Full Name</th>
                    <td><input type="text" onChange={obj => processname(obj.target.value)} value={fullname} /></td>
                </tr>
                <tr>
                    <th>Mobile</th>
                    <td><input type="text" onChange={obj => processmobile(obj.target.value)} value={mobile} /></td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td><input type="text" onChange={obj => processage(obj.target.value)} value={age} /></td>
                </tr>
                <tr>
                    <th colSpan="2">
                        <button id="btn" onClick={save}>Save</button>
                    </th>
                </tr>
            </table>

            <table align="right" cellPadding="16" border="4">
                <thead>
                    <tr>
                        <th>index</th>
                        <th>Full Name</th>
                        <th>Mobile No.</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((xuser, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{xuser.name}</td>
                                    <td>{xuser.mobile}</td>
                                    <td>{xuser.age}</td>
                                    <td><button id="btn" onClick={delitem.bind (this , index)}>Delet</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Hoookthree;