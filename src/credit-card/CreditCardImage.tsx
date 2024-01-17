const CreditCardImage = () => {
  return (
    <div className="credit-card-card m-3 d-flex flex-column justify-content-between">
      <div className="credit-card-card-logo d-flex justify-content-between">
        <div>Debit</div>
        <img height="25px" src="/assets/visa.png" alt="Visa logo" />
      </div>

      <div className="credit-card-card-chip">
        <img width="42px" src="/assets/chip.png" alt="Visa logo" />
      </div>

      <div className="credit-card-card-number">1234 5678 9012 3456</div>

      <div className="credit-card-card-details d-flex justify-content-between">
        <div className="credit-card-card-holder d-flex flex-column">
          <div className="credit-card-holder">Card Holder</div>
          <div className="credit-card-name">Lova Jormfedlt</div>
        </div>
        <div className="credit-card-card-expiry">
          <span>Expires</span>
          <span className="date">12/34</span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardImage;
