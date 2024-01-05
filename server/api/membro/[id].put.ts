import { H3Event } from "h3";
import { supabase } from "~/server/client";

export default defineEventHandler(async (event: H3Event) => {
  const id = event.context.params?.id;
  const request = await readBody(event);

  const { data, error } = await supabase
    .from("membro")
    .update(request)
    .eq("id", id)
    .select();

  if (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }

  return { data };
});
