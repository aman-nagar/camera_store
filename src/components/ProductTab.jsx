// ProductTab.jsx
import React from "react";

const tabButtons = {
  "Network Camera": [
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-28062023163255.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-15112022233823.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-25122021155742.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-11022022182411.png",
  ],
  "Speed Dome": [
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-04062023200209.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-04062023200209.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-04062023200209.png",
    "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-23092021185439.png",
  ],
};

// const netrowk_camera_img = [
//   "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-28062023163255.png",
//   "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-15112022233823.png",
//   "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-25122021155742.png",
//   "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-11022022182411.png",
// ];

// const speed_dome_img = [
//   "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-04062023200209.png",
//   "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-04062023200209.png",
//   "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-04062023200209.png",
//   "https://www.indinatus.com/assets/uploads/media-uploader/IndiNatus-23092021185439.png",
// ];

export default function ProductTab() {
  return (
    <>
      <section className="product-tab w-full h-[50vh] flex justify-center items-center flex-col">
        <h2 className="text-xl font-bold text-center">Star Products</h2>
        <div className="p-tab w-[70%] bg-gray-200 ">
          <div className="p-tab-heading gap-5 flex justify-around">
            {/* <button>Network Camera</button>
            <button>Speed Dome</button>
            <button>NVR</button>
            <button>Biometrics</button>
            <button>Led Tv</button> */}
          </div>
          <div className="tab-card flex">
            {/* {netrowk_camera_img.map((imgUrl, index) => {
              return (
                <div className="tab-card-img w-[25%]" key={index}>
                  <img
                    src={imgUrl}
                    alt={index}
                    key={index}
                    className="w-[100%]"
                  />
                </div>
              );
            })} */}
            {/* <img src={netrowk_camera_img[0]} alt="" className="w-[25%]" /> */}
          </div>
        </div>
      </section>
    </>
  );
}
