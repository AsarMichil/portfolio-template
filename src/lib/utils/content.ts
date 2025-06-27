import { siteConfig } from '../../config.js';
// Get site configuration
export function getSiteConfig() {
	return siteConfig;
}

// Apply theme based on config
export function applyTheme(): void {
	if (typeof document !== 'undefined') {
		const theme = siteConfig.primaryColor;
		document.documentElement.setAttribute('data-theme', theme);
	}
}
