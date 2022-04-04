import { useState } from "react";
import { auth } from "../firebase";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    // before signup set error to null
    setError(null);
    // set pending to true to show loading state
    setIsPending(true);

    try {
      /*
       * If the signup is successful, reponse will hold the
       * response object from the firebase
       */
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      /*
       * if the response is null, throw an error
       */
      if (!response) {
        throw new Error("Signup failed. Please try again later.");
      }

      // add display name to the user profile on successful signup
      await response.user.updateProfile({ displayName });

      dispatch({ type: "LOGIN", payload: response.user });

      /*
       * on successful signup set error to null and
       * set pending to false
       */
      setError(error.message);
      setIsPending(false);
    } catch (error) {
      console.log(error);
      /*
       * set error to the error thrown after unsuccessful signup
       * set pending to false if signup fails
       */
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
