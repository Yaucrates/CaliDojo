<script lang="ts">
    import type { Component } from "svelte";

    const { data }: { 
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
        }
    } = $props();
</script>

<svelte:head>
    <title>Calisthenics | A Comprehensive Guide to Calisthenics</title>
	<meta name="description" content="CaliDojo is meant to provide with a reliable reference for all your calisthenics needs." />
</svelte:head>

<div class="h-full flex">
    <div class="p-8 w-96 border-r-2 gap-2 flex flex-col text-sm border-neutral-300">
        {#each data.topics as topic (topic.pageNumber)}
            <div class="flex items-center gap-4">
                <topic.logo />
                <p class="font-medium">{topic.name}</p>
            </div>
            {#each topic.pages as page}
                <p class="pl-10">{page.title}</p>
            {/each}
        {/each}
    </div>

    <div class="w-full">
    </div>
</div>