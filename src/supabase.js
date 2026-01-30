import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wlhpbpeajogkdtiedtlg.supabase.co",
  "sb_publishable_eE57hJtMlnuq7R1nktEK2A_c3u_1yZF"
);

export async function logResponse(questionId, score) {
  const { error } = await supabase
    .from("responses")
    .insert({ question_id: questionId, score });
  if (error) console.warn("Failed to log response:", error.message);
}

export async function logResult(typeCode, scores) {
  const { error } = await supabase
    .from("results")
    .insert({ type_code: typeCode, scores });
  if (error) console.warn("Failed to log result:", error.message);
}

export async function fetchResponses() {
  const { data, error } = await supabase.from("responses").select("*");
  if (error) {
    console.warn("Failed to fetch responses:", error.message);
    return [];
  }
  return data;
}

export async function fetchResults() {
  const { data, error } = await supabase.from("results").select("*");
  if (error) {
    console.warn("Failed to fetch results:", error.message);
    return [];
  }
  return data;
}
