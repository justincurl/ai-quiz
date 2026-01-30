import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wlhpbpeajogkdtiedtlg.supabase.co",
  "sb_publishable_eE57hJtMlnuq7R1nktEK2A_c3u_1yZF"
);

export async function logResponse(questionId, score, isHuman) {
  const { error } = await supabase
    .from("responses")
    .insert({ question_id: questionId, score, is_human: isHuman });
  if (error) console.warn("Failed to log response:", error.message);
}

export async function logResult(typeCode, scores, isHuman) {
  const { error } = await supabase
    .from("results")
    .insert({ type_code: typeCode, scores, is_human: isHuman });
  if (error) console.warn("Failed to log result:", error.message);
}

export async function backfillHumanFlag() {
  const { error: respError } = await supabase
    .from("responses")
    .update({ is_human: true })
    .is("is_human", null);
  if (respError) console.warn("Failed to backfill responses:", respError.message);

  const { error: resError } = await supabase
    .from("results")
    .update({ is_human: true })
    .is("is_human", null);
  if (resError) console.warn("Failed to backfill results:", resError.message);
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
