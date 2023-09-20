  import { supabase } from "$lib/supabaseClient";

  export async function load() {
    const { data } = await supabase.from("twilio").select().order('id', { ascending: false });
    return {
      twilio: data ?? [],
    };
  }
