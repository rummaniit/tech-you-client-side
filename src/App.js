import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Authprovider/Authprovider';
import { routes } from './Pages/Routes/Route';



function App() {
  let { theme, setTheme } = useContext(AuthContext)
  // const [theme, setTheme] = useState('light');
  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

      <RouterProvider router={routes}>

      </RouterProvider>

    </div>
  );
}

export default App;
