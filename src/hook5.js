import react, { useState, useEffect } from 'react';
import {Link , useParams} from 'react-router-dom';
const myitem = {"name":"" , "price":"", "qty":"", "vendor":""}
const Hookfive = () => {
    const [citylist, updatecity] = useState([]);
    const [productlist , updateproduct] = useState ([myitem]);

    const getcity = () => {
        let url = "http://firstenquiry.com/api/react/live/allcity.php"
        fetch(url).then(response => response.json())
        .then(result => updatecity(result))
    }

    const getitem = () => {
        let url = "product.json"
        fetch(url).then(response => response.json()).then(result => updateproduct(result))
    }

    useEffect(() => {
        getcity();
        getitem();
    },[true])
   const {proid} = useParams();
    return (
        <section>
            <h2 align="center"> use effect to raead data from local & server json</h2>
            <fieldset>
                <legend>Available Products: {productlist.length}</legend>
                <br/>
                {
                    productlist.map((xitem , index)=>{
                        return(
                        <Link className="userinfo" to={`/${index}/hook5`}>{xitem.name}</Link>
                        )
                    })
                }
                <br/><br/>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <td>{productlist[proid].name}</td>
                        </tr>
                        <tr>
                            <th>Product price</th>
                            <td>{productlist[proid].price}</td>
                        </tr>
                        <tr>
                            <th>Product qty</th>
                            <td>{productlist[proid].qty}</td>
                        </tr>
                        <tr>
                            <th>Product supplier</th>
                            <td>{productlist[proid].vendor}</td>
                        </tr>
                    </thead>
                </table>
                <br/><br/>
            </fieldset>
            <br/><br/>
            <fieldset>
                <legend>Available City : {citylist.length}</legend>
                {
                    citylist.map((xcity, index) => {
                        return (
                            <p key={index} className="city">
                                {xcity.id}) {xcity.name}
                            </p>
                        )
                    })
                }
            </fieldset>
        </section>
    )
}
export default Hookfive;