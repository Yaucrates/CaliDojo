<script>
    import CaliDojo from "$lib/CaliDojo.svelte";
</script>

<header class="sticky top-0 z-50 backdrop-blur">
    <nav class="px-8 py-4 border-b-2 flex justify-between items-center border-neutral-300 shadow-md">
        <div class="gap-6 flex justify-center items-center">
            <a href="/"><CaliDojo /></a>
            <a href="/" class="hover:underline">Home</a>
            <a href="/calisthenics" class="hover:underline">Calisthenics</a>
            <div class="hover:underline cursor-not-allowed">Mobility</div>
        </div>

        <div class="w-1/3 gap-4 flex justify-end items-center">
            <a href="/shop" class="border-[1px] px-6 py-[6px] flex justify-center items-center font-medium text-black  border-neutral-900 rounded-full">Shop</a>
            <a href="https://www.reddit.com/r/bodyweightfitness/" target="_blank" class="px-6 py-[6px] flex justify-center items-center font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300">Get Involved</a>
        </div>
    </nav>
</header>