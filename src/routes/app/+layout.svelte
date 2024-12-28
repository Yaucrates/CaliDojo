<script>
    import { invalidate } from '$app/navigation'
    import IconFire from '$lib/components/icons/IconFire.svelte';
    import IconMoneyBag from '$lib/components/icons/IconMoneyBag.svelte';
    import SideNav from '$lib/components/navigation/SideNav.svelte';
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

    const getUserData = async () => {
        const { data, error } = await supabase.from("user_data").select("*");
        if (error) {
            return null;
        }

        return data[0];
    }
</script>

<SideNav />
<div class="ml-64 flex">
    <div class="h-full flex-1">
        {@render children()}
    </div>
    <div class="py-4 w-96 gap-12 flex">
        {#await getUserData() then user_data}
            {#if user_data}
                <div class="gap-2 flex justify-center items-center text-orange-500">
                    <IconFire scale={1.3} />
                    {user_data.streak}
                </div>
                <div class="gap-2 flex justify-center items-center text-yellow-500">
                    <IconMoneyBag scale={1.3} />
                    2
                </div>
            {:else}
                <p>An error has occured. Please contact me at abdulhusseinyousifh@gmail.com, and I'll get back ASAP!</p>
            {/if}
        {/await}
    </div>
</div>