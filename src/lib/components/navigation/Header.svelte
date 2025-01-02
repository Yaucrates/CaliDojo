<script>
    import CaliDojo from "$lib/components/logos/CaliDojo.svelte";
    import Hamburger from "$lib/components/logos/Hamburger.svelte";
    import X from "$lib/components/logos/X.svelte";

    let mobileNavOn = $state(false);
    const toggle = () => {
        mobileNavOn = !mobileNavOn;

        if (mobileNavOn) {
            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scrolling
            document.body.style.overflow = 'auto';
        }
    }
</script>

<header class="fixed w-full top-0 z-50 backdrop-blur">
    <nav class="px-8 py-4 border-b-2 flex justify-between items-center border-neutral-300 shadow-md">
        <div class="gap-6 flex justify-center items-center">
            <a href="/"><CaliDojo /></a>
            <a href="/" class="hover:underline hidden lg:block">Home</a>
            <a href="/calisthenics" class="hover:underline hidden lg:block">Calisthenics</a>
            <div class="hover:underline cursor-not-allowed hidden lg:block">Mobility</div>
        </div>

        <div class="w-1/3 gap-4 hidden lg:flex justify-end items-center">
            <a href="/shop" class="border-[1px] px-6 py-[6px] flex justify-center items-center font-medium text-black  border-neutral-900 rounded-full">Shop</a>
            <a href="https://github.com/Yaucrates/docs/tree/5d96e31a91cf07b686952c3a7b038f7ae62901a1" target="_blank" class="px-6 py-[6px] flex justify-center items-center font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300">Get Involved</a>
        </div>
        <button onclick={toggle} class="block lg:hidden"><Hamburger /></button>
    </nav>

    {#if mobileNavOn}
        <div class="border-l-[1px] w-screen min-[384px]:w-96 h-screen fixed top-0 right-0 bg-white border-neutral-300">
            <div class="py-5 px-8 flex justify-end">
                <button onclick={toggle}><X /></button>
            </div>
            <div class="px-8 gap-4 flex flex-col">
                <a onclick={toggle} href="/" class="hover:underline">Home</a>
                <a onclick={toggle} href="/calisthenics" class="hover:underline">Calisthenics</a>
                <div class="hover:underline cursor-not-allowed">Mobility</div>
                <a onclick={toggle} href="/shop" class="border-[1px] px-6 py-[6px] flex justify-center items-center font-medium text-black  border-neutral-900 rounded-full">Shop</a>
                <a onclick={toggle} href="https://github.com/Yaucrates/docs/tree/5d96e31a91cf07b686952c3a7b038f7ae62901a1" target="_blank" class="px-6 py-[6px] flex justify-center items-center font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300">Get Involved</a>
            </div>
        </div>
    {/if}
</header>