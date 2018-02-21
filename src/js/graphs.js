function graphsFn() {
  var graphColor = '#1fb29b';
  var graphs = document.getElementsByClassName('graph-progress');
  for (var i = graphs.length - 1; i >= 0; i--) {
    var graph = graphs[i];
    var bar = new ProgressBar.Circle(graph, {
      color: '#aaa',
      strokeWidth: 20,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: graphColor, width: 4 },
      to: { color: graphColor, width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value + '%');
        }

      }
    });
    bar.text.style.fontSize = '2rem';
    var percent = graph.getAttribute('data-percent');
    bar.animate(percent / 100); // Number from 0.0 to 1.0
  }
}

function activateGraph() {
  window.setTimeout(function() {
    var graphs = document.getElementsByClassName('graph-progress');
    if (isScrolledIntoView(graphs[0])) {
      return graphsFn();
    }
    activateGraph();
  }, 500);
}


// ready(activateGraph);
