import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ loanAmount, totalInterest }) => {
  const data = {
    labels: ['Loan Amount', 'Total Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384']
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

export default PieChart;
