import react from 'react';
import { Link } from 'react-router-dom';
const Myheader = () => {
   return (
      <section>
         <ul id="topnav">
            <li> <Link to="/" className="mylink"> home </Link></li>
            <li> <Link to="/hookdummy" className="mylink"> hookdummy </Link></li>
            <li> <Link to="/intrvw" className="mylink"> Interview </Link></li>
            <li>  <Link to="/user" className="mylink"> user </Link></li>
            <li>  <Link to="/product" className="mylink"> product </Link></li>
            <li>  <Link to="/customer" className="mylink"> customer </Link></li>
            <li>  <Link to="/book" className="mylink"> books </Link></li>
            <li>  <Link to="/project" className="mylink"> project </Link></li>
            <li>  <Link to="/state1" className="mylink"> State-1 </Link></li>
            <li>  <Link to="/state2" className="mylink"> state-2 </Link></li>
            <li>  <Link to="/state3" className="mylink"> statet-3 </Link></li>
            <li>  <Link to="/state4" className="mylink"> state-4 </Link></li>
            <li>  <Link to="/api1" className="mylink"> Api-one </Link></li>
            <li>  <Link to="/api2" className="mylink"> Api-Hw </Link></li>
            <li>  <Link to="/api22" className="mylink"> Api-Two </Link></li>
            <li>  <Link to="/api3" className="mylink"> Api-Three </Link></li>
            <li>  <Link to="/crud" className="mylink"> Crud </Link></li>
            <li>  <Link to="/myitem" className="mylink"> props </Link></li>
            <li>  <Link to="/hook1" className="mylink"> Hook-1 </Link></li>
            <li>  <Link to="/hook2" className="mylink"> Hook-2 </Link></li>
            <li>  <Link to="/hook3" className="mylink"> Hook-3 </Link></li>
            <li>  <Link to="/hookHW1" className="mylink">Hook-HW</Link></li>
            <li>  <Link to="/hookHW2" className="mylink">home-work</Link></li>
            <li>  <Link to="/0/hook4" className="mylink">hook-4</Link></li>
            <li>  <Link to="/0/hook5" className="mylink">hook-5</Link></li>
            <li>  <Link to="/form" className="mylink">validation</Link></li>
            <li>  <Link to="/ddd" className="mylink">MyPage</Link></li>
            <li>  <Link to="/zz" className="mylink">boot</Link></li>

            <li>  <a className="mylink" onClick={logout}>
               Welcome - {localStorage.getItem("name")} - Logout
               </a>
            </li>

         </ul>
      </section>
   );
}

const logout = () => {
   localStorage.clear();
   window.location.reload();
}

export default Myheader;