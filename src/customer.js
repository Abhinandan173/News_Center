import react, { Component } from 'react';
class Customer extends Component {
    constructor() {
        super();
        this.state = {
            item: ["abhi", "ravi", "chetan"],
            price: [100, 200, 300, 400]
        }
    }
    render() {
        return (
            <swection>
                <h1>the items are : {this.state.item.length}</h1>
                {
                    this.state.item.map((chetan, index) => {
                        return (
                            <p key={index}>{chetan}</p>
                        )
                    })
                }
                <hr />
                <h2>these are from price list</h2>
                <p> the price list length is : {this.state.price.length}</p>
                {
                    this.state.price.map((xprice, index) => {
                        return (
                            <p key={index}>{xprice}</p>
                        )
                    })
                }
            </swection>
        )
    }
}
export default Customer;