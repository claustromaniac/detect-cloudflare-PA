const settings = new Settings();
const tabs = new Tabs();
const requestIDs = {};
const iconColorAndDesc = [
	{ color: '', desc: 'True Sight' },
	{ color: 'yellow', desc: 'External resources were served by a CDN.' },
	{ color: 'red', desc: 'This page was served by a CDN!' },
	{ color: 'purple', desc: 'Multiple CDNs detected in this page!' }
];
