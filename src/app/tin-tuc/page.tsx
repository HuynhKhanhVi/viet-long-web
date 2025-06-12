import Link from "next/link";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export default function NewsPage() {
  const featuredPost = {
    id: 1,
    title: "Xu hướng thời trang Xuân Hè 2024: Những điều bạn cần biết",
    excerpt:
      "Khám phá những xu hướng thời trang hot nhất trong mùa Xuân Hè 2024, từ màu sắc, chất liệu đến kiểu dáng đang được ưa chuộng...",
    image: "https://ext.same-assets.com/1130123988/1355378339.jpeg",
    date: "15 Tháng 3, 2024",
    author: "M&M Studio",
    category: "Xu hướng",
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: "Bí quyết chọn chất liệu vải phù hợp cho từng mùa",
      excerpt:
        "Hiểu rõ về các loại chất liệu vải và cách chọn lựa phù hợp với thời tiết và mục đích sử dụng...",
      image: "https://ext.same-assets.com/1130123988/1399832580.jpeg",
      date: "12 Tháng 3, 2024",
      author: "M&M Studio",
      category: "Kiến thức",
    },
    {
      id: 3,
      title: "6 phong cách mix đồ công sở không bao giờ lỗi mốt",
      excerpt:
        "Nếu sáng hôm nào cũng phải đau đầu giải quyết câu hỏi 'Hôm nay mặc gì?', thì bài viết này dành cho bạn...",
      image: "https://ext.same-assets.com/1130123988/1737278612.jpeg",
      date: "10 Tháng 3, 2024",
      author: "M&M Studio",
      category: "Phong cách",
    },
    {
      id: 4,
      title: "Kinh nghiệm dành cho người mới bắt đầu kinh doanh quần áo",
      excerpt:
        "Trước khi bắt đầu kinh doanh, chúng ta đều thích nghĩ đến lợi nhuận hơn là những rủi ro có thể gặp phải...",
      image: "https://ext.same-assets.com/1130123988/2166080511.jpeg",
      date: "8 Tháng 3, 2024",
      author: "M&M Studio",
      category: "Kinh doanh",
    },
    {
      id: 5,
      title: "Cách bảo quản và giặt ủi quần áo đúng cách",
      excerpt:
        "Hướng dẫn chi tiết cách bảo quản, giặt ủi các loại vải khác nhau để quần áo luôn như mới...",
      image: "https://ext.same-assets.com/1130123988/882577681.png",
      date: "5 Tháng 3, 2024",
      author: "M&M Studio",
      category: "Hướng dẫn",
    },
    {
      id: 6,
      title: "Quy trình thiết kế thời trang từ ý tưởng đến thành phẩm",
      excerpt:
        "Tìm hiểu quy trình thiết kế thời trang chuyên nghiệp từ việc phác thảo ý tưởng đến sản phẩm hoàn thiện...",
      image: "https://ext.same-assets.com/1130123988/868750072.png",
      date: "2 Tháng 3, 2024",
      author: "M&M Studio",
      category: "Thiết kế",
    },
    {
      id: 7,
      title: "Top 10 shop thời trang local brand đáng chú ý năm 2024",
      excerpt:
        "Điểm qua những local brand Việt Nam đang tạo nên xu hướng và được giới trẻ yêu thích...",
      image: "https://ext.same-assets.com/1130123988/3009084940.png",
      date: "28 Tháng 2, 2024",
      author: "M&M Studio",
      category: "Thương hiệu",
    },
  ];

  const categories = [
    "Tất cả",
    "Xu hướng",
    "Kiến thức",
    "Phong cách",
    "Kinh doanh",
    "Hướng dẫn",
    "Thiết kế",
    "Thương hiệu",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              TIN TỨC & BLOG
              <span className="block text-teal-200">THỜI TRANG</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 leading-relaxed">
              Cập nhật xu hướng thời trang mới nhất và kiến thức hữu ích trong
              ngành may mặc
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-zinc-800 mb-4">
                Bài viết nổi bật
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-sm text-zinc-500">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-zinc-800 leading-tight">
                  {featuredPost.title}
                </h1>

                <p className="text-lg text-zinc-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <Link
                  href={`/tin-tuc/${featuredPost.id}`}
                  className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  Đọc tiếp
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Nổi bật
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    index === 0
                      ? "bg-teal-600 text-white"
                      : "bg-white text-zinc-600 hover:bg-teal-50 hover:text-teal-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-zinc-800 mb-4">
                Tất cả bài viết
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-zinc-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-zinc-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-800 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-zinc-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/tin-tuc/${post.id}`}
                      className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      Đọc thêm
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Xem thêm bài viết
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Đăng ký nhận tin tức mới nhất
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Không bỏ lỡ những xu hướng thời trang và kiến thức hữu ích từ M&M
              Studio
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="flex-1 px-4 py-3 rounded-lg text-zinc-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
