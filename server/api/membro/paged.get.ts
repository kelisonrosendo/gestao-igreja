import { H3Event } from "h3";
import { supabase } from "~/server/client";

export default defineEventHandler(async (event: H3Event) => {
  const { from, to, search }: any = getQuery(event);

  const { data, count, error } = await supabase
    .from("membro")
    .select("*", {
      count: "exact",
    })
    .ilike("nome", `%${search}%`)
    .order("nome")
    .range(from, to);

  return {
    data,
    count,
    error,
  };
});
