import react, { Component } from 'react';
class Projectlist extends Component {
    constructor() {
        super();
        this.myproject = [
            { name: "BUILDING A APP", cost: 989898, client: "TCS" },
            { name: "ROAD", cost: 4444, client: "GOVT" },
            { name: "HOME CONSTRUCTING", cost: 90000, client: "CIVIL" },
            { name: "LEAD DISTRUBUTION", cost: 23000, client: "LEAD" },
            { name: "CAR PARTS DESIGNING", cost: 73000, client: "MARUTI" }
        ]
    }
    render() {
        return (
            <section>
                <h1 align="center"> Project list : {this.myproject.length}</h1>
                <table align="center" cellpadding="15">
                    <thead>
                        <tr bgcolor="orange">
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>client</th>
                            <th>country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.myproject.map((projects, index) => {
                                return (
                                    <tr key={index} align="center">
                                        <td>{index + 1}</td>
                                        <td>{projects.name}</td>
                                        <td> {projects.cost}</td>
                                        <td>{projects.client}</td>
                                        <td>India</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        )
    }
}

export default Projectlist;