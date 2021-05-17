import react from 'react'
import { HashRouter, Route } from 'react-router-dom';
import Userlist from './user';
import Interview from './intrvw';
import Myheader from './header';
import Myproduct from './product';
import Myhome from './home';
import Customer from './customer';
import Bookv from './book'
import Projectlist from './project'
import Stateone from './state1';
import Statetwo from './state2'
import Statethree from './state3'
import Statefour from './state4'
import apione from './api1'
import Apihw from './api2'
import Apitwo from './api22'
import Apithree from './api3'
import crud from './crud'
import myitem from './myitem'
import Hookone from './hook1'
import Hooktwo from './hook2'
import Hookthree from './hook3'
import HookHM from './hookHW1'
import homework from './hookHW2'
import Hookfour from './hook4'
import Hookfive from './hook5'
import Form from './form';
import Login from './login'
import DDD from './ddd'
import ZZ from './zz'
import Nameaa from './hookdummy';



function App() {
  if (localStorage.getItem("userid") == null) {
    return <Login />
  } else {
    return (
      <HashRouter>
        <Myheader />
        <Route exact path="/" component={Myhome} />
        <Route path="/intrvw" component={Interview} />
        <Route path="/hookdummy" component={Nameaa} />
        <Route path="/ddd" component={DDD} />
        <Route path="/zz" component={ZZ} />
        <Route path="/user" component={Userlist} />
        <Route path="/product" component={Myproduct} />
        <Route path="/customer" component={Customer} />
        <Route path="/book" component={Bookv} />
        <Route path="/project" component={Projectlist} />
        <Route path="/state1" component={Stateone} />
        <Route path="/state2" component={Statetwo} />
        <Route path="/state3" component={Statethree} />
        <Route path="/state4" component={Statefour} />
        <Route path="/api1" component={apione} />
        <Route path="/api22" component={Apitwo} />
        <Route path="/api2" component={Apihw} />
        <Route path="/api3" component={Apithree} />
        <Route path="/crud" component={crud} />
        <Route path="/myitem" component={myitem} />
        <Route path="/hook1" component={Hookone} />
        <Route path="/hook2" component={Hooktwo} />
        <Route path="/hook3" component={Hookthree} />
        <Route path="/hookHW1" component={HookHM} />
        <Route path="/hookHW2" component={homework} />
        <Route path="/:id/hook4" component={Hookfour} />
        <Route path="/:proid/hook5" component={Hookfive} />
        <Route path="/form" component={Form} />


      </HashRouter>
    );
  }
}

export default App;
