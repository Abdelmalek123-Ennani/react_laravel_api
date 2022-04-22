import Students from './pages/Students';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import { BrowserRouter as Router , Route , Routes as Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
         <Route exact path="/" element={<Students />} />
         <Route path='add-student' element={<AddStudent />} />
         <Route path="edit-student/:id" element={<EditStudent />} />
      </Switch>
    </Router>
  );
}

export default App;
