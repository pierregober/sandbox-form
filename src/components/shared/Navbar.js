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
    </div>
  );
}
export default Navbar;
