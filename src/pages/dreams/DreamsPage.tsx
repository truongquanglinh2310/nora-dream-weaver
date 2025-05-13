
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllDreams } from "@/services/dreamService";
import { DreamCard } from "@/components/dreams/DreamCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dream } from "@/lib/types";
import { Search } from "lucide-react";

const DreamsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDreams, setFilteredDreams] = useState<Dream[]>([]);

  const { data: dreams, isLoading } = useQuery({
    queryKey: ["dreams"],
    queryFn: getAllDreams,
  });

  useEffect(() => {
    if (dreams) {
      setFilteredDreams(
        dreams.filter((dream) => 
          dream.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          dream.content_md.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dream.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );
    }
  }, [dreams, searchTerm]);

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Ý Nghĩa Các Giấc Mơ Phổ Biến
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Khám phá ý nghĩa tâm lý đằng sau những giấc mơ phổ biến và hiểu rõ hơn về thông điệp mà tiềm thức của bạn muốn truyền tải.
        </p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Tìm kiếm giấc mơ..."
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
      ) : filteredDreams.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDreams.map((dream) => (
            <DreamCard key={dream._id.$oid} dream={dream} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">Không tìm thấy kết quả</h3>
          <p className="text-muted-foreground mb-4">
            Không tìm thấy giấc mơ nào phù hợp với "{searchTerm}".
          </p>
          <Button variant="outline" onClick={() => setSearchTerm("")}>
            Xóa tìm kiếm
          </Button>
        </div>
      )}
    </div>
  );
};

export default DreamsPage;
