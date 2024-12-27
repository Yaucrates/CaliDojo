<script>
    import CaliDojo from "$lib/CaliDojo.svelte";
</script>

<svelte:head>
	<title>CaliDojo | Gamify Your Calisthencis</title>
	<!-- <meta name="description" content="Impart is the best way of learning. All your classes are in one place accessible at anytime anywhere." /> -->
</svelte:head>

<main class="flex flex-col">
    <header class="sticky top-0 z-50 backdrop-blur">
        <nav class="px-36 py-4 border-b-[1px] flex justify-between items-center border-black">
            <div class="w-1/3">
                <CaliDojo scale={0.04}/>
            </div>
    
            <div class="w-1/3 gap-12 flex justify-center items-center">
                <a href="/" class="hover:underline">Reviews</a>
                <a href="/" class="hover:underline">Pricing</a>
                <a href="/" class="hover:underline">FAQs</a>
            </div>
    
            <div class="w-1/3 gap-4 flex justify-end items-center">
                <a href="/" class="border-[1px] px-6 py-[6px] flex justify-center items-center font-medium text-black  border-neutral-900 rounded-full">Sign In</a>
                <a href="/" class="px-6 py-[6px] flex justify-center items-center font-semibold text-white bg-black rounded-full">Join Now</a>
            </div>
        </nav>
    </header>

    <div class="h-[50vh] bg-red-200"></div>
    <div class="h-[50vh] bg-green-200"></div>
    <div class="h-[50vh] bg-blue-200"></div>
    <div class="h-[50vh] bg-red-200"></div>
    <div class="h-[50vh] bg-green-200"></div>
    <div class="h-[50vh] bg-blue-200"></div>
</main>