import { Skeleton } from '@/components/ui/skeleton';
import { projectsData } from '../../data';

export default function ProjectsListSkeleton() {
	return (
		<div className='flex flex-col gap-6'>
			{/* <Breadcrumb>
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
						<Plus className='h-5 w-5' />
						<span>Create Project</span>
					</Link>
				</Button>
			</div> */}

			<div className='grid grid-cols-3 gap-4 p-4'>
				{projectsData?.projectsStatus?.map((item) => (
					<Skeleton key={item.id} className='h-24 w-full' />
				))}
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
				{projectsData?.projects?.map((project) => (
					<Skeleton key={project.id} className='h-72 w-full' />
				))}
			</div>
		</div>
	);
}
