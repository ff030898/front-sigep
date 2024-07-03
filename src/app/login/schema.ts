import * as z from "zod";

export const schema = z.object({
  email: z.string().email("E-mail inválido").nonempty("E-mail é obrigatório"),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres").nonempty("Senha é obrigatória"),
});

export type FormData = z.infer<typeof schema>;
