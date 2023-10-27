export interface ApplicationForms {
  department: "sales" | "marketing" | "accounting" | "customer service";
  why: "money" | "love" | "learn" | "idk";
  salary: "$50K" | "$100K" | "$150K" | "$200K";
  introduction: string;
  dreams: string;
  email: string;
}

export const REQUIRED = { required: "*required" };

export const TW_VAR = {
  title: "text-sm  font-semibold tracking-tight",
  answer: "text-xs font-semibold",
  error: "text-xs font-semibold text-red-600 leading-none tracking-tight",
  align: "flex items-center gap-1",
  border: "border-2 border-black rounded-md p-1 block w-full mt-1 p-1 pl-2",
};
