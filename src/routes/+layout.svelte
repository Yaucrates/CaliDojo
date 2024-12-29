<script lang="ts">
    import Footer from '$lib/components/navigation/Footer.svelte';
import Header from '$lib/components/navigation/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="h-full flex flex-col overflow-auto">
    <Header />
    {@render children()}
    <Footer />
</div>