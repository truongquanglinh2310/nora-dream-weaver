
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useStore } from "@/lib/store";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const { isAuthenticated, logout } = useStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-nora-500 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M2 12.5c3-1 6-1 9-1s6 0 9 1" />
                <path d="M2 4.5c3 2 6 3 9 3s6-1 9-3" />
                <path d="M2 20.5c3-2 6-3 9-3s6 1 9 3" />
              </svg>
            </div>
            <span className="hidden text-xl font-semibold sm:inline-block">NoraDream</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex md:gap-4">
            <Link to="/y-nghia-bieu-tuong" className="text-sm font-medium transition-colors hover:text-nora-500">
              Biểu tượng
            </Link>
            <Link to="/y-nghia-giac-mo" className="text-sm font-medium transition-colors hover:text-nora-500">
              Giấc mơ
            </Link>
            <Link to="/phan-tich-giac-mo" className="text-sm font-medium transition-colors hover:text-nora-500">
              Phân tích
            </Link>
            {isAuthenticated && (
              <Link to="/giac-mo-cua-toi" className="text-sm font-medium transition-colors hover:text-nora-500">
                Nhật ký
              </Link>
            )}
          </nav>

          <div className="hidden md:flex md:gap-2">
            {isAuthenticated ? (
              <Button variant="outline" onClick={logout}>
                Đăng xuất
              </Button>
            ) : (
              <Link to="/auth/login">
                <Button>Đăng nhập</Button>
              </Link>
            )}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link to="/" className="hover:text-nora-500">
                  Trang chủ
                </Link>
                <Link to="/y-nghia-bieu-tuong" className="hover:text-nora-500">
                  Biểu tượng
                </Link>
                <Link to="/y-nghia-giac-mo" className="hover:text-nora-500">
                  Giấc mơ
                </Link>
                <Link to="/phan-tich-giac-mo" className="hover:text-nora-500">
                  Phân tích
                </Link>
                {isAuthenticated && (
                  <Link to="/giac-mo-cua-toi" className="hover:text-nora-500">
                    Nhật ký
                  </Link>
                )}
                {isAuthenticated ? (
                  <Button variant="outline" onClick={logout}>
                    Đăng xuất
                  </Button>
                ) : (
                  <Link to="/auth/login">
                    <Button className="w-full">Đăng nhập</Button>
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
