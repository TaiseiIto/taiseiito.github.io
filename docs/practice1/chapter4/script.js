var pieData = {
	labels: ['円グラフ項目1', '円グラフ項目2', '円グラフ項目3'],
	series: [1, 2, 3],
};

var pieOptions = {
	width: '256px',
	height: '256px',
};

new Chartist.Pie('.pie-chart', pieData, pieOptions);

var barData = {
	labels: ['棒グラフ項目1', '棒グラフ項目2', '棒グラフ項目3'],
	series: [[3, 2, 1]],
};

var barOptions = {
	axisY: {
		offset: 100,
		scaleMinSpace: 100,
		labelInterpolationFnc: function(value) {
			return value + '単位'
		},
	},
	width: '256px',
	height: '256px',
};

new Chartist.Bar('.bar-chart', barData, barOptions);

var myDoughnutChart = new Chart(document.getElementById('doughnut-chart'), {
	type: 'doughnut',
	data: {
		labels: ['項目1', '項目2', '項目3'],
		datasets: [{
			data: [4, 5, 6],
			backgroundColor: ['#ff8080', '#80ff80', '#8080ff'],
		}],
	},
});

const chart = new frappe.Chart('#chart', {
	title: 'グラフタイトル',
	data: {
		labels: ['項目1', '項目2', '項目3'],
		datasets: [{
			values: [6, 5, 4],
		}],
	},
	type: 'line',
});

