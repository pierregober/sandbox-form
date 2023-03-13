// Vendors
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const SignupSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string(),
  name: yup.string().required(),
});

function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onLoginHandler = (data) => {
    axios
      .post("/login", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
  );
}

export default App;
