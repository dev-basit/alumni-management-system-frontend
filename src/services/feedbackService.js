import Joi from "joi";
import { http } from "./httpService";
import { baseURL } from "../constants/config";
import { showFailureToaster, showSuccessToaster } from "../utils/toaster";

const feedbackApiEndpoint = baseURL + "feedbacks";

const feedbackSchema = Joi.object({
  description: Joi.string().min(2).max(1024).required(),
});

async function addFeedback(feedback) {
  try {
    await http.post(feedbackApiEndpoint, { description: feedback });
    showSuccessToaster("Successfuly created new feedback!");
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

async function getAllFeedbacks() {
  try {
    return await http.get(feedbackApiEndpoint);
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

export const feedbackService = {
  feedbackSchema,
  addFeedback,
  getAllFeedbacks,
};
