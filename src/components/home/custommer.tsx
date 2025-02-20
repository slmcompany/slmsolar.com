import React from 'react';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Chúng tôi đã tìm kiếm một đơn vị lắp đặt điện mặt trời chuyên nghiệp và Solar đã cung cấp giải pháp toàn diện một cách nhanh chóng với chất lượng hoàn hảo. Chúng tôi đánh giá cao mối quan hệ với Solar và xem họ như một phần mở rộng của công ty chúng tôi.'
  },
  {
    id: 2,
    quote: 'Solar đã lắp đặt hệ thống điện mặt trời cho nhà máy của chúng tôi. Đây là một hệ thống phức tạp với yêu cầu kỹ thuật cao về độ chính xác và hiệu suất. Solar là một đối tác đáng tin cậy; họ luôn đảm bảo chất lượng và tiến độ thi công đúng hẹn.'
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="flex flex-col pb-8 sm:pb-12 lg:pr-6 lg:pb-0 xl:pr-16">
    <figure className="flex flex-auto flex-col justify-between">
      <blockquote className="text-lg/8 text-gray-900 bg-gray-50 p-5 rounded-lg shadow-sm 
        transition-all duration-300 ease-in-out
        hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]
        cursor-pointer relative">
        <ChatBubbleLeftIcon className="h-7 w-7 text-gray-400 absolute top-4 left-4" />
        <p className="pl-8">{testimonial.quote}</p>
      </blockquote>
    </figure>
  </div>
);

const CustomerTestimonials: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cam kết dịch vụ khách hàng của Solar không chỉ dừng lại ở việc bán hàng
          </h2>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                index === 1 ? "border-t border-gray-900/10 pt-8 sm:pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 xl:pl-16" : ""
              }`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
