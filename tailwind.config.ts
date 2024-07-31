import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { material } from './src/material.ts'

export default {
	darkMode: 'media',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'sahara',
						enhancements: true
					}
				],
				custom: [
					material
				]
			}
		})
	]
} satisfies Config;
