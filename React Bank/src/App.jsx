// src/App.js

import React, { useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './App.css';

Chart.register(...registerables);

const App = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState();
  const [loanTerm, setLoanTerm] = useState(12);

  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
  const totalInterest = calculateTotalInterest(monthlyPayment, loanTerm, loanAmount);

  return (
    <div className="app">
      <h1>Bank Dashboard</h1>
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

const LoanCalculator = ({ loanAmount, setLoanAmount, interestRate, setInterestRate, loanTerm, setLoanTerm, monthlyPayment }) => {
  return (
    <div className="loan-calculator">
      <h2>Loan Calculator</h2>
      <label>Loan Amount: ${loanAmount}</label>
      <input 
        type="range" 
        min="0" 
        max="100000" 
        step="1000" 
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

const PieChart = ({ loanAmount, totalInterest }) => {
  const data = {
    labels: ['Loan Amount', 'Total Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#66B2FF', '#FF7F7F'],
      }
    ]
  };

  return (
    <div className="pie-chart">
      <h2>Financial Overview</h2>
      <Pie data={data} />
    </div>
  );
};

const calculateMonthlyPayment = (loanAmount, interestRate, loanTerm) => {
  const totalLoanMonths = loanTerm;
  const interestPerMonth = (interestRate / 100) / 12;

  if (interestRate === 0) {
    return loanAmount / totalLoanMonths;
  }

  return (loanAmount * interestPerMonth * Math.pow(1 + interestPerMonth, totalLoanMonths)) /
         (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1);
};

const calculateTotalInterest = (monthlyPayment, loanTerm, loanAmount) => {
  const totalLoanMonths = loanTerm;
  return (monthlyPayment * totalLoanMonths) - loanAmount;
};

export default App;
