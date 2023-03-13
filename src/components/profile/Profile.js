// Vendors
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string(),
});

function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const fetchProfileHandler = (data) => {
    axios
      .post("/profile", data)
      .then((res) => {
        axios.defaults.headers.common.Authorization = `Bearer ${res}`;
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
      <h1>Get User</h1>
      <h4>Note this only works if you have the logged in before</h4>
      <form onSubmit={handleSubmit(fetchProfileHandler)}>
        <input type="email" {...register("email")} />
        <button>Request Complete Profile</button>
      </form>
    </div>
  );
}

export default App;
