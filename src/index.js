import React from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import {GoogleOAuthProvider} from "@react-oauth/google"
import App from './components/app/App'
import store from './redux/store/store'




const root = ReactDOM.createRoot(document.getElementById('root'))
const googleClientId = "945121111258-lo1thrhvubsum7u9ah4m6a4p0amf3g22.apps.googleusercontent.com"

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <GoogleOAuthProvider clientId={googleClientId}>
                <App />
            </GoogleOAuthProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

