import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CreateExercise from './pages/CreateExercise';
import EditExercise from './pages/EditExercise';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/home" exact>
          <HomePage/>
        </Route>
        <Route path="/create-exercise" exact>
          <CreateExercise />
        </Route>
        <Route path="/exercises/:id/edit" exact>
          <EditExercise />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
