<script lang="ts">
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

<div class="h-full flex">
    <div class="p-8 w-96 border-r-2 gap-2 flex flex-col text-sm border-neutral-300">
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

    <div class="w-full">
        {@render children()}
    </div>
</div>