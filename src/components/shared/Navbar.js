import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div
      styles={{
        display: "flex",
        justifyContent: "space-around",
        margin: "0px 60px",
      }}
    >
      <NavLink href="/">Register</NavLink>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/get">Profile</NavLink>
      <NavLink href="/update">Update Profile</NavLink>
    </div>
  );
}
export default Navbar;
