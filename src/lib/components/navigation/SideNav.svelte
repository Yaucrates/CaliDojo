<script>
    import CaliDojo from "$lib/CaliDojo.svelte";
    import { page } from '$app/state';
    import IconAward from "../icons/IconAward.svelte";
    import IconSwords from "../icons/IconSwords.svelte";
    import IconBolt from "../icons/IconBolt.svelte";
    import IconShieldChevron from "../icons/IconShieldChevron.svelte";
    import IconUserCircle from "../icons/IconUserCircle.svelte";
</script>

<nav class="p-5 fixed left-0 top-0 border-r-2 gap-2 w-64 h-screen flex flex-col border-neutral-200">
    <a href="/app/exercise" class="mb-6"><CaliDojo scale={1.3} /></a>
    
    <a href="/app/exercise" class="p-2 border-2 gap-2 flex items-center {page.url.pathname === "/app/exercise" ? "border-sky-300 bg-sky-100" : "border-transparent hover:bg-neutral-100"} text-lg font- rounded-lg">
        <IconAward /> Exercise
    </a>
    <!-- <a href="/app/skills" class="p-2 border-2 gap-2 flex items-center {page.url.pathname === "/app/skills" ? "border-sky-300 bg-sky-100" : "border-transparent hover:bg-neutral-100"} text-lg font- rounded-lg">
        <IconBolt /> Skills
    </a> -->
    <!-- <a href="/app/missions" class="p-2 border-2 gap-2 flex items-center {page.url.pathname === "/app/missions" ? "border-sky-300 bg-sky-100" : "border-transparent hover:bg-neutral-100"} text-lg font- rounded-lg">
        <IconSwords /> Missions
    </a> -->
    <!-- <a href="/app/leaderboard" class="p-2 border-2 gap-2 flex items-center {page.url.pathname === "/app/leaderboard" ? "border-sky-300 bg-sky-100" : "border-transparent hover:bg-neutral-100"} text-lg font- rounded-lg">
        <IconShieldChevron /> Leaderboard
    </a> -->
    <a href="/app/profile" class="p-2 border-2 gap-2 flex items-center {page.url.pathname === "/app/profile" ? "border-sky-300 bg-sky-100" : "border-transparent hover:bg-neutral-100"} text-lg font- rounded-lg">
        <IconUserCircle /> Profile
    </a>
</nav>