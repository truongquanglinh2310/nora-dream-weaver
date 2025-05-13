
import { Symbol } from "@/lib/types";

// Mock data for development
const mockSymbols: Symbol[] = [
  {
    _id: { $oid: "1" },
    slug: "bien-ca",
    title: "Biển cả",
    content: "Biển cả trong giấc mơ thường tượng trưng cho tiềm thức, cảm xúc sâu kín hoặc nỗi sợ hãi chưa được khám phá. Nếu biển lặng, bạn đang ở trong trạng thái tâm hồn bình yên. Ngược lại, biển động có thể phản ánh những xáo trộn cảm xúc bạn đang trải qua.",
    short_description: "Khám phá ý nghĩa của biển cả trong giấc mơ và cách nó phản ánh trạng thái cảm xúc của bạn.",
    related_symbols: ["nuoc", "song", "thuyen"],
    seo: {
      meta_title: "Ý Nghĩa Biển Cả Trong Giấc Mơ | NoraDream",
      meta_description: "Khám phá ý nghĩa khi mơ thấy biển cả, đại dương và cách chúng phản ánh trạng thái tâm lý của bạn.",
      keywords: ["biển cả", "giấc mơ", "đại dương", "tâm lý", "tiềm thức"]
    },
    created_at: "2023-01-15T08:30:00Z",
    updated_at: "2023-06-22T14:15:00Z",
    status: "published"
  },
  {
    _id: { $oid: "2" },
    slug: "rang-ham",
    title: "Răng hàm",
    content: "Mơ thấy răng rụng hoặc gãy thường liên quan đến nỗi lo sợ về sự mất mát, già đi hoặc mất đi sức mạnh. Trong nhiều nền văn hóa, răng còn tượng trưng cho sự tự tin và hình ảnh cá nhân. Giấc mơ về răng có thể phản ánh lo lắng về ngoại hình hoặc khả năng giao tiếp.",
    short_description: "Ý nghĩa khi mơ thấy răng rụng và mối liên hệ với nỗi sợ hãi về sự mất mát.",
    related_symbols: ["mat", "toc", "co-the"],
    seo: {
      meta_title: "Mơ Thấy Răng Rụng Có Ý Nghĩa Gì? | NoraDream",
      meta_description: "Giải mã giấc mơ về răng rụng, gãy và ý nghĩa tâm lý sâu xa đằng sau những giấc mơ này.",
      keywords: ["răng rụng", "mơ thấy răng", "giấc mơ", "tâm lý", "mất mát"]
    },
    created_at: "2023-02-10T10:45:00Z",
    updated_at: "2023-07-05T09:30:00Z",
    status: "published"
  },
  {
    _id: { $oid: "3" },
    slug: "roi-tu-tren-cao",
    title: "Rơi từ trên cao",
    content: "Giấc mơ về rơi từ trên cao là một trong những giấc mơ phổ biến nhất. Chúng thường phản ánh cảm giác mất kiểm soát trong cuộc sống thực, lo lắng về thất bại hoặc cảm giác không an toàn. Nhiều người trải nghiệm giật mình tỉnh giấc trước khi 'chạm đất' trong giấc mơ.",
    short_description: "Giải mã giấc mơ về rơi từ trên cao và mối liên hệ với cảm giác mất kiểm soát.",
    related_symbols: ["bay", "nha-cao", "cau-thang"],
    seo: {
      meta_title: "Ý Nghĩa Khi Mơ Thấy Rơi Từ Trên Cao | NoraDream",
      meta_description: "Khám phá tâm lý đằng sau giấc mơ về rơi từ trên cao và cách chúng phản ánh nỗi lo sợ trong cuộc sống thực.",
      keywords: ["rơi", "giấc mơ rơi", "mất kiểm soát", "lo lắng", "giấc mơ phổ biến"]
    },
    created_at: "2023-03-05T15:20:00Z",
    updated_at: "2023-08-12T11:45:00Z",
    status: "published"
  }
];

export const getAllSymbols = async (): Promise<Symbol[]> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockSymbols), 500);
  });
};

export const getSymbolBySlug = async (slug: string): Promise<Symbol | undefined> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockSymbols.find(symbol => symbol.slug === slug)), 500);
  });
};
