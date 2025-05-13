
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSymbolBySlug, getAllSymbols } from "@/services/symbolService";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SymbolCard } from "@/components/symbols/SymbolCard";
import { Link } from "react-router-dom";

const SymbolDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: symbol, isLoading } = useQuery({
    queryKey: ["symbol", slug],
    queryFn: () => getSymbolBySlug(slug || ""),
    enabled: !!slug,
  });

  const { data: allSymbols } = useQuery({
    queryKey: ["symbols"],
    queryFn: getAllSymbols,
  });

  const relatedSymbols = allSymbols?.filter(
    (s) => symbol?.related_symbols.includes(s.slug) && s.slug !== symbol.slug
  );

  return (
    <div className="container py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {isLoading ? (
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-48 w-full" />
            </div>
          ) : symbol ? (
            <>
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {symbol.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {symbol.short_description}
                </p>
              </div>
              <div className="prose max-w-none">
                <p className="text-foreground leading-7 whitespace-pre-line">
                  {symbol.content}
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2">Không tìm thấy biểu tượng</h2>
              <p className="text-muted-foreground mb-6">
                Biểu tượng bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
              </p>
              <Link to="/y-nghia-bieu-tuong">
                <Button>Quay lại trang biểu tượng</Button>
              </Link>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Phân tích giấc mơ</h3>
              <p className="text-muted-foreground mb-4">
                Nhận phân tích chi tiết về giấc mơ của bạn từ AI của chúng tôi.
              </p>
              <Link to="/phan-tich-giac-mo">
                <Button className="w-full">Phân tích giấc mơ</Button>
              </Link>
            </CardContent>
          </Card>

          {relatedSymbols && relatedSymbols.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-4">Biểu tượng liên quan</h3>
              <div className="space-y-4">
                {relatedSymbols.slice(0, 3).map((relatedSymbol) => (
                  <Card key={relatedSymbol._id.$oid}>
                    <CardContent className="p-4">
                      <Link
                        to={`/y-nghia-bieu-tuong/${relatedSymbol.slug}`}
                        className="text-foreground hover:text-nora-500 transition-colors"
                      >
                        <h4 className="font-medium mb-1">{relatedSymbol.title}</h4>
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedSymbol.short_description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SymbolDetailPage;
