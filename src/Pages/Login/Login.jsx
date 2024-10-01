import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { FaRegEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { loading, setLoading, loginEmailPass, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const email = data?.email;
      const password = data?.password;

      // Log in a user as a member
      const createUserResponse = await loginEmailPass(email, password);
      console.log("User created:", createUserResponse);
      toast.success("Log in Successful!");
      navigate(location.state ? location.state : "/");
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed!");
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await loginWithGoogle();
      console.log(result.user);
      navigate(location.state ? location.state : "/");
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have logged in successfully!",
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Welcome! So good to have you back!
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-red-500"></p>

          {/* User Email Here */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-600 mb-2 block"></label>
            Email address
            <input
              name="email"
              type="email"
              placeholder="youremail.@domain.com"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.mail && (
              <p className="text-red-600">{errors.mail?.message}</p>
            )}
          </div>

          {/* User Password Here */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-gray-600 mb-2 block"
            ></label>
            Password
            <div className="relative">
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  // pattern:
                  //   /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                })}
                type={showPass ? "password" : "text"}
                name="password"
                id="password"
                placeholder="*****"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}

              <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300">
                {showPass ? (
                  <LuEye
                    className="text-2xl cursor-pointer"
                    onClick={() => setShowPass(!showPass)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="text-2xl cursor-pointer"
                    onClick={() => setShowPass(!showPass)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              disabled={loading}
              type="submit"
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              {loading ? (
                <ImSpinner9 className="animate-spin mx-auto " />
              ) : (
                "Login"
              )}
            </button>
            <p className="text-center my-3">Or</p>

            <button
              onClick={handleGoogleLogin}
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Login with google
            </button>
            <div className="flex gap-2 pt-5">
              <p className="text-gray-600 text-sm">Dont have an account?</p>
              <Link className="text-gray-600 text-sm underline" to="/register">
                Register here
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
