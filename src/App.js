
import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-slate-500 text-center'>
   <RouterProvider router={router}>

   </RouterProvider>
   <Toaster></Toaster>

    </div>
  );
}

export default App;
