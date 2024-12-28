// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Database } from "$lib/supabase/database.types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
        interface Locals {
            supabase: SupabaseClient<Database, "public">
            safeGetSession: () => Promise<{ session: Session | null; user: User | null }>
            session: Session | null
            user: User | null
        }
        interface PageData {
            session: Session | null
        }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
