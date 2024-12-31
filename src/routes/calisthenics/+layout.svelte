<script lang="ts">
    import Bookmarks from "$lib/components/logos/Bookmarks.svelte";
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
    <button class="w-[40px] h-[40px] fixed top-[64px] right-[25px] border-[1px] flex lg:hidden justify-center items-center bg-white border-neutral-300">
        <Bookmarks />
    </button>

    <div class="min-h-screen w-full">
        {@render children()}
    </div>
</div>