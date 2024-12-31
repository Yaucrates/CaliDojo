<script lang="ts">
    import { toKebabCase } from '$lib/helpers/toKebabCase';
    import type { Component } from 'svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    
    const getInfo = (title: string) => {
        for (let i = 0; i < data.topics.length; i++) {
            for (let j = 0; j < data.topics[i].pages.length; j++) {
                if (toKebabCase(data.topics[i].pages[j].title) === title) {
                    return {
                        topic: data.topics[i].name,
                        page: data.topics[i].pages[j],
                    };
                }
            }
        }

        return {
            page: {
                topic: "Topic Doesn't Exist",
                title: "Page Doesn't Exist",
                description: "Description Doesn't Exist",
                render: {
                    render: () => console.log("error")
                }
            }
        }
    }

    const { page, topic } = $derived( getInfo(data.slug) );

    // @ts-ignore: Idk what to tell yall honestly
    const Article = $derived ( page ? page.render as Component : null );
</script>

<svelte:head>
    <title>Calisthenics | {page?.title}</title>
	<meta name="description" content={page?.description} />
</svelte:head>

{#if Article}
    <main class="flex justify-center items-center">
        <div class="py-20 max-w-prose w-full prose">
            <small class="mb-4">{topic}</small>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            <Article />
        </div>
    </main>
{/if}