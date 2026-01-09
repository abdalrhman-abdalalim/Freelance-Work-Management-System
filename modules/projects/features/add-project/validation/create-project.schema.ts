import { ENUMProjectStatus } from '@/modules/projects/types';
import { z } from 'zod';

export const createProjectSchema = z.object({
	title: z.string().trim().min(3, 'Title must be at least 3 characters').max(50, 'Title must be at most 50 characters'),
	description: z.string().optional(),
	creator: z.string().trim().min(1, 'Creator is required'),
	status: z.enum(ENUMProjectStatus, 'Status is required'),
	// deadline: z.date().min(new Date(), 'Deadline must be in the future'),
});

export type TCreateProjectInput = z.infer<typeof createProjectSchema>;

export const updateProjectSchema = createProjectSchema.partial();

export type TUpdateProjectInput = z.infer<typeof updateProjectSchema>;

export const createProject_defaultValues: TCreateProjectInput = {
	title: '',
	description: '',
	creator: '',
	status: ENUMProjectStatus.NEW,
	// deadline: new Date(),
};
