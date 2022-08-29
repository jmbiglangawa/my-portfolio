import { createRoot } from 'react-dom/client'
import App from './App'
import './firebase.config.js'
import 'animate.css'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App />)

// reportWebVitals(console.log)
