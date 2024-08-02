import { z } from 'zod';

// Schema para Candidato
export const candidatoSchema = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

// Schema para Empresa
export const empresaSchema = z.object({
  email: z.string().email("E-mail corporativo inválido"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

// Schema para Parceiro
export const parceiroSchema = z.object({
  email: z.string().email("E-mail do parceiro inválido"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

// Tipos inferidos dos schemas
export type CandidatoFormData = z.infer<typeof candidatoSchema>;
export type EmpresaFormData = z.infer<typeof empresaSchema>;
export type ParceiroFormData = z.infer<typeof parceiroSchema>;
