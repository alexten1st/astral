import { BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";

import CardList from "./components/CardList/CardList";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import './App.css';
function App() {

  return (
    <div className="body-container container">
      <Router>
        <Header />
        <div className="main-container">
        <Switch>
          <Route path="/login" element= {<Login />}/>
          <Route path="/cards" element={<CardList/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Switch>
        </div>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
