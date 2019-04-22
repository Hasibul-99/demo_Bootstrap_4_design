$('#datepickerFrom').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#datepickerTo').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#datepickerChartTo').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#datepickerChartFrom').datepicker({
    uiLibrary: 'bootstrap4'
});

let data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [50, 75, 100, 130, 50, 75, 100, 130, 50, 75, 100, 130],
            [75, 125, 150, 170, 50, 75, 100, 130, 50, 75, 100, 130],
            [88, 113, 125, 150, 50, 75, 100, 130, 50, 75, 100, 130]
        ]
    },
    object = {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function(value) {
                return value ;
            }
        }
    }

new Chartist.Bar('.ct-chart', data, object).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 20px'
      });
    }
  });