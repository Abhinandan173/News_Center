import react, { Component } from 'react';
import axios from 'axios';
class apione extends Component {
    constructor() {
        super();
        this.state = {
            productlist: []
        }
    }
    getdata = () => {
        axios.get("product.json").then(responce=>{
            this.setState({
                productlist : responce.data
            })
        })
    }

    render() {

        return (
            <div className="container">
                <h3 align="center">Read data from local json file usin axios api</h3>
                <h1 align="center">total products  : {this.state.productlist.length}</h1>
                <p align="center">
                    <button onClick={this.getdata}> Show My Product</button>
                </p>
                <table align="center" cellpadding="15" border="4">
                    <tr>
                        <th>product id</th>
                        <th>Product name</th>
                        <th>Product Price</th>
                        <th>Product qty</th>
                        <th>Supplier</th>
                    </tr>
                    {
                        this.state.productlist.map((row , index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{row.name}</td>
                                    <td>{row.price}</td>
                                    <td>{row.qty}</td>
                                    <td>{row.vendor}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}

export default apione;