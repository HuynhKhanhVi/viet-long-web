"use client";
import Link from "next/link";
import CountUp from "react-countup";
import {
  ArrowRight,
  Star,
  Users,
  ShoppingBag,
  Zap,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-r bg-green-500 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-teal-200 font-medium">
                  Bạn chỉ lo kinh doanh, còn lại chúng tôi lo
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  THIẾT KẾ & MAY MẶC
                  {/* <span className="block text-green-400">TỪ A-Z</span> */}
                </h1>
                <p className="text-xl lg:text-2xl text-teal-100 leading-relaxed">
                  Bạn chỉ cần cung cấp ý tưởng, hình ảnh hoặc bản có mẫu sẵn,
                  chúng tôi hỗ trợ bạn hiện thực sản phẩm và sản xuất hàng cho
                  bạn
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-teal-700 hover:bg-teal-50"
                >
                  <Link href="/lien-he">
                    Liên hệ tư vấn
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-teal-700 hover:bg-teal-50"
                >
                  <Link href="/quy-trinh-dat-may">
                    Xem quy trình
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    <CountUp end={500} duration={2} />+
                  </div>
                  <div className="text-white text-sm">Khách hàng tin tưởng</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold">
                    <CountUp end={5} duration={2} />+
                  </div>
                  <div className="text-white text-sm">Năm kinh nghiệm</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold">
                    <CountUp end={100} duration={2} />%
                  </div>
                  <div className="text-white text-sm">Cam kết chất lượng</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <img
                  src="/images/banner.png"
                  alt="Fashion Design Studio"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
              CHÚNG TÔI PHỤC VỤ BẠN
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Từ ý tưởng thiết kế đến sản phẩm hoàn thiện, chúng tôi đồng hành
              cùng bạn trong mọi giai đoạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-4">
                Thiết kế & Gia công may mặc
              </h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Bạn chỉ cần cung cấp hình ảnh, mẫu có sẵn hoặc ý tưởng còn lại
                M&M sẽ giúp bạn. Chúng tôi có sự am hiểu và kinh nghiệm thiết kế
                và sản xuất tất cả các mặt hàng thời trang.
              </p>
              <Link
                href="/dong-san-pham"
                className="text-green-600 font-medium flex items-center hover:text-teal-700"
              >
                Xem sản phẩm <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-4">
                Cam kết chất lượng, thời gian với chi phí tốt nhất
              </h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Xác định lợi thế là chất lượng, thời gian và chi phí tốt nhất,
                M&M luôn cam kết chất lượng sản phẩm theo đúng yêu cầu, thời
                gian giao hàng đúng hẹn và chi phí tốt nhất cho khách hàng.
              </p>
              <Link
                href="/bao-gia"
                className="text-green-600 font-medium flex items-center hover:text-teal-700"
              >
                Xem báo giá <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-4">
                Bạn lo kinh doanh, việc còn lại để chúng tôi lo
              </h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Từ hỗ trợ đối tác tin cậy của các shop thời trang, local brand,
                các bạn bán hàng online livestream từ trung cấp đến cao cấp,
                chúng tôi có thể nhận đơn hàng số lượng không giới hạn.
              </p>
              <Link
                href="/quy-trinh-dat-may"
                className="text-green-600 font-medium flex items-center hover:text-green-300"
              >
                Xem quy trình <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-xl lg:text-3xl font-bold text-zinc-800">
                <span className="block text-black font-bold">
                  CÔNG TY TNHH TM DV SX XNK VIỆT LONG
                </span>
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Việt Long May Mặc hoạt động với mục đích hỗ trợ các shop thời
                trang, local brand, các bạn bán online livestream trong việc
                thiết kế ra mẫu và sản xuất các mặt hàng thời trang từ trung đến
                cao cấp. Chúng tôi giúp bạn tối ưu hóa quy trình kinh doanh thời
                trang, thời gian ra mẫu thay đổi trend linh hoạt.
              </p>
              <Button asChild size="lg" className="bg-black hover:bg-green-400">
                <Link href="/gioi-thieu">
                  Tìm hiểu thêm về chúng tôi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1130123988/2762615625.jpeg"
                alt="Our Workshop"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Sẵn sàng bắt đầu dự án của bạn?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về dự án
            thiết kế và may mặc của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-teal-700 hover:bg-green-300"
            >
              <Link href="/lien-he">
                <Phone className="mr-2 w-5 h-5" />
                Liên hệ ngay
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-teal-700 hover:bg-green-300"
            >
              <Link href="/bao-gia">Xem bảng giá</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
