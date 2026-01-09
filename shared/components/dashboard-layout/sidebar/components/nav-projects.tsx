'use client';

import { Folder, Forward, MoreHorizontal, Trash2, type LucideIcon } from 'lucide-react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { moreProject_MenuItem, newProject_MenuItem } from '../data';

export interface IProjectNavItem {
	name: string;
	url: string;
	icon: LucideIcon;
}

export function NavProjects({ projects }: { projects: IProjectNavItem[] }) {
	const { isMobile } = useSidebar();

	return (
		<SidebarGroup>
			{/* className='group-data-[collapsible=icon]:hidden' */}
			<SidebarGroupLabel>Projects</SidebarGroupLabel>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton asChild tooltip={newProject_MenuItem.name}>
						<Link href={newProject_MenuItem.url}>
							<newProject_MenuItem.icon />
							<span>{newProject_MenuItem.name}</span>
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>

				{projects?.slice(0, 3).map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton asChild tooltip={item.name}>
							<Link href={item.url}>
								<item.icon />
								<span>{item.name}</span>
							</Link>
						</SidebarMenuButton>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuAction showOnHover>
									<MoreHorizontal />
									<span className='sr-only'>More</span>
								</SidebarMenuAction>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className='w-48 rounded-lg'
								side={isMobile ? 'bottom' : 'right'}
								align={isMobile ? 'end' : 'start'}
							>
								<DropdownMenuItem>
									<Folder className='text-muted-foreground' />
									<span>View Project</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Forward className='text-muted-foreground' />
									<span>Share Project</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Trash2 className='text-muted-foreground' />
									<span>Delete Project</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				))}

				<SidebarMenuItem>
					<SidebarMenuButton asChild className='text-sidebar-foreground/70'>
						<Link href={moreProject_MenuItem.url}>
							<moreProject_MenuItem.icon className='text-sidebar-foreground/70' />

							{moreProject_MenuItem.name}
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	);
}
