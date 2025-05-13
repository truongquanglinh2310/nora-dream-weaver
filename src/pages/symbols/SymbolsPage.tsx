
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllSymbols } from "@/services/symbolService";
import { SymbolCard } from "@/components/symbols/SymbolCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Symbol } from "@/lib/types";
import { Search } from "lucide-react";

const SymbolsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSymbols, setFilteredSymbols] = useState<Symbol[]>([]);

  const { data: symbols, isLoading } = useQuery({
    queryKey: ["symbols"],
    queryFn: getAllSymbols,
  });

  useEffect(() => {
    if (symbols) {
      setFilteredSymbols(
        symbols.filter((symbol) => 
          symbol.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          symbol.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [symbols, searchTerm]);

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Ý Nghĩa Biểu Tượng Trong Giấc Mơ
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Khám phá ý nghĩa của các biểu tượng phổ biến xuất hiện trong giấc mơ và hiểu rõ hơn về thông điệp mà tiềm thức của bạn đang cố gắng truyền tải.
        </p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Tìm kiếm biểu tượng..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Separator className="mb-8" />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="bg-white rounded-md shadow-sm p-6 h-64 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6 mb-6"></div>
              <div className="h-36 bg-gray-100 rounded"></div>
            </div>
          ))}
        </div>
      ) : filteredSymbols.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSymbols.map((symbol) => (
            <SymbolCard key={symbol._id.$oid} symbol={symbol} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">Không tìm thấy kết quả</h3>
          <p className="text-muted-foreground mb-4">
            Không tìm thấy biểu tượng nào phù hợp với "{searchTerm}".
          </p>
          <Button variant="outline" onClick={() => setSearchTerm("")}>
            Xóa tìm kiếm
          </Button>
        </div>
      )}
    </div>
  );
};

export default SymbolsPage;
