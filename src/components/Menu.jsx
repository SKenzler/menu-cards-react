import React from "react";
import MenuCard from "./MenuCard";
import BreakfastItem from "../assets/breakfast-item.jpg";
import PancakeItem from "../assets/pancakes-item.jpg";
import SausageItem from "../assets/sausage-item.jpg";

const Menu = () => {
  return (
    <div className="flex flex-col lg:flex-row m-4 gap-5">
      <MenuCard
        image={BreakfastItem}
        header="Full Breakfast"
        price="$10.99"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolorem?"
      />
      <MenuCard
        image={PancakeItem}
        header="Pancakes"
        price="$5.99"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolorem?"
      />
      <MenuCard
        image={SausageItem}
        header="Sausage"
        price="$7.99"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolorem?"
      />
    </div>
  );
};

export default Menu;
