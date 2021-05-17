import react from 'react'

const Book=["java" , "php" , "anguler" , "html"];

function Bookv(){
    return(
        <swection>
            <h1>book component working</h1>
            <p>this is frm book</p>
            <table align="center" border="4" cellPadding='20'>
                <tr bgcolor="yellowgreen">
                    <th>Index</th>
                    <th>Book Name</th>
                    <th>Action</th>
                </tr>
            {
                Book.map((xbook , index)=>{
                    return(
                        <tr key={index}>
                            <td>{index + 1 }</td>
                            <td>{xbook}</td>
                            <td><button>Delet</button></td>
                        </tr>
                    )
                })
            }
            </table>
        </swection>
    );
}

export default Bookv;