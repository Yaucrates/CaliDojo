<script lang="ts">
    import { toKebabCase } from '$lib/helpers/toKebabCase';
    import type { Component } from 'svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    
    const getPage = (title: string) => {
        for (let i = 0; i < data.topics.length; i++) {
            for (let j = 0; j < data.topics[i].pages.length; j++) {
                if (toKebabCase(data.topics[i].pages[j].title) === title) {
                    return data.topics[i].pages[j];
                }
            }
        }
    }

    const page = $derived( getPage(data.slug) );

    // @ts-ignore: Idk what to tell yall honestly
    const Article = $derived ( page ? page.render as Component : null );
</script>

{#if Article}
    <Article />
{/if}