import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Minus, Plus, Share2, Star } from "lucide-react";

export default function ProductDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");

  // ✅ track which image is selected
  const [selectedImage, setSelectedImage] = useState(
    product?.images ? product.images[0] : product?.image
  );

  if (!product) {
    return (
      <div className="p-10 text-center">
        <p>Product not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 border rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition"
        >
          Go back
        </button>
      </div>
    );
  }

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

  const handlepayment = () => {
    navigate("/contactus");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 pt-16">
      {/* Left: Product Image + Thumbnails */}
      <div>
        {/* Main Image */}
        <img
          src={selectedImage}
          alt={product.title}
          className="rounded-2xl shadow-md w-full"
        />

        {/* Thumbnails */}
        {product.images && (
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.title} ${i + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                  selectedImage === img
                    ? "border-black"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right: Product Details */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} size={18} className="text-gray-400" />
            ))}
          <span className="ml-2 text-sm text-gray-500">(0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="line-through text-gray-400 text-lg">
            Rs. {product.oldPrice}
          </span>
          <span className="text-2xl font-semibold text-gray-900">
            Rs. {product.price}
          </span>
          {product.sale && (
            <span className="px-2 py-1 bg-gray-100 text-sm rounded-md">
              Sale
            </span>
          )}
        </div>
        <p className="text-gray-500 text-sm">
          Taxes included.{" "}
          <span className="underline cursor-pointer">Shipping</span> calculated
          at checkout.
        </p>

        {/* Sizes */}
        <div>
          <p className="font-medium mb-2 text-gray-900">Size</p>
          <div className="flex gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-4 py-2 rounded-full border ${
                  size === s
                    ? "bg-black text-white border-black"
                    : "border-gray-400 text-gray-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        {/* <div className="mt-4">
          <p className="font-medium mb-2 text-gray-700">Quantity</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="p-2 border rounded-md text-gray-700"
            >
              <Minus size={16} />
            </button>
            <span className="text-lg font-medium text-gray-700">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 border text-gray-700 rounded-md"
            >
              <Plus size={16} />
            </button>
          </div>
          <p className="text-sm text-orange-500 mt-2">● Low stock: 3 left</p>
        </div> */}

        {/* Share */}
        {/* <div className="flex items-center gap-2 text-sm cursor-pointer text-gray-600 mt-3">
          <Share2 size={16} />
          Share
        </div> */}

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          {/* <button className="w-full py-3 border text-gray-900 rounded-full font-medium hover:bg-gray-100">
            Add to cart
          </button> */}
          <button
            className="w-full py-3 rounded-full font-medium bg-yellow-400 hover:bg-yellow-500"
            onClick={handlepayment}
          >
            Buy it now
          </button>
        </div>
      </div>
    </div>
  );
}
