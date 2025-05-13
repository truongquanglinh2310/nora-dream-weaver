
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Symbol } from "@/lib/types";
import { Link } from "react-router-dom";

interface SymbolCardProps {
  symbol: Symbol;
}

export function SymbolCard({ symbol }: SymbolCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{symbol.title}</CardTitle>
        <CardDescription className="line-clamp-2">{symbol.short_description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="line-clamp-3 text-sm text-muted-foreground">{symbol.content.substring(0, 150)}...</p>
      </CardContent>
      <CardFooter>
        <Link to={`/y-nghia-bieu-tuong/${symbol.slug}`} className="w-full">
          <Button variant="outline" className="w-full group">
            <span className="mr-2">Xem chi tiết</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
