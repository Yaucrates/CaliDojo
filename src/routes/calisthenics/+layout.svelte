<script lang="ts">
    import OpenBook from "$lib/components/logos/OpenBook.svelte";
    import X from "$lib/components/logos/X.svelte";
    import { toKebabCase } from "$lib/helpers/toKebabCase";
    import type { Snippet } from 'svelte';
    import type { Component } from "svelte";

    const { data, children }: { 
        data: {
            topics: {
                pageNumber: string;
                name: string;
                logo: Component;
                pages: {
                    title: string,
                    render: () => void,
                }[];
            }[]
        },
        children: Snippet
    } = $props();

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

<div class="flex">
    <div class="sticky top-24 lg:top-[72px] h-[calc(100vh-72px)] p-8 w-96 border-r-2 gap-2 hidden lg:flex flex-col text-sm border-neutral-300">
        {#each data.topics as topic (topic.pageNumber)}
            <div class="flex items-center gap-4">
                <topic.logo />
                <p class="font-medium">{topic.name}</p>
            </div>
            {#each topic.pages as page}
                <a href="/calisthenics/{toKebabCase(page.title)}" class="w-fit pl-10">{page.title}</a>
            {/each}
        {/each}
    </div>
    <button onclick={toggle} class="w-10 h-10 fixed top-16 right-6 border-[1px] flex lg:hidden justify-center items-center bg-white border-neutral-300">
        <OpenBook />
    </button>
    {#if mobileNavOn}
        <div class="z-[59] border-l-[1px] w-screen min-[384px]:w-96 h-screen fixed top-0 right-0 bg-white border-neutral-300">
            <div class="py-5 px-8 flex justify-end">
                <button onclick={toggle}><X /></button>
            </div>
            <div class="px-8 gap-2 flex flex-col">
                {#each data.topics as topic (topic.pageNumber)}
                    <div class="flex items-center gap-4">
                        <topic.logo />
                        <p class="font-medium">{topic.name}</p>
                    </div>
                    {#each topic.pages as page}
                        <a onclick={toggle} href="/calisthenics/{toKebabCase(page.title)}" class="w-fit pl-10">{page.title}</a>
                    {/each}
                {/each}
            </div>
        </div>
    {/if}

    <div class="min-h-screen w-full">
        {@render children()}
    </div>
</div>
