import react, { Component } from 'react';
import Itemlist from './itemlist';
import axios from 'axios';
class myitem extends Component {
    constructor() {
        super();
        this.state = {
            productlist: []
        }
    }
    getproduct = () => {
        axios.get("product.json").then(godavn => {
            this.setState({
                productlist: godavn.data
            })
        })
    }
    componentDidMount() {
        this.getproduct();
    }
    render() {
        return (
            <div className="container">
                <h3 align="center">Component intraction , props , component , re-use example</h3>
                <h3 align="center"> All Are : {this.state.productlist.length}</h3>
                {
                    this.state.productlist.map((xproduct, index) => {
                        return (
                            <Itemlist
                                key={index}
                                itemname={xproduct.name}
                                price={xproduct.price}
                                quantity={xproduct.qty}
                                supplier={xproduct.vendor}
                            />
                        )
                    })
                }
{/*             
                // <Itemlist products={this.state.productlist}/> */}
            </div>
        )
    }
}
export default myitem;