import React, { useState } from 'react';

const RoadFeautres = () => {
  const initialCheckboxes = [
    { id: 1, label: 'All', checked: false, imagePath: 'icons/Rectangle33.png' },
    { id: 2, label: 'Mandatory Signs', checked: false, imagePath: 'icons/round_circle.png' },
    { id: 3, label: 'Informatory Signs', checked: false, imagePath: 'icons/Rectangle35.png' },
    { id: 3, label: 'Gantry Boards', checked: false, imagePath: 'icons/square.png' },
     ];

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      )
    );
  };

  return (
    <div>
      <h3 className='ml-4 mt-3'>Points</h3>

      {checkboxes.map((checkbox) => (
        <div key={checkbox.id} className="flex items-center mt-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
            <img className='w-5 ml-4' src={checkbox.imagePath} alt={`Option ${checkbox.id} Icon`} />
              <h4 className="ml-4">{checkbox.label}</h4>
            </div>
            <div>
              <input
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(checkbox.id)}
                id={`checkbox-${checkbox.id}`}
                type="checkbox"
                value=""
                className={`w-4 h-4 text-white bg-${checkbox.checked ? 'orange' : 'primary-600'} border-gray-300 rounded focus:ring-${checkbox.checked ? 'orange' : 'primary'} dark:focus:ring-${checkbox.checked ? 'orange' : 'primary'} dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-4`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadFeautres;
