import {NavLink} from "react-router-dom";


function AppNavigation(props) {

  const {phrase} = props

  return (
    <nav>
      <NavLink to="/">{phrase["To do list"]}</NavLink>
      <NavLink to="/weather">{phrase["Weather forecast"]}</NavLink>
    </nav>
  );
}

export default AppNavigation;