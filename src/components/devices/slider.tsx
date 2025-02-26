import React from 'react';
import { Carousel } from 'antd';

const Slider: React.FC = () => {
  return (
    <div className="bg-slate-100 py-4">
 <div className="container mx-auto">
  <h2 className='text-bold text-2xl pt-10'>Đề xuất</h2>
   <div className="hidden sm:block  mx-auto">
     
      <div className="mx-auto">
        <Carousel
          autoplay
          effect="scrollx"
          autoplaySpeed={3000}
          pauseOnHover
          dots={{ className: 'custom-dots' }}
          className="h-[350px]"
        >
         
          <div>
            <div className="">
              <div className='flex flex-row gap-4 pt-6 '>
                <div className="text-black bg-black w-1/2  text-center max-w-3xl rounded-md ">
                  <img src="https://dyness.com/Public/Uploads/uploadfile/images/20241127/powerg2tuijiantuchicun.jpg" alt="" className="object-cover w-full rounded-md" />
                </div>
                <div className="text-black bg-black w-1/2 h-64 text-center max-w-3xl rounded-md ">
                <img src="https://dyness.com/Public/Uploads/uploadfile/images/20241127/powerg2tuijiantuchicun.jpg" alt="" className="object-cover w-full rounded-md" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <div className='flex flex-row gap-4 pt-6 '>
                <div className="text-black bg-black w-1/2  text-center max-w-3xl rounded-md ">
                  <img src="https://dyness.com/Public/Uploads/uploadfile/images/20241127/powerg2tuijiantuchicun.jpg" alt="" className="object-cover w-full rounded-md" />
                </div>
                <div className="text-black bg-black w-1/2 h-64 text-center max-w-3xl rounded-md ">
                <img src="https://dyness.com/Public/Uploads/uploadfile/images/20241127/powerg2tuijiantuchicun.jpg" alt="" className="object-cover w-full rounded-md" />
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