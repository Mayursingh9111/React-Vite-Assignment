import React from 'react';

const LoanCalculator = ({ loanAmount, setLoanAmount, interestRate, setInterestRate, loanTerm, setLoanTerm, monthlyPayment }) => {
  return (
    <div className="loan-calculator">
      <h2>Loan Calculator</h2>
      <input 
        type="number" 
        placeholder="Loan Amount" 
        value={loanAmount} 
        onChange={(e) => setLoanAmount(+e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Interest Rate (%)" 
        value={interestRate} 
        onChange={(e) => setInterestRate(+e.target.value)} 
      />
      <select value={loanTerm} onChange={(e) => setLoanTerm(+e.target.value)}>
        <option value={12}>12 Months</option>
        <option value={24}>24 Months</option>
        <option value={36}>36 Months</option>
        <option value={48}>48 Months</option>
      </select>
      <h3>Monthly Payment: ${monthlyPayment.toFixed(2)}</h3>
    </div>
  );
};

export default LoanCalculator;
