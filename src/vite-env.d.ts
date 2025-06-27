/// <reference types="vite/client" />

declare module '*.md' {
	const metadata: Record<string, unknown>;
	export { metadata };
	export default content;
}
