import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const productCategories = [
    {
      id: 1,
      title: "Váy đầm",
      description:
        "Váy đầm thiết kế theo xu hướng hiện đại, từ dạo phố đến dự tiệc",
      images: [
        "https://ext.same-assets.com/1130123988/1858270226.jpeg",
        "https://ext.same-assets.com/1130123988/4123255973.jpeg",
        "https://ext.same-assets.com/1130123988/3527055294.jpeg",
      ],
      types: ["Váy maxi", "Váy midi", "Váy suông", "Váy ôm"],
    },
    {
      id: 2,
      title: "Áo sơ mi & Áo kiểu",
      description: "Áo sơ mi công sở và áo kiểu thời trang cho mọi dịp",
      images: [
        "https://ext.same-assets.com/1130123988/4130906747.jpeg",
        "https://ext.same-assets.com/1130123988/3487549613.jpeg",
        "https://ext.same-assets.com/1130123988/2494473017.jpeg",
      ],
      types: ["Áo sơ mi", "Áo kiểu", "Áo thun", "Áo crop top"],
    },
    {
      id: 3,
      title: "Quần & Chân váy",
      description: "Quần tây, jean, chân váy đa dạng kiểu dáng",
      images: [
        "https://ext.same-assets.com/1130123988/1673940699.jpeg",
        "https://ext.same-assets.com/1130123988/1438556178.jpeg",
        "https://ext.same-assets.com/1130123988/28866768.jpeg",
      ],
      types: ["Quần tây", "Quần jean", "Chân váy", "Quần short"],
    },
    {
      id: 4,
      title: "Set đồ & Jumpsuit",
      description: "Bộ đồ phối set và jumpsuit hiện đại, tiện lợi",
      images: [
        "https://ext.same-assets.com/1130123988/3653242000.jpeg",
        "https://ext.same-assets.com/1130123988/2967804245.jpeg",
        "https://ext.same-assets.com/1130123988/2493878955.jpeg",
      ],
      types: ["Set bộ", "Jumpsuit", "Overall", "Playsuit"],
    },
  ];

  const services = [
    "Tư vấn thiết kế chuyên nghiệp",
    "Ra rập, nhảy size, giác sơ đồ",
    "Số hóa rập, in sơ đồ",
    "Thiết kế theo yêu cầu",
    "Sản xuất số lượng lớn",
    "Gia công theo mẫu có sẵn",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              DÒNG SẢN PHẨM
              <span className="block text-teal-200">THỜI TRANG CAO CẤP</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 leading-relaxed">
              Thiết kế và may mặc đa dạng các mặt hàng thời trang từ công sở đến
              dạo phố
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <div
                key={category.id}
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
                  <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800">
                    {category.title}
                  </h2>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-zinc-800">
                      Các loại sản phẩm:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.types.map((type, typeIndex) => (
                        <div
                          key={typeIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span className="text-zinc-700">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/lien-he"
                    className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Liên hệ đặt may
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                {/* Images */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <img
                        src={category.images[0]}
                        alt={`${category.title} 1`}
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      />
                      {category.images[2] && (
                        <img
                          src={category.images[2]}
                          alt={`${category.title} 3`}
                          className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        />
                      )}
                    </div>
                    <div className="pt-8">
                      <img
                        src={category.images[1]}
                        alt={`${category.title} 2`}
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800 mb-6">
                DỊCH VỤ THIẾT KẾ & MAY MẶC
              </h2>
              <p className="text-xl text-zinc-600">
                Chúng tôi cung cấp dịch vụ toàn diện từ thiết kế đến sản xuất
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-zinc-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-800">
                TIÊU CHUẨN CHẤT LƯỢNG
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Tùy theo dòng hàng, tầm giá mà bạn yêu cầu, chúng tôi đáp ứng
                tiêu chuẩn cao hơn. Tuy nhiên tại M&M Clothing Studio, chúng tôi
                không làm hàng tiêu chuẩn thấp hay gọi là hàng chợ.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-zinc-800">
                  Tiêu chuẩn tối thiểu:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <span className="text-zinc-700">1cm 4 mũi chỉ</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <span className="text-zinc-700">
                      Chỉ cùng màu với cùng màu chỉ trên cùng 1 sản phẩm
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <span className="text-zinc-700">
                      Sản phẩm không bai, gián
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <span className="text-zinc-700">
                      Dây kéo đép không vênh, cùng màu
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <span className="text-zinc-700">
                      Đường may đi xéng, các mũi đúng tỉ lệ không lệch quá 5ly
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://ext.same-assets.com/1130123988/868750072.png"
                alt="Quality Standards"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Bạn có ý tưởng thiết kế?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Hãy chia sẻ ý tưởng của bạn với chúng tôi. Chúng tôi sẽ biến ý tưởng
            thành hiện thực!
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Liên hệ tư vấn ngay
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
