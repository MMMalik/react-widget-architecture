import path from 'path';

/**
 * @type {import('vite').UserConfig}
 */
const config = {
	resolve: {
		alias: { react: path.resolve(__dirname, './node_modules/react') },
	},
};

export default config;
