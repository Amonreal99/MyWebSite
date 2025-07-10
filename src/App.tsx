import Home from '../src/Components/HomePage/Home'
import Contact from './Components/Contact/Contact';
import Project from './Components/ProjectsPage/Project';
import Game from './Components/Game/Game';
import Resume from './Components/Resume/Resume'
import {Routes, Route} from 'react-router-dom';


function App(){
    return(
        <Routes>
            <Route path ="/"element={<Home />}/>
            <Route path ="/contact"element={<Contact />}/>
            <Route path ="/project"element={<Project/>}/>
            <Route path ="/game"element={<Game/>}/>
            <Route path="/resume"element={<Resume/>}/>
        </Routes>

    )
}export default App;