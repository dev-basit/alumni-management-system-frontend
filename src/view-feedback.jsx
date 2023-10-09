import React, { useEffect, useState } from "react";
import { feedbackService } from "./services/feedbackService";

function ViewFeedback() {
  const [feedbackList, setFeedbackList] = useState([]);

  // Dummy feedback data (replace with your actual data)
  //   const initialFeedbackData = [
  //     "Great job on the project!",
  //     "Very informative presentation.",
  //     "Excellent customer support.",
  //   ];

  // Use initial feedback data for demonstration
  useEffect(() => {
    fetchFeedbacks();
    // setFeedbackList(initialFeedbackData);
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const feedbacks = await feedbackService.getAllFeedbacks();
      setFeedbackList(feedbacks.data);
      console.log("feedbacks", feedbacks);
    } catch (error) {
      //
    }
  };

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center align-items-center">View Feedback</h1>
      <ul>
        {feedbackList.map((feedbackItem, index) => (
          <li key={index}>{feedbackItem.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default ViewFeedback;
