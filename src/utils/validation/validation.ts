import { z } from "zod";

export const validationData = z.object({
  userId: z
    .string()
    .min(1, "IDは必ず入力してください。")
    .min(4, "IDは4文字以上で入力してください。"),
  password: z
    .string()
    .min(1, "パスワードは必ず入力してください。")
    .min(6, "パスワードは6文字以上で入力してください。")
    .max(12, "パスワードは12文字以内で入力してください。"),
});
