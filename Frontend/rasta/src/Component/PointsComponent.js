import React, { useState } from 'react';

const PointsComponent = () => {
  const initialCheckboxes = [
    { id: 1, label: 'All', checked: false, imagePath: 'icons/Ellipse_9.png' },
    { id: 2, label: 'Excellent', checked: false, imagePath: 'icons/Ellipse11.png' },
    { id: 3, label: 'Good', checked: false, imagePath: 'icons/Ellipse12.png' },
    { id: 4, label: 'Average', checked: false, imagePath: 'icons/Ellipse13.png' },
    { id: 5, label: 'Poor', checked: false, imagePath: 'icons/Ellipse10.png' },
    { id: 6, label: 'Very Poor', checked: false, imagePath: 'icons/Ellipse15.png' },
    { id: 7, label: 'Unassessed', checked: false, imagePath: 'icons/Ellipse16.png' },
    { id: 8, label: 'Major Potholes', checked: false, imagePath: 'icons/maskorange.png' },
    { id: 9, label: 'Minor Potholes', checked: false, imagePath: 'icons/maskyellow.png' },
    { id: 10, label: 'Patches', checked: false, imagePath: 'icons/maskorange.png' },
    { id: 11, label: 'Cracks', checked: false, imagePath: 'icons/maskyellow.png' },
    { id: 12, label: 'Ravelling', checked: false, imagePath: 'icons/maskorange.png' },
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
    <div >
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

export default PointsComponent;
