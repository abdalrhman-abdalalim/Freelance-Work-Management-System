import { AudioWaveformIcon, BookOpenIcon, BotIcon, CommandIcon, FrameIcon, GalleryVerticalEndIcon, MapIcon, MoreHorizontalIcon, PieChartIcon, PlusSquareIcon, Settings2Icon, SquareTerminalIcon } from "lucide-react";

export const newProject_MenuItem = {
	name: 'New Project',
	url: '/dashboard/projects/create-project',
	icon: PlusSquareIcon,
};

export const moreProject_MenuItem = {
	name: 'More',
	url: '/dashboard/projects',
	icon: MoreHorizontalIcon,
};


// This is sample data.
export const data = {
	user: {
		name: 'shadcn',
		email: 'm@example.com',
		avatar: '/avatars/shadcn.jpg',
	},
	teams: [
		{
			name: 'Acme Inc',
			logo: GalleryVerticalEndIcon,
			plan: 'Enterprise',
		},
		{
			name: 'Acme Corp.',
			logo: AudioWaveformIcon,
			plan: 'Startup',
		},
		{
			name: 'Evil Corp.',
			logo: CommandIcon,
			plan: 'Free',
		},
	],
	navMain: [
		{
			title: 'Playground',
			url: '#',
			icon: SquareTerminalIcon,
			isActive: true,
			items: [
				{
					title: 'History',
					url: '#',
				},
				{
					title: 'Starred',
					url: '#',
				},
				{
					title: 'Settings',
					url: '#',
				},
			],
		},
		{
			title: 'Models',
			url: '#',
			icon: BotIcon,
			items: [
				{
					title: 'Genesis',
					url: '#',
				},
				{
					title: 'Explorer',
					url: '#',
				},
				{
					title: 'Quantum',
					url: '#',
				},
			],
		},
		{
			title: 'Documentation',
			url: '#',
			icon: BookOpenIcon,
			items: [
				{
					title: 'Introduction',
					url: '#',
				},
				{
					title: 'Get Started',
					url: '#',
				},
				{
					title: 'Tutorials',
					url: '#',
				},
				{
					title: 'Changelog',
					url: '#',
				},
			],
		},
		{
			title: 'Settings',
			url: '#',
			icon: Settings2Icon,
			items: [
				{
					title: 'General',
					url: '#',
				},
				{
					title: 'Team',
					url: '#',
				},
				{
					title: 'Billing',
					url: '#',
				},
				{
					title: 'Limits',
					url: '#',
				},
			],
		},
	],
	projects: [
		// {
		// 	name: 'New Project',
		// 	url: '/dashboard/projects/create-project',
		// 	icon: PlusSquareIcon,
		// },
		{
			name: 'Design Engineering',
			url: '#',
			icon: FrameIcon,
		},
		{
			name: 'Sales & Marketing',
			url: '#',
			icon: PieChartIcon,
		},
		{
			name: 'Travel',
			url: '#',
			icon: MapIcon,
		},
	],
};