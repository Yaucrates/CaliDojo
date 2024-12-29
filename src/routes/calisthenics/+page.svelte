<script>
    import Bolt from "$lib/components/logos/Bolt.svelte";
    import Book from "$lib/components/logos/Book.svelte";
    import Directions from "$lib/components/logos/Directions.svelte";


    import Home from "$lib/components/logos/Home.svelte";

</script>
<div class="h-full flex">
    <div class="p-8 w-96 border-r-2 gap-2 flex flex-col text-sm border-neutral-300">
        <div class="flex items-center gap-4">
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
        </div>
        <!-- <p>1. Getting Started</p>
        <p>2. Routines</p>
        <p>3. Exercise Reference</p>
        <p>4. Misc</p> -->
    </div>

    <div class="w-full">
    </div>
</div>