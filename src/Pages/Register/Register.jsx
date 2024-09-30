import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { FaRegEyeSlash } from "react-icons/fa6";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
const VITE_imgbb_api = import.meta.env.VITE_imgbb_api;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_imgbb_api}`;

const Register = () => {
  const { loading, createUser, updateUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const name = data?.name;
      const email = data?.email;
      const password = data?.password;
      const photo = { image: data?.photo[0] };

      // User photo upload
      const imgResponse = await axiosPublic.post(img_hosting_api, photo, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const photoURL = imgResponse.data.data.display_url;

      // Register a user or create a user as a member
      const createUserResponse = await createUser(email, password);
      console.log("User created:", createUserResponse);
      toast.success("Log in Successful!");
      navigate("/");

      // Update a user
      const updateUserResponse = await updateUser(name, photoURL);
      console.log("Profile updated:", updateUserResponse);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed!");
    }
  };

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Register Here</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Welcome! So good to have you back!
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-red-500"> </p>

          {/* User Name Here */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-gray-600 mb-2 block"></label>
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
          {/* User Photo Here */}
          <div className="space-y-2">
            <label className="text-gray-600 my-2 block">My Photo</label>
            <input
              {...register("photo")}
              name="photo"
              type="file"
              accept="image/*"
              className="block w-full border border-gray-300 px-4 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-600">Photo is required</p>
            )}
          </div>
          <div className="mt-4">
            <button
              disabled={loading}
              type="submit"
              className="block w-full py-2 text-center text-white bg-teal-500 border border-teal-500 rounded hover:bg-transparent hover:text-teal-500 transition uppercase font-roboto font-medium"
            >
              {loading ? (
                <ImSpinner9 className="animate-spin mx-auto " />
              ) : (
                "Register"
              )}
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
