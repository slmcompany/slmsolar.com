import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  address: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Chúng tôi đã tìm kiếm một đơn vị lắp đặt điện mặt trời chuyên nghiệp và Solar đã cung cấp giải pháp toàn diện một cách nhanh chóng với chất lượng hoàn hảo. Chúng tôi đánh giá cao mối quan hệ với Solar và xem họ như một phần mở rộng của công ty chúng tôi.',
    name: 'Nguyễn Văn A',
    address: 'Công ty ABC, Hà Nội',
    avatar: '/images/avatars/customer1.jpg',
    rating: 5
  },
  {
    id: 2,
    quote: 'Solar đã lắp đặt hệ thống điện mặt trời cho nhà máy của chúng tôi. Đây là một hệ thống phức tạp với yêu cầu kỹ thuật cao về độ chính xác và hiệu suất. Solar là một đối tác đáng tin cậy; họ luôn đảm bảo chất lượng và tiến độ thi công đúng hẹn.',
    name: 'Trần Thị B',
    address: 'Nhà máy XYZ, TP. Hồ Chí Minh',
    avatar: '/images/avatars/customer2.jpg',
    rating: 4
  },
  {
    id: 3,
    quote: 'Tôi đã chọn Solar để lắp đặt hệ thống điện mặt trời trên mái nhà. Tôi rất hài lòng với sự tư vấn nhiệt tình và chuyên nghiệp. Hệ thống hoạt động tốt đã giúp gia đình tôi tiết kiệm đáng kể chi phí điện hàng tháng.',
    name: 'Lê Hoàng C',
    address: 'Chung cư Green Park, Đà Nẵng',
    avatar: '',
    rating: 5
  },
  {
    id: 4,
    quote: 'Chúng tôi đã hợp tác với Solar cho dự án năng lượng tái tạo của tập đoàn. Họ đã thể hiện sự chuyên nghiệp cao từ khâu tư vấn đến triển khai. Kết quả vượt ngoài mong đợi và chúng tôi đã tiết kiệm được hơn 30% chi phí năng lượng.',
    name: 'Phạm Minh D',
    address: 'Tập đoàn EFG, Cần Thơ',
    avatar: '',
    rating: 4.5
  }
];

// Component hiển thị sao đánh giá
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  // Đảm bảo rating nằm trong khoảng 0-5
  const safeRating = Math.min(5, Math.max(0, rating));
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.5;
  
  return (
    <div className="flex items-center mt-1">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <svg 
          key={`full-${i}`}
          className="w-4 h-4 text-yellow-400" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      
      {/* Half star */}
      {hasHalfStar && fullStars < 5 && (
        <svg 
          className="w-4 h-4 text-yellow-400" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
          <path fill="#e5e7eb" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09V15.39Z" />
        </svg>
      )}
      
      {/* Empty stars */}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <svg 
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      
      {/* Numeric rating */}
      <span className="ml-1.5 text-sm text-gray-600 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  // Tạo 2 chữ cái đầu từ tên khách hàng
  const initials = testimonial.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
    
  // Tạo màu avatar dựa trên tên (pseudo-random)
  const getColorFromName = (name: string) => {
    const colors = [
      'bg-blue-600', 'bg-emerald-600', 'bg-purple-600', 
      'bg-rose-600', 'bg-amber-600', 'bg-cyan-600'
    ];
    const sum = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[sum % colors.length];
  };
  
  const avatarColor = getColorFromName(testimonial.name);

  return (
    <div className="flex flex-col h-full">
      <figure className="flex flex-auto flex-col justify-between h-full">
        <blockquote className="text-lg/8 text-gray-900 bg-white p-6 rounded-xl 
          shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100
          transition-all duration-300 ease-in-out
          hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:-translate-y-2 
          cursor-pointer relative h-full">
          <div className="absolute -top-0.5 -left-0.5 w-20 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-md"></div>
          
          <div className="flex items-center mb-5">
            <div className={`h-14 w-14 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md`}>
              {initials}
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.address}</p>
              <StarRating rating={testimonial.rating} />
            </div>
          </div>
          
          <div className="relative">
            <svg className="absolute -top-3 -left-2 h-6 w-6 text-gray-300 transform rotate-180" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="italic text-gray-700 pl-5">{testimonial.quote}</p>
          </div>
        </blockquote>
      </figure>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % Math.ceil(testimonials.length / 2));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setActiveIndex((current) => {
      const next = current + 1;
      return next < Math.ceil(testimonials.length / 2) ? next : current;
    });
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => {
      const prev = current - 1;
      return prev >= 0 ? prev : current;
    });
  };
  
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cam kết dịch vụ khách hàng của SolarMax không chỉ dừng lại ở việc bán hàng
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sự hài lòng của khách hàng là động lực để chúng tôi không ngừng phát triển và đổi mới.
          </p>
        </div>
        
        <div className="relative mt-16 pb-16">
          {/* Testimonial slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {/* Group testimonials by 2 for desktop view */}
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials
                      .slice(groupIndex * 2, (groupIndex + 1) * 2)
                      .map((testimonial) => (
                        <div key={testimonial.id}>
                          <TestimonialCard testimonial={testimonial} />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className={`absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none
              ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
            `}
            onClick={prevSlide}
            disabled={activeIndex === 0}
            aria-label="Previous testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className={`absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none
              ${activeIndex === Math.ceil(testimonials.length / 2) - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
            `}
            onClick={nextSlide}
            disabled={activeIndex === Math.ceil(testimonials.length / 2) - 1}
            aria-label="Next testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

