export interface Project {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags: string[];
	featured: boolean;
	thumbnail: string;
	images: string[];
	link?: string;
	github?: string;
	content: unknown;
	published: boolean;
}
