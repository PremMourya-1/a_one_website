import React from "react";

import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
function CartItem({ item }) {
  return (
    <>
      <div className="flex  gap-4 mb-4 last:mb-0 pb-4 border-b last:pb-0 last:border-0 relative sm:flex-col">
        <Link
          to={item.slug}
          className="imgBox group w-full max-w-[200px] h-[120px] sm:max-w-full sm:h-[180px] rounded-lg overflow-hidden"
        >
          <img
            src={item.image}
            alt="course_image"
            className="h-full w-full object-cover group-hover:scale-110 transition-all"
          />
        </Link>
        <div className="content">
          <h4 className="font-medium text-lg ">
            <Link className="hover:text-[color:var(--primary)]" to={item.slug}>
              {item.name}
            </Link>
          </h4>
          <p className="text-sm text-gray mb-3 line-clamp-3">
            {item.description}
          </p>
          <h5 className="font-bold text-lg">
            Rs {item.price?.toLocaleString()}
          </h5>
        </div>
        <button className="absolute group right-2 bottom-4 h-8 w-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
          <MdDeleteForever className="text-xl group-hover:text-red-500 text-gray-600" />
        </button>
      </div>
    </>
  );
}

export default CartItem;
