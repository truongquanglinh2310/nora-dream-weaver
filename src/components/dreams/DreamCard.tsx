
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dream } from "@/lib/types";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface DreamCardProps {
  dream: Dream;
}

export function DreamCard({ dream }: DreamCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{dream.title}</CardTitle>
        <CardDescription className="line-clamp-2">{dream.short_description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="line-clamp-3 text-sm text-muted-foreground mb-2">
          {dream.content_md.substring(0, 150).replace(/#/g, "").trim()}...
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {dream.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {dream.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{dream.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/y-nghia-giac-mo/${dream.slug}`} className="w-full">
          <Button variant="outline" className="w-full group">
            <span className="mr-2">Xem chi tiết</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
