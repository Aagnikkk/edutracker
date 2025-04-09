// Initialize Chart.js
document.addEventListener('DOMContentLoaded', function() {
    // Payment Methods Chart
    const ctx = document.getElementById('paymentMethodsChart').getContext('2d');
    const paymentChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['UPI', 'Cash', 'Net Banking', 'Credit Card', 'Other'],
            datasets: [{
                data: [45, 30, 15, 7, 3],
                backgroundColor: [
                    '#6c5ce7',
                    '#00cec9',
                    '#0984e3',
                    '#fd79a8',
                    '#636e72'
                ],
                borderWidth: 0,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            family: 'Poppins'
                        }
                    }
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.add('ripple');
    });
    
    // Simulate loading animation
    setTimeout(() => {
        document.querySelector('.container').style.opacity = '1';
    }, 300);
});