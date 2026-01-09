import { CaptionsOffIcon } from 'lucide-react';
import { use } from 'react';
import ProjectCard from './components/project-card';
import ProjectStatusCard from './components/project-status-card';
import { IProjectCard, IProjectsData } from './types';

export default function ProjectsScreen({ data }: { data: Promise<IProjectsData | null> }) {
	const cardsData = use(data);

	return (
		<div className='flex flex-col gap-6'>
			<div className='grid grid-cols-3 gap-4 p-4'>
				{cardsData?.projectsStatus?.map((item) => (
					<ProjectStatusCard key={item.id} item={item} />
				))}
			</div>

			{cardsData?.projects?.length === 0 && (
				<div className='col-span-full flex gap-2 justify-center items-center text-center text-muted-foreground'>
					<CaptionsOffIcon className='h-6 w-6' />
					There are no projects yet.
				</div>
			)}

			<div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
				{cardsData?.projects?.map((project) => (
					<ProjectCard key={project.id} project={project as IProjectCard} />
				))}
			</div>
		</div>
	);
}
