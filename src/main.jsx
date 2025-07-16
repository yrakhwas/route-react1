import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import '@ant-design/v5-patch-for-react-19';
// import { CounterProvider } from './store/reducers/counter.reducer.jsx'
// import { store } from './store/store.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './store/root.reducer.jsx';

export const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
{/* <CounterProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </CounterProvider> */}
    </Provider>
    
  </StrictMode>,
)
