import React, { useState } from 'react';

const DropDownComponent = ({ bgColor, items }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left ">
   <a
  id="dropdownDividerButton"
  href="#"
  onClick={toggleDropdown}
  className={`text-white ${bgColor} hover:${bgColor}-800 focus:ring-4 focus:outline-none focus:ring-${bgColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:${bgColor}-600 dark:hover:${bgColor}-700 dark:focus:ring-${bgColor}-800 ${selectedItem !== 'Dropdown divider' ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
  style={{ minWidth: '190px', display: 'flex', justifyContent: 'space-between' }}
>
  {selectedItem}
  <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg>
</a>


      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className={`z-10 absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} style={{ minWidth: '120px' }}> {/* Fixed width for the dropdown */}
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
            {items.map((item, index) => (
              <li key={index}>
                <a href="#" onClick={() => handleItemClick(item)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownComponent;
