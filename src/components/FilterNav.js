import React from "react";

const FilterNav = ({ filterHandler }) => {
  return (
    <div className=" border-gray-500 border-b-[1.5px] flex justify-center gap-8 h-14 rounded-tl-md rounded-tr-md">
      <button
        className="focus:font-bold"
        onClick={() => filterHandler("all")}
        type="button"
      >
        All
      </button>
      <button
        className="focus:font-bold"
        onClick={() => filterHandler("active")}
        type="button"
      >
        Active
      </button>
      <button
        className="focus:font-bold"
        onClick={() => filterHandler("complete")}
        type="button"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterNav;
