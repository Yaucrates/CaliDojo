<script>
    import { goto } from '$app/navigation';
    
    let { data } = $props()
    let { supabase } = $derived(data)

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
            goto('/auth/error'); // Client-side navigation
        } else {
            goto('/'); // Redirect to home
        }
    };
</script>
  
Profile

<button onclick={logout}>Logout</button>