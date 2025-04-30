window.createCharts = (animalCountDataJson, phenologicalPhaseDataJson) => {
    try {
        var animalCountData = JSON.parse(animalCountDataJson);
        var phenologicalPhaseData = JSON.parse(phenologicalPhaseDataJson);

        console.log("Animal Data:", animalCountData);
        console.log("Phenological Phase Data:", phenologicalPhaseData);

        // Ensure the chart elements exist before creating them
        var ctx1 = document.getElementById('animalCountChart');
        var ctx2 = document.getElementById('phenologicalPhaseChart');

        if (ctx1) {
            new Chart(ctx1.getContext('2d'), {
                type: 'line',
                data: {
                    labels: animalCountData.labels,
                    datasets: [{
                        label: 'Animal Count',
                        data: animalCountData.data,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                }
            });
        } else {
            console.error("Element 'animalCountChart' not found.");
        }

        if (ctx2) {
            new Chart(ctx2.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: phenologicalPhaseData.labels,
                    datasets: [{
                        label: 'Phenological Phases',
                        data: phenologicalPhaseData.data,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                }
            });
        } else {
            console.error("Element 'phenologicalPhaseChart' not found.");
        }

    } catch (error) {
        console.error("Chart.js Error:", error);
    }
};

// Hardcoded example chart
window.createHardcodedChart = () => {
    var list = ['January', 'February', 'March', 'April', 'May'];
    console.log(list);

    var ctx3 = document.getElementById('hardcodedChart');
    if (ctx3) {
        new Chart(ctx3.getContext('2d'), {
            type: 'line',
            data: {
                labels: list,
                datasets: [{
                    label: 'Hardcoded Data',
                    data: [65, 59, 80, 81, 56],
                    fill: false,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }
};
