'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { projectStatus_select } from '../../data';
import {
	createProject_defaultValues,
	createProjectSchema,
	TCreateProjectInput,
} from './validation/create-project.schema';

export default function CreateProjectForm() {
	const form = useForm<TCreateProjectInput>({
		resolver: zodResolver(createProjectSchema),
		defaultValues: createProject_defaultValues,
		mode: 'onChange',
	});

	function onSubmit(data: TCreateProjectInput) {
		console.log(data);
	}

	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle>Create New Project</CardTitle>
				<CardDescription>After create a new project, you can full manage it.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} id='form-create-project' className='space-y-5 p-5'>
						<FormField
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem>
									<FormLabel aria-required>Project Title</FormLabel>
									<FormControl>
										<Input placeholder='enter project title...' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Project Description</FormLabel>
									<FormControl>
										<Textarea placeholder='enter project description...' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='status'
							render={({ field }) => (
								<FormItem>
									<FormLabel aria-required>Project Status</FormLabel>
									<FormControl>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<SelectTrigger className='min-w-40'>
												<SelectValue placeholder='Choose a project status' />
											</SelectTrigger>
											<SelectContent position='popper'>
												{projectStatus_select?.map((item) => (
													<SelectItem key={item.value} value={item.value}>
														{item.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</CardContent>
			<CardFooter className='flex justify-center gap-2'>
				<Button
					type='button'
					variant='outline'
					onClick={() => form.reset()}
					className='flex-1 md:flex-none md:basis-1/4'
				>
					Reset
				</Button>
				<Button type='submit' form='form-create-project' className='flex-1 md:flex-none md:basis-1/4'>
					Submit
				</Button>
			</CardFooter>
		</Card>
	);
}
