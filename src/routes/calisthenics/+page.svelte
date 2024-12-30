<script lang="ts">
    import type { Component } from "svelte";

    const { data }: { 
        data: {
            topics: {
                pageNumber: string;
                name: string;
                logo: Component;
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
        {/each}
        <!-- <div class="flex items-center gap-4">
            <Home />
            <p class="font-medium">Getting Started</p>
        </div>
        <div class="pl-10">Introduction</div>
        <div class="pl-10">Basic Terminology</div>

        <div class="flex items-center gap-4">
            <Bolt scale={1} />
            <p class="font-medium">Workout Routines</p>
        </div>
        <div class="pl-10">The Recommended Routine</div>
        <div class="pl-10">Beginner Routines</div>
        <div class="pl-10">Intermediate to Advanced Routines</div>

        <div class="flex items-center gap-4">
            <Book scale={1} />
            <p class="font-medium">Exercise Reference</p>
        </div>

        <div class="flex items-center gap-4">
            <Directions scale={1} />
            <p class="font-medium">Misc</p>
        </div> -->
    </div>

    <div class="w-full">
    </div>
</div>