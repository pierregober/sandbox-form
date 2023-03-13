function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "0px 60px",
      }}
    >
      <a href="/">Register</a>
      <a href="/login">Login</a>
      <a href="/get">Profile</a>
      <a href="/update">Update Profile</a>
    </div>
  );
}
export default Navbar;
