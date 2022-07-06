import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
