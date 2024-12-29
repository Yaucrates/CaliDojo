<script>
    import CaliDojoText from "$lib/CaliDojoText.svelte";
</script>

<footer class="p-16 flex justify-around bg-neutral-900">
    <div class="w-1/2 gap-4 flex flex-col">
        <CaliDojoText />
        <p class="text-sm text-neutral-300">A comprehensive guide to mastering your body.</p>
        <p class="text-sm text-neutral-300">Copyright © 2024 - All rights reserved</p>
    </div>
    <div class="w-1/2 gap-4 flex flex-col">
        <h1 class="text-lg text-white">Links</h1>
        <div class="gap-4 grid grid-cols-2">
            <a href="/" class="text-sm text-neutral-300">Home</a>
            <a href="/calisthenics" class="text-sm text-neutral-300">Calisthenics Reference</a>
            <a href="/mobility" class="text-sm text-neutral-300">Mobility Reference</a>
            <a href="/shop" class="text-sm text-neutral-300">Shop Equipment and Supplies</a>
        </div>
    </div>
</footer>