<script lang="ts" module>
	import { img } from '$lib/components/custom/index';
	export { img };
</script>

<script lang="ts">
	let props = $props();
</script>

{@render props.children?.()}
