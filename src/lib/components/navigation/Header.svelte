<script>
    import CaliDojo from "$lib/CaliDojo.svelte";
</script>

<header class="sticky top-0 z-50 backdrop-blur">
    <nav class="px-8 py-4 border-b-2 flex justify-between items-center border-neutral-300 shadow-md">
        <div class="gap-6 flex justify-center items-center">
            <a href="/"><CaliDojo /></a>
            <a href="/" class="hover:underline">Home</a>
            <a href="/calesthenics" class="hover:underline">Calesthenics</a>
            <a href="/mobility" class="hover:underline">Mobility</a>
        </div>

        <div class="w-1/3 gap-4 flex justify-end items-center">
            <a href="/shop" class="border-[1px] px-6 py-[6px] flex justify-center items-center font-medium text-black  border-neutral-900 rounded-full">Shop</a>
            <div class="px-6 py-[6px] flex justify-center items-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 cursor-not-allowed">Join Now</div>
        </div>
    </nav>
</header>