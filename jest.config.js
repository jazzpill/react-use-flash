module.exports = {
	roots: ['<rootDir>'],
	testEnvironment: 'jsdom',
	transform: {
		'.(ts|tsx)': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	testPathIgnorePatterns: ['/node_modules/', '/lib/'],
	moduleNameMapper: {},
};
