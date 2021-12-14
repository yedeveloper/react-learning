import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './home'
import Login from './login'
import MiddleAuth from './middleauth'
import About from './about'

function App() {

  const isAuth = localStorage.getItem('isAuth');

  return (
    <div className="App">
      <h1>Bienvenido!</h1><br />
      <Routes>
          <Route path="/" element={
            <main style={{ padding: "1rem" }}>
            <p>BIENVENIDO A NUESTRO PROYECTO</p>
          </main>
          } />
           <Route path="/inicio-sesion" element={<Login />} />
           <Route path="/home" element={
             <MiddleAuth>
               <Home />
             </MiddleAuth>
           }></Route>
           <Route path="/about" element={
             <MiddleAuth>
               <About />
             </MiddleAuth>
           } />
           <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404 NOT FOUND</p>
                </main>
              }
            />
      </Routes>
    </div>
  );
}

export default App;
