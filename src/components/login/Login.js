import { useState } from "react";
// Vendors
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";

function Login() {
  const [profile, setProfile] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const onLoginHandler = (data) => {
    delete data.check_email;
    console.log({ data });
    axios
      .post("/login", data)
      .then((res) => {
        axios.defaults.headers.common.Authorization = `Bearer ${res}`;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchProfileHandler = (data) => {
    axios
      .get(`/profile/?email=${data.check_email}`)
      .then((res) => {
        console.log(res);
        setProfile(JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onLoginHandler)}>
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
              width: "250px",
            }}
          >
            <label>Email</label>
            <input type="email" {...register("email")} />
            {errors?.email && <p>{errors?.email?.message}</p>}
          </div>
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
              width: "250px",
            }}
          >
            <label>Password</label>
            <input type="password" {...register("password")} />
            {errors?.password && <p>{errors?.password?.message}</p>}
          </div>
          <input type="submit" />
        </form>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Get User</h1>
        <h4>
          Note this only works if you have the logged in before because the
          token needs to be set in the header of the rest call
        </h4>
        <form
          onSubmit={handleSubmit(fetchProfileHandler)}
          style={{ display: "flex", width: "555px", flexDirection: "column" }}
        >
          <input type="email" {...register("check_email")} />
          <button>Request Profile</button>
          <code>{profile}</code>
        </form>
      </div>
    </>
  );
}

export default Login;
