
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useStore } from "@/lib/store";
import { Link } from "react-router-dom";
import { MarkdownRenderer } from "@/components/shared/MarkdownRenderer";

const AnalysisPage = () => {
  const [dreamContent, setDreamContent] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const { toast } = useToast();
  const { isAuthenticated } = useStore();

  const handleAnalysis = () => {
    if (!dreamContent.trim()) {
      toast({
        title: "Thiếu nội dung",
        description: "Vui lòng nhập nội dung giấc mơ của bạn để phân tích",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(
        `# Phân tích giấc mơ của bạn

## Tổng quan
Giấc mơ của bạn có nhiều yếu tố liên quan đến cảm xúc sâu kín và tiềm thức. Dựa trên nội dung mô tả, đây là phân tích chi tiết:

## Biểu tượng chính
- **Không gian mở**: Thể hiện cảm giác tự do, khát khao được giải phóng khỏi những ràng buộc.
- **Chuyển động**: Phản ánh sự thay đổi trong cuộc sống, có thể bạn đang trải qua hoặc mong muốn một sự thay đổi.
- **Cảm xúc trong mơ**: Cách bạn cảm nhận trong giấc mơ là chìa khóa để hiểu những gì đang diễn ra trong tiềm thức.

## Phân tích tâm lý
Giấc mơ này có thể phản ánh một giai đoạn chuyển tiếp trong cuộc sống của bạn. Bạn có thể đang cảm thấy sự thay đổi sắp xảy ra hoặc đang tìm kiếm sự thay đổi trong một khía cạnh nào đó của cuộc sống.

## Lời khuyên
Hãy dành thời gian suy ngẫm về những khía cạnh trong cuộc sống mà bạn cảm thấy cần được giải phóng hoặc thay đổi. Giấc mơ có thể là lời nhắc nhở từ tiềm thức về những nhu cầu chưa được đáp ứng.`
      );
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleSaveDream = () => {
    if (!isAuthenticated) {
      toast({
        title: "Cần đăng nhập",
        description: "Vui lòng đăng nhập để lưu giấc mơ của bạn",
        action: (
          <Link to="/auth/login">
            <Button variant="outline">Đăng nhập</Button>
          </Link>
        ),
      });
      return;
    }

    toast({
      title: "Đã lưu",
      description: "Giấc mơ của bạn đã được lưu vào nhật ký",
    });
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Phân tích giấc mơ
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Nhập nội dung giấc mơ của bạn vào khung bên dưới, AI của chúng tôi sẽ phân tích và giúp bạn hiểu ý nghĩa sâu xa của nó.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="p-6">
            <h2 className="text-xl font-medium mb-4">Mô tả giấc mơ của bạn</h2>
            <Textarea
              placeholder="Hãy mô tả chi tiết giấc mơ của bạn. Càng nhiều chi tiết, phân tích càng chính xác..."
              className="min-h-[200px] mb-4"
              value={dreamContent}
              onChange={(e) => setDreamContent(e.target.value)}
            />
            <div className="flex gap-4">
              <Button onClick={handleAnalysis} disabled={isAnalyzing} className="flex-1">
                {isAnalyzing ? "Đang phân tích..." : "Phân tích giấc mơ"}
              </Button>
              {analysis && (
                <Button variant="outline" onClick={handleSaveDream}>
                  Lưu giấc mơ
                </Button>
              )}
            </div>
          </Card>
        </div>

        <div>
          {analysis ? (
            <Card className="p-6">
              <h2 className="text-xl font-medium mb-4">Kết quả phân tích</h2>
              <div className="prose prose-blue max-w-none">
                <MarkdownRenderer content={analysis} />
              </div>
            </Card>
          ) : (
            <Card className="p-6 bg-blue-50 border-blue-100">
              <h2 className="text-xl font-medium mb-4">Hướng dẫn</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Để nhận được phân tích chính xác nhất, hãy cung cấp càng nhiều chi tiết càng tốt về giấc mơ của bạn:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Mô tả cảnh tượng, địa điểm, người và vật trong giấc mơ</li>
                  <li>Cảm xúc của bạn trong và sau giấc mơ</li>
                  <li>Các biểu tượng hoặc sự kiện nổi bật</li>
                  <li>Thời điểm giấc mơ xuất hiện (nếu nó lặp lại)</li>
                </ul>
                <p>
                  AI của chúng tôi sẽ phân tích các yếu tố trong giấc mơ và cung cấp hiểu biết sâu sắc về ý nghĩa tiềm ẩn của chúng.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
