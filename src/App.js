import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  const role = 'admin'

  return (
    <BrowserRouter>
      {
        role === 'admin' ? <AdminRoutes /> : <PublicRoutes />
      }
    </BrowserRouter>
  );
}

export default App;
