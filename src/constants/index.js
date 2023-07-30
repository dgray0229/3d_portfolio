import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";
export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];
const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];
const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];
const experiences = [
	{
		title: "WordPress Developer",
		company_name: "Wiredhat Interactive",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Updated or built from scratch over 30 websites for over a dozen clients.",
			"Created custom WordPress templates for companies to be able to edit on their own.",
			"Environments: HTML, CSS, PHP, jQuery, WordPress, MySQL, MailChimp, Google Analytics",
		],
	},
	{
		title: "Web Developer",
		company_name: "The Home Improvement Guide",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Develop dynamic and engaging user experiences at The Home Improvement Guide, focusing on interactive site creation using jQuery, GSAP, Vue.js and WordPress, Laravel, and PHP as the underlying backend technologies.",
			"Environments: HTML, CSS, PHP, jQuery, WordPress, REST API, GSAP, Vue.js, Laravel, Google Analytics, Matomo, Hotjar, Wrike, G Suite, Linux",
		],
	},
	{
		title: "Vue.js UI Engineer",
		company_name: "Williams Sonoma",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"All six company branded sites were migrated to Vue.js in a major UI migration.",
			"To make theme updates available to all branded sites at once, the workflow was optimized so that all branded sites use the same Vue.js template.",
			"Revenue increased 142% from the first quarter of 2020 into the first quarter of 2021 and a 90% increase through the entire year.",
			"Environments: Vue.js, SCSS, Git, GitHub, REST API, Webpack, JIRA.",
		],
	},
	{
		title: "Senior Frontend Developer",
		company_name: "Hum Nutrition",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		],
	},
	{
		title: "Full-Stack Developer",
		company_name: "PayPal",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Reduce the maximum loading time of marketing pages from 15 seconds to 6 seconds by developing UI components in React, TypeScript, and Jest.",
			"RESTful APIs for processing Contentful data were developed to enable server-side rendering.",
			"Environments: React, Node.js, LESS, Jest, React Testing Library, TypeScript, Storybook, Figma, Jira, Confluence, Git, GitHub, Lighthouse, Contentful, Jenkins, Circle CI.",
		],
	},
	{
		title: "Full-Stack Developer",
		company_name: "Walmart",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Built React, Typescript, and Jest to develop a UI Dashboard providing affiliate marketers the ability to select from hundreds of Walmart campaigns worldwide and track their progress. ",
			"Integrate social media with OAuth so that affiliate metrics can be tracked, and users can be qualified for campaigns.",
			"Environments: React, Node.js, Jest, React Testing Library.",
		],
	},
	{
		title: "Software Engineer",
		company_name: "Devin Gray LLC",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Build or worked on over 200 websites for over 150 small businesses and companies including Hum Nutrition, Thales, Versa Products, Let’s Design for You, Avital Web, SCSI Media, and Adler & Associates.",
			"Taught and tutored coding bootcamp students partnered with Trilogy Education/2U.",
			"Developed 3 websites heavily focused on ADA and WCAG compliance for audio, video, and images.",
			"Developed multiple Software-as-a-Service (SaaS) products for consumers using React Native, Flutter, Electron, and Quasar that are available for download or in app stores.",
			"Develop WordPress and Shopify themes and addons/plugins personal client and public use.",
			"Clients see up to 10% increase in site performance as well as user visit and retention increases.",
			"Environments: React, TypeScript, React Native, Redux, Vue.js, Quasar, AWS, Docker, PHP, WordPress, Laravel, SQL, MongoDB, Python, Git, Electron.js, Blockchain, Web3, Dart, Flutter",
		],
	},
];
const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];
const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];
export { services, technologies, experiences, testimonials, projects };
