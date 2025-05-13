
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useStore } from "@/lib/store";
import { UserDream } from "@/lib/types";
import { format } from "date-fns";
import { Calendar as CalendarIcon, FilePlus, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { vi } from "date-fns/locale";

const mockUserDreams: UserDream[] = [
  {
    id: "1",
    title: "Bay trên bầu trời",
    content: "Tôi mơ thấy mình đang bay lượn trên bầu trời, cảm giác rất tự do và thanh thản...",
    date: "2025-05-10T10:30:00Z",
    analysis: "Giấc mơ này thể hiện khát khao được tự do, giải phóng khỏi những ràng buộc trong cuộc sống hiện tại..."
  },
  {
    id: "2",
    title: "Lạc trong rừng",
    content: "Tôi mơ thấy mình đang đi trong một khu rừng rậm và bị lạc đường. Tôi cảm thấy lo lắng nhưng vẫn cố gắng tìm lối ra...",
    date: "2025-05-05T22:15:00Z",
    analysis: "Giấc mơ phản ánh cảm giác bối rối, mất phương hướng trong một tình huống hoặc quyết định quan trọng trong cuộc sống..."
  },
  {
    id: "3",
    title: "Gặp người thân đã mất",
    content: "Tôi mơ thấy mình đang trò chuyện với người thân đã mất. Cảm giác rất thực và bình yên...",
    date: "2025-04-28T03:45:00Z",
    analysis: "Giấc mơ về người thân đã khuất thường liên quan đến nỗi nhớ, sự kết nối tinh thần hoặc vấn đề chưa được giải quyết..."
  }
];

const UserDreamsPage = () => {
  const { isAuthenticated } = useStore();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [dreams] = useState<UserDream[]>(mockUserDreams);

  const filteredDreams = dreams.filter(
    (dream) =>
      dream.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dream.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="container py-12 md:py-24 flex items-center justify-center min-h-[calc(100vh-16rem)]">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Đăng nhập để tiếp tục</CardTitle>
            <CardDescription>
              Bạn cần đăng nhập để xem và lưu nhật ký giấc mơ của mình
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Link to="/auth/login">
              <Button size="lg">Đăng nhập</Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Chưa có tài khoản?{" "}
              <Link to="/auth/register" className="text-nora-500 hover:underline">
                Đăng ký ngay
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Nhật ký giấc mơ của tôi
          </h1>
          <p className="text-muted-foreground">
            Lưu trữ và theo dõi các giấc mơ cùng với phân tích của chúng
          </p>
        </div>
        <Link to="/phan-tich-giac-mo">
          <Button>
            <FilePlus className="mr-2 h-4 w-4" />
            Thêm giấc mơ mới
          </Button>
        </Link>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Tìm kiếm giấc mơ..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredDreams.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {filteredDreams.map((dream) => (
            <Card key={dream.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{dream.title}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {format(new Date(dream.date), "dd MMMM yyyy, HH:mm", { locale: vi })}
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => navigate(`/phan-tich-giac-mo`)}>
                    Xem chi tiết
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Nội dung giấc mơ:</h3>
                    <p className="text-muted-foreground text-sm">{dream.content}</p>
                  </div>
                  {dream.analysis && (
                    <div>
                      <h3 className="text-sm font-medium mb-2">Phân tích:</h3>
                      <p className="text-muted-foreground text-sm">{dream.analysis}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">Không tìm thấy giấc mơ</h3>
          <p className="text-muted-foreground mb-6">
            {searchTerm
              ? `Không tìm thấy giấc mơ nào phù hợp với "${searchTerm}"`
              : "Bạn chưa có nhật ký giấc mơ nào. Hãy thêm giấc mơ đầu tiên của bạn!"}
          </p>
          <Link to="/phan-tich-giac-mo">
            <Button>Phân tích giấc mơ mới</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserDreamsPage;
