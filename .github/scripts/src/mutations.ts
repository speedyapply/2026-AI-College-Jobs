import { supabase } from "./supabase";

export async function addNewJob(
  jobUrl: string,
  jobTitle: string,
  companyName: string,
  companyUrl: string,
  location: string,
  type: "new_grad" | "intern",
  usa: boolean
) {
  const { error } = await supabase.rpc("add_new_job", {
    _job_title: jobTitle,
    _job_url: jobUrl,
    _company_name: companyName,
    _company_url: companyUrl,
    _location: location,
    _type: type,
    _usa: usa,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateJob(
  jobUrl: string,
  jobTitle: string | null,
  companyName: string | null,
  companyUrl: string | null,
  location: string | null,
  type: "new_grad" | "intern" | null,
  usa: boolean | null,
  status: "active" | "inactive" | null
) {
  const { error } = await supabase.rpc("update_job", {
    _job_url: jobUrl,
    _new_job_title: jobTitle,
    _new_company_name: companyName,
    _new_company_url: companyUrl,
    _new_location: location,
    _new_type: type,
    _new_usa: usa,
    _new_status: status,
  });

  if (error) {
    throw new Error(error.message);
  }
}
