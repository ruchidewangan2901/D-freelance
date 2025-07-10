// // src/api/jobs.js

// const API_BASE = "http://localhost:5001";

// export async function createJob(jobData) {
//   const res = await fetch(`${API_BASE}/jobs`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jobData),
//   });

//   if (!res.ok) {
//     throw new Error("Failed to create job");
//   }

//   return res.json();
// }

