import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import {RootState} from './store.ts'
import { increment} from './store/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import UsersList from './UsersList.tsx'
import { Button } from '@mui/material'
import ThemeToggle from './ThemeToggle.tsx'

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => dispatch(increment())}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UsersList />
      <ThemeToggle />
    </>
  )
}

export default App
