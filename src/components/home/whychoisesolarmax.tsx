import React, { useState } from 'react';

const WhyChooseSolarmax = () => {
  const [activeTab, setActiveTab] = useState(0);

  const productLinks = [
    {
      icon: "📞",
      text: "Tư Vấn Miễn Phí",
      href: "#",
      background: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80",
      content: {
        title: "Tư Vấn Miễn Phí",
        description: "Đội ngũ tư vấn chuyên nghiệp của Solarmax sẽ phân tích chi tiết nhu cầu sử dụng điện của bạn:",
        features: [
          "Phân tích hóa đơn tiền điện hàng tháng",
          "Khảo sát mặt bằng lắp đặt",
          "Đánh giá hệ nắng và vị trí tối ưu",
          "Tư vấn hệ thống điện phù hợp",
          "Dự toán chi phí đầu tư và thời gian hoàn vốn"
        ],
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80"
      }
    },
    {
      icon: "📏",
      text: "Khảo Sát Miễn Phí",
      href: "#",
      background: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80",
      content: {
        title: "Khảo Sát Miễn Phí",
        description: "Đội ngũ kỹ thuật sẽ trực tiếp khảo sát để đưa ra phương án thi công tối ưu nhất:",
        features: [
          "Khảo sát trực tiếp mặt bằng lắp đặt",
          "Đo đạc chi tiết kích thước",
          "Đánh giá kết cấu mái nhà",
          "Kiểm tra hệ thống điện hiện có",
          "Đề xuất phương án thi công phù hợp"
        ],
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80"
      }
    },
    {
      icon: "🏗️",
      text: "Lắp Đặt Trọn Gói",
      href: "#",
      background: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80",
      content: {
        title: "Lắp Đặt Trọn Gói",
        description: "Solarmax là tổng thầu EPC cho các dự án điện mặt trời với quy mô đa dạng:",
        features: [
          "Hệ gia đình: 3kW - 50kW",
          "Hệ công nghiệp: 100kW - 5MW",
          "Đội ngũ kỹ thuật chuyên nghiệp",
          "Thiết bị chính hãng 100%",
          "Thi công đúng tiêu chuẩn quốc tế"
        ],
        image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80"
      }
    },
    {
      icon: "🛠️",
      text: "Bảo Hành 24/7",
      href: "#",
      background: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80",
      content: {
        title: "Bảo Hành 24/7",
        description: "Solarmax cam kết đồng hành cùng khách hàng trong suốt vòng đời sản phẩm:",
        features: [
          "Bảo hành sản phẩm lên đến 25 năm",
          "Hỗ trợ kỹ thuật 24/7",
          "Bảo trì định kỳ miễn phí",
          "Phản hồi sự cố trong vòng 24h",
          "Giám sát hiệu suất hệ thống từ xa"
        ],
        image: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?q=80"
      }
    }
  ];

  return (
    <div className="relative">
      <div 
        className="absolute inset-0 w-full h-[600px] transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(246, 246, 246, 0.75), rgba(246, 246, 246, 0.95)), url(${productLinks[activeTab].background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative bg-transparent py-8 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#1B1B1B] mb-3">TẠI SAO BẠN NÊN CHỌN SOLARMAX</h2>
          <p className="text-lg text-[#1B1B1B]">Solarmax cam kết mang đến giải pháp điện mặt trời toàn diện và chuyên nghiệp</p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
          <div className="relative">
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-[#1B1B1B] mb-4">
                  {productLinks[activeTab].content.title}
                </h3>
                <p className="text-base text-[#1B1B1B] mb-4">
                  {productLinks[activeTab].content.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {productLinks[activeTab].content.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center bg-[#4CAF50] text-white px-5 py-2 rounded-full hover:bg-[#45a049] transition-colors">
                  Tìm hiểu thêm
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
              <div className="relative h-[300px]">
                <img 
                  src={productLinks[activeTab].content.image}
                  alt={productLinks[activeTab].content.title}
                  className="object-cover rounded-lg shadow-lg w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-x-16 mt-12">
          {productLinks.map((link, index) => (
            <button 
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 text-base font-medium transition-all duration-300 ${
                activeTab === index 
                  ? 'text-[#4CAF50] border-b-2 border-[#4CAF50] transform scale-105' 
                  : 'text-[#1B1B1B] hover:text-[#4CAF50]'
              }`}
            >
              <span className="w-6 h-6">{link.icon}</span>
              {link.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSolarmax;