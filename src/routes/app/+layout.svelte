<script>
    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'
  
    let { data, children } = $props()
    let { session, supabase } = $derived(data)
  
    onMount(() => {
        const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
            if (newSession?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth')
            }
        })
    
        return () => data.subscription.unsubscribe()
    })
  </script>

<nav class="fixed left-0 top-0 w-96 h-screen flex flex-col bg-red-50">
    <a href="/app/exercise">Exercise</a>
    <a href="/app/skills">Skills</a>
    <a href="/app/missions">Missions</a>
    <a href="/app/leaderboard">Leaderboard</a>
    <a href="/app/profile">Profile</a>
</nav>

<div class="ml-96">
    {@render children()}
</div>