import { useState } from "react";

const TabPanel = ({ title, description, index, selectedTab, image }) => {
  return (
    <div
      role="tabpanel"
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-button-${index}`}
      hidden={selectedTab !== index ? true : false}
      tabIndex={selectedTab === index ? "0" : "-1"}
      className="md:pd-[67px] grid min-h-[477px] items-center justify-center gap-8 px-[4px] md:grid-cols-[1.1fr_1fr] md:justify-between md:gap-[23px] lg:items-start"
    >
      <div className="width-fill-available">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          width={538}
          height={347}
          className="mx-auto lg:mx-0"
        />
      </div>
      <div className="text-center md:flex md:flex-col md:gap-[25px] md:text-left lg:pt-[52px] lg:pl-[72px]">
        <h3 className="mt-[18px] text-[22px] font-bold leading-none text-very-dark-blue md:text-[32px]">
          {title}
        </h3>
        <p className="md:text-normal leading-[1.57] text-very-dark-blue/50">
          {description}
        </p>
        <div className="">
          <a
            href="#"
            className="mx-auto mt-[8px] block w-max rounded-md border-[3px] border-soft-blue bg-soft-blue py-[10px] px-[23px] text-[14px] font-medium text-white transition duration-300 hover:bg-white hover:text-soft-blue md:mx-0"
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default TabPanel;
