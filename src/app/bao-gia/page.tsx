"use client";

import { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    quantity: "",
    description: "",
  });

  const pricingTiers = [
    {
      title: "Thiết kế cơ bản",
      price: "300,000 - 500,000",
      unit: "VNĐ/mẫu",
      description: "Thiết kế đơn giản, ít chi tiết",
      features: [
        "Thiết kế 2D cơ bản",
        "1 lần chỉnh sửa miễn phí",
        "File thiết kế định dạng PDF",
        "Tư vấn chất liệu cơ bản",
      ],
      recommended: false,
    },
    {
      title: "Thiết kế chuyên nghiệp",
      price: "500,000 - 1,000,000",
      unit: "VNĐ/mẫu",
      description: "Thiết kế chi tiết, chuyên nghiệp",
      features: [
        "Thiết kế 2D/3D chi tiết",
        "3 lần chỉnh sửa miễn phí",
        "File thiết kế đa định dạng",
        "Tư vấn chất liệu chuyên sâu",
        "Bảng màu và size chi tiết",
        "Hỗ trợ 24/7",
      ],
      recommended: true,
    },
    {
      title: "Thiết kế cao cấp",
      price: "1,000,000+",
      unit: "VNĐ/mẫu",
      description: "Thiết kế độc quyền, phức tạp",
      features: [
        "Thiết kế 3D chuyên nghiệp",
        "Không giới hạn chỉnh sửa",
        "Bản quyền độc quyền",
        "Tư vấn xu hướng thời trang",
        "Phối màu và chất liệu cao cấp",
        "Hỗ trợ ưu tiên 24/7",
        "Tư vấn marketing sản phẩm",
      ],
      recommended: false,
    },
  ];

  const manufacturingPrices = [
    {
      category: "Áo sơ mi / Áo kiểu",
      prices: [
        { quantity: "10-50 chiếc", price: "80,000 - 150,000 VNĐ/chiếc" },
        { quantity: "51-200 chiếc", price: "60,000 - 120,000 VNĐ/chiếc" },
        { quantity: "200+ chiếc", price: "50,000 - 100,000 VNĐ/chiếc" },
      ],
    },
    {
      category: "Váy đầm",
      prices: [
        { quantity: "10-50 chiếc", price: "120,000 - 200,000 VNĐ/chiếc" },
        { quantity: "51-200 chiếc", price: "100,000 - 170,000 VNĐ/chiếc" },
        { quantity: "200+ chiếc", price: "80,000 - 150,000 VNĐ/chiếc" },
      ],
    },
    {
      category: "Quần tây / Jean",
      prices: [
        { quantity: "10-50 chiếc", price: "100,000 - 180,000 VNĐ/chiếc" },
        { quantity: "51-200 chiếc", price: "80,000 - 150,000 VNĐ/chiếc" },
        { quantity: "200+ chiếc", price: "70,000 - 130,000 VNĐ/chiếc" },
      ],
    },
    {
      category: "Set bộ / Jumpsuit",
      prices: [
        { quantity: "10-50 chiếc", price: "150,000 - 250,000 VNĐ/chiếc" },
        { quantity: "51-200 chiếc", price: "120,000 - 200,000 VNĐ/chiếc" },
        { quantity: "200+ chiếc", price: "100,000 - 180,000 VNĐ/chiếc" },
      ],
    },
  ];

  const additionalServices = [
    { service: "Ra rập (Pattern making)", price: "200,000 - 500,000 VNĐ/mẫu" },
    { service: "Nhảy size (Grading)", price: "50,000 VNĐ/size" },
    { service: "Giác sơ đồ", price: "100,000 - 200,000 VNĐ" },
    { service: "In logo/nhãn mác", price: "5,000 - 15,000 VNĐ/chiếc" },
    { service: "Đóng gói theo yêu cầu", price: "10,000 - 30,000 VNĐ/sản phẩm" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong vòng 24h.");
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              BẢNG GIÁ DỊCH VỤ
              <span className="block text-teal-200">THIẾT KẾ & MAY MẶC</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 leading-relaxed">
              Giá cả minh bạch, cạnh tranh với chất lượng đảm bảo
            </p>
          </div>
        </div>
      </section>

      {/* Design Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
                GIÁ DỊCH VỤ THIẾT KẾ
              </h2>
              <p className="text-xl text-zinc-600">
                Chọn gói thiết kế phù hợp với nhu cầu của bạn
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 ${
                    tier.recommended
                      ? "bg-gradient-to-b from-teal-50 to-white border-2 border-teal-500 shadow-xl"
                      : "bg-white border border-zinc-200 shadow-lg"
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Phổ biến nhất
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-zinc-800 mb-2">
                      {tier.title}
                    </h3>
                    <div className="text-3xl font-bold text-teal-600 mb-1">
                      {tier.price}
                    </div>
                    <div className="text-zinc-500">{tier.unit}</div>
                    <p className="text-zinc-600 mt-4">{tier.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      tier.recommended
                        ? "bg-teal-600 hover:bg-teal-700"
                        : "bg-zinc-800 hover:bg-zinc-900"
                    }`}
                  >
                    Chọn gói này
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Pricing */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
                GIÁ DỊCH VỤ SẢN XUẤT
              </h2>
              <p className="text-xl text-zinc-600">
                Giá sản xuất theo số lượng và loại sản phẩm
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {manufacturingPrices.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-zinc-800 mb-6">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.prices.map((price, priceIndex) => (
                      <div
                        key={priceIndex}
                        className="flex justify-between items-center p-4 bg-zinc-50 rounded-lg"
                      >
                        <span className="font-medium text-zinc-700">
                          {price.quantity}
                        </span>
                        <span className="font-bold text-teal-600">
                          {price.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
                DỊCH VỤ BỔ SUNG
              </h2>
              <p className="text-xl text-zinc-600">
                Các dịch vụ hỗ trợ khác cho sản phẩm hoàn thiện
              </p>
            </div>

            <div className="space-y-4">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-6 bg-white border border-zinc-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="text-lg font-medium text-zinc-800">
                    {service.service}
                  </span>
                  <span className="text-lg font-bold text-teal-600">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-teal-50 rounded-xl">
              <h4 className="font-bold text-teal-800 mb-2">Lưu ý:</h4>
              <ul className="text-teal-700 space-y-1">
                <li>• Giá có thể thay đổi tùy theo độ phức tạp và chất liệu</li>
                <li>• Giá đã bao gồm chi phí nguyên liệu cơ bản</li>
                <li>• Giảm giá cho đơn hàng số lượng lớn (trên 500 chiếc)</li>
                <li>• Báo giá chi tiết sẽ được gửi sau khi nhận yêu cầu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                YÊU CẦU BÁO GIÁ CHI TIẾT
              </h2>
              <p className="text-xl text-teal-100">
                Điền thông tin để nhận báo giá chính xác nhất
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Liên hệ trực tiếp
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:0868900187"
                    className="flex items-center space-x-4 text-white hover:text-teal-200 transition-colors"
                  >
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Hotline</div>
                      <div className="text-teal-200">0868 900 187</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@xuongmay.com"
                    className="flex items-center space-x-4 text-white hover:text-teal-200 transition-colors"
                  >
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-teal-200">contact@xuongmay.com</div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center space-x-4 text-white hover:text-teal-200 transition-colors"
                  >
                    <div className="bg-white/20 p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Zalo</div>
                      <div className="text-teal-200">0868 900 187</div>
                    </div>
                  </a>
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold text-white mb-3">
                    Thời gian làm việc
                  </h4>
                  <div className="text-teal-200 space-y-1">
                    <div>Thứ 2 - Thứ 6: 8:00 - 18:00</div>
                    <div>Thứ 7: 8:00 - 17:00</div>
                    <div>Chủ nhật: 9:00 - 17:00</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Nhập email"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Dịch vụ quan tâm
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Chọn dịch vụ</option>
                        <option value="design">Thiết kế</option>
                        <option value="manufacturing">Sản xuất</option>
                        <option value="both">Thiết kế + Sản xuất</option>
                        <option value="pattern">Ra rập</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Số lượng dự kiến
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="VD: 100 chiếc"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Mô tả chi tiết
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Mô tả chi tiết về sản phẩm, yêu cầu đặc biệt..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    size="lg"
                  >
                    Gửi yêu cầu báo giá
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
