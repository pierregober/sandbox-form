import { useState } from "react";

// Vendors
import axios from "axios";
import { useForm } from "react-hook-form";

function Login() {
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const onLoginHandler = (data) => {
    delete data.check_email;
    delete data.delete_profile;
    delete data.update_name;
    delete data.update_email;
    delete data.update_password;
    console.log({ data });
    axios
      .post("/login", data)
      .then((res) => {
        axios.defaults.headers.common.Authorization = `Bearer ${res}`;
        setToken(`Bearer ${res}`);
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

  const updateProfile = (data) => {
    delete data.email;
    delete data.password;
    delete data.name;
    delete data.check_email;
    delete data.delete_profile;

    const body = {
      name: data.update_name,
      email: data.update_email,
      password: data.update_password,
    };
    axios
      .put("/profile", body)
      .then((res) => {
        console.log(res);
        setUpdatedProfile(JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProfileHandler = (data) => {
    axios
      .delete(`/profile/?email=${data.delete_profile}`)
      .then((res) => {
        console.log(res);
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
            <input
              placeholder="Enter Email"
              type="email"
              {...register("email")}
            />
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
      <code>{token}</code>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>
          Note for the following CRUD under this message this only works if you
          have the logged in before because the token needs to be set in the
          header of the rest call
        </h4>
        <h1>Get User</h1>

        <form
          onSubmit={handleSubmit(fetchProfileHandler)}
          style={{ display: "flex", width: "555px", flexDirection: "column" }}
        >
          <input
            placeholder="Enter Email"
            type="email"
            {...register("check_email")}
          />
          <button>Request Profile</button>
          <code>{profile}</code>
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
        <h1>Update Profile</h1>
        <h5>Has to be the same email unless it errors out</h5>
        <form onSubmit={handleSubmit(updateProfile)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
            }}
          >
            <label>Name</label>
            <input type="text" {...register("update_name")} />
            {errors?.name && <p>{errors?.name?.message}</p>}
          </div>
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
              width: "250px",
            }}
          >
            <label>Email</label>
            <input
              placeholder="Enter Email"
              type="email"
              {...register("update_email")}
            />
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
            <input type="password" {...register("update_password")} />
            {errors?.password && <p>{errors?.password?.message}</p>}
          </div>
          <input type="submit" />
        </form>
        <code>{updatedProfile}</code>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>DELETE User</h1>

        <form
          onSubmit={handleSubmit(deleteProfileHandler)}
          style={{ display: "flex", width: "555px", flexDirection: "column" }}
        >
          <input
            placeholder="Enter Email"
            type="email"
            {...register("delete_profile")}
          />
          <button>DELETE Profile</button>
          <code>{profile}</code>
        </form>
      </div>
    </>
  );
}

export default Login;
