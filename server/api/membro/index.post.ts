import { H3Event } from "h3";
import { supabase } from "~/server/client";

export default defineEventHandler(async (event: H3Event) => {
  const request = await readBody(event);

  const { data, error } = await supabase
    .from("membro")
    .insert(request)
    .select();

  if (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }

  return { data };
});
