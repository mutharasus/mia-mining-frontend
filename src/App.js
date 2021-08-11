import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import TransactionsList from "./components/transactions-list.component"
import RetrieveCharts from "./components/charts.component"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component = {TransactionsList} />
        <Route path="/charts" component = {RetrieveCharts} />
      </div>
      
    </Router>
  );
}

export default App;
