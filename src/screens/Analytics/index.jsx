import React from 'react';
import { Layout } from 'antd';
import { Bar } from 'react-chartjs-2';
const Analytics = () => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#fff'
                    },
                },
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: '#fff'
                    },
                },
            ],
        },
        legend: {
            labels: {
                fontColor: '#fff'
            }
        }
    }

    return (
        <Layout>
            <Layout.Content>
                    <Bar data={data} options={options} />
            </Layout.Content>
        </Layout>
    )
}

export default Analytics;