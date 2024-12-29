import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession, supabase, user }, cookies }) => {
  const { session } = await safeGetSession();

  // Update Streak to Zero if a Day is Missed
  const { data } = await supabase.from('user_data').select('*');
  if (data && daySkipped(data[0].last_streak_update) && user) {
    const today = new Date();
    const year = today.getUTCFullYear();
    const month = String(today.getUTCMonth() + 1).padStart(2, '0');
    const day = String(today.getUTCDate()).padStart(2, '0');

    await supabase.from("user_data").update({
        last_streak_update: `${year}-${month}-${day}`,
        streak: 0,
    }).eq('user_id', user.id);
  }

  return {
    session,
    cookies: cookies.getAll(),
  }
}

const daySkipped = (time: string) => {
    const today = new Date();
    const lastStreakUpdate = new Date(time);

    const yearDiff = today.getFullYear() - lastStreakUpdate.getFullYear();
    const monthDiff = today.getMonth() - lastStreakUpdate.getMonth();
    const dayDiff = today.getDate() - lastStreakUpdate.getDate();
    
    return yearDiff > 0 || monthDiff > 0 || dayDiff > 1;
}