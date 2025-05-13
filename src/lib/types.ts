
export interface Symbol {
  _id: { $oid: string };
  slug: string;
  title: string;
  content: string;
  short_description: string;
  related_symbols: string[];
  seo: {
    meta_title: string;
    meta_description: string;
    keywords: string[];
  };
  created_at: string;
  updated_at: string;
  status: 'published' | 'draft';
}

export interface Dream {
  _id: { $oid: string };
  slug: string;
  title: string;
  content_md: string;
  short_description: string;
  tags: string[];
  related_dreams: string[];
  seo: {
    meta_title: string;
    meta_description: string;
    keywords: string;
  };
  created_at: string;
  updated_at: string | null;
  status: 'published' | 'draft';
}

export interface UserDream {
  id: string;
  title: string;
  content: string;
  date: string;
  analysis?: string;
}
