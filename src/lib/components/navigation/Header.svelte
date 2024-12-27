<script>
    import CaliDojo from "$lib/CaliDojo.svelte";
</script>

<header class="sticky top-0 z-50 backdrop-blur">
    <nav class="px-36 py-4 border-b-[1px] flex justify-between items-center border-black">
        <a href="/" class="w-1/3">
            <CaliDojo scale={0.04}/>
        </a>

        <div class="w-1/3 gap-12 flex justify-center items-center">
            <a href="/" class="hover:underline">Reviews</a>
            <a href="/" class="hover:underline">Pricing</a>
            <a href="/" class="hover:underline">FAQs</a>
        </div>

        <div class="w-1/3 gap-4 flex justify-end items-center">
            <a href="/auth" class="border-[1px] px-6 py-[6px] flex justify-center items-center font-medium text-black  border-neutral-900 rounded-full">Sign In</a>
            <a href="/" class="px-6 py-[6px] flex justify-center items-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300">Join Now</a>
        </div>
    </nav>
</header>