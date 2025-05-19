// Experience Chart
const ctx = document.getElementById('experienceChart')?.getContext('2d');
if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Company A', 'Company B', 'Company C'],
      datasets: [{
        label: 'Years of Experience',
        data: [2, 3, 1],
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
    }
  });
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
});

 // Chart.js configuration
 