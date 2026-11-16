export const categories = ['Tất cả', 'iPhone', 'Mac', 'iPad', 'Watch & AirPods']

export const productImageFallback =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#f5f5f7"/><stop offset="1" stop-color="#d2d2d7"/></linearGradient></defs><rect width="640" height="480" rx="40" fill="url(#g)"/><circle cx="320" cy="210" r="74" fill="#c7c7cc"/><path d="M288 298h64v8h-64z" fill="#86868b"/><text x="320" y="365" text-anchor="middle" fill="#6e6e73" font-family="Arial,sans-serif" font-size="21">Apple Flagship Store</text></svg>',
  )

export const products = [
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    tagline: 'Titan tự nhiên. Đỉnh cao sức mạnh A18 Pro.',
    category: 'iPhone',
    price: 34990000,
    originalPrice: 34990000,
    badge: 'Bán chạy',
    colors: ['#b8aaa0', '#242426', '#e3e4e5', '#d2c8bc'],
    image:
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=85',
    description:
      'Màn hình lớn nhất, thời lượng pin dài nhất trên iPhone. Thiết kế titan bền bỉ cùng chip A18 Pro mạnh mẽ.',
    specs: [
      { label: 'Chip', value: 'A18 Pro' },
      { label: 'Màn hình', value: 'Super Retina XDR 6,9 inch' },
      { label: 'Camera / Pin', value: 'Camera Fusion 48MP · Lên đến 33 giờ xem video' },
      { label: 'Bảo hành', value: '12 tháng chính hãng Apple Việt Nam' },
    ],
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus',
    tagline: 'Màn hình lớn. Đầy màu sắc. Sẵn sàng cho Apple Intelligence.',
    category: 'iPhone',
    price: 25990000,
    originalPrice: 25990000,
    badge: 'Mới',
    colors: ['#a4c8e8', '#e3c2c5', '#f1e4cb', '#c4d2c1'],
    image:
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1200&q=85',
    description:
      'iPhone 16 Plus sở hữu màn hình Super Retina XDR rộng rãi, nút Điều Khiển Camera mới và chip A18.',
    specs: [
      { label: 'Chip', value: 'A18' },
      { label: 'Màn hình', value: 'Super Retina XDR 6,7 inch' },
      { label: 'Camera / Pin', value: 'Camera kép 48MP · Lên đến 27 giờ xem video' },
      { label: 'Bảo hành', value: '12 tháng chính hãng Apple Việt Nam' },
    ],
  },
  {
    id: 'macbook-pro-14-m4',
    name: 'MacBook Pro 14” M4',
    tagline: 'Tốc độ chuyên nghiệp. Năng lực sáng tạo vượt trội.',
    category: 'Mac',
    price: 39990000,
    originalPrice: 41990000,
    badge: 'Trả góp 0%',
    colors: ['#242426', '#d4d4d2'],
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=85',
    description:
      'MacBook Pro 14 inch với chip M4 xử lý tác vụ chuyên nghiệp nhanh hơn, trong một thiết kế bền bỉ.',
    specs: [
      { label: 'Chip', value: 'Apple M4 · CPU 10 lõi · GPU 10 lõi' },
      { label: 'Màn hình', value: 'Liquid Retina XDR 14,2 inch' },
      { label: 'Camera / Pin', value: 'Camera 12MP Center Stage · Lên đến 24 giờ' },
      { label: 'Bảo hành', value: '12 tháng chính hãng Apple Việt Nam' },
    ],
  },
  {
    id: 'macbook-air-13-m3',
    name: 'MacBook Air 13” M3',
    tagline: 'Mỏng nhẹ. Bền bỉ. Mạnh mẽ từ chip M3.',
    category: 'Mac',
    price: 26990000,
    originalPrice: 28990000,
    badge: 'Ưu đãi tốt',
    colors: ['#b8aaa0', '#242426', '#e3e4e5', '#d2c8bc'],
    image:
      'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&w=1200&q=85',
    description:
      'Siêu di động và nhanh nhạy với chip M3, MacBook Air là lựa chọn lý tưởng cho công việc mỗi ngày.',
    specs: [
      { label: 'Chip', value: 'Apple M3 · CPU 8 lõi · GPU 10 lõi' },
      { label: 'Màn hình', value: 'Liquid Retina 13,6 inch' },
      { label: 'Camera / Pin', value: 'Camera FaceTime HD 1080p · Lên đến 18 giờ' },
      { label: 'Bảo hành', value: '12 tháng chính hãng Apple Việt Nam' },
    ],
  },
  {
    id: 'imac-m4',
    name: 'iMac M4',
    tagline: 'Tất cả trong một. Màu sắc của riêng bạn.',
    category: 'Mac',
    price: 34990000,
    originalPrice: 34990000,
    badge: 'Mới',
    colors: ['#90b8d5', '#f3a5a0', '#e1c4e7', '#d7e4c4'],
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=85',
    description:
      'iMac mới với chip M4 nhanh nhạy, màn hình Retina 4.5K tuyệt đẹp và thiết kế tất cả trong một.',
    specs: [
      { label: 'Chip', value: 'Apple M4 · CPU 8 lõi · GPU 8 lõi' },
      { label: 'Màn hình', value: 'Retina 4.5K 24 inch' },
      { label: 'Camera / Pin', value: 'Camera 12MP Center Stage · Desk View' },
      { label: 'Bảo hành', value: '12 tháng chính hãng Apple Việt Nam' },
    ],
  },
  {
    id: 'ipad-pro-m4',
    name: 'iPad Pro M4 OLED',
    tagline: 'Thiết kế mỏng nhất. Màn hình tiên tiến nhất.',
    category: 'iPad',
    price: 28990000,
    originalPrice: 28990000,
    badge: 'Mới',
    colors: ['#242426', '#d4d4d2'],
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=85',
    description:
      'Màn hình Ultra Retina XDR với công nghệ OLED song song và sức mạnh vượt trội từ chip M4.',
    specs: [
      { label: 'Chip', value: 'Apple M4 · CPU 9 lõi · GPU 10 lõi' },
      { label: 'Màn hình', value: 'Ultra Retina XDR OLED 11 inch' },
      { label: 'Camera / Pin', value: 'Camera ngang 12MP · Lên đến 10 giờ' },
      { label: 'Bảo hành', value: '12 tháng chính hãng Apple Việt Nam' },
    ],
  },
  {
    id: 'ipad-air-m2',
    name: 'iPad Air M2',
    tagline: 'Một cỗ máy sáng tạo. Nay có hai kích cỡ.',
    category: 'iPad',
    price: 16990000,
    originalPrice: 16990000,
    badge: 'Trả góp 0%',
    colors: ['#8399a8', '#d8d1c9', '#c9c1d9', '#d7dfd1'],
    image:
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1200&q=85',
    description:
      'iPad Air với chip M2 mạnh mẽ, camera trước ngang và khả năng tương thích Apple Pencil Pro.',
    specs: [
      { label: 'Chip', value: 'Apple M2 · CPU 8 lõi · GPU 9 lõi' },
      { label: 'Màn hình', value: 'Liquid Retina 11 inch' },
      { label: 'Camera / Pin', value: 'Camera ngang 12MP · Lên đến 10 giờ' },
      { label: 'Bảo hành', value: '12 tháng chính hãng Apple Việt Nam' },
    ],
  },
  {
    id: 'watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    tagline: 'Khám phá mọi giới hạn. Sẵn sàng mọi hành trình.',
    category: 'Watch & AirPods',
    price: 21990000,
    originalPrice: 21990000,
    badge: 'Bán chạy',
    colors: ['#b8aaa0', '#d8d8d6'],
    image:
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1200&q=85',
    description:
      'Đồng hồ thể thao và phiêu lưu mạnh mẽ nhất, với màn hình sáng hơn và GPS tần số kép chính xác.',
    specs: [
      { label: 'Chip', value: 'S9 SiP với chip Ultra Wideband thế hệ 2' },
      { label: 'Màn hình', value: 'OLED LTPO Always-On 49mm' },
      { label: 'Camera / Pin', value: 'Chỉ báo độ sâu · Thời lượng pin đến 36 giờ' },
      { label: 'Bảo hành', value: '12 tháng chính hãng Apple Việt Nam' },
    ],
  },
  {
    id: 'watch-series-10',
    name: 'Apple Watch Series 10',
    tagline: 'Mỏng hơn. Màn hình lớn hơn. Kết nối cả ngày.',
    category: 'Watch & AirPods',
    price: 10990000,
    originalPrice: 10990000,
    badge: 'Mới',
    colors: ['#d4d4d2', '#b8aaa0', '#242426'],
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=85',
    description:
      'Apple Watch Series 10 có thiết kế mỏng hơn, màn hình lớn hơn và các tính năng sức khỏe thiết yếu.',
    specs: [
      { label: 'Chip', value: 'S10 SiP với Neural Engine 4 lõi' },
      { label: 'Màn hình', value: 'OLED LTPO3 góc rộng 42mm / 46mm' },
      { label: 'Camera / Pin', value: 'Cảm biến độ sâu · Thời lượng pin đến 18 giờ' },
      { label: 'Bảo hành', value: '12 tháng chính hãng Apple Việt Nam' },
    ],
  },
  {
    id: 'airpods-pro-2-usb-c',
    name: 'AirPods Pro 2 USB-C',
    tagline: 'Âm thanh thích ứng. Chống ồn chủ động thông minh.',
    category: 'Watch & AirPods',
    price: 5990000,
    originalPrice: 5990000,
    badge: 'Trả góp 0%',
    colors: ['#f4f4f2'],
    image:
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1200&q=85',
    description:
      'AirPods Pro với khả năng khử tiếng ồn chủ động vượt trội, âm thanh không gian cá nhân hóa và hộp sạc USB-C.',
    specs: [
      { label: 'Chip', value: 'Apple H2 · Chip U1 trong hộp sạc' },
      { label: 'Màn hình', value: 'Âm thanh không gian cá nhân hóa' },
      { label: 'Camera / Pin', value: 'Khử tiếng ồn chủ động · Lên đến 6 giờ nghe' },
      { label: 'Bảo hành', value: '12 tháng chính hãng Apple Việt Nam' },
    ],
  },
]

export const highlights = [
  {
    id: 'applecare',
    title: 'An tâm với AppleCare+',
    description: 'Bảo vệ thiết bị toàn diện, hỗ trợ bởi chuyên gia Apple.',
    detail: 'Chính hãng',
    icon: 'shield',
    className: 'md:col-span-2',
  },
  {
    id: 'trade-in',
    title: 'Lên đời thật dễ',
    description: 'Thu cũ đổi mới, trợ giá đến 4 triệu đồng.',
    detail: 'Trade-in',
    icon: 'refresh',
    className: '',
  },
  {
    id: 'installment',
    title: 'Sở hữu ngay hôm nay',
    description: 'Trả góp 0% lãi suất trong 12 tháng.',
    detail: '0% lãi suất',
    icon: 'credit',
    className: '',
  },
  {
    id: 'delivery',
    title: 'Nhanh chóng đến tay bạn',
    description: 'Giao hàng miễn phí trong 2 giờ tại khu vực hỗ trợ.',
    detail: 'Miễn phí',
    icon: 'truck',
    className: 'md:col-span-2',
  },
]

export const faqs = [
  {
    id: 'warranty',
    question: 'Sản phẩm được bảo hành chính hãng như thế nào?',
    answer:
      'Toàn bộ sản phẩm Apple chính hãng tại cửa hàng được bảo hành 12 tháng theo chính sách của Apple Việt Nam. Bạn có thể kiểm tra và sử dụng dịch vụ tại các trung tâm bảo hành ủy quyền Apple trên toàn quốc.',
  },
  {
    id: 'trade-in',
    question: 'Chương trình Trade-in thu cũ đổi mới hoạt động ra sao?',
    answer:
      'Mang thiết bị cũ đến cửa hàng để được kiểm tra tình trạng miễn phí. Giá thu đổi được tư vấn minh bạch theo model và tình trạng thực tế; mức trợ giá có thể lên đến 4 triệu đồng tùy chương trình.',
  },
  {
    id: 'vat',
    question: 'Tôi có được xuất hóa đơn VAT không?',
    answer:
      'Có. Cửa hàng hỗ trợ xuất hóa đơn VAT điện tử cho khách hàng cá nhân và doanh nghiệp. Vui lòng cung cấp thông tin xuất hóa đơn khi đặt hàng hoặc liên hệ đội ngũ tư vấn.',
  },
  {
    id: 'installment',
    question: 'Mua trả góp 0% cần những điều kiện gì?',
    answer:
      'Bạn có thể chọn trả góp qua thẻ tín dụng hoặc các đối tác tài chính đang áp dụng tại cửa hàng. Kỳ hạn và điều kiện tùy đối tác; chuyên viên sẽ kiểm tra lựa chọn phù hợp trước khi xác nhận.',
  },
  {
    id: 'delivery',
    question: 'Cửa hàng có giao hàng và hỗ trợ cài đặt không?',
    answer:
      'Cửa hàng hỗ trợ giao hàng miễn phí trong 2 giờ tại một số khu vực đủ điều kiện. Nhân viên có thể hướng dẫn kích hoạt thiết bị và chuyển dữ liệu cơ bản khi bàn giao.',
  },
  {
    id: 'authentic',
    question: 'Làm sao để biết đây là Apple Authorized Reseller?',
    answer:
      'Sản phẩm có nguồn gốc chính hãng, đầy đủ hóa đơn và điều kiện bảo hành Apple Việt Nam. Bạn có thể kiểm tra tình trạng bảo hành trên trang hỗ trợ chính thức của Apple bằng số sê-ri thiết bị.',
  },
]
