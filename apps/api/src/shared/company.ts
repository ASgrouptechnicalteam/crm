import { z } from 'zod';

export const CompanyCreateSchema = z.object({
  name: z.string().min(1),
  code: z.string().min(1),
  property_type_group: z.string().min(1).optional(),
});

export const CompanyUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  code: z.string().min(1).optional(),
  property_type_group: z.string().min(1).optional(),
});

export const BranchCreateSchema = z.object({
  company_id: z.number().int().positive(),
  name: z.string().min(1),
});

export const BranchUpdateSchema = z.object({
  name: z.string().min(1).optional(),
});
