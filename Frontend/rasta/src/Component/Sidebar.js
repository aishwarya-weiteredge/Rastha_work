import React, { useState } from 'react';
import SecondSidebar from './SecondSidebar';
import TooltipButton from './ToolltipButton';
import '../CSS/sideBar.css'; // Import the CSS file
import NewComponet from './NewComponet';
import BudgetCard from './BudgetCard';



// ... (other imports)

const Sidebar = () => {
  const [isSecondSidebarOpen, setSecondSidebarOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [searchIconClicked, setSearchIconClicked] = useState(false);
  const [calculatorDialogOpen, setCalculatorDialogOpen] = useState(false);

  const closeCalculatorDialog = () => {
    setCalculatorDialogOpen(false);
  };
  const [budgetIconClicked, setBudgetIconClicked] = useState(false);
  const firstSidebarWidth = 5; // Set the width of the first sidebar here

  const buttons = [
    { defaultIconPath: "icons/nav_logo.png", hoverIconPath: "icons/nav_logo_hover.png", label: "Home" },
    { defaultIconPath: "icons/filter1.png", hoverIconPath: "icons/filter.png", label: "Filter" },
    { defaultIconPath: "icons/data.png", hoverIconPath: "icons/data1.png", label: "data" },
    { defaultIconPath: "icons/notes.png", hoverIconPath: "icons/notes1.png", label: "notes" },
    { defaultIconPath: "icons/calculator.png", hoverIconPath: "icons/calculator1.png", label: "calculator" },
    { defaultIconPath: "icons/search.png", hoverIconPath: "icons/search1.png", label: "search" },
    { defaultIconPath: "icons/mail.png", hoverIconPath: "icons/mail1.png", label: "mail" },
    { defaultIconPath: "icons/bell.png", hoverIconPath: "icons/bell1.png", label: "bell" },
   
    // ... other button configurations
  ]; 


  // ... (other state variables and constants)

  const handleButtonClick = (label) => {
      if (label === 'calculator') {
        // Open a confirmation dialog for the calculator
        setCalculatorDialogOpen(true);

      } else {
        // Handle other buttons and sidebar logic
        setSecondSidebarOpen((prevOpen) => {
          if (prevOpen && selectedButton === label) {
            return false;
          }
          return true;
        });
        setSelectedButton((prevLabel) => (prevLabel === label ? null : label));
        setSearchIconClicked(label === 'search');
      }
    };

  return (
    <>
      {calculatorDialogOpen && (
      <div className="calculator-dialog-overlay">
        <div className="calculator-dialog-box">
          {/* Your custom calculator dialog box content */}
          <BudgetCard closeCalculatorDialog={closeCalculatorDialog} />
        </div>
      </div>
    )}

    {!calculatorDialogOpen && (
      <>
        <div
          id="sidebar-mini"
          className={`z bg-white hs-overlay transition-all duration-300 fixed top-0 start-0 bottom-0 z-[60] w-20 bg-wh border-e border-gray-200 lg:block lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700`}
        >
          <div className="flex flex-col justify-center items-center gap-y-5 py-10">
            {buttons.map((button, index) => (
              <TooltipButton
                key={index}
                {...button}
                isHovered={button.label === 'data' ? isSecondSidebarOpen : false}
                isSelected={selectedButton === button.label}
                searchIconClicked={searchIconClicked}
                onButtonClick={() => handleButtonClick(button.label)}
              />
            ))}
          </div>
        </div>

        <SecondSidebar
          isOpen={isSecondSidebarOpen}
          firstSidebarWidth={firstSidebarWidth}
          filterIconClicked={selectedButton === 'Filter'}
          dataIconClicked={selectedButton === 'data'}
          searchIconClicked={selectedButton === 'search'}
        />
      </>
    )}
    </>
  );
};



export default Sidebar;