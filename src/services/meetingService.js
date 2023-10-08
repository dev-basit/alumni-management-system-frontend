import Joi from "joi";
import { http } from "./httpService";
import { baseURL } from "../constants/config";
import { showFailureToaster, showSuccessToaster } from "../utils/toaster";

const meetingApiEndpoint = baseURL + "meetings";

const newUserSchema = Joi.object({
  title: Joi.string().min(2).max(255).required(),
  date: Joi.string().min(2).max(255).required(),
  description: Joi.string().min(2).max(1024).required(),
});

async function addMeeting(meeting) {
  try {
    await http.post(meetingApiEndpoint, { ...meeting });
    showSuccessToaster("Successfuly created new meeting!");
    return true;
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

async function getAllMeetings() {
  try {
    return await http.get(meetingApiEndpoint);
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

async function removeMeeting(id) {
  try {
    return await http.delete(meetingApiEndpoint + "/" + id);
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

async function updateMeeting(id, meeting) {
  try {
    return await http.put(meetingApiEndpoint + "/" + id, { ...meeting });
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

export const meetingService = {
  newUserSchema,
  addMeeting,
  getAllMeetings,
  removeMeeting,
  updateMeeting,
};
