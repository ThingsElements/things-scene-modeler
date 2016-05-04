var model = {
  // top: 100,
  width: 1000,
  height: 1000,
  // fillStyle: '#e809a8',
  components: [
  {
  //   type: 'clock-text',
  //   top: 300,
  //   left: 600,
  //   height: 100,
  //   width: 300,

  // }, {
  //   type: 'clock-analog',
  //   rx: 150,
  //   ry: 200,
  //   cx: 800,
  //   cy: 200,
  //   fillStyle: '#ffff00',
  //   strokeStyle: '#0000ff',
  //   lineWidth: 5
  // }, {
    type: 'progress-line',
    left: 100,
    top: 100,
    width: 200,
    height: 100,
    value: 50,
    fillStyle: '#000',
    strokeStyle: '#00ffff'
  }, {
    type:'star',
    cx: 300,
    cy: 300,
    rx: 200,
    ry: 200,
    wing: 5,
    ratio: 40,
    fillStyle: '#ff00ff',
    strokeStyle: '#00ffff'

  }, {
    type: 'progress-circle',
    cx: 500,
    cy: 400,
    rx: 200,
    ry: 200,
    value: 40,
    fillStyle: '#00ffff',
    strokeStyle: '#ff00ff',
    innerStrokeStyle: '#efefef',
    text: '#{value}%',
    lineWidth: 20

  }, { 
    type: 'path',
    path: [{x:600, y:730}, {x:250, y:580}, {x:450, y:490}, {x:800, y:400}, {x:700, y:350}],
    strokeStyle: '#00ff00',
    lineWidth: 10
  }]
};

var p = null;

function create() {
  p = scene.create({
    target: 'scene',
    model: model,
    layers: [{
      type: 'guide-layer'
    }, {
      type: 'selection-layer'
    }, {
      type: 'modeling-layer'
    }, {
      type: 'shift-layer'
    }],
    handlers: [
      'text-editor',
      'move-handler'
    ]
  });
}

function dispose() {
  p.dispose();
}

function change() {
  p.change('image-view', {
    src: 'http://www.cnwnews.com/uploads/allimg/160101/11254G5B-0.jpg'
  });
}

function fullscreen() {
  p.fullscreen()
}
