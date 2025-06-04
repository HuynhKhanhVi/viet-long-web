import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiTiktok, SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="bg-teal-600 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">M&M</span>
              </div> */}
              <div>
                <div className="font-bold text-lg">Việt Long May Mặc</div>
                <div className="text-sm text-zinc-400">
                  Clothing Design & Manufacturing
                </div>
              </div>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Việt Long May Mặc hoạt động với mục đích hỗ trợ các shop thời
              trang, local brand, các bạn bán online livestream trong việc thiết
              kế ra mẫu và sản xuất các mặt hàng thời trang từ trung đến cao
              cấp.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Liên kết nhanh</h3>
            <div className="space-y-2">
              <Link
                href="/gioi-thieu"
                className="block text-zinc-300 hover:text-teal-400 transition-colors text-sm"
              >
                Giới thiệu
              </Link>
              <Link
                href="/dong-san-pham"
                className="block text-zinc-300 hover:text-teal-400 transition-colors text-sm"
              >
                Dòng sản phẩm
              </Link>
              <Link
                href="/quy-trinh-dat-may"
                className="block text-zinc-300 hover:text-teal-400 transition-colors text-sm"
              >
                Quy trình đặt may
              </Link>
              <Link
                href="/bao-gia"
                className="block text-zinc-300 hover:text-teal-400 transition-colors text-sm"
              >
                Báo giá
              </Link>
              <Link
                href="/tin-tuc"
                className="block text-zinc-300 hover:text-teal-400 transition-colors text-sm"
              >
                Tin tức
              </Link>
              <Link
                href="/lien-he"
                className="block text-zinc-300 hover:text-teal-400 transition-colors text-sm"
              >
                Liên hệ
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Dịch vụ</h3>
            <div className="space-y-2">
              <div className="text-zinc-300 text-sm">
                Thiết kế & may mặc từ A-Z
              </div>
              <div className="text-zinc-300 text-sm">
                Tư vấn thiết kế chuyên nghiệp
              </div>
              <div className="text-zinc-300 text-sm">XNK số lượng lớn</div>
              <div className="text-zinc-300 text-sm">
                Gia công các đơn hàng trong và ngoài nước
              </div>
              {/* <div className="text-zinc-300 text-sm">
                Ra rập, nhảy size, giặc sơ đồ
              </div>
              <div className="text-zinc-300 text-sm">In logo, nhãn mác</div> */}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Thông tin liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="text-zinc-300 text-sm">
                  230/6/7/7 Mã lò. P Bình Trị Đông A, Q Bình Tân, TP.HCM
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <a
                  href="tel:0868900187"
                  className="text-zinc-300 hover:text-teal-400 transition-colors text-sm"
                >
                  0987 788 352
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <a
                  href="mailto:contact@xuongmay.com"
                  className="text-zinc-300 hover:text-teal-400 transition-colors text-sm"
                >
                  Vietlongmaymac@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium text-sm mb-2">Theo dõi chúng tôi</h4>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/MMClothingStudio"
                  className="bg-zinc-700 p-2 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  <SiFacebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@mmclothingstudio"
                  className="bg-zinc-700 p-2 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  <SiTiktok className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-700 mt-12 pt-8 text-center">
          <p className="text-zinc-400 text-sm">
            Copyright © 2024 Việt Long May Mặc. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
