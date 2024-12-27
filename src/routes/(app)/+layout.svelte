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
    <a href="/exercise">Exercise</a>
    <a href="/skills">Skills</a>
    <a href="/missions">Missions</a>
    <a href="/leaderboard">Leaderboard</a>
    <a href="/profile">Profile</a>
</nav>

<div class="ml-96">
    {@render children()}
</div>