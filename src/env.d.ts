/// <reference types="astro/client" />

type ThemePreference = 'system' | 'light' | 'dark';
type ResolvedTheme = 'light' | 'dark';

interface ThemeController {
	get(): ThemePreference;
	set(preference: ThemePreference): ResolvedTheme;
	apply(preference: ThemePreference): ResolvedTheme;
	systemTheme(): ResolvedTheme;
}

interface Window {
	__theme?: ThemeController;
}
