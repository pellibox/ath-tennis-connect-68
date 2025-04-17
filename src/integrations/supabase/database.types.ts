
export type Section = {
  id: string;
  name: string;
  type: string;
  content?: string;
  items?: PricingItem[];
};

export type PricingItem = {
  id: string;
  name: string;
  price: string;
  description: string;
};

export type Page = {
  id: string;
  title: string;
  slug: string;
  status: string;
  last_modified?: string;
  sections: Section[];
};

export type Database = {
  tables: {
    pages: {
      Row: Page;
      Insert: Omit<Page, 'id'> & { id?: string };
      Update: Partial<Page>;
    };
    profiles: {
      Row: {
        id: string;
        username: string;
        full_name: string;
        avatar_url: string;
        created_at: string;
      };
      Insert: {
        id: string;
        username?: string;
        full_name?: string;
        avatar_url?: string;
        created_at?: string;
      };
      Update: {
        id?: string;
        username?: string;
        full_name?: string;
        avatar_url?: string;
        created_at?: string;
      };
    };
    user_roles: {
      Row: {
        id: string;
        user_id: string;
        role: "admin" | "editor" | "user";
      };
      Insert: {
        id?: string;
        user_id: string;
        role: "admin" | "editor" | "user";
      };
      Update: {
        id?: string;
        user_id?: string;
        role?: "admin" | "editor" | "user";
      };
    };
  };
};
