import { ENUMProjectStatus, IProjectsData } from './types';

export const projectStatus_select = [
	{ value: ENUMProjectStatus.NEW, label: 'New' },
	{ value: ENUMProjectStatus.ACTIVE, label: 'Active' },
	{ value: ENUMProjectStatus.COMPLETED, label: 'Completed' },
];



export const projectsData: IProjectsData = {
	projects: [
		{
			id: '1',
			title: 'Project 1',
			description: 'Description 1',
			creator: 'Creator 1',
			status: ENUMProjectStatus.ACTIVE,
			progress: 80,
			tasksCount: 10,
			members: [
				{
					id: 1,
					name: 'Member 1',
					avatar: 'https://picsum.photos/200/300?random=1',
				},
				{
					id: 2,
					name: 'Member 2',
					avatar: 'https://picsum.photos/200/300?random=2',
				},
				{
					id: 3,
					name: 'Member 3',
					avatar: 'https://picsum.photos/200/300?random=3',
				},
				{
					id: 4,
					name: 'Member 4',
					avatar: 'https://picsum.photos/200/300?random=4',
				},
			],
		},
		{
			id: '2',
			title: 'Project 2',
			description: 'Description 2',
			creator: 'Creator 2',
			status: ENUMProjectStatus.COMPLETED,
			progress: 100,
			tasksCount: 5,
			members: [
				{
					id: 1,
					name: 'Member 1',
					avatar: 'https://picsum.photos/200/300?random=1',
				},
				{
					id: 2,
					name: 'Member 2',
					avatar: 'https://picsum.photos/200/300?random=2',
				},
			],
		},
		{
			id: '3',
			title: 'Project 3',
			description: 'Description 3',
			creator: 'Creator 3',
			status: ENUMProjectStatus.NEW,
			progress: 0,
			tasksCount: 0,
			members: [],
		},
		{
			id: '4',
			title: 'Project 4',
			description: 'Description 4',
			creator: 'Creator 4',
			status: ENUMProjectStatus.NEW,
			progress: 0,
			tasksCount: 0,
			members: [],
		},
	],
	projectsStatus: [
		{
			id: 1,
			value: 45,
			label: 'In Progress',
		},
		{
			id: 3,
			value: 10,
			label: 'upcoming',
		},
		{
			id: 2,
			value: 20,
			label: 'Completed',
		},
	],
};
