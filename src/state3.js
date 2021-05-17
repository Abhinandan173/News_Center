import react, { Component } from 'react';
class Statethree extends Component {
    constructor(){
        super();
        this.state = {
            item: [
                { name: "abhi", price: 200, qty: 4 },
                { name: "ravi", price: 300, qty: 9 },
                { name: "chetan", price: 400, qty: 6 }
            ],
            newname:"mouse",
            newprice:111,
            newqty:0,
            message:""
        }
    }
        saveItem = () =>{
            let newitem = { name:this.state.newname,
                            price:this.state.newprice,
                            qty:this.state.newqty
                        };
                this.setState({
                    item:this.state.item.concat(newitem),
                    message:this.state.newname+ " added successfully",
                    newname:"",
                    newprice:"",
                    newqty:"",
                })
        }
    
        processname = (nameobj) =>{
         this.setState({
             newname:nameobj.target.value,
             message:  "item name is processing......."
         })
        }

        processprice = (nameobj) =>{
            this.setState({
                newprice:nameobj.target.value,
                message:"item price is processing......."
            })
           }

        processqty = (nameobj) =>{
            this.setState({
                newqty:nameobj.target.value,
                message:"item qty is processing......."
            })
           }

        deletitem = (itemindex) =>{
            this.state.item.splice(itemindex , 1);
            this.setState({
                item:this.state.item,
                message: "element removed successfully"
            })
        }
        
        render(){
        return (
            <div>
                <h3>{this.state.item.length}multi dimeensional array using state</h3>
                <p align="center">{this.state.message}</p>
                <table align="left" cellPadding="10">
                    <tr>
                        <th>item name</th>
                        <td><input type="text" value={this.state.newname} onChange={this.processname}/></td>
                    </tr>
                    <tr>
                        <th>price</th>
                        <td><input type="number" value={this.state.newprice} onChange={this.processprice}/></td>
                    </tr>
                    <tr>
                        <th>qty</th>
                        <td><input type="number" value={this.state.newqty} onChange={this.processqty}/></td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <button onClick={this.saveItem}>Save item</button>
                        </th>
                    </tr>
                </table>


                <table align="right" cellPadding="15">
                    <tr>
                        <th>Sl No.</th>
                        <th>Item Name</th>
                        <th>Item price</th>
                        <th>Item qty</th>
                        <th>Delet</th>
                    </tr>
                    
                        {
                            this.state.item.map((xitem, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{xitem.name}</td>
                                        <td>{xitem.price}</td>
                                        <td>{xitem.qty}</td>
                                        <td> <button onClick={this.deletitem.bind(this , index)}> Delet </button> </td>
                                    </tr>
                                )
                            })
                        }
        
                </table>
            </div>
        )
    }
}
export default Statethree;