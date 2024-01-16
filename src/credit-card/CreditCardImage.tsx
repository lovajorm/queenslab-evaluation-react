const CreditCardImage = () => {
  return (
    <div className="credit-card-card m-3">
      <div className="credit-card-card-logo">Bank Logo</div>
      <div className="credit-card-card-chip"></div>
      <div className="credit-card-card-number">1234 5678 9012 3456</div>
      <div className="credit-card-card-details">
        <div className="credit-card-card-holder">Card Holder</div>
        <div className="credit-card-card-expiry">
          <span>Expires</span>
          <span>12/34</span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardImage;
