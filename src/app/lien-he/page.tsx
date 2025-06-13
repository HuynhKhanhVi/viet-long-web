"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Địa chỉ công ty",
      content: "230/6/7/7 Mã lò, P. Bình Trị Đông A, Q. Bình Tân, TP. HCM",
      action: "Xem bản đồ",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Hotline",
      content: "0868 900 187",
      action: "Gọi ngay",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "Vietlongmaymac@gmail.com",
      action: "Gửi email",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Zalo",
      content: "0868 900 187",
      action: "Chat ngay",
    },
  ];

  const workingHours = [{ day: "Thứ 2 - Thứ 7", time: "8:00 - 18:00" }];

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
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r bg-green-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              LIÊN HỆ VỚI CHÚNG TÔI
              <span className="block text-teal-200">VIỆT LONG MAY MẶC</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 leading-relaxed">
              Sẵn sàng hỗ trợ và tư vấn miễn phí cho dự án của bạn 24/7
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-zinc-600 mb-4">{info.content}</p>
                  <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
                    {info.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-zinc-800 mb-6">
                  Gửi tin nhắn cho chúng tôi
                </h2>
                <p className="text-zinc-600 mb-8">
                  Điền thông tin vào form bên dưới và chúng tôi sẽ liên hệ lại
                  với bạn trong thời gian sớm nhất.
                </p>

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
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Nhập email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Chủ đề
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="design">Tư vấn thiết kế</option>
                      <option value="manufacturing">Gia công sản xuất</option>
                      <option value="pricing">Hỏi giá dịch vụ</option>
                      <option value="partnership">Hợp tác kinh doanh</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Nội dung tin nhắn *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-teal-700"
                    size="lg"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Gửi tin nhắn
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-zinc-50 rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-6 h-6 text-teal-600" />
                    <h3 className="text-2xl font-bold text-zinc-800">
                      Giờ làm việc
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-zinc-700 font-medium">
                          {schedule.day}
                        </span>
                        <span className="text-teal-600 font-semibold">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                    <p className="text-teal-800 text-sm">
                      <strong>Lưu ý:</strong> Chúng tôi hỗ trợ tư vấn 24/7 qua
                      Zalo và email. Đội ngũ sẽ phản hồi trong vòng 2-4 tiếng.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r bg-green-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Cần hỗ trợ gấp?</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:0868900187"
                      className="flex items-center space-x-3 bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <div>
                        <div className="font-semibold">Gọi ngay</div>
                        <div className="text-teal-200 text-sm">
                          0987 788 352
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <div>
                        <div className="font-semibold">Chat Zalo</div>
                        <div className="text-teal-200 text-sm">
                          Phản hồi trong 5 phút
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-zinc-100 rounded-xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-zinc-800 mb-4">
                      Vị trí xưởng may
                    </h3>
                    <p className="text-zinc-600">
                      17/15/11A Gò Dưa, P. Tân Quý, Q. Tân Phú, TP. HCM
                    </p>
                  </div>
                  <div className="h-64 bg-zinc-200 flex items-center justify-center">
                    <p className="text-zinc-500">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.552570155836!2d106.6017006758385!3d10.768925059330375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c4093774da5%3A0x85f5a9cfbad8990b!2zMjMwLzYvNy83IE3DoyBMw7IsIELDrG5oIFRy4buLIMSQw7RuZyBBLCBCw6xuaCBUw6JuLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1748397332838!5m2!1svi!2s"
                        width="500"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
                Câu hỏi thường gặp
              </h2>
              <p className="text-xl text-zinc-600">
                Những câu hỏi khách hàng thường quan tâm
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-zinc-800 mb-3">
                  Thời gian sản xuất mất bao lâu?
                </h4>
                <p className="text-zinc-600">
                  Tùy thuộc vào độ phức tạp và số lượng, thời gian từ thiết kế
                  đến hoàn thành thường từ 10-23 ngày. Chúng tôi sẽ báo chính
                  xác thời gian sau khi nhận yêu cầu chi tiết.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-zinc-800 mb-3">
                  Số lượng tối thiểu để đặt may là bao nhiêu?
                </h4>
                <p className="text-zinc-600">
                  Chúng tôi nhận đơn hàng từ 10 chiếc trở lên. Số lượng càng
                  nhiều, giá unit càng tốt. Đặc biệt có ưu đãi cho đơn hàng trên
                  200 chiếc.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-zinc-800 mb-3">
                  Có hỗ trợ thiết kế miễn phí không?
                </h4>
                <p className="text-zinc-600">
                  Chúng tôi có dịch vụ tư vấn thiết kế miễn phí cho khách hàng
                  có nhu cầu sản xuất. Đối với thiết kế chi tiết sẽ có phí thiết
                  kế tùy theo độ phức tạp.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-zinc-800 mb-3">
                  Làm thế nào để đảm bảo chất lượng sản phẩm?
                </h4>
                <p className="text-zinc-600">
                  Chúng tôi có quy trình kiểm soát chất lượng nghiêm ngặt ở mỗi
                  khâu. Khách hàng sẽ được duyệt mẫu trước khi sản xuất hàng
                  loạt và kiểm tra cuối cùng trước giao hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
