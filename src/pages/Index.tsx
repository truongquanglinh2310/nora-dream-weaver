
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllSymbols } from "@/services/symbolService";
import { getAllDreams } from "@/services/dreamService";
import { SymbolCard } from "@/components/symbols/SymbolCard";
import { DreamCard } from "@/components/dreams/DreamCard";

const Index = () => {
  const { data: symbols, isLoading: isLoadingSymbols } = useQuery({
    queryKey: ["symbols"],
    queryFn: getAllSymbols,
  });

  const { data: dreams, isLoading: isLoadingDreams } = useQuery({
    queryKey: ["dreams"],
    queryFn: getAllDreams,
  });

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-white to-blue-50">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Giải mã <span className="text-nora-500">giấc mơ</span> của bạn
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Khám phá ý nghĩa sâu xa ẩn giấu trong giấc mơ của bạn với NoraDream - nền tảng phân tích dựa trên trí tuệ nhân tạo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/phan-tich-giac-mo">
                <Button size="lg">Phân tích giấc mơ</Button>
              </Link>
              <Link to="/y-nghia-giac-mo">
                <Button variant="outline" size="lg">
                  Khám phá ý nghĩa
                </Button>
              </Link>
            </div>
            <div className="w-full max-w-lg h-64 relative mt-8">
              <div className="absolute inset-0 bg-blue-100 rounded-md opacity-50"></div>
              <img
                src="/placeholder.svg"
                alt="Dream Illustration"
                className="absolute inset-0 w-full h-full object-contain p-6 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Khám phá NoraDream
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nền tảng phân tích giấc mơ với phong cách thiết kế Clean – Calm – Clear, giúp bạn hiểu sâu sắc hơn về tiềm thức của mình.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-50 rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-6 w-6 text-nora-500"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v9a2 2 0 0 0 2 2h14v-4" />
                <path d="M21 12v5H5a2 2 0 0 1 0-4h14v-1Z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Thư viện biểu tượng</h3>
            <p className="text-muted-foreground">
              Khám phá ý nghĩa của hàng trăm biểu tượng phổ biến xuất hiện trong giấc mơ.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-50 rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-6 w-6 text-nora-500"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M21 2H3v16h18V2Z" />
                <path d="M21 10H3" />
                <path d="M10 2v16" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Giấc mơ phổ biến</h3>
            <p className="text-muted-foreground">
              Tìm hiểu về các loại giấc mơ phổ biến và ý nghĩa tâm lý đằng sau chúng.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-50 rounded-full p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-6 w-6 text-nora-500"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                <path d="M8 14H3" />
                <path d="M11 4v16" />
                <path d="M18 16a4 4 0 0 0 0-8" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Phân tích AI</h3>
            <p className="text-muted-foreground">
              Nhận phân tích chi tiết về giấc mơ của bạn từ công nghệ trí tuệ nhân tạo tiên tiến.
            </p>
          </div>
        </div>
      </section>

      {/* Popular symbols section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Biểu tượng phổ biến
            </h2>
            <Link to="/y-nghia-bieu-tuong" className="text-nora-500 hover:underline">
              Xem tất cả
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoadingSymbols
              ? Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="bg-white rounded-md shadow-sm p-6 h-48 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 mb-6"></div>
                    <div className="h-24 bg-gray-100 rounded"></div>
                  </div>
                ))
              : symbols?.slice(0, 3).map((symbol) => (
                  <SymbolCard key={symbol._id.$oid} symbol={symbol} />
                ))}
          </div>
        </div>
      </section>

      {/* Popular dreams section */}
      <section className="container py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Giấc mơ phổ biến
          </h2>
          <Link to="/y-nghia-giac-mo" className="text-nora-500 hover:underline">
            Xem tất cả
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoadingDreams
            ? Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="bg-white rounded-md shadow-sm p-6 h-48 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6 mb-6"></div>
                  <div className="h-24 bg-gray-100 rounded"></div>
                </div>
              ))
            : dreams?.slice(0, 3).map((dream) => (
                <DreamCard key={dream._id.$oid} dream={dream} />
              ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container text-center">
          <div className="max-w-xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Bắt đầu khám phá giấc mơ của bạn ngay hôm nay
            </h2>
            <p className="text-muted-foreground">
              Hiểu rõ hơn về tiềm thức và khám phá những thông điệp ẩn giấu trong giấc mơ của bạn.
            </p>
            <Link to="/phan-tich-giac-mo">
              <Button size="lg">
                Phân tích giấc mơ của tôi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
