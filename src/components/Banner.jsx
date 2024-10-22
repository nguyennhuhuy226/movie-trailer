import React from "react";
import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import Iconplay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-center bg-cover bg-no-repeat relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-blue-500 px-3 py-2 text-md">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">Nghe nói em thích tôi</h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Trong video này, bạn sẽ khám phá những kiến thức cơ bản về ReactJS
              🚀 Được thiết kế đặc biệt cho người mới bắt đầu, khóa học này sẽ
              giúp bạn hiểu cách ReactJS hoạt động và làm thế nào để xây dựng
              các ứng dụng web tương tác. 🚀 Link Source Code:
              https://github.com/minhnhut170701/mov... Nội Dung Chính:
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 text-white bg-black font-bold text-sm">
                Chi tiết
              </button>
              <button className="p-3 text-white bg-red-600 font-bold text-sm">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300] h-[400px] relative group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full absolute justify-center top-0 left-0 flex items-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <img src={Iconplay} alt="play" className="w-16 h-16 relative z-20"/>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
