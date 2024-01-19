// ProductTab.jsx
import React, { useState } from "react";

const tabButtons = {
  "Network Camera": [
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-28062023163255.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-15112022233823.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-25122021155742.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-11022022182411.png",
  ],
  "Speed Dome": [
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-04062023200209.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-21122022173634.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-17102022185015.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-23092021185439.png",
  ],
};

export default function ProductTab() {
  const [selectedTab, setSelectedTab] = useState("Network Camera");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <section className="product-tab w-full h-[50vh] flex justify-center items-center flex-col">
        <h2 className="text-xl font-bold text-center">Star Products</h2>
        <div className="p-tab w-[70%] bg-gray-200 ">
          <div className="p-tab-heading gap-5 flex justify-around">
            {Object.keys(tabButtons).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`${
                  selectedTab === tab ? "bg-blue-500" : "bg-gray-300"
                } px-4 py-2 rounded-md`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="tab-card flex">
            {tabButtons[selectedTab].map((imgUrl, index) => (
              <div className="tab-card-img w-[25%]" key={index}>
                <img
                  src={imgUrl}
                  alt={`product-${index}`}
                  className="w-[100%]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
