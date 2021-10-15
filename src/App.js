import logo from './logo.svg';
import './App.css';
import Cource from './component/Cource/Cource';
import Home from './component/Home/Home'
import About from './component/About/About'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import Owner from './component/Owner/Owner';



/*========================Browser Router=========================*/
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/cource">
            <Cource></Cource>
          </Route>
          <Route path="/owner">
            <Owner></Owner>
          </Route>
          <Route>
            <NotFound>
            </NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>


    </div>
  );
}

export default App;
