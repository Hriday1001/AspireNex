import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

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