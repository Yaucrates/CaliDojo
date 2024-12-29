// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Database } from "$lib/supabase/database.types";
import type { Session, SupabaseClient, User } from "@supabase/supabase-js";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
        // interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
