export enum ENUMProjectStatus {
	NEW = 'new',
	ACTIVE = 'active',
	COMPLETED = 'completed',
}

export interface IProjectStatus {
	id: number;
	value: number;
	label: string;
}

export interface IProjectCard {
	id: string;
	title: string;
	description: string;
	creator: string;
	status: ENUMProjectStatus;
	progress: number;
	tasksCount: number;
	members: {
		id: number;
		name: string;
		avatar?: string;
	}[];
}


export type IProjectsData = {
	projects: IProjectCard[];
	projectsStatus: IProjectStatus[];
};