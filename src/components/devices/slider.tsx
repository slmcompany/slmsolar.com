import React from 'react';
import { Carousel } from 'antd';

const Slider: React.FC = () => {
  return (
    <div className="slider-container">
      <div className="container mx-auto">
        <div className="hidden sm:block mx-auto">
          <div className="mx-auto">
            <Carousel
              autoplay
              effect="scrollx"
              autoplaySpeed={3000}
              pauseOnHover
              dots={{ className: 'custom-dots' }}
              className="h-[300px]"
            >
              <div>
                <div className="carousel-item">
                  <div className='flex flex-row gap-4 pt-6'>
                    <div className="w-1/2 h-64 overflow-hidden rounded-md">
                      <img 
                        src="https://dyness.com/Public/Uploads/uploadfile/images/20241127/powerg2tuijiantuchicun.jpg" 
                        alt="Thiết bị 1" 
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
                      />
                    </div>
                    <div className="w-1/2 h-64 overflow-hidden rounded-md">
                      <img 
                        src="https://dyness.com/Public/Uploads/uploadfile/images/20241127/powerg2tuijiantuchicun.jpg" 
                        alt="Thiết bị 2" 
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="carousel-item">
                  <div className='flex flex-row gap-4 pt-6'>
                    <div className="w-1/2 h-64 overflow-hidden rounded-md">
                      <img 
                        src="https://dyness.com/Public/Uploads/uploadfile/images/20241127/powerg2tuijiantuchicun.jpg" 
                        alt="Thiết bị 3" 
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
                      />
                    </div>
                    <div className="w-1/2 h-64 overflow-hidden rounded-md">
                      <img 
                        src="https://dyness.com/Public/Uploads/uploadfile/images/20241127/powerg2tuijiantuchicun.jpg" 
                        alt="Thiết bị 4" 
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;