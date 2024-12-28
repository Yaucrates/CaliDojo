import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession, supabase, user }, cookies }) => {
  const { session } = await safeGetSession();

  // Update Streak to Zero if a Day is Missed
  const today = new Date();
  const { data } = await supabase.from('user_data').select('*');
  if (data) {
    const lastStreakUpdate = new Date(data[0].last_streak_update);
    const timeDifferenceMS = Math.abs(today.getTime() - lastStreakUpdate.getTime());
    const timeDifferenceDays = timeDifferenceMS / (1000 * 60 * 60 * 24);
    
    if (timeDifferenceDays >= 1 && user) {
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        await supabase.from("user_data").update({
            last_streak_update: `${year}-${month}-${day}`,
            streak: 0,
        }).eq('user_id', user.id);
    }
  }

  return {
    session,
    cookies: cookies.getAll(),
  }
}