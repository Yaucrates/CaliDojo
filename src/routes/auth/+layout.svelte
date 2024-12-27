<script>
    import Header from '$lib/components/navigation/Header.svelte';

    let { children } = $props()
</script>

<Header />
  
{@render children()}