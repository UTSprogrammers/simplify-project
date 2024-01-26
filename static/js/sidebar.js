var usersChart = new Chart(document.getElementById('usersChart'), {
    type: 'doughnut',
    data: {
        labels: ['Nuevos', 'Registrados'],
        datasets: [{
            data: [30, 65],
            backgroundColor: ['#00F0FF', '#8B8B8D'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom'
        }
    }
});


var commercesChart = new Chart(document.getElementById('commercesChart'), {
    type: 'doughnut',
    data: {
        labels: ['Nuevos', 'Registrados'],
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#FEC500', '#8B8B8D'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom'
        }
    }
});


const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');

menuBtn.addEventListener('click', () => {
    sideNav.classList.toggle('hidden');
});