import './App.css';
import Create from './Creact';
import Read from './Read';
import Update from './Update'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
          <div>
            <Routes>
              <Route exact path='/create' element={<Create/>} />
              <Route exact path='/read' element={<Read/>} />
              <Route exact path='/update' element={<Update/>} />
            </Routes>
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;
