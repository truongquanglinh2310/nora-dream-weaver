
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">NoraDream</h3>
            <p className="text-sm text-muted-foreground">
              Nền tảng phân tích giấc mơ với phong cách thiết kế Clean – Calm – Clear.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Khám phá</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/y-nghia-bieu-tuong" className="text-sm text-muted-foreground hover:text-foreground">
                Biểu tượng
              </Link>
              <Link to="/y-nghia-giac-mo" className="text-sm text-muted-foreground hover:text-foreground">
                Giấc mơ
              </Link>
              <Link to="/phan-tich-giac-mo" className="text-sm text-muted-foreground hover:text-foreground">
                Phân tích
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Công cụ</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/phan-tich-giac-mo" className="text-sm text-muted-foreground hover:text-foreground">
                Trình phân tích
              </Link>
              <Link to="/giac-mo-cua-toi" className="text-sm text-muted-foreground hover:text-foreground">
                Nhật ký giấc mơ
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Tài khoản</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/auth/login" className="text-sm text-muted-foreground hover:text-foreground">
                Đăng nhập
              </Link>
              <Link to="/auth/register" className="text-sm text-muted-foreground hover:text-foreground">
                Đăng ký
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NoraDream. Tất cả các quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
