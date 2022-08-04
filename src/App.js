import './App.scss'
import Home from './components/Home'

const App = () => {
    return (
        <div className="App">
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter> */}
            <Home />
        </div>
    )
}

export default App
