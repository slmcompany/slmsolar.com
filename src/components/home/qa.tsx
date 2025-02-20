const faqs = [
  {
    id: 1,
    question: "Tại sao lựa chọn tấm quang năng JA Solar?",
    answer: "JA Solar là một trong những nhà sản xuất pin năng lượng mặt trời hàng đầu thế giới với chất lượng và độ tin cậy cao. Sản phẩm có hiệu suất chuyển đổi tốt, độ bền cao và được bảo hành dài hạn.",
    imgSrc: "/images/cau-hoi-ja-solar.jpg",
    imgAlt: "Tại sao lựa chọn tấm quang năng JA Solar?",
    videoLink: "https://www.youtube.com/watch?v=dQVjxJ2Sw1I"
  },
  {
    id: 2,
    question: "Chỉ số IP là gì?",
    answer: "Chỉ số IP (Ingress Protection) là tiêu chuẩn quốc tế về khả năng chống bụi và nước của thiết bị điện. Ví dụ IP65 có nghĩa là thiết bị hoàn toàn chống bụi và chịu được tia nước áp lực thấp từ mọi hướng.",
    imgSrc: "/images/cau-hoi-chi-so-ip.jpg", 
    imgAlt: "Chỉ số IP là gì?",
    videoLink: "https://www.youtube.com/watch?v=dfttH6Abq1Q"
  },
  {
    id: 3,
    question: "So sánh điện mặt trời độc lập và bám tải?",
    answer: "Hệ thống độc lập (Off-grid) hoạt động độc lập với lưới điện, sử dụng pin lưu trữ. Hệ thống bám tải (On-grid) kết nối với lưới điện quốc gia, không cần pin lưu trữ và thường có chi phí đầu tư thấp hơn.",
    imgSrc: "/images/cau-hoi-so-sanh-ongrid-offgrid.jpg",
    imgAlt: "So sánh điện mặt trời độc lập và bám tải?",
    videoLink: "https://www.youtube.com/watch?v=JXQ3A8eFYmc&t=6s"
  },
  {
    id: 4,
    question: "Mặt bằng thuê có nên lắp đặt hệ điện mặt trời?",
    answer: "Việc lắp đặt trên mặt bằng thuê cần cân nhắc kỹ về thời gian thuê, điều khoản hợp đồng và khả năng hoàn vốn. Nên tính toán kỹ thời gian hoàn vốn so với thời hạn thuê mặt bằng.",
    imgSrc: "/images/cau-hoi-mat-bang-di-thu-co-nen-lap-dien-mat-troi.jpg",
    imgAlt: "Mặt bằng thuê có nên lắp đặt hệ điện mặt trời?",
    videoLink: "https://www.youtube.com/watch?v=F3ncsoZqNbs"
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Hỏi & Đáp</h2>
        <p className="mt-6 max-w-2xl text-base/7 text-gray-600">
          Bạn có thắc mắc khác và không tìm thấy câu trả lời? Hãy liên hệ với đội ngũ hỗ trợ của chúng tôi bằng cách{' '}
          <a href="mailto:sale@slmsolar.com" className="font-semibold text-green-600 hover:text-green-500">
            gửi email
          </a>{' '}
          và chúng tôi sẽ phản hồi sớm nhất có thể.
        </p>
        <div className="mt-20">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    className="aspect-video w-full object-cover"
                    src={faq.imgSrc}
                    alt={faq.imgAlt}
                  />
                  <a
                    href={faq.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-1.5 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Xem video
                    </button>
                  </a>
                </div>
                <div className="p-6">
                  <dt className="text-lg font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 text-base/7 text-gray-600">{faq.answer}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
  