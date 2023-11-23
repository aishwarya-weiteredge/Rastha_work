import React from 'react';
import Searchbar from './Searchbar';
import DropDownComponent from './DropDownComponet';

const SerachComponent = () => {
    const itemsForPrimaryDropDown = ['Mumbai', 'Delhi', 'Hyderabad'];
    const itemsForSecondaryDropDown = ['Item 1', 'Item 2', 'Item 3'];
  
  return (
    <div className="z-10 mt-12 h-screen w-80 bg-white flex flex-col p-4">
      <Searchbar props="Search" />
      <img src="icons/searchC.png" alt="Search Icon" className="mt-4" />

      <div className="border-t my-4"></div>

      <h1 className="font-inter text-gray-400 text-lg font-bold mt-2">
        Survey History
      </h1>
      <h1 className="font-inter text-lg font-bold mt-2">
        RoadWays
      </h1>

      <div className="mt-4 ">
      <DropDownComponent  bgColor="bg-primary" items={itemsForPrimaryDropDown} />
      </div>

      <div className="mt-4">
        <DropDownComponent bgColor="bg-gray-300" items={itemsForPrimaryDropDown} />
      </div>
    </div>
  );
};

export default SerachComponent;
