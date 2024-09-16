import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ProdCom = ({ product }) => {
  const {
    productImage,
    productName,
    description,
    price,
    productCreationDateTime,
    _id,
  } = product;
  return (
    <div className="col-span-1">
      <Link to={`/details/${_id}`} className="relative block border border-gray-100">
        <span className="absolute -right-px -top-px bg-rose-600 px-3 py-2 font-medium uppercase tracking-widest text-white">
          Save 10%
        </span>

        <img
          src={productImage}
          alt=""
          className="h-80 w-full border border-gray-300 object-cover"
        />

        <div className="p-4">
          <strong className="text-xl font-medium text-gray-900">
            {productName}
          </strong>

          <p className="mt-2 text-pretty text-sm text-gray-700">
            {description.slice(0, 70)}
          </p>
          <p className="mt-2 text-pretty text-gray-700">Price : {price} BDT</p>
          <small className="mt-2 text-pretty text-sm text-gray-700">
            Release Date : {productCreationDateTime}
          </small>

          <span
            className="mt-4 block rounded-md border border-indigo-900 bg-green-500 px-5 py-3 text-sm font-medium uppercase text-center tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
          >
            Details
          </span>
        </div>
      </Link>
    </div>
  );
};
ProdCom.propTypes = {
  product: PropTypes.object,
};
export default ProdCom;
