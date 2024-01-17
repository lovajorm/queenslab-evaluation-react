import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCard from "./credit-card/CreditCard";
import { maximumOddSum, removeIdenticalLetters } from "./algorithms";
import "./index.css";
import "./fonts/fonts.css";

const App = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  console.log(removeIdenticalLetters("iiikiigggg"));
  console.log(maximumOddSum([61, 32, 51]));

  return (
    <div className="App">
      <CreditCard cardNumber={cardNumber} cardHolder={cardHolder} />
    </div>
  );
};

export default App;
