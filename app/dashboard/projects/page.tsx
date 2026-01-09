import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/modules/projects/data';
import ProjectsScreenSkeleton from '@/modules/projects/projects-screen-skeleton';
// import ProjectsScreen from '@/modules/projects/projects-screen';
import { IProjectsData } from '@/modules/projects/types';
import { PlusIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ProjectsScreen = dynamic(() => import('@/modules/projects/projects-screen'), {
	// ssr: false,
	loading: () => <ProjectsScreenSkeleton />,
});

const getData = async (): Promise<IProjectsData | null> => {
	// const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } });
	// return res.json();

	const data = await new Promise((resolve) => setTimeout(() => resolve(projectsData), 3000));
	console.log('data', data);
	return data as IProjectsData;
};

export default async function ProjectsPage() {
	const data = getData();
	console.log('data', data);

	// return <ProjectsScreen data={data || { projects: [], projectsStatus: [] }} />;

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

			<ProjectsScreen data={data || { projects: [], projectsStatus: [] }} />
		</div>
	);
}
