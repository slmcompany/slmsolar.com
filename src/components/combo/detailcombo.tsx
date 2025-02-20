import type { FC } from 'react';
import { useState } from 'react';
import { CheckIcon, PaperClipIcon, StarIcon, HandThumbUpIcon, UserIcon, WrenchScrewdriverIcon, ClipboardDocumentCheckIcon, Square2StackIcon, BanknotesIcon, RectangleGroupIcon } from '@heroicons/react/20/solid';

interface Product {
    title: string;
    soluong: string;
    dvt: string;
    logo: string;
    image: string;
    savingsPerMonth?: string;
    area?: string;
}

interface ComboPage {
    title: string;
    subtitle: string;
    price: string;
    image: string;
}

interface AQItem {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    buttonLink: string;
    savingsPerMonth: string;
    area: string;
}

interface Review {
    id: number;
    rating: number;
    content: string;
    author: string;
    avatarSrc: string;
}

interface Reviews {
    average: number;
    totalCount: number;
    counts: { rating: number; count: number; }[];
    featured: Review[];
}

interface GalleryImage {
    src: string;
    alt: string;
}

interface DetailComboProps {
    combopage: ComboPage[];
    products: Product[];
    aqitems: AQItem[];
}

const timeline = [
    {
        id: 1,
        content: 'Khảo sát và tư vấn',
        description: 'Đội ngũ kỹ thuật khảo sát thực tế, tư vấn giải pháp phù hợp',
        icon: UserIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 2,
        content: 'Thiết kế hệ thống',
        description: 'Thiết kế chi tiết, tối ưu hiệu suất và thẩm mỹ công trình',
        icon: ClipboardDocumentCheckIcon,
        iconBackground: 'bg-yellow-500',
    },
    {
        id: 3,
        content: 'Thi công lắp đặt',
        description: 'Đội ngũ kỹ thuật chuyên nghiệp, đảm bảo an toàn tuyệt đối',
        icon: WrenchScrewdriverIcon,
        iconBackground: 'bg-red-500',
    },
    {
        id: 4,
        content: 'Kiểm tra và nghiệm thu',
        description: 'Kiểm tra kỹ thuật toàn diện, đảm bảo vận hành ổn định',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-indigo-500',
    },
    {
        id: 5,
        content: 'Bàn giao và hướng dẫn sử dụng',
        description: 'Hướng dẫn sử dụng chi tiết, hỗ trợ kỹ thuật 24/7',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
];

// Add gallery images data
const galleryImages: GalleryImage[] = [
    {
        src: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000',
        alt: 'Hệ thống điện mặt trời mái nhà 5kWp'
    },
    {
        src: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000',
        alt: 'Tấm pin năng lượng mặt trời hiệu suất cao'
    },
    {
        src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000',
        alt: 'Lắp đặt điện mặt trời áp mái'
    },
    {
        src: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1000',
        alt: 'Hệ thống pin mặt trời công nghiệp'
    },
    {
        src: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000',
        alt: 'Dự án điện mặt trời quy mô lớn'
    },
    {
        src: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000',
        alt: 'Lắp đặt và bảo trì hệ thống'
    },
    {
        src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000',
        alt: 'Giải pháp năng lượng sạch cho gia đình'
    },
    {
        src: 'https://images.unsplash.com/photo-1583922606661-0822ed0bd916?q=80&w=1000',
        alt: 'Thi công điện mặt trời chuyên nghiệp'
    }
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const DetailCombo: FC<DetailComboProps> = ({ combopage, products, aqitems }) => {
    const [currentImage, setCurrentImage] = useState(combopage[0].image);

    const reviews: Reviews = {
        average: 4,
        totalCount: 1624,
        counts: [
            { rating: 5, count: 1019 },
            { rating: 4, count: 162 },
            { rating: 3, count: 97 },
            { rating: 2, count: 199 },
            { rating: 1, count: 147 },
        ],
        featured: [
            {
                id: 1,
                rating: 5,
                content: `<p>Hệ thống hoạt động rất hiệu quả, đội ngũ lắp đặt chuyên nghiệp. Sau khi lắp đặt, hóa đơn tiền điện giảm đáng kể. Rất hài lòng với dịch vụ.</p>`,
                author: 'Nguyễn Văn Anh',
                avatarSrc: '',
            },
            {
                id: 2,
                rating: 4,
                content: `<p>Tư vấn nhiệt tình, giải thích rõ ràng về các thông số kỹ thuật. Chất lượng sản phẩm tốt, giá cả hợp lý. Tuy nhiên thời gian lắp đặt hơi lâu.</p>`,
                author: 'Trần Minh Hoàng',
                avatarSrc: '',
            },
            {
                id: 3,
                rating: 5,
                content: `<p>Đã sử dụng hệ thống được 6 tháng, hiệu quả vượt mong đợi. Tiết kiệm được khoảng 40% tiền điện hàng tháng. Dịch vụ hậu mãi tốt, kỹ thuật viên hỗ trợ nhanh chóng khi cần.</p>`,
                author: 'Lê Thị Bình',
                avatarSrc: '',
            },
        ],
    };

    const handleProductClick = (productImage: string) => {
        setCurrentImage(productImage);
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                {/* Product details */}
                <div className="lg:max-w-lg lg:self-end">
                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{combopage[0].title}</h1>
                    </div>

                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">Thông tin sản phẩm</h2>

                        <div className="flex items-center">
                            {/* Giá sản phẩm */}
                            <div className="flex flex-col">
                                <p className="text-3xl font-bold text-red-600">
                                    {combopage[0].price}
                                    <span className="text-xl font-semibold">đ</span>
                                </p>
                                <p className="text-sm text-green-600 font-medium">
                                    Tiết kiệm 
                                    <span className="text-lg font-bold ml-1">2-3 triệu</span>
                                    <span className="ml-1">đồng/tháng</span>
                                </p>
                            </div>

                            <div className="ml-4 border-l border-gray-300 pl-4">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={`size-5 shrink-0 ${
                                                    reviews.average > rating ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="ml-2 text-sm text-gray-500">{reviews.totalCount} đánh giá</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 space-y-6">
                            <p className="text-base text-gray-500">{combopage[0].subtitle}</p>
                        </div>

                        <div className="mt-6 space-y-3">
                           
                            <div className="flex items-center">
                                <CheckIcon className="size-5 shrink-0 text-green-500" />
                                <p className="ml-2 text-sm text-gray-500">Hoàn vốn trong vòng 4-5 năm</p>
                            </div>
                            <div className="flex items-center">
                                <CheckIcon className="size-5 shrink-0 text-green-500" />
                                <p className="ml-2 text-sm text-gray-500">Hỗ trợ kỹ thuật 24/7</p>
                            </div>
                            <div className="flex items-center">
                                <CheckIcon className="size-5 shrink-0 text-green-500" />
                                <p className="ml-2 text-sm text-gray-500">Lắp đặt chuyên nghiệp trong 2-3 ngày</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Product image and specs */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
                        <img
                            src={currentImage}
                            alt={combopage[0].title}
                            className="aspect-square w-full rounded-lg object-cover"
                        />
                    </div>
                    
                    {/* Quick specs under image */}
                    <div className="mt-6 grid grid-cols-4 gap-4 text-center">
                        <div className="rounded-lg border border-gray-200 bg-white p-4">
                            <span className="block text-lg font-semibold text-gray-900">5.5 kWp</span>
                            <span className="text-sm text-gray-500">Công suất</span>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-white p-4">
                            <span className="block text-lg font-semibold text-gray-900">35-40m²</span>
                            <span className="text-sm text-gray-500">Diện tích mái</span>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-white p-4">
                            <span className="block text-lg font-semibold text-gray-900">22-25 kWh</span>
                            <span className="text-sm text-gray-500">Sản lượng/ngày</span>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-white p-4">
                            <span className="block text-lg font-semibold text-gray-900">4-5 năm</span>
                            <span className="text-sm text-gray-500">Hoàn vốn</span>
                        </div>
                    </div>
                </div>

                {/* Product form */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">Product options</h2>

                        <div className="mt-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {products.map((product) => (
                                    <div 
                                        key={product.title} 
                                        className="relative flex flex-col rounded-lg border border-gray-200 bg-white p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                                        onMouseEnter={() => handleProductClick(product.image)}
                                        onMouseLeave={() => handleProductClick(combopage[0].image)}
                                    >
                                        <div className="flex gap-4">
                                            {/* Left column - Image and logo */}
                                            <div className="flex flex-col items-center gap-2 w-24">
                                                <img
                                                    className="w-20 h-20 object-contain"
                                                    src={product.image}
                                                    alt={product.title}
                                                />
                                                <img
                                                    className="max-h-6 max-w-[80px] w-auto h-auto object-contain"
                                                    src={product.logo}
                                                    alt={product.title}
                                                />
                                            </div>

                                            {/* Right column - Content */}
                                            <div className="flex-1">
                                                <h3 className="text-sm font-medium text-gray-900 mb-2">
                                                    {product.title}
                                                </h3>
                                                <div className="rounded-md bg-red-100 px-2 py-1 text-center w-fit">
                                                    <span className="font-semibold text-lg text-red-600">
                                                        {product.soluong}
                                                    </span>
                                                    <span className="text-sm text-red-600 ml-1">{product.dvt}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <a href="https://zalo.me/0964920242" target="_blank">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-center rounded-md border-2 border-red-600 bg-white px-8 py-3 text-lg font-medium text-red-600 hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    Liên hệ tư vấn
                                </button>
                            </a>
                            <a href="https://zalo.me/0964920242" target="_blank">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-lg font-medium text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    Nhận báo giá
                                </button>
                            </a>
                        </div>
                    </section>
                </div>
            </div>

            {/* Reviews and Specifications section */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                    {/* Danh mục thiết bị - Left column */}
                    <div className="lg:col-span-7">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Danh mục thiết bị</h3>
                        
                        <dl className="mt-4 divide-y divide-gray-100 border border-gray-200 rounded-lg bg-white p-6 shadow-sm">
                            <div className="px-2 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0 first:pt-0 last:pb-0">
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-1">1</dt>
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-7">Tấm quang năng - N-Type</dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 flex items-center gap-2">
                                    <img src="https://www.jasolar.com/themes/custom/jasolar/logo.svg" alt="JA Solar" className="h-5 w-auto" />
                                </dd>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">19 tấm</dd>
                            </div>
                            <div className="px-2 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-1">2</dt>
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-7">Biến tần Off-Grid 10 kW - 3 pha</dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 flex items-center gap-2">
                                    <img src="https://www.solisinverters.com/assets/images/logo.png" alt="Solis" className="h-5 w-auto" />
                                </dd>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">01 bộ</dd>
                            </div>
                            <div className="px-2 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-1">3</dt>
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-7">Bộ điều khiển pin áp cao</dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 flex items-center gap-2">
                                    <img src="https://www.easyway-solar.com/uploads/logo.png" alt="Easyway" className="h-5 w-auto" />
                                </dd>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">01 bộ</dd>
                            </div>
                            <div className="px-2 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-1">4</dt>
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-7">Pin Lithium 5,2 kWh - Bản xếp tầng</dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 flex items-center gap-2">
                                    <img src="https://www.easyway-solar.com/uploads/logo.png" alt="Easyway" className="h-5 w-auto" />
                                </dd>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">02 bộ</dd>
                            </div>
                            <div className="px-2 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-1">5</dt>
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-7">Hệ ray nhôm đỡ tấm quang năng</dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 flex items-center gap-2">
                                    <img src="https://www.solarmaxtech.com/images/logo.png" alt="Solar Max" className="h-5 w-auto" />
                                </dd>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">01 bộ</dd>
                            </div>
                            <div className="px-2 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0 last:pb-0">
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-1">6</dt>
                                <dt className="text-sm font-medium text-gray-900 sm:col-span-7">Bộ tủ điện Năng lượng mặt trời</dt>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 flex items-center gap-2">
                                    <img src="https://www.solarmaxtech.com/images/logo.png" alt="Solar Max" className="h-5 w-auto" />
                                </dd>
                                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">01 bộ</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Quy trình triển khai - Right column */}
                    <div className="mt-16 lg:mt-0 lg:col-span-5">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Quy trình triển khai
                        </h2>
                        <div className="mt-6 flow-root">
                            <ul role="list" className="-mb-8">
                                {timeline.map((event, eventIdx) => (
                                    <li key={event.id}>
                                        <div className="relative pb-8">
                                            {eventIdx !== timeline.length - 1 ? (
                                                <span
                                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                                    aria-hidden="true"
                                                />
                                            ) : null}
                                            <div className="relative flex gap-6">
                                                <div>
                                                    <span
                                                        className={classNames(
                                                            event.iconBackground,
                                                            'flex size-8 items-center justify-center rounded-full ring-8 ring-white'
                                                        )}
                                                    >
                                                        <event.icon className="size-5 text-white" aria-hidden="true" />
                                                    </span>
                                                </div>
                                                <div className="flex min-w-0 flex-1 justify-between pt-1.5">
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">{event.content}</p>
                                                        <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thư viện ảnh thực tế section */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
                    Hình ảnh thực tế
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative aspect-[4/3] group overflow-hidden rounded-xl border border-gray-200">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-300 group-hover:bg-opacity-10" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dự án tham khảo section */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
                    Dự án đã triển khai
                </h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {aqitems.map((item) => (
                        <div key={item.heading} className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                                <img
                                    src={item.imgSrc}
                                    alt={item.imgAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="mt-4 space-y-2">
                                <h3 className="text-sm text-gray-700">
                                    <a href={item.buttonLink} target="_blank">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {item.heading}
                                    </a>
                                </h3>
                                {/* Thêm thông tin chi phí và diện tích */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <BanknotesIcon className="h-4 w-4 text-green-600" />
                                        <span className="text-gray-600">Tiết kiệm: </span>
                                        <span className="font-medium text-green-600">{item.savingsPerMonth}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RectangleGroupIcon className="h-4 w-4 text-blue-600" />
                                        <span className="text-gray-600">Diện tích: </span>
                                        <span className="font-medium text-blue-600">{item.area}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Đánh giá khách hàng section - moved down */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
                    Đánh giá từ khách hàng
                </h2>

                <div className="mt-3 flex items-center">
                    <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                                key={rating}
                                className={`size-5 shrink-0 ${
                                    reviews.average > rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-900">
                        <span className="font-medium">{reviews.average}</span>
                        <span className="mx-1">trên</span>
                        <span className="font-medium">5</span>
                        <span className="mx-1">•</span>
                        <span>{reviews.totalCount} đánh giá</span>
                    </p>
                </div>

                <div className="mt-8 flow-root">
                    <div className="-my-6 divide-y divide-gray-100">
                        {reviews.featured.map((review) => (
                            <div key={review.id} className="py-6">
                                <div className="flex items-center">
                                    {/* Avatar với 2 ký tự đầu */}
                                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                                        <span className="text-sm font-medium text-red-600">
                                            {review.author.split(' ').map(word => word[0]).slice(-2).join('')}
                                        </span>
                                    </div>
                                    <div className="ml-3">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={`size-4 shrink-0 ${
                                                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-1 text-sm text-gray-700">{review.author}</p>
                                    </div>
                                </div>
                                <div 
                                    className="mt-4 text-sm text-gray-700 space-y-4"
                                    dangerouslySetInnerHTML={{ __html: review.content }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-lg font-medium text-gray-900">Chia sẻ đánh giá của bạn</h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Nếu bạn đã sử dụng sản phẩm này, hãy chia sẻ trải nghiệm với những khách hàng khác
                    </p>

                    <a
                        href="#"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                    >
                        Viết đánh giá
                    </a>
                </div>
            </div>
        </div>
    );
};
