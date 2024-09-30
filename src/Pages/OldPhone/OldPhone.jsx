import { Link } from "react-router-dom";
import Loader from "../../Component/Loader/Loader";
import useAuth from "../../Hooks/useAuth";
import usePhone from "../../Hooks/usePhone";

const OldPhone = () => {
  const { loading } = useAuth();
  const { phones, isLoading } = usePhone();

  const oldPhone = phones?.filter((mobile) => mobile.phoneRole === "old");

  if (isLoading || loading) {
    return <Loader />;
  }

  if (!oldPhone || oldPhone.length === 0) {
    return <p>No new phones available.</p>;
  }

  return (
    <div className="md:grid grid-cols-4 gap-4 md:mt-14">
      {oldPhone?.map((product) => (
        <div key={product._id} className="col-span-1">
          <Link
            to="/"
            className="relative block rounded-tr-3xl border border-gray-100"
          >
            <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-3 py-2 font-medium uppercase tracking-widest text-white">
              Save 10%
            </span>

            <img
              src={product.productImage}
              alt=""
              className="h-80 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-300 object-cover"
            />

            <div className="p-4 text-center">
              <strong className="text-xl font-medium text-gray-900">
                {product.productName}
              </strong>

              <p className="mt-2 text-pretty text-gray-700">
                {product.description.slice(0, 70)}
              </p>
              <p className="mt-2 text-pretty text-gray-700">
                Price : {product.price} BDT
              </p>

              <span className="mt-4 block rounded-md border border-indigo-900 bg-green-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
                More
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OldPhone;
