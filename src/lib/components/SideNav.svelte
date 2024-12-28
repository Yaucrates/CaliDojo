<script>
    import CaliDojo from "$lib/CaliDojo.svelte";
    import { page } from '$app/state';

    const sections = [
        "Exercise",
        "Skills",
        "Missions",
        "Leaderboard",
        "Profile"
    ];
</script>

<nav class="p-5 fixed left-0 top-0 border-r-2 gap-2 w-64 h-screen flex flex-col border-neutral-200">
    <a href="/app/exercise" class="mb-6"><CaliDojo scale={1.3} /></a>
    {#each sections as section}
        <a href="/app/{section.toLowerCase()}" class="p-2 border-2 {page.url.pathname === `/app/${section.toLowerCase()}` ? "border-sky-300 bg-sky-100" : "border-transparent hover:bg-neutral-100"} rounded-lg">{section}</a>
    {/each}
    <!-- <a href="/app/skills" class="p-2 border-2 {page.url.pathname === "/app/skills" ? "border-sky-300 bg-sky-100" : "border-transparent hover:bg-neutral-100"} rounded-lg">Skills</a>
    <a href="/app/missions"  class="p-2 border-2 {page.url.pathname === "/app/missions" ? "border-sky-300 bg-sky-100" : "border-transparent hover:bg-neutral-100"} rounded-lg">Missions</a>
    <a href="/app/leaderboard"  class="p-2 border-2 {page.url.pathname === "/app/leaderboard" ? "border-sky-300 bg-sky-100" : "border-transparent hover:bg-neutral-100"} rounded-lg">Leaderboard</a>
    <a href="/app/profile"  class="p-2 border-2 {page.url.pathname === "/app/profile" ? "border-sky-300 bg-sky-100" : "border-transparent hover:bg-neutral-100"} rounded-lg">Profile</a> -->
</nav>