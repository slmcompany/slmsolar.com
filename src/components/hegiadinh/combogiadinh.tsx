import { useState } from 'react'
import { 
  BoltIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  BanknotesIcon,
  Square3Stack3DIcon,
  Battery100Icon,
  ArrowTrendingUpIcon,
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  FireIcon,
  ClockIcon,
  SparklesIcon,
} from '@heroicons/react/20/solid'

const frequencies = [
  { value: 'ongrid', label: 'Hệ Bám Tải', priceSuffix: 'đ' },
  { value: 'hybrid', label: 'Hệ Hybrid', priceSuffix: 'đ' },
] as const

const ongridTiers = [
  {
    name: '5.2 kW',
    id: 'tier-5.2',
    href: '#',
    price: '48.900.000',
    priceSuffix: 'đ',
    hoiVon: 'Hoàn vốn: 5 năm',
    hieuQua: 'Hiệu quả/tháng: 800.000đ',
    description: 'On-Grid | 1 pha | JA 52 | Invt 50',
    features: [
      'Công suất: 5.2 kW',
      'Hệ điện: 1 pha',
      'Sản lượng: 500-600 kwh/tháng',
      'Diện tích lắp đặt: 23,3 m2'
    ],
    mostPopular: false,
  },
  {
    name: '8.7 kW - 1 pha',
    id: 'tier-8.7-1p',
    href: '#',
    price: '77.800.000',
    priceSuffix: 'đ',
    hoiVon: 'Hoàn vốn: 5 năm',
    hieuQua: 'Hiệu quả/tháng: 1.300.000đ',
    description: 'On-Grid | 1 pha | JA 87 | Invt 100',
    features: [
      'Công suất: 8.7 kW',
      'Hệ điện: 1 pha',
      'Sản lượng: 900-1000 kwh/tháng',
      'Diện tích lắp đặt: 38,7 m2'
    ],
    mostPopular: false,
  },
  {
    name: '8.7 kW - 3 pha',
    id: 'tier-8.7-3p',
    href: '#',
    price: '81.900.000',
    priceSuffix: 'đ',
    hoiVon: 'Hoàn vốn: 5 năm',
    hieuQua: 'Hiệu quả/tháng: 1.300.000đ',
    description: 'On-Grid | 3 pha | JA 88 | Invt 100',
    features: [
      'Công suất: 8.7 kW',
      'Hệ điện: 3 pha',
      'Sản lượng: 900-1000 kwh/tháng',
      'Diện tích lắp đặt: 38,7 m2'
    ],
    mostPopular: true,
  },
  {
    name: '13.3 kW - 3 pha',
    id: 'tier-13.3-3p',
    href: '#',
    price: '113.900.000',
    priceSuffix: 'đ',
    hoiVon: 'Hoàn vốn: 5 năm',
    hieuQua: 'Hiệu quả/tháng: 2.000.000đ',
    description: 'On-Grid | 3 pha | JA 133 | Invt 150',
    features: [
      'Công suất: 13.3 kW',
      'Hệ điện: 3 pha',
      'Sản lượng: 1400-1600 kwh/tháng',
      'Diện tích lắp đặt: 59,4 m2'
    ],
    mostPopular: false,
  },
]

const hybridTiers = [
  {
    name: '5.2 kW',
    id: 'tier-5.2',
    href: '#',
    price: '85.900.000',
    priceSuffix: 'đ',
    hoiVon: 'Hoàn vốn: 5 năm',
    hieuQua: 'Hiệu quả/tháng: 1.400.000đ',
    description: 'Off-Grid | 1 pha | JA 52 | solis 50 | easyway 52',
    features: [
      'Công suất: 5.2 kW',
      'Hệ điện: 1 pha',
      'Pin lưu trữ Lithium',
      'Sản lượng: 500-600 kwh/tháng',
      'Diện tích lắp đặt: 23,2 m2'
    ],
    mostPopular: false,
  },
  {
    name: '11 kW - 1 pha',
    id: 'tier-11-1p',
    href: '#',
    price: '133.900.000',
    priceSuffix: 'đ',
    hoiVon: 'Hoàn vốn: 5 năm',
    hieuQua: 'Hiệu quả/tháng: 2.200.000đ',
    description: 'Off-Grid | 1 pha | JA 11 | solis 80 | easyway 52',
    features: [
      'Công suất: 11 kW',
      'Hệ điện: 1 pha',
      'Pin lưu trữ Lithium',
      'Sản lượng: 1100-1300 kwh/tháng',
      'Diện tích lắp đặt: 49 m2'
    ],
    mostPopular: false,
  },
  {
    name: '11 kW - 3 pha áp thấp',
    id: 'tier-11-3p-low',
    href: '#',
    price: '155.900.000',
    priceSuffix: 'đ',
    hoiVon: 'Hoàn vốn: 5 năm',
    hieuQua: 'Hiệu quả/tháng: 2.500.000đ',
    description: 'Off-Grid | 3 pha | JA 110 | Solis 120 | easyway 52 - Áp thấp',
    features: [
      'Công suất: 11 kW',
      'Hệ điện: 3 pha áp thấp',
      'Pin lưu trữ Lithium',
      'Sản lượng: 1100-1300 kwh/tháng',
      'Diện tích lắp đặt: 49 m2'
    ],
    mostPopular: true,
  },
  {
    name: '11 kW - 3 pha áp cao',
    id: 'tier-11-3p-high',
    href: '#',
    price: '189.900.000',
    priceSuffix: 'đ',
    hoiVon: 'Hoàn vốn: 5 năm',
    hieuQua: 'Hiệu quả/tháng: 2.800.000đ',
    description: 'Off-Grid | 3 pha | JA 110 | Solis 100 | easyway 10 - Áp cao',
    features: [
      'Công suất: 11 kW',
      'Hệ điện: 3 pha áp cao',
      'Pin lưu trữ Lithium',
      'Sản lượng: 1100-1300 kwh/tháng',
      'Diện tích lắp đặt: 49 m2'
    ],
    mostPopular: false,
  },
]

const descriptions = {
  ongrid: {
    title: "Hệ thống điện mặt trời bám tải On-Grid",
    content: "Hệ thống điện mặt trời On-Grid, là hệ thống vận hành kết hợp giữa nguồn điện mặt trời, và nguồn điện lưới, không bao gồm Pin lưu trữ Lithium. Do vậy, khi mất điện lưới, hệ thống sẽ không vận hành được.",
    image: "/images/on-grid.png"
  },
  hybrid: {
    title: "Hệ thống điện mặt trời độc lập Hybrid",
    content: "Hệ thống điện mặt trời Hybrid, có bao gồm Pin lưu trữ Lithium, nên có thể vận hành độc lập với nguồn lưới điện. Do vậy, khi mất điện lưới, hệ thống sẽ tự động vận hành dựa trên nguồn điện từ Pin Lithium.",
    image: "/images/off-grid.png"
  }
} as const

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

type Frequency = typeof frequencies[number]

export default function Example() {
  const currentDate = new Date()
  const priceMonth = currentDate.toLocaleString('vi-VN', { month: 'numeric', year: 'numeric' })

  return (
    <div className="bg-white py-2 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Điện Mặt Trời Gia Đình
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600">
            Giải pháp năng lượng sạch, tiết kiệm chi phí cho mọi gia đình
          </p>
        </div>

        {/* Phần On-Grid */}
        <div className="mb-16">
          <div className="lg:flex lg:items-center lg:gap-x-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h2 className="text-red-600 text-base/7 font-semibold">Bảng Giá</h2>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                {descriptions.ongrid.title}
              </p>
              <p className="mx-auto mt-2 text-lg/8 text-gray-600">
                {descriptions.ongrid.content}
              </p>
            </div>
            <div className="mt-4 sm:mt-8 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <img
                src={descriptions.ongrid.image}
                alt={descriptions.ongrid.title}
                className="mx-auto w-[32rem] max-w-full drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:max-w-2xl lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {ongridTiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular 
                    ? `ring-2 ${
                        'ring-red-600 bg-red-50'
                      } shadow-xl relative` 
                    : `ring-1 ring-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:ring-red-200`,
                  'rounded-3xl px-4 py-3',
                )}
              >
                {tier.mostPopular && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center gap-x-1.5 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap bg-red-600 text-white`}>
                    <FireIcon className="h-4 w-4" />
                    Bán chạy
                  </div>
                )}
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-red-600' : 'text-gray-900',
                    'text-base/7 font-semibold py-2 text-center'  ,
                  )}
                >
                 
                  {tier.name}
                </h3>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <button 
                    className={classNames(
                      'w-full sm:flex-1 rounded-lg px-2 py-1',
                      'flex items-center gap-x-2',
                      'transition-all duration-200',
                      'bg-red-50 hover:bg-red-100'
                    )}
                  >
                    <ClockIcon 
                      className={`h-5 w-5 text-red-500`}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Hoàn vốn</span>
                      <p className={`text-sm font-semibold text-red-600`}>
                        5 năm
                      </p>
                    </div>
                  </button>
                  
                  <button 
                    className={classNames(
                      'w-full sm:flex-1 rounded-lg px-2 py-1',
                      'flex items-center gap-x-2',
                      'transition-all duration-200',
                      'bg-red-50 hover:bg-red-100'
                    )}
                  >
                    <SparklesIcon 
                      className={`h-5 w-5 text-red-500`}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Hiệu quả/tháng</span>
                      <p className={`text-sm font-semibold text-red-600`}>
                        800.000đ
                      </p>
                    </div>
                  </button>
                </div>
                <p className="mt-6 flex flex-col">
                  <span className="text-sm text-gray-500">Giá niêm yết T{priceMonth}</span>
                  <span className="flex items-baseline gap-x-1">
                    <span className={classNames(
                      "text-3xl sm:text-4xl font-semibold tracking-tight",
                      'text-red-600'
                    )}>
                      {tier.price}
                    </span>
                    <span className="text-sm sm:text-base/7 font-semibold text-gray-600">{tier.priceSuffix}</span>
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? `bg-red-600 text-white hover:bg-red-500 hover:scale-105 hover:shadow-lg`
                      : `text-red-600 ring-1 ring-red-200 hover:bg-red-50 hover:ring-red-300 hover:scale-105`,
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold',
                    'transform transition-all duration-200 ease-in-out',
                    'focus-visible:outline-2 focus-visible:outline-offset-2',
                    'focus-visible:outline-red-600'
                  )}
                >
                  Xem chi tiết
                </a>
                <ul role="list" className="mt-8 space-y-3 text-base/7 text-gray-600">
                  {tier.features.map((feature) => {
                    let Icon = Cog6ToothIcon // default icon
                    
                    // Chọn icon dựa vào nội dung của feature
                    if (feature.toLowerCase().includes('công suất')) {
                      Icon = BoltIcon // ⚡ Công suất
                    } else if (feature.toLowerCase().includes('hệ điện')) {
                      Icon = BuildingOfficeIcon // 🏢 Hệ điện
                    } else if (feature.toLowerCase().includes('sản lượng')) {
                      Icon = ChartBarIcon // 📊 Sản lượng
                    } else if (feature.toLowerCase().includes('hoàn vốn')) {
                      Icon = BanknotesIcon // 💰 Hoàn vốn
                    } else if (feature.toLowerCase().includes('diện tích')) {
                      Icon = Square3Stack3DIcon // 📏 Diện tích
                    } else if (feature.toLowerCase().includes('pin')) {
                      Icon = Battery100Icon // 🔋 Pin lưu trữ
                    } else if (feature.toLowerCase().includes('hiệu suất')) {
                      Icon = ArrowTrendingUpIcon // 📈 Hiệu suất
                    } else if (feature.toLowerCase().includes('thiết bị')) {
                      Icon = WrenchScrewdriverIcon // 🔧 Thiết bị
                    }

                    return (
                      <li key={feature} className="flex gap-x-3 items-center">
                        <Icon 
                          aria-hidden="true" 
                          className={`h-5 w-5 flex-none text-red-600`} 
                        />
                        {feature}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Phần Hybrid */}
        <div className="mt-16">
          <div className="lg:flex lg:items-center lg:gap-x-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h2 className="text-green-600 text-base/7 font-semibold">Bảng Giá</h2>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                {descriptions.hybrid.title}
              </p>
              <p className="mx-auto mt-2 text-lg/8 text-gray-600">
                {descriptions.hybrid.content}
              </p>
            </div>
            <div className="mt-4 sm:mt-8 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <img
                src={descriptions.hybrid.image}
                alt={descriptions.hybrid.title}
                className="mx-auto w-[32rem] max-w-full drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:max-w-2xl lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {hybridTiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular 
                    ? `ring-2 ${
                        'ring-green-600 bg-green-50'
                      } shadow-xl relative` 
                    : `ring-1 ring-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:ring-green-200`,
                  'rounded-3xl px-4 py-3',
                )}
              >
                {tier.mostPopular && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center gap-x-1.5 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap bg-green-600 text-white`}>
                    <FireIcon className="h-4 w-4" />
                    Bán chạy
                  </div>
                )}
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-green-600' : 'text-gray-900',
                    'text-base/7 font-semibold py-2 text-center'  ,
                  )}
                >
                 
                  {tier.name}
                </h3>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <button 
                    className={classNames(
                      'w-full sm:flex-1 rounded-lg px-2 py-1',
                      'flex items-center gap-x-2',
                      'transition-all duration-200',
                      'bg-green-50 hover:bg-green-100'
                    )}
                  >
                    <ClockIcon 
                      className={`h-5 w-5 text-green-500`}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Hoàn vốn</span>
                      <p className={`text-sm font-semibold text-green-600`}>
                        5 năm
                      </p>
                    </div>
                  </button>
                  
                  <button 
                    className={classNames(
                      'w-full sm:flex-1 rounded-lg px-2 py-1',
                      'flex items-center gap-x-2',
                      'transition-all duration-200',
                      'bg-green-50 hover:bg-green-100'
                    )}
                  >
                    <SparklesIcon 
                      className={`h-5 w-5 text-green-500`}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Hiệu quả/tháng</span>
                      <p className={`text-sm font-semibold text-green-600`}>
                        1.400.000đ
                      </p>
                    </div>
                  </button>
                </div>
                <p className="mt-6 flex flex-col">
                  <span className="text-sm text-gray-500">Giá niêm yết T{priceMonth}</span>
                  <span className="flex items-baseline gap-x-1">
                    <span className={classNames(
                      "text-3xl sm:text-4xl font-semibold tracking-tight",
                      'text-green-600'
                    )}>
                      {tier.price}
                    </span>
                    <span className="text-sm sm:text-base/7 font-semibold text-gray-600">{tier.priceSuffix}</span>
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? `bg-green-600 text-white hover:bg-green-500 hover:scale-105 hover:shadow-lg`
                      : `text-green-600 ring-1 ring-green-200 hover:bg-green-50 hover:ring-green-300 hover:scale-105`,
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold',
                    'transform transition-all duration-200 ease-in-out',
                    'focus-visible:outline-2 focus-visible:outline-offset-2',
                    'focus-visible:outline-green-600'
                  )}
                >
                  Xem chi tiết
                </a>
                <ul role="list" className="mt-8 space-y-3 text-base/7 text-gray-600">
                  {tier.features.map((feature) => {
                    let Icon = Cog6ToothIcon // default icon
                    
                    // Chọn icon dựa vào nội dung của feature
                    if (feature.toLowerCase().includes('công suất')) {
                      Icon = BoltIcon // ⚡ Công suất
                    } else if (feature.toLowerCase().includes('hệ điện')) {
                      Icon = BuildingOfficeIcon // 🏢 Hệ điện
                    } else if (feature.toLowerCase().includes('sản lượng')) {
                      Icon = ChartBarIcon // 📊 Sản lượng
                    } else if (feature.toLowerCase().includes('hoàn vốn')) {
                      Icon = BanknotesIcon // 💰 Hoàn vốn
                    } else if (feature.toLowerCase().includes('diện tích')) {
                      Icon = Square3Stack3DIcon // 📏 Diện tích
                    } else if (feature.toLowerCase().includes('pin')) {
                      Icon = Battery100Icon // 🔋 Pin lưu trữ
                    } else if (feature.toLowerCase().includes('hiệu suất')) {
                      Icon = ArrowTrendingUpIcon // 📈 Hiệu suất
                    } else if (feature.toLowerCase().includes('thiết bị')) {
                      Icon = WrenchScrewdriverIcon // 🔧 Thiết bị
                    }

                    return (
                      <li key={feature} className="flex gap-x-3 items-center">
                        <Icon 
                          aria-hidden="true" 
                          className={`h-5 w-5 flex-none text-green-600`} 
                        />
                        {feature}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
