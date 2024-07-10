import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import './index.scss';

function Layout() {
    return (
      <>
          <Sidebar/>
           {/* <Header/> */}
          <Outlet/>
          {/* <Footer/>  */}
      </>
    )
  }
  
  export default Layout