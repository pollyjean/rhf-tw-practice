export interface ApplicationForms {
  department: "sales" | "marketing" | "accounting" | "customer service";
  why: "money" | "love" | "learn" | "idk";
  salary: 50 | 100 | 150 | 200;
  introduction: string;
  dreams: string;
  email: string;
}

export const REQUIRED = { required: "*required" };
