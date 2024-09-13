import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const ProdCom = ({ product }) => {
  const {
    productImage,
    productName,
    description,
    price,
    productCreationDateTime,
  } = product;
  return (
    <div className="col-span-1">
      <Link
        to="/"
        className="relative block rounded-tr-3xl border border-gray-100"
      >
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-3 py-2 font-medium uppercase tracking-widest text-white">
          Save 10%
        </span>

        <img
          src={productImage}
          alt=""
          className="h-80 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-300 object-cover"
        />

        <div className="p-4 text-center">
          <strong className="text-xl font-medium text-gray-900">
            {productName}
          </strong>

          <p className="mt-2 text-pretty text-gray-700">
            {description.slice(0, 70)}
          </p>
          <p className="mt-2 text-pretty text-gray-700">Price : {price} BDT</p>
          <small className="mt-2 text-pretty text-sm text-gray-700">
            Release Date : {productCreationDateTime}
          </small>

          <span className="mt-4 block rounded-md border border-indigo-900 bg-green-500 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
            More
          </span>
        </div>
      </Link>
    </div>
  );
};
ProdCom.propTypes = { 
    product : PropTypes.object ,
}
export default ProdCom;
