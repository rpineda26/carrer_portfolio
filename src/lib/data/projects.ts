import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'phexplore',
		color: '#5e95e3',
		description:
		'An application where users can view destinations for inspiration and plan their next trip. '
		+'Users can like their favorite destinations and view the most liked destinations. '
		+'Users can filter destinations via categories. Google maps api is integrated so users can check their favorite destinations on the map. ' 
		+'Users can directly share destinations in facebook from the application. The application utilizes recycler views to display the list of destinations.',
		shortDescription:
			'An application where users can view destinations for inspiration and plan their next trip.',
		links: [{ to: 'https://github.com/CodeKiyo/phexplore', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'PHexplore',
		period: {
			from: new Date(2024,1,15),
			to: new Date(2024,3,1)
		},
		skills: getSkills('git', 'nosql', 'android-app'),
		type: 'Android Application',
		screenshots: [
			{
				label: 'Home Page',
				src: Assets.PhExploreSC1
			},
			{
				label: 'Facebook Share API',
				src: Assets.PhExploreSC2
			},
			{
				label: 'Google Maps API',
				src: Assets.PhExploreSC3
			},
			{
				label: 'Destination Page',
				src:Assets.PhExploreSC4
			},
			{
				label: 'User Profile Page',
				src: Assets.PhExploreSC5
			}
		]
	},
	{
		slug: 'animo-hub',
		color: '#ff3e00',
		description:
			'A social media web application that allows users to share their thoughts, upvote and downvote posts, comment, and reply on posts. Users can edit and delete their posts, comments, and replies. Users can upload and change their profile picture and cover photo to personalize their profile. The application is complete with user authenticattion and field validations for security and data integrity.'
			+' Checkout the github link to test the application.',
		shortDescription:
			'A social media web application that allows users to share their thoughts, upvote and downvote posts, comment, and reply on posts.',
		links: [{ to: 'https://github.com/rpineda26/AnimoHub', label: 'GitHub' }],
		logo: Assets.AnimoHub,
		name: 'AnimoHub',
		period: {
			from: new Date(2023,5,16),
			to: new Date(2023,7,6)
		},
		skills: getSkills('web-app', 'communication', 'nosql', 'git'),
		type: 'Website Application',
		screenshots: [
			{
				label: 'Profile Page',
				src: Assets.AnimoHubSC1
			},
			{
				label: 'Comment Section',
				src: Assets.AnimoHubSC2
			},
			{
				label: 'Login Page',
				src: Assets.AnimoHubSC3
			}
		]
	},
	{
		slug: 'medical-chatbot-discord',
		color: '#5e95e3',
		description:
		'A discord application where the chatbot will ask the patient a predefined set of questions. The chatbot will provide the most probable diagnosis based on the patient\'s answers. '
		+'My contribution to the group is the implementation of the knowledgebase in the backend of the application. The knowledgebase is written in tau prolog and it contains the relations of illnesses and their symptoms. The symptoms are weighted in their relation to an illness. ',
		shortDescription:
		'A discord application where the chatbot will ask the patient a predefined set of questions. The chatbot will provide the most probable diagnosis based on the patient\'s answers.',
		links: [{ to: 'https://github.com/Dwigoric/CSINTSY-ChatBot', label: 'GitHub' }],
		logo: Assets.Discord,
		name: 'Medical Chatbot - Discord',
		period: {
			from: new Date(2023,3,1),
			to: new Date(2023,3,11)
		},
		skills: getSkills('web-app', 'git', 'learner', 'communication'),
		type: 'Website Application'

	},
	{
		slug: 'medical-chatbot-cli',
		color: '#ff3e00',
		description:
			'A medical chatbot where a patient can ask questions about their symptoms and the chatbot will provide the most probable diagnosis. The diagnosis is computed based on a defined relation of illness and their symptoms. The doctor can append on an existing list of symptoms and diagnosis. The application has a bonus feature of tagalog and english translations and an algorithm for auto-correction of spelling errors. The patient statistics and diagnosis will be stored in a file named after the patient.',
		shortDescription:
		'A medical chatbot where a user can act as a patient and ask questions about their symptoms or as a doctor and update the list of symptoms and diagnosis. ',
		links: [{ to: 'https://github.com/rpineda26/MedChatBot-CLI', label: 'GitHub' }],
		logo: Assets.Medicine,
		name: 'Medical Chatbot - CLI',
		period: {
			from: new Date(2022,1,15),
			to:new Date(2022,3,1)
		},
		skills: getSkills('learner', 'test'),
		type: 'Website Application',
		screenshots: [
			{
				label: 'Auto Correct Spelling',
				src: Assets.DocCLISC1
			},
			{
				label: 'Automated Testing',
				src: Assets.DocCLISC2
			},
			{
				label: 'File Output',
				src: Assets.DocCLISC3
			},
		]
	},
	{
		slug: 'distributed-database-system',
		color: '#5e95e3',
		description:
		'A web application that communicates with a distributed database. The distributed database is implemented with a master-master architecture where all nodes are capable of both read and write operations. The database is fragmented horizontally where the data are separated on the shard nodes based on the region. The first shard node is based in Luzon and the second shard node is based in Visayas and Mindanao. The central node contains all the data from both shard nodes. The backend of the web application is designed to make the application available even when the central node or both shard nodes fail. The failed nodes will be  able to recover the data transactions they missed when they were inaccessible once they become available.' ,
		shortDescription:
		'A web application that communicates with a distributed database. The distributed database consists of three nodes, one central and two shard nodes. The database is horizontally fragmented based on region.',
		links: [{ to: 'https://github.com/kaninRice/stadvdb-mco2/tree/dev', label: 'GitHub' }],
		logo: Assets.Database,
		name: 'Distributed Database System',
		period: {
			from: new Date(2024, 4,1),
			to: new Date(2024, 4, 12)
		},
		skills: getSkills('web-app', 'sql', 'communication', 'learner', 'git', 'test'),
		type: 'Website Application',
		screenshots: [
			{
				label: 'Proxmox Server',
				src: Assets.DistributedSC0
			},
			{
				label: 'Home Page',
				src: Assets.DistributedSC1
			},
			{
				label: 'Transaction Log',
				src: Assets.DistributedSC2
			},

		]
	},
];

export const title = 'Projects';
