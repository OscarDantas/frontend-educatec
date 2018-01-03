const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const theme = {
	'primary-color'          	: '#08380D',
	'layout-header-background'  : '#2A5731',
	'menu-dark-submenu-bg'		: 'rgba(255,255,255,.2)',
	'link-color'				: '#08380D',
	'item-active-bg'         	: '#f2f2f2',
	'item-hover-bg'          	: '#f2f2f2',
<<<<<<< HEAD
	'table-header-bg'			: 'linear-gradient(rgb(245, 244, 245), rgb(206, 206, 206))',
	'table-row-hover-bg'		: '#f2f2f2',
=======
	'table-header-bg'			: 'linear-gradient(#fefefe, #e2e2e2)',
	'table-row-hover-bg'		: '#e2e2e2',
>>>>>>> 113eee1c5420217209bd600e03b4c4684bf63712
}

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
	config = rewireLess.withLoaderOptions({
	    modifyVars: theme,
	})(config, env);

    return config;
};