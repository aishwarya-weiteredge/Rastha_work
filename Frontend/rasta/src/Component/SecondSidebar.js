import React from 'react';
import FilterHeading from './FilterHeading';
import FilterSubComponent from './FIlterSubComponent';
import DataSubComponent from './DataSubComponent';
import SerachComponent from './SerachComponent';

const SecondSidebar = ({ isOpen, firstSidebarWidth, filterIconClicked, dataIconClicked,  searchIconClicked,
}) => {
  console.log('isOpen:', isOpen);
  console.log('firstSidebarWidth:', firstSidebarWidth);
  console.log('filterIconClicked:', filterIconClicked);
  console.log('dataIconClicked:', dataIconClicked);

  const secondSidebarWidth = 80; // Set the width of the second sidebar here
  const filterHead = "Filters";
  const FilterParagraph = "Filters through segments and points and only view the conditions you are interested in.";
  const dataHead = "Data Visualization";
  const dataParagraph = "View and Understand your surveyed data at a glance in a visualized form.";
  const searchHead = "Search";
  const searchParagraph = "Search through a location which has been Surveyed by us.";

  return (
    <div
      id="second-sidebar-mini"
      className={`z-2 hs-overlay transition-all duration-300 fixed top-0 start-0 bottom-0 z-[60] w-80 right-${secondSidebarWidth} bg-orange-500 border-e border-gray-200 lg:block lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${
        isOpen ? 'open' : 'closed'
      }`}
      style={{ left: isOpen ? `${firstSidebarWidth}rem` : `-${secondSidebarWidth}rem` }}
    >
     <div className="z-[20]"> {/* Increase z-index if necessary */}
        {filterIconClicked && (
          <>
            <FilterHeading heading={filterHead} paragraph={FilterParagraph} />
            <FilterSubComponent />
          </>
        )}
         {dataIconClicked && (
          <>
            <FilterHeading heading={dataHead} paragraph={dataParagraph} />
            <DataSubComponent />
          </>
        )}
        {searchIconClicked && (
          <>
            <FilterHeading heading={searchHead} paragraph={searchParagraph} />
            <SerachComponent />
          </>
        )}
      </div>
    </div>
  );
};

export default SecondSidebar;
