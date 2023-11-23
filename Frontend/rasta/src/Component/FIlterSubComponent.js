import React, { useState } from 'react';
import PointsComponent from './PointsComponent';
import Searchbar from './Searchbar';
import Segments from './Segments';
import RoadFeautres from './RoadFeautres';

const FilterSubComponent = () => {
  const [selectedTab, setSelectedTab] = useState('conditions');
const filterHead="Filters";
const FilterParagraph="Filters through segments and points and only view the conditions you are interested in.";
const dataHead="Data Visualization";
const dataParagraph="View and Undestand your surveyed data at a glance in a visualized form.";

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="z-10 mt-12 h-screen w-80  bg-white flex flex-col">
      <div className="flex mt-8">
        <div
          onClick={() => handleTabClick('conditions')}
          className={`cursor-pointer flex-1 p-2 text-center ${
            selectedTab === 'conditions' ? 'text-orange-500' : ''
          }`}
        >
          Conditions
          {selectedTab === 'conditions' && (
            <div className="h-1 bg-orange-500"></div>
          )}
        </div>
        <div className="mx-2"></div>
        <div
          onClick={() => handleTabClick('features')}
          className={`cursor-pointer flex-1 p-2 text-center ${
            selectedTab === 'features' ? 'text-orange-500' : ''
          }`}
        >
          Features
          {selectedTab === 'features' && (
            <div className="h-1 bg-orange-500">

                
            </div>
          )}
        </div>
      </div>

      {/* Conditional rendering of the side component */}
      {selectedTab === 'conditions' && (
        <div className="side-component overflow-auto">
          {/* Add your side component content here */}

          
          <PointsComponent />
          <Searchbar props="search Conditions/ Tags" />
          <div className="h-0.5 bg-primary mx-6 my-6"></div>

          <Segments props="Segments"/>

        </div>
      )}  
      {/* Feautres rendering of the side component */}

      
      {selectedTab === 'features' && (
        <div className="side-component overflow-auto">
          {/* Add your side component content here */}

          <div className="h-0.5 bg-primary mx-6 my-6"></div>
          <RoadFeautres/>
          <Searchbar props="search Conditions/ Tags" />

          <Segments props="Road Assets"/>

        </div>
      )}
    </div>
  );
};

export default FilterSubComponent;
