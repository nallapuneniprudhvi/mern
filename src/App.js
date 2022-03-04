// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Login from './components/login';
import Signup from './components/signup';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Hell0</h1>
    //   </header>
    // </div>
    <>
      <Navbar />
      {/* <Home />
      <About />
      <Login />
      <Signup /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Route exact path="/" >
        <Home />
      </Route> */}
      {/* <Route path='/about'>
        <About />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route> */}
    </>
  );
}

export default App;
