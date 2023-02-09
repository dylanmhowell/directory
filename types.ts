export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      directory: {
        Row: {
          city: string | null
          created_at: string | null
          id: number
          photographer: string | null
          specialty: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string | null
          id?: number
          photographer?: string | null
          specialty?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string | null
          id?: number
          photographer?: string | null
          specialty?: string | null
        }
      }
      websites: {
        Row: {
          crawlTimestamp: string | null
          h1: string | null
          hash: string | null
          id: number
          indexibility: boolean | null
          metaDescription: string | null
          photobiz: boolean | null
          pixieset: boolean | null
          ranking: string | null
          responseTime: number | null
          searchTerm: string | null
          showit: boolean | null
          squarespace: boolean | null
          statusCode: number | null
          title: string | null
          titleLength: number | null
          url: string | null
          webflow: boolean | null
          wix: boolean | null
          wordpress: boolean | null
        }
        Insert: {
          crawlTimestamp?: string | null
          h1?: string | null
          hash?: string | null
          id: number
          indexibility?: boolean | null
          metaDescription?: string | null
          photobiz?: boolean | null
          pixieset?: boolean | null
          ranking?: string | null
          responseTime?: number | null
          searchTerm?: string | null
          showit?: boolean | null
          squarespace?: boolean | null
          statusCode?: number | null
          title?: string | null
          titleLength?: number | null
          url?: string | null
          webflow?: boolean | null
          wix?: boolean | null
          wordpress?: boolean | null
        }
        Update: {
          crawlTimestamp?: string | null
          h1?: string | null
          hash?: string | null
          id?: number
          indexibility?: boolean | null
          metaDescription?: string | null
          photobiz?: boolean | null
          pixieset?: boolean | null
          ranking?: string | null
          responseTime?: number | null
          searchTerm?: string | null
          showit?: boolean | null
          squarespace?: boolean | null
          statusCode?: number | null
          title?: string | null
          titleLength?: number | null
          url?: string | null
          webflow?: boolean | null
          wix?: boolean | null
          wordpress?: boolean | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}