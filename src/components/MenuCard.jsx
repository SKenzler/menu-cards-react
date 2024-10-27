import React from "react";

const MenuCard = (props) => {
  return (
    <div className="w-72 max-h-100 overflow-hidden bg-stone-50 shadow-lg p-4">
      <img
        src={props.image}
        className="w-full h-30 object-cover rounded-md"
        alt="Breakfast Item"
      />
      <h1 className="text-2xl text-green-500 font-semibold mt-2 uppercase">
        {props.header}
      </h1>
      <h2 className="text-xl font-bold text-slate-500 my-2">{props.price}</h2>
      <p className="text-slate-500 text-pretty my-2">{props.description}</p>

      <button className="w-full bg-sky-600 text-white text-sm p-2 rounded-lg hover:bg-sky-700 my-2">
        Add to cart
      </button>
    </div>
  );
};

export default MenuCard;
