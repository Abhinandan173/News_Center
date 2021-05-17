import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'
const user = [
    { name: "abhi", mobile: 988857474, city: "benglore", age: "22 years", pic: "1.jpg" },
    { name: "ravi", mobile: 93232474, city: "kudachi", age: "23 years", pic: "2.jpg" },
    { name: "ramesh", mobile: 9888522274, city: "chinchali", age: "25 years", pic: "3.jpg" },
    { name: "chetan", mobile: 9000857474, city: "ugar", age: "22 years", pic: "1.jpg" },
    { name: "virat", mobile: 898957474, city: "chinchali", age: "28 years", pic: "2.jpg" },
    { name: "rohil", mobile: 762357474, city: "gundawad", age: "24 years", pic: "3.jpg" },
    { name: "rahul", mobile: 6548857474, city: "shiragur", age: "26 years", pic: "1.jpg" }
];

const Hookfour = () => {
    const [userlist, updateuser] = useState(user);
    const { id } = useParams();
    return (
        <section>
            <h2 align="center"> useParams use to pass data from url as query string</h2>
            <h1 align="center"> the url value is : {id}</h1>
            <div align="center">
                {
                    userlist.map((xuser, index) => {
                        return (
                            <Link className="userinfo" to={`/${index}/hook4`}>{xuser.name}</Link>
                        )
                    })
                }
            </div>
            <table align="center" cellpadding="15" style={{marginTop:"20px"}}>
                <caption> <h2> About {userlist[id].name}</h2></caption>
                <tr valign="top">
                    <td rowSpan="4"> <img src={userlist[id].pic} height="200px" width="200px"/></td>
                    <td><b>Full Name:</b></td>
                    <td> {userlist[id].name}</td>
                </tr>
                <tr>
                    <td><b>Age :</b></td>
                    <td> {userlist[id].age}</td>
                </tr>
                <tr>
                    <td><b>Mobile :</b></td>
                    <td> {userlist[id].mobile}</td>
                </tr> 
                <tr>
                    <td><b>City :</b></td>
                    <td> {userlist[id].city}</td>
                </tr>
            </table>
        </section>
    )
}
export default Hookfour;
