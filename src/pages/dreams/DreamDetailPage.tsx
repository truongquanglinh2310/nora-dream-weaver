
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDreamBySlug, getAllDreams } from "@/services/dreamService";
import { MarkdownRenderer } from "@/components/shared/MarkdownRenderer";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const DreamDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: dream, isLoading } = useQuery({
    queryKey: ["dream", slug],
    queryFn: () => getDreamBySlug(slug || ""),
    enabled: !!slug,
  });

  const { data: allDreams } = useQuery({
    queryKey: ["dreams"],
    queryFn: getAllDreams,
  });

  const relatedDreams = allDreams?.filter(
    (d) => dream?.related_dreams.includes(d.slug) && d.slug !== dream.slug
  );

  return (
    <div className="container py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {isLoading ? (
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <div className="flex gap-2 mb-6">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-14" />
              </div>
              <Skeleton className="h-72 w-full" />
            </div>
          ) : dream ? (
            <>
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {dream.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {dream.short_description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dream.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <MarkdownRenderer content={dream.content_md} />
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2">Không tìm thấy giấc mơ</h2>
              <p className="text-muted-foreground mb-6">
                Giấc mơ bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
              </p>
              <Link to="/y-nghia-giac-mo">
                <Button>Quay lại trang giấc mơ</Button>
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

          {relatedDreams && relatedDreams.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-4">Giấc mơ liên quan</h3>
              <div className="space-y-4">
                {relatedDreams.slice(0, 3).map((relatedDream) => (
                  <Card key={relatedDream._id.$oid}>
                    <CardContent className="p-4">
                      <Link
                        to={`/y-nghia-giac-mo/${relatedDream.slug}`}
                        className="text-foreground hover:text-nora-500 transition-colors"
                      >
                        <h4 className="font-medium mb-1">{relatedDream.title}</h4>
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedDream.short_description}
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

export default DreamDetailPage;
