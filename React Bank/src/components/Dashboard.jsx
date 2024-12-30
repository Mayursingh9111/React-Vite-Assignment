import React, { useState } from 'react';
import LoanCalculator from './LoanCalculator';
import PieChart from './PieChart';

const Dashboard = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(12);
  
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
  const totalInterest = calculateTotalInterest(monthlyPayment, loanTerm, loanAmount);
  
  return (
    <div className="dashboard">
      <LoanCalculator 
        loanAmount={loanAmount}
        setLoanAmount={setLoanAmount}
        interestRate={interestRate}
        setInterestRate={setInterestRate}
        loanTerm={loanTerm}
        setLoanTerm={setLoanTerm}
        monthlyPayment={monthlyPayment}
      />
      <PieChart loanAmount={loanAmount} totalInterest={totalInterest} />
    </div>
  );
};

const calculateMonthlyPayment = (loanAmount, interestRate, loanTerm) => {
  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = (interestRate / 100) / 12;
  
  if (interestRate === 0) {
    return loanAmount / totalLoanMonths;
  }
  
  return (loanAmount * interestPerMonth * Math.pow(1 + interestPerMonth, totalLoanMonths)) /
         (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1);
};

const calculateTotalInterest = (monthlyPayment, loanTerm, loanAmount) => {
  const totalLoanMonths = loanTerm * 12;
  return (monthlyPayment * totalLoanMonths) - loanAmount;
};

export default Dashboard;
