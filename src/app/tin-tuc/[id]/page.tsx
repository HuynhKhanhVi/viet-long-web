import Link from "next/link";
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Heart,
  MessageCircle,
} from "lucide-react";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // Sample blog post data - in real app this would come from API
  const post = {
    id: params.id,
    title: "Xu hướng thời trang Xuân Hè 2024: Những điều bạn cần biết",
    content: `
      <p>Mùa Xuân Hè 2024 đang đến gần và cùng với đó là những xu hướng thời trang mới đầy thú vị. Trong bài viết này, chúng tôi sẽ cùng bạn khám phá những xu hướng hot nhất mà bạn không thể bỏ qua.</p>

      <h2>1. Màu sắc thống trị mùa Xuân Hè 2024</h2>
      <p>Năm 2024, các nhà thiết kế đang ưa chuộng những gam màu tươi sáng và năng động. Màu xanh lá cây, màu cam đào và màu tím lavender đang là những lựa chọn hàng đầu.</p>

      <h2>2. Chất liệu và kiểu dáng được ưa chuộng</h2>
      <p>Vải linen và cotton vẫn là những chất liệu được ưa chuộng nhất cho mùa hè. Các thiết kế oversized và cropped top cũng đang trở lại mạnh mẽ.</p>

      <h2>3. Phụ kiện không thể thiếu</h2>
      <p>Mũ bucket, túi mini và giày sneaker retro là những phụ kiện sẽ làm cho outfit của bạn trở nên hoàn hảo hơn.</p>

      <h2>4. Lời khuyên từ M&M Studio</h2>
      <p>Khi thiết kế và sản xuất trang phục cho khách hàng, chúng tôi luôn cập nhật những xu hướng mới nhất để mang đến những sản phẩm phù hợp với thị trường.</p>
    `,
    excerpt:
      "Khám phá những xu hướng thời trang hot nhất trong mùa Xuân Hè 2024, từ màu sắc, chất liệu đến kiểu dáng đang được ưa chuộng...",
    image: "https://ext.same-assets.com/1130123988/1355378339.jpeg",
    date: "15 Tháng 3, 2024",
    author: "M&M Studio",
    category: "Xu hướng",
    readTime: "5 phút đọc",
    likes: 24,
    shares: 8,
    comments: 12,
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Bí quyết chọn chất liệu vải phù hợp cho từng mùa",
      image: "https://ext.same-assets.com/1130123988/1399832580.jpeg",
      date: "12 Tháng 3, 2024",
      category: "Kiến thức",
    },
    {
      id: 3,
      title: "6 phong cách mix đồ công sở không bao giờ lỗi mốt",
      image: "https://ext.same-assets.com/1130123988/1737278612.jpeg",
      date: "10 Tháng 3, 2024",
      category: "Phong cách",
    },
    {
      id: 4,
      title: "Kinh nghiệm dành cho người mới bắt đầu kinh doanh quần áo",
      image: "https://ext.same-assets.com/1130123988/2166080511.jpeg",
      date: "8 Tháng 3, 2024",
      category: "Kinh doanh",
    },
  ];

  return (
    <div className="bg-white">
      {/* Back Button */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Link
            href="/tin-tuc"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại tin tức
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-6">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold text-zinc-800 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-zinc-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Social Actions */}
            <div className="flex items-center justify-between border-y border-zinc-200 py-4 mb-8">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-zinc-600 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-zinc-600 hover:text-blue-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>{post.shares}</span>
                </button>
                <button className="flex items-center space-x-2 text-zinc-600 hover:text-green-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Chia sẻ Facebook
                </button>
                <button className="bg-zinc-600 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors text-sm">
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-zinc-800 prose-headings:font-bold
                prose-p:text-zinc-700 prose-p:leading-relaxed
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Author Box */}
      <section className="py-12 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                  M&M
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-zinc-800 mb-2">
                    M&M Clothing Studio
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    M&M Clothing Studio là đối tác tin cậy trong việc thiết kế
                    và sản xuất thời trang chất lượng cao. Với nhiều năm kinh
                    nghiệm trong ngành, chúng tôi cam kết mang đến những sản
                    phẩm tốt nhất và những kiến thức hữu ích cho cộng đồng yêu
                    thời trang.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/gioi-thieu"
                      className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      Tìm hiểu thêm về chúng tôi →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-800 mb-12 text-center">
              Bài viết liên quan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-zinc-700 px-3 py-1 rounded-full text-sm font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-zinc-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{relatedPost.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-800 mb-4 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <Link
                      href={`/tin-tuc/${relatedPost.id}`}
                      className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      Đọc thêm →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bạn có ý tưởng thiết kế thời trang?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để biến ý tưởng thành hiện thực
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
