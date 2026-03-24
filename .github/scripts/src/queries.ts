import { supabase } from "./supabase";
import { JobListSchema } from "./types/job.schema";
import { JobCountsSchema } from "./types/job-counts.schema";

export async function fetchJobs(params: {
  job_type: string;
  is_usa: boolean;
  company_type: string;
}) {
  const { data, error } = await supabase.rpc("get_jobs", params);

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }

  try {
    return JobListSchema.parse(data);
  } catch (validationError) {
    throw new Error(`Data validation error: ${validationError}`);
  }
}

export async function fetchJobCounts() {
  const { data, error } = await supabase.rpc("get_ai_job_counts");

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }

  try {
    return JobCountsSchema.parse(data);
  } catch (validationError) {
    throw new Error(`Data validation error: ${validationError}`);
  }
}
