var model = {
  components: [{
    type: 'text',
    top: 50,
    left: 50,
    width: 600,
    height: 100,
    textAlign: 'right',
    textBaseline: 'middle',
    fontSize: '30',
    fontFamily: 'serif',
    rotation: Math.PI / 180 * 10,
    text: '텍스트 (Right - Middle)'
  }, {
    type: 'text',
    top: 150,
    left: 30,
    width: 500,
    height: 100,
    textAlign: 'left',
    textBaseline: 'top',
    fontSize: '30',
    fontFamily: 'serif',
    rotation: - Math.PI / 180 * 20,
    text: '텍스트 (Left - Top)'
  }, {
    type: 'text',
    top: 300,
    left: 100,
    width: 450,
    height: 100,
    textAlign: 'center',
    textBaseline: 'bottom',
    fontSize: '30',
    fontFamily: 'serif',
    rotation: - Math.PI / 180 * 20,
    text: '텍스트 (Center - Bottom)',
    alignTo: 'verticalCenter'
  }]
};

var p = null;

function create() {
  p = scene.create({
    target: 'scene',
    model: model,
    layers: [{
      type: 'selection-layer'
    }, {
      type: 'guide-layer'
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
  // p.target_element.addEventListener('click', function(e) {
  //   p.change('barcode', {
  //     text: '0987654321',
  //     alttext: '123456789012345'
  //   })
  // });
}

function undo() {
  p.undo()
}

function redo() {
  p.redo()
}

function fullscreen() {
  p.fullscreen()
}
