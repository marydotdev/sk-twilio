import querystring from 'querystring';
import { supabase } from '$lib/supabaseClient';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  let body = '';

  for await (const chunk of request.body) {
    body += chunk;
  }

  const parsed = querystring.parse(body);

  // Insert the new message into the Supabase database
  const { error } = await supabase
    .from('twilio')
    .insert([{ text: parsed.Body, mediaUrl: parsed.MediaUrl0 }]);

  if (error) {
    console.error("Error inserting data: ", error);
  }


  return new Response();
}
