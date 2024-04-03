export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      consult_info: {
        Row: {
          answer: string | null;
          bodyparts: string | null;
          consult_content: string | null;
          consult_id: string;
          consult_title: string;
          "consult-photos": string | null;
          created_at: string | null;
          user_email: string | null;
          user_name: string | null;
        };
        Insert: {
          answer?: string | null;
          bodyparts?: string | null;
          consult_content?: string | null;
          consult_id?: string;
          consult_title: string;
          "consult-photos"?: string | null;
          created_at?: string | null;
          user_email?: string | null;
          user_name?: string | null;
        };
        Update: {
          answer?: string | null;
          bodyparts?: string | null;
          consult_content?: string | null;
          consult_id?: string;
          consult_title?: string;
          "consult-photos"?: string | null;
          created_at?: string | null;
          user_email?: string | null;
          user_name?: string | null;
        };
        Relationships: [];
      };
      consult_test: {
        Row: {
          body_section: string;
          id: string;
          tag1: string | null;
          tag10: string | null;
          tag2: string | null;
          tag3: string | null;
          tag4: string | null;
          tag5: string | null;
          tag6: string | null;
          tag7: string | null;
          tag8: string | null;
          tag9: string | null;
        };
        Insert: {
          body_section: string;
          id?: string;
          tag1?: string | null;
          tag10?: string | null;
          tag2?: string | null;
          tag3?: string | null;
          tag4?: string | null;
          tag5?: string | null;
          tag6?: string | null;
          tag7?: string | null;
          tag8?: string | null;
          tag9?: string | null;
        };
        Update: {
          body_section?: string;
          id?: string;
          tag1?: string | null;
          tag10?: string | null;
          tag2?: string | null;
          tag3?: string | null;
          tag4?: string | null;
          tag5?: string | null;
          tag6?: string | null;
          tag7?: string | null;
          tag8?: string | null;
          tag9?: string | null;
        };
        Relationships: [];
      };
      course_info: {
        Row: {
          course_detail: string | null;
          course_id: string;
          course_name: string | null;
          course_price: number | null;
          hospital_id: string;
        };
        Insert: {
          course_detail?: string | null;
          course_id?: string;
          course_name?: string | null;
          course_price?: number | null;
          hospital_id?: string;
        };
        Update: {
          course_detail?: string | null;
          course_id?: string;
          course_name?: string | null;
          course_price?: number | null;
          hospital_id?: string;
        };
        Relationships: [];
      };
      hospital_info: {
        Row: {
          end_time: string | null;
          hospital_address: string | null;
          hospital_contact: string | null;
          hospital_id: string;
          hospital_image: string | null;
          hospital_introduction: string | null;
          hospital_name: string | null;
          manager_name: string | null;
          start_time: string | null;
        };
        Insert: {
          end_time?: string | null;
          hospital_address?: string | null;
          hospital_contact?: string | null;
          hospital_id?: string;
          hospital_image?: string | null;
          hospital_introduction?: string | null;
          hospital_name?: string | null;
          manager_name?: string | null;
          start_time?: string | null;
        };
        Update: {
          end_time?: string | null;
          hospital_address?: string | null;
          hospital_contact?: string | null;
          hospital_id?: string;
          hospital_image?: string | null;
          hospital_introduction?: string | null;
          hospital_name?: string | null;
          manager_name?: string | null;
          start_time?: string | null;
        };
        Relationships: [];
      };
      possible_disease_ear: {
        Row: {
          bodyparts: string | null;
          disease_id: string;
          disease_name: string;
          symptom1: boolean | null;
          symptom10: boolean | null;
          symptom11: boolean | null;
          symptom2: boolean | null;
          symptom3: boolean | null;
          symptom4: boolean | null;
          symptom5: boolean | null;
          symptom6: boolean | null;
          symptom7: boolean | null;
          symptom8: boolean | null;
          symptom9: boolean | null;
        };
        Insert: {
          bodyparts?: string | null;
          disease_id?: string;
          disease_name: string;
          symptom1?: boolean | null;
          symptom10?: boolean | null;
          symptom11?: boolean | null;
          symptom2?: boolean | null;
          symptom3?: boolean | null;
          symptom4?: boolean | null;
          symptom5?: boolean | null;
          symptom6?: boolean | null;
          symptom7?: boolean | null;
          symptom8?: boolean | null;
          symptom9?: boolean | null;
        };
        Update: {
          bodyparts?: string | null;
          disease_id?: string;
          disease_name?: string;
          symptom1?: boolean | null;
          symptom10?: boolean | null;
          symptom11?: boolean | null;
          symptom2?: boolean | null;
          symptom3?: boolean | null;
          symptom4?: boolean | null;
          symptom5?: boolean | null;
          symptom6?: boolean | null;
          symptom7?: boolean | null;
          symptom8?: boolean | null;
          symptom9?: boolean | null;
        };
        Relationships: [];
      };
      reservation_info: {
        Row: {
          apply_date: string | null;
          apply_time: string | null;
          hospital_id: string | null;
          hospital_name: string | null;
          program_detail: string | null;
          program_id: string | null;
          program_name: string | null;
          reservation_id: string;
          subject_birth_date: string | null;
          subject_name: string | null;
          subject_phone_number: string | null;
          user_email: string;
          user_name: string | null;
        };
        Insert: {
          apply_date?: string | null;
          apply_time?: string | null;
          hospital_id?: string | null;
          hospital_name?: string | null;
          program_detail?: string | null;
          program_id?: string | null;
          program_name?: string | null;
          reservation_id?: string;
          subject_birth_date?: string | null;
          subject_name?: string | null;
          subject_phone_number?: string | null;
          user_email: string;
          user_name?: string | null;
        };
        Update: {
          apply_date?: string | null;
          apply_time?: string | null;
          hospital_id?: string | null;
          hospital_name?: string | null;
          program_detail?: string | null;
          program_id?: string | null;
          program_name?: string | null;
          reservation_id?: string;
          subject_birth_date?: string | null;
          subject_name?: string | null;
          subject_phone_number?: string | null;
          user_email?: string;
          user_name?: string | null;
        };
        Relationships: [];
      };
      symptom_questions: {
        Row: {
          bodyparts: string | null;
          departments: string;
          symptom_id: string;
          symptoms: string | null;
          symptoms_abbr: string | null;
        };
        Insert: {
          bodyparts?: string | null;
          departments: string;
          symptom_id: string;
          symptoms?: string | null;
          symptoms_abbr?: string | null;
        };
        Update: {
          bodyparts?: string | null;
          departments?: string;
          symptom_id?: string;
          symptoms?: string | null;
          symptoms_abbr?: string | null;
        };
        Relationships: [];
      };
      user_info: {
        Row: {
          provider: string | null;
          user_avatar: string | null;
          user_birth_date: string | null;
          user_email: string;
          user_name: string;
          user_phone_number: string | null;
          user_type: string | null;
        };
        Insert: {
          provider?: string | null;
          user_avatar?: string | null;
          user_birth_date?: string | null;
          user_email: string;
          user_name: string;
          user_phone_number?: string | null;
          user_type?: string | null;
        };
        Update: {
          provider?: string | null;
          user_avatar?: string | null;
          user_birth_date?: string | null;
          user_email?: string;
          user_name?: string;
          user_phone_number?: string | null;
          user_type?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
