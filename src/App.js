import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Route';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider';
import { Toaster } from 'react-hot-toast';

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div className="App" id={theme}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
