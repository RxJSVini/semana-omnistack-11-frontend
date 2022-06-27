import { GlobalStyles } from "./styles/GlobalStyles";
import { Router } from './routes';
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./contexts/Context";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <AuthContext>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Router />
      </AuthContext>
    </>
  )
}

export { App }
