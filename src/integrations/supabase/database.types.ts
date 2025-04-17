
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Section = {
  id: string;
  name: string;
  content: string;
  type: string;
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
      Row: {
        id: string;
        title: string;
        slug: string;
        status: string;
        last_modified?: string;
        sections: Json;
      };
      Insert: Omit<Page, 'id'> & { id?: string; sections: Json };
      Update: Partial<Omit<Page, 'sections'>> & { sections?: Json };
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
