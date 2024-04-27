import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import LandingPage from "./components/landing/LandingPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/website" element={<LandingPage/>}/>

                {/* Add the wildcard route for unmatched paths */}
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </Router>
    );
}

export default App;
