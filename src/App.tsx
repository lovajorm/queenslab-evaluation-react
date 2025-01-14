import "bootstrap/dist/css/bootstrap.min.css";
import CreditCard, { CreditCardFormData } from "./credit-card/CreditCard";
import { maximumOddSum, removeIdenticalLetters } from "./algorithms";
import { useState } from "react";
import "./index.css";

const App = () => {
  console.log(removeIdenticalLetters("iiikiigggg"));
  console.log(maximumOddSum([19, 2, 42, 18]));

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCreditCardSubmit = async (
    creditCardFormData: CreditCardFormData
  ) => {
    try {
      const response = await fetch(`/api/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creditCardFormData),
      });
      if (!response.ok) {
        throw new Error("Network request failed");
      }
      console.log("success");
      setSuccessMessage("Success");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log("error");
      } else {
        setError("An unexpected error occurred");
        console.log("error");
      }
    }
  };

  return (
    <div className="App">
      <CreditCard
        onSubmit={handleCreditCardSubmit}
        error={error}
        successMessage={successMessage}
      />
    </div>
  );
};

export default App;
