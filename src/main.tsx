import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import {store} from './store.ts'
import { Provider } from 'react-redux'
import Layout from './Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>,
)
