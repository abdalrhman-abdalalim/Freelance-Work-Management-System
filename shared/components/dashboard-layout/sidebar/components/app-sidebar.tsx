'use client';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { BoxesIcon } from 'lucide-react';
import Link from 'next/link';
import { data } from '../data';
import { NavProjects } from './nav-projects';
import { NavUser } from './nav-user';
import { NavMain } from './nav-main';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				{/* <TeamSwitcher teams={data.teams} /> */}

				{/* Logo */}
				<Link href='/' className='flex items-center gap-2 text-2xl font-bold tracking-tighter text-center'>
					<BoxesIcon className='text-brand-teal size-8' />
					<span className='inline group-data-[collapsible=icon]:group-data-[state=collapsed]:hidden animate-in zoom-in'>
						FWMS<span className='text-brand-teal'>.</span>
					</span>
				</Link>
			</SidebarHeader>

			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
