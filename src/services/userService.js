import Joi from "joi";
import { http } from "./httpService";
import { baseURL } from "../constants/config";
import { showFailureToaster, showSuccessToaster } from "../utils/toaster";
import { setLocalStorageItem } from "../utils/localStorage";
import { auth } from "./authService";

const userApiEndpoint = baseURL + "users";

const newUserSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string()
    .min(2)
    .max(255)
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().required(),
  // profilePicture: Joi.string().required(),
});

const resetPasswordSchema = Joi.object({
  email: Joi.string()
    .min(2)
    .max(255)
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().min(2).max(1024).required(),
  confirmPassword: Joi.string().min(2).max(1024).required(),
});

async function addNewUser(user) {
  try {
    const response = await http.post(userApiEndpoint, { ...user });
    // setLocalStorageItem("token", response.headers["x-auth-token"]);
    showSuccessToaster("Successfuly created new account!");
    return true;
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

async function getMyDetails() {
  try {
    http.setJwt(auth.getJwt());
    return await http.get(userApiEndpoint + "/me");
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

async function userDetails(id) {
  try {
    const response = await http.get(userApiEndpoint + "/details/" + id);
    console.log("response in userdetails ", response);
    return response;
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

async function getAllusers() {
  try {
    return await http.get(userApiEndpoint);
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

async function removeUser(id) {
  try {
    return await http.delete(userApiEndpoint + "/" + id);
  } catch (err) {
    showFailureToaster(err.data.errorMessage);
    return false;
  }
}

async function resetPassword(user) {
  try {
    await http.put(userApiEndpoint, { ...user });
    showSuccessToaster("Successfully reset password");
    window.location = "/";
  } catch (err) {
    showFailureToaster(err.data.message);
  }
}

export const userService = {
  newUserSchema,
  resetPasswordSchema,
  addNewUser,
  getMyDetails,
  getAllusers,
  userDetails,
  removeUser,
  resetPassword,
};
