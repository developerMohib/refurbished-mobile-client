import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { FaRegEyeSlash } from "react-icons/fa6";
const Register = () => {
  const { loading } = useAuth();
  const [showPass, setShowPass] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Register Here</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Welcome! So good to have you back!
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-red-500"> ei khane ki</p>
          <div className="space-y-2">
            <div>
              <label
                htmlFor="name"
                className="text-gray-600 mb-2 block"
              ></label>
              Your Name
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Your Name Here"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600">Name is required</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <label
                htmlFor="email"
                className="text-gray-600 mb-2 block"
              ></label>
              Email address
              <input
                name="email"
                type="email"
                placeholder="youremail.@domain.com"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                {...register("mail", { required: "Email Address is required" })}
              />
              {errors.mail && (
                <p className="text-red-600">{errors.mail?.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div>
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
                        pattern:
                          /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                      })}
                      type={showPass ? "password" : "text"}
                      name="password"
                      id="password"
                      placeholder="*****"
                      className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                    />

                <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300">
                  {showPass ? <LuEye className="text-2xl cursor-pointer" onClick={() => setShowPass(!showPass)}/> : <FaRegEyeSlash className="text-2xl cursor-pointer" onClick={() => setShowPass(!showPass)}/>}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
            disabled={loading}
              type="submit"
              className="block w-full py-2 text-center text-white bg-teal-500 border border-teal-500 rounded hover:bg-transparent hover:text-teal-500 transition uppercase font-roboto font-medium"
            >
              {loading ? <ImSpinner9 className="animate-spin"/> : 'Register'}              
            </button>
            <div className="flex gap-2 pt-5">
              <p className="text-gray-600 text-sm">Already have an account ?</p>
              <Link className="text-gray-600 text-sm underline" to="/login">
                Login Now
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
