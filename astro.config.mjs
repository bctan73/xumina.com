import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Xumina Docs',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true,
			},
			social: {
				discord: 'https://discord.com/invite/Bjtmud4HZF',
				github: 'https://github.com/Hasnayeen/xumina',
			},
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: {
						directory: 'start-here'
					}
					// items: [
					// 	{
					// 		label: 'Getting Started',
					// 		link: '/start-here/getting-started/'
					// 	}
					// ]
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Panel', link: '/guides/panel/' },
						{ label: 'Resource', link: '/guides/resource/' },
						{ label: 'Page', link: '/guides/page/' },
						{ label: 'Content', link: '/guides/content/' },
					],
				},
				{
					label: 'Resource',
					autogenerate: { directory: 'resource' },
				},
			],
		}),
	],
});
