import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
      <>
      <h1>WELCOME USER</h1>
        <nav>
          <ul>
          <li>
              <Link to="/home">HOME</Link><br></br><br></br>
            </li>
            <li>
              <Link to="/login">LOGIN</Link><br></br><br></br>
            </li>
            <li>
              <Link to="/signup">SIGNUP</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;