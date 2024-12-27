<script>
    import { redirect } from '@sveltejs/kit';

    let { data } = $props()
    let { supabase } = $derived(data)

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error)
            redirect(303, '/auth/error')
        } else {
            redirect(303, '/')
        }
    }
</script>
  
Profile

<button onclick={logout}>Logout</button>