import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import ProjectsLest from './components/projects-list';
import ProjectsListSkeleton from './components/states/projects-list-skeleton';
import { projectsData } from './data';
import { IProjectsData } from './types';

const getData = async (): Promise<IProjectsData | null> => {
	// const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } });
	// return res.json();

	const data = await new Promise((resolve) => setTimeout(() => resolve(projectsData), 3000));
	console.log('data', data);
	return data as IProjectsData;
};

export default async function ProjectsScreen() {
	const data = getData();
	return (
		<div className='flex flex-col gap-6'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem className='hidden md:block'>
						<BreadcrumbLink href='/dashboard'>dashboard</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className='hidden md:block' />
					<BreadcrumbItem>
						<BreadcrumbPage>Projects</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='flex gap-4 items-center justify-between'>
				<h1 className='text-3xl font-semibold text-brand-teal'>Projects</h1>

				<Button asChild>
					<Link href='/dashboard/projects/create-project' className='flex items-center gap-2'>
						<PlusIcon className='h-5 w-5' />
						<span>Create Project</span>
					</Link>
				</Button>
			</div>

			<Suspense fallback={<ProjectsListSkeleton />}>
				<ProjectsLest data={data} />
			</Suspense>
		</div>
	);
}
