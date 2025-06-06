"use client";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import CountUp from "react-countup";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              GIỚI THIỆU VỀ
              <span className="block text-teal-200">VIỆT LONG MAY MẶC</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 leading-relaxed">
              Đối tác tin cậy trong việc thiết kế và sản xuất thời trang chất
              lượng cao
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800">
                Giới thiệu về chúng tôi
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Việt Long may mặc được thành lập với mục tiêu trở thành đối tác
                tin cậy của các shop thời trang, local brand và các doanh nghiệp
                kinh doanh online. Chúng tôi hiểu rằng trong thế giới thời trang
                luôn thay đổi, việc có một đối tác có thể đáp ứng nhanh chóng và
                chất lượng là vô cùng quan trọng.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Với đội ngũ thiết kế và thợ may có kinh nghiệm nhiều năm trong
                ngành, chúng tôi tự hào mang đến cho khách hàng những sản phẩm
                chất lượng cao với thời gian giao hàng nhanh chóng và giá cả
                cạnh tranh.
              </p>
            </div>
            <div className="relative">
              <Image
                src="./images/Images-about.png"
                alt="Viêt Long May Mặc"
                width={500}
                height={400}
                className=" rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-zinc-800 mb-6">SỨ MỆNH</h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Hỗ trợ các doanh nghiệp thời trang tối ưu hóa quy trình sản
                xuất, từ ý tưởng thiết kế đến sản phẩm hoàn thiện, giúp họ tập
                trung vào việc kinh doanh và phát triển thương hiệu.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-zinc-700">
                    Chất lượng sản phẩm đảm bảo
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-zinc-700">
                    Thời gian giao hàng đúng hẹn
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-zinc-700">Giá cả cạnh tranh nhất</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-zinc-800 mb-6">
                TẦM NHÌN
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Trở thành xưởng may gia công hàng đầu Việt Nam, được biết đến
                với chất lượng sản phẩm tuyệt vời, dịch vụ chuyên nghiệp và khả
                năng đáp ứng mọi nhu cầu của khách hàng.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <span className="text-zinc-700">
                    Dẫn đầu về công nghệ sản xuất
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-teal-600" />
                  <span className="text-zinc-700">
                    Đội ngũ chuyên nghiệp nhất
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-teal-600" />
                  <span className="text-zinc-700">Thương hiệu uy tín số 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
              TẠI SAO CHỌN VIỆT LONG MAY MẶC
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến cho bạn trải nghiệm dịch vụ tốt nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
                <Award className="w-10 h-10 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-3">
                Kinh nghiệm 5+ năm
              </h3>
              <p className="text-zinc-600">
                Đội ngũ có kinh nghiệm lâu năm trong ngành thời trang
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
                <CheckCircle className="w-10 h-10 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-3">
                Chất lượng cao
              </h3>
              <p className="text-zinc-600">
                Cam kết chất lượng sản phẩm theo tiêu chuẩn cao nhất
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-3">
                Giao hàng nhanh
              </h3>
              <p className="text-zinc-600">
                Thời gian sản xuất và giao hàng nhanh chóng, đúng hẹn
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
                <Users className="w-10 h-10 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-3">
                Hỗ trợ 24/7
              </h3>
              <p className="text-zinc-600">
                Đội ngũ tư vấn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                <CountUp end={500} duration={2} />+
              </div>
              <div className="text-teal-200">Khách hàng hài lòng</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                <CountUp end={10000} duration={2} />+
              </div>
              <div className="text-teal-200">Sản phẩm đã hoàn thành</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                <CountUp end={5} duration={2} />
              </div>
              <div className="text-teal-200">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                <CountUp end={99} duration={2} />%
              </div>
              <div className="text-teal-200">Tỷ lệ khách hàng quay lại</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
