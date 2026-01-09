import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
// import { CreateProjectForm } from './create-project-form';
import dynamic from 'next/dynamic';
import LoadingSquare from '../../components/states/loading-square';

// dynamic import

const CreateProjectForm = dynamic(() => import('./create-project-form'), { loading: () => <LoadingSquare /> });

export default function CreateProjectScreen() {
	return (
		<div className='flex flex-col gap-4'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem className='hidden md:block'>
						<BreadcrumbLink href='/dashboard'>dashboard</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className='hidden md:block' />
					<BreadcrumbItem className='hidden md:block'>
						<BreadcrumbLink href='/dashboard/projects'>Project</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator className='hidden md:block' />
					<BreadcrumbItem>
						<BreadcrumbPage>Create Project</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<CreateProjectForm />
		</div>
	);
}
