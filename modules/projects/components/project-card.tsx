'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';
import { useIsMobile } from '@/hooks/use-mobile';
import { EllipsisVerticalIcon } from 'lucide-react';
import Link from 'next/link';
import { IProjectCard } from '../types';
import { getAvatarColor, getInitials } from '../utles';

export default function ProjectCard({ project }: { project: IProjectCard }) {
	const isMobile = useIsMobile();
	return (
		<Link href={`/projects/${project.id}`} className='block'>
			<Card className='h-full hover:shadow-2xl transition-all hover:scale-105'>
				<CardHeader>
					<div className='flex gap-2 items-center justify-between'>
						<span>{project.status || ''}</span>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='outline' size='icon'>
									<EllipsisVerticalIcon />
									<span className='sr-only'>Options</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className='w-48 rounded-lg'
								side={isMobile ? 'bottom' : 'left'}
								align={isMobile ? 'end' : 'start'}
							>
								<DropdownMenuItem>
									{/* <Folder className='text-muted-foreground' /> */}
									<span>View Project</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									{/* <Forward className='text-muted-foreground' /> */}
									<span>Share Project</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									{/* <Trash2 className='text-muted-foreground' /> */}
									<span>Delete Project</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</CardHeader>
				<CardContent className='flex flex-col gap-2 items-center'>
					<CardTitle className='line-clamp-2'>{project.title || ''}</CardTitle>
					<CardDescription className='line-clamp-2'>{project.description || ''}</CardDescription>

					<Progress value={project.progress || 0} className='w-full' />
					<div className='font-medium ms-auto'>{project.progress || 0}%</div>
				</CardContent>
				<CardFooter className='flex gap-2 justify-between'>
					<div className='flex items-center -space-x-3'>
						{project?.members?.map((member) => (
							<Avatar key={member.id} className='border-2 border-background'>
								<AvatarImage src={member.avatar} alt={member.name} />
								<AvatarFallback className={`${getAvatarColor(member.name)} text-white text-xs`}>
									{getInitials(member.name)}
								</AvatarFallback>
							</Avatar>
						))}
					</div>
					<p>tasks: {project.tasksCount || 0}</p>
				</CardFooter>
			</Card>
		</Link>
	);
}
