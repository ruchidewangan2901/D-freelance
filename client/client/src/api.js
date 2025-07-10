const BASE_URL = "https://afbc58f0-b840-49c7-b444-e7d204141355-00-1j544wznyi2cc.sisko.replit.dev"; 


export const fetchJobs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/jobs`);
    if (!response.ok) throw new Error("Failed to fetch jobs");
    return await response.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

export const postJob = async (jobData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/jobs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });
    if (!response.ok) throw new Error("Failed to post job");
    return await response.json();
  } catch (error) {
    console.error("Error posting job:", error);
    throw error;
  }
};

