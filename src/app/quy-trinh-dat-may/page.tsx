import { CheckCircle, ArrowRight, Clock, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function ProcessPage() {
  const processSteps = [
    {
      step: 1,
      title: "Tư vấn & Thiết kế",
      description:
        "Khách hàng cung cấp ý tưởng, hình ảnh hoặc mẫu có sẵn. Đội ngũ thiết kế sẽ tư vấn và tạo ra bản thiết kế chi tiết.",
      duration: "1-2 ngày",
      details: [
        "Tiếp nhận yêu cầu từ khách hàng",
        "Tư vấn về chất liệu, màu sắc phù hợp",
        "Tạo bản thiết kế 2D/3D",
        "Xác nhận thiết kế với khách hàng",
      ],
    },
    {
      step: 2,
      title: "Ra rập & Tạo mẫu",
      description:
        "Tạo rập (pattern) chính xác theo thiết kế đã duyệt và sản xuất mẫu đầu tiên để khách hàng kiểm tra.",
      duration: "2-3 ngày",
      details: [
        "Tạo rập chi tiết theo từng size",
        "Cắt vải và may mẫu đầu tiên",
        "Kiểm tra form dáng và kích thước",
        "Điều chỉnh rập nếu cần thiết",
      ],
    },
    {
      step: 3,
      title: "Duyệt mẫu & Báo giá",
      description:
        "Khách hàng duyệt mẫu và nhận báo giá chi tiết. Chúng tôi điều chỉnh theo yêu cầu để đạt sự hài lòng tuyệt đối.",
      duration: "1 ngày",
      details: [
        "Khách hàng kiểm tra mẫu thực tế",
        "Đưa ra báo giá chi tiết theo số lượng",
        "Thỏa thuận về thời gian giao hàng",
        "Ký hợp đồng và thanh toán đặt cọc",
      ],
    },
    {
      step: 4,
      title: "Sản xuất hàng loạt",
      description:
        "Bắt đầu sản xuất với quy trình kiểm soát chất lượng nghiêm ngặt. Cập nhật tiến độ thường xuyên cho khách hàng.",
      duration: "5-15 ngày",
      details: [
        "Chuẩn bị nguyên liệu theo số lượng",
        "Cắt vải chính xác theo rập",
        "May theo quy trình chuẩn",
        "Kiểm tra chất lượng từng sản phẩm",
      ],
    },
    {
      step: 5,
      title: "Hoàn thiện & Giao hàng",
      description:
        "Hoàn thiện các chi tiết cuối, đóng gói cẩn thận và giao hàng đúng hẹn với chế độ bảo hành chất lượng.",
      duration: "1-2 ngày",
      details: [
        "Là ủi và hoàn thiện sản phẩm",
        "Kiểm tra chất lượng lần cuối",
        "Đóng gói theo yêu cầu khách hàng",
        "Giao hàng và hỗ trợ sau bán",
      ],
    },
  ];

  const advantages = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Thời gian nhanh chóng",
      description:
        "Quy trình tối ưu giúp rút ngắn thời gian từ thiết kế đến thành phẩm",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Chất lượng đảm bảo",
      description:
        "Kiểm tra chất lượng ở mọi khâu để đảm bảo sản phẩm hoàn hảo",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tư vấn chuyên nghiệp",
      description: "Đội ngũ có kinh nghiệm tư vấn tận tình từ A đến Z",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Linh hoạt thay đổi",
      description: "Có thể điều chỉnh thiết kế trong quá trình sản xuất",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r  bg-green-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              QUY TRÌNH ĐẶT MAY
              <span className="block text-teal-200">CHUYÊN NGHIỆP</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 leading-relaxed">
              Để đảm bảo chất lượng và thời gian, khi làm việc với Việt Long May
              Mặc, chúng tôi có quy trình đặt may thuận lợi và nhanh chóng nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
                5 BƯỚC ĐƠN GIẢN
              </h2>
              <p className="text-xl text-zinc-600">
                Từ ý tưởng đến sản phẩm hoàn thiện chỉ trong vòng 7-20 ngày
              </p>
            </div>

            <div className="space-y-16">
              {processSteps.map((process, index) => (
                <div
                  key={process.step}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                        {process.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-zinc-800">
                          {process.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-teal-600">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">
                            {process.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-zinc-600 leading-relaxed">
                      {process.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-zinc-800">
                        Chi tiết thực hiện:
                      </h4>
                      <div className="space-y-2">
                        {process.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-zinc-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual/Number */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-12 text-center">
                      <div className="text-8xl font-bold text-teal-600 mb-4">
                        {process.step.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xl font-semibold text-teal-800">
                        {process.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
                ƯU ĐIỂM CỦA QUY TRÌNH
              </h2>
              <p className="text-xl text-zinc-600">
                Tại sao khách hàng tin tưởng quy trình làm việc của chúng tôi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
                THỜI GIAN THỰC HIỆN
              </h2>
              <p className="text-xl text-zinc-600">
                Tổng quan thời gian cho mỗi giai đoạn
              </p>
            </div>

            <div className="bg-gradient-to-r bg-green-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">1-2</div>
                  <div className="text-green-200 text-sm">Ngày thiết kế</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">2-3</div>
                  <div className="text-teal-200 text-sm">Ngày tạo mẫu</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">1</div>
                  <div className="text-teal-200 text-sm">Ngày duyệt mẫu</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">5-15</div>
                  <div className="text-teal-200 text-sm">Ngày sản xuất</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">1-2</div>
                  <div className="text-teal-200 text-sm">Ngày hoàn thiện</div>
                </div>
              </div>
              <div className="text-center mt-8 pt-8 border-t border-teal-400">
                <div className="text-2xl font-bold mb-2">
                  Tổng thời gian: 10-23 ngày
                </div>
                <div className="text-teal-200">
                  Tùy thuộc vào độ phức tạp và số lượng đơn hàng
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r bg-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Sẵn sàng bắt đầu dự án?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn chi tiết về quy
            trình và báo giá
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="inline-flex items-center bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Liên hệ tư vấn
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/bao-gia"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition-colors"
            >
              Xem bảng giá
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
