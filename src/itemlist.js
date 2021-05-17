import React, { Component } from 'react';

class Itemlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="iteminfo">
              <h3>{this.props.itemname}</h3>
              <p>Price : {this.props.price}</p>
              <p>Qty : {this.props.qty}</p>
              <p>Price : {this.props.vendor}</p>
            </div>
        )
    }
}

export default Itemlist;

  {/* <table>
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> price </th>
                            <th> quantity </th>
                            <th> Vendor </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map((xuser, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{xuser.name}</td>
                                        <td>{xuser.price}</td>
                                        <td>{xuser.qty}</td>
                                        <td>{xuser.vendor}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
