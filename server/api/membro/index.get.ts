import { supabase } from "~/server/client";

export default defineEventHandler(async () => {
  const { data, count, error } = await supabase
    .from("membro")
    .select("*", {
      count: "exact",
    })
    .order("nome");

  return {
    data,
    count,
    error,
  };
});
