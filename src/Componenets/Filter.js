import React from "react";

function Filter({filterData}) {
  return (
    <div className="w-11/12 flex flex-wrap mx-auto justify-center max-w-max space-x-4 gap-y-4 py-4">
      {filterData.map((data) => {
        return <button className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 "
         key={data.id}>{data.title}</button>;
      })}
    </div>
  );
}
export default Filter;
