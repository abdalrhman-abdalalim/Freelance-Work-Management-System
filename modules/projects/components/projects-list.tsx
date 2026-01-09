import { use } from 'react';
import { IProjectsData } from '../types';
import ProjectCard from './project-card';
import ProjectStatusCard from './project-status-card';
import ProductListEmptyState from './states/product-list-empty-state';

export default function ProjectsLest({ data }: { data: Promise<IProjectsData | null> }) {
	const cardsData = use(data);

	return (
		<div className='flex flex-col gap-6'>
			<div className='grid grid-cols-3 gap-4 p-4'>
				{cardsData?.projectsStatus?.map((item) => (
					<ProjectStatusCard key={item.id} item={item} />
				))}
			</div>

			{/* empty state  */}
			{cardsData?.projects?.length === 0 && <ProductListEmptyState />}

			<div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
				{cardsData?.projects?.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
