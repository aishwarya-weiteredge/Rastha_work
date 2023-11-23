import React, { useState } from 'react';

const BudgetCard = ({ closeCalculatorDialog }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Sample data for the table
  const tableData = [
    { id: 1, defect: 'data1', cost: '9000', found: '2', Total: '$' },
    { id: 2, defect: 'data2', cost: '8000', found: '1', Total: '$' },
    // Add more data as needed
  ];

  const handleCheckboxChange = (itemId) => {
    const updatedSelectedItems = [...selectedItems];
    const index = updatedSelectedItems.indexOf(itemId);

    if (index === -1) {
      updatedSelectedItems.push(itemId);
    } else {
      updatedSelectedItems.splice(index, 1);
    }

    setSelectedItems(updatedSelectedItems);
  };

  const totalCost = tableData.reduce((acc, item) => {
    if (selectedItems.includes(item.id)) {
      return acc + parseInt(item.cost) * parseInt(item.found);
    }
    return acc;
  }, 0);

  return (
    

        
    <div className="mx-auto mt-8  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative" style={{ width: '80vw', height: '80vh' }}>
<div className="absolute mt-[-52px] right-[-20px] bg-red-500 w-8 h-8 flex items-center justify-center" style={{ borderTopRightRadius: '10px' }}>
  <i className="text-white cursor-pointer" onClick={closeCalculatorDialog}>X</i>
</div>

      <h2 className="mb-2 text-center text-2xl font-bold">Calculate Budget (Beta)</h2>
      <p className="mb-4 text-center text-gray-600">Get a calculated estimated budget cost.</p>
      <div className="flex">
        <div className="relative w-2/3 p-4">
          <div className="flex">
            <div className="w-1/2 p-4">
              <div className="rounded-lg border border-primary bg-primary" style={{ width: '100%', height: '99px' }}></div>
            </div>
            <div className="w-1/2 p-4">
              <div className="rounded-lg border border-orange-500 bg-white" style={{ width: '100%', height: '99px' }}>
                <div>
                  <h2 className='font-poppins text-primary ml-2 mt-2 text-tall font-bold text-left text-20 leading-30 tracking-tight'>Total Length</h2>
                  <p className='text-primary font-poppins text-base font-medium leading-6 tracking-tight text-left ml-2 mt-2' >0.00 Km</p>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-8 ">
            <table className="w-full  text-center rounded-xl  shadow-lg">
            <thead>
  <tr className="bg-gray-200 text-center justify-center items-center">
    <th className="px-4 py-2 font-poppins text-base font-bold leading-6 text-center tracking-tight ">
      Defect
    </th>
    <th className="px-4 py-2 font-poppins text-center text-base font-bold leading-6 tracking-tight ">
      Cost
    </th>
    <th className="px-4 py-2 font-poppins text-base font-bold leading-6 tracking-tight text-center">
      Found
    </th>
    <th className="px-4 py-2 font-poppins text-base font-bold leading-6 tracking-tight text-center">
      Total
    </th>
  </tr>
</thead>
<tbody>
  {tableData.map((item, index) => (
    <tr key={item.id} className={index !== 0 ? "mt-4" : ""}>
      <td className="px-4 py-3 font-poppins text-base font-medium leading-6 tracking-tight text-center border-b">
      <input
    type="checkbox"
    className='mx-2'
    onChange={() => handleCheckboxChange(item.id)}
    checked={selectedItems.includes(item.id)}
  />
        {item.defect}
      </td>
      <td className="px-4 py-2  font-poppins bg-ffddc7 rounded text-base font-medium leading-6 tracking-tight text-center border-b">
        {item.cost}
      </td>
      <td className="px-4 py-3 font-poppins text-base font-medium leading-6 tracking-tight text-center border-b">
        {item.found}
      </td>
      <td className="px-4 py-3 font-poppins text-base font-medium leading-6 tracking-tight text-center border-b">
        {item.cost * item.found}
      </td>
    </tr>
  ))}
</tbody>



            </table>
          </div>
        </div>

        <div className="relative w-1/3 p-4 flex flex-col items-center">
        <div className="flex items-center justify-center font-poppins rounded-lg bg-orange-600 p-4 text-center text-2xl font-bold leading-9 w-[299px] h-[49px] text-white mb-6">
  Calculate
</div>



  <div className="flex justify-center mb-6">
    <img src="icons/budget.png" alt="Your Image" className="w-[239px] h-[219px]" />
  </div>

  <div className="flex flex-none justify-center mb-12">
    <p className="font-poppins text-lg font-semibold">Total Estimated Budget</p>
  </div>

  <div className="bg-primary p-4 rounded-lg w-[200px] bottom-4 text-white text-center">
  <p className="text-2xl font-bold leading-9">{`$${totalCost}`}</p>
</div>

</div>

      </div>
    </div>
    

  );
};

export default BudgetCard;
