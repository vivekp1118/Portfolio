import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { MobileProvider } from './Utils/Context'
import { AnswerBoxProvider } from "./AnswerBoxContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MobileProvider>
      <React.StrictMode>
        <AnswerBoxProvider>
          <App />
        </AnswerBoxProvider>
      </React.StrictMode>
    </MobileProvider>
  </BrowserRouter>
)
