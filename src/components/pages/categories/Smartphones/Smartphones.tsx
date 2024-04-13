import React, { useState, useEffect } from "react";
import {
  FaBalanceScaleLeft,
  FaRegHeart,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

// export default function Smartphones(data) {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products/category/smartphones")
//       .then((res) => {
//         console.log("XABAR", res.data.products);
//         setProducts(res.data.products);
//       })
//       .catch((err) => {
//         console.log("ERROR MESSAGE", err);
//       });
//   }, [data]);

//   return (
//     <div className="container">
//       <h3 className="flex justify-center gap-5 items-center mt-12">
//         {products.map((el) => (
//           <Link to="/SmartphonesInfo">
//             <div
//               key={el.id}
//               className="bg-white border border-gray-300 px-14 py-8 relative rounded-md"
//             >
//               <img src={el.thumbnail} className="w-[170px] h-[90px]" alt="" />
//               <div className="flex gap-2 items-center top-3 absolute right-2">
//                 <FaBalanceScaleLeft className="text-gray-600" />
//                 <FaRegHeart className="text-gray-600" />
//               </div>
//               <p className="px-2 py-1 rounded-xl text-[14px] font-bold text-white bg-[#FF0000] top-2 left-2 absolute">
//                 20%
//               </p>
//               <p className="text-gray-300 font-semibold pt-8">{el.brand}</p>
//               <h4 className="font-semibold">{el.title}</h4>
//               <div className="flex gap-3 items-center">
//                 <FaStar className="text-yellow-400" />
//                 <FaStar className="text-yellow-400" />
//                 <FaStar className="text-yellow-400" />
//                 <FaStar className="text-yellow-400" />
//                 <FaRegStar className="text-gray-600" />
//                 <p>{el.rating}</p>
//               </div>
//               <div className="flex gap-3 items-center">
//                 <button className="bg-[#ffedc2] text-black font-semibold rounded-xl px-6 border-yellow-600 border flex gap-2 ">
//                   {el.price} $
//                   <p className="text-gray-400 font-semibold">x 12 мес</p>
//                 </button>
//               </div>
//               <p className="text-2xl font-semibold mt-3">{el.price} $</p>
//               <button
//                 onClick={handleAddToCart}
//                 className="flex items-center px-3 py-2 mt-5 gap-2 hover:bg-[#ffbe1f] bg-[#FF9910] rounded-md"
//               >
//                 <MdAddShoppingCart className="text-black text-[18px]" />В
//                 корзыну
//               </button>
//             </div>
//           </Link>
//         ))}
//       </h3>
//     </div>
//   );
// }

export default function Smartphones() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/smartphones")
      .then((res) => {
        console.log("XABAR", res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log("ERROR MESSAGE", err);
      });
  }, []);

  const handleAddToCart = (productId) => {
    // Implement your logic to add the product to the cart
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="container">
      <h3 className="flex justify-center gap-5 items-center mt-12">
        {products.map((product) => (
          <Link key={product.id} to={`/SmartphonesInfo/${product.id}`}>
            <div className="bg-white border border-gray-300 px-14 py-8 relative rounded-md">
              <img
                src={product.thumbnail}
                className="w-[170px] h-[90px]"
                alt=""
              />
              <div className="flex gap-2 items-center top-3 absolute right-2">
                <FaBalanceScaleLeft className="text-gray-600" />
                <FaRegHeart className="text-gray-600" />
              </div>
              <p className="px-2 py-1 rounded-xl text-[14px] font-bold text-white bg-[#FF0000] top-2 left-2 absolute">
                20%
              </p>
              <p className="text-gray-300 font-semibold pt-8">
                {product.brand}
              </p>
              <h4 className="font-semibold">{product.title}</h4>
              <div className="flex gap-3 items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaRegStar className="text-gray-600" />
                <p>{product.rating}</p>
              </div>
              <div className="flex gap-3 items-center">
                <button className="bg-[#ffedc2] text-black font-semibold rounded-xl px-6 border-yellow-600 border flex gap-2 ">
                  {product.price} $
                  <p className="text-gray-400 font-semibold">x 12 мес</p>
                </button>
              </div>
              <p className="text-2xl font-semibold mt-3">{product.price} $</p>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="flex items-center px-3 py-2 mt-5 gap-2 hover:bg-[#ffbe1f] bg-[#FF9910] rounded-md"
              >
                <MdAddShoppingCart className="text-black text-[18px]" />В
                корзыну
              </button>
            </div>
          </Link>
        ))}
      </h3>
    </div>
  );
}
