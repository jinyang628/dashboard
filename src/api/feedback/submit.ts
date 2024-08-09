"use server";

import { FeedbackRequest } from "@/types/api/feedback/form";

import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SERVICE_ENDPOINT = "feedback";

export async function submitFeedback(input: FeedbackRequest) {
  try {
    await axios.post(`${BASE_URL}/${SERVICE_ENDPOINT}`, input);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
