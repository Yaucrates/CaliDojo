<script>
    import CaliDojo from "$lib/CaliDojo.svelte";
</script>

<header class="sticky top-0 z-50 backdrop-blur">
    <nav class="px-36 py-4 border-b-[1px] flex justify-between items-center border-black">
        <a href="/" class="w-1/3">
            <CaliDojo />
        </a>

        <div class="w-1/3 gap-12 flex justify-center items-center">
            <a href="/calesthenics" class="hover:underline">Calesthenics</a>
            <a href="/mobility" class="hover:underline">Mobility</a>
            <a href="/equipment" class="hover:underline">Equipment</a>
        </div>

        <div class="w-1/3 gap-4 flex justify-end items-center">
            <div class="border-[1px] px-6 py-[6px] flex justify-center items-center font-medium text-black  border-neutral-900 rounded-full cursor-not-allowed">Log In</div>
            <div class="px-6 py-[6px] flex justify-center items-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 cursor-not-allowed">Join Now</div>
        </div>
    </nav>
</header>