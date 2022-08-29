import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
    measurementId: `${process.env.REACT_APP_MEASURE_ID}`,
}

const app = initializeApp(firebaseConfig)
getAnalytics(app)
