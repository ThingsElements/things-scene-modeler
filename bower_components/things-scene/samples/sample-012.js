var model = {
  components: [{
    type: 'text',
    top: 30,
    left: 30,
    height: 30,
    textAlign: 'left',
    fontSize: '30',
    fontFamily: 'serif',
    text: '이 모델은 바코드 컴포넌트를 위한 샘플입니다.'
  }, {

    type: 'barcode',

    left: 200,
    top: 110,
    height: 200,
    symbol: "code39",
    text: "1234567890",
    alttext: "123",
    scale_h: 1,
    scale_w: 1,
    rot: "N",
    rotation: .1
  }, {
    type: 'barcode',
    left: 100,
    top: 300,
    height: 300,
    symbol: "qrcode",
    text: "http://www.hatiolab.com",
    scale_h: 1,
    scale_w: 1,
    rot: "N",
    fromZpl: true,
    rotation: Math.PI / 180 * 10,
    centerRotate: false
  }, /*{
    type: 'barcode',
    left: 100,
    top: 300,
    height: 300,
    symbol: "qrcode",
    text: "http://www.hatiolab.com",
    scale_h: 1,
    scale_w: 1,
    rot: "N"
  }, {
    type: 'barcode',
    left: 100,
    top: 300,
    height: 300,
    symbol: "qrcode",
    text: "http://www.hatiolab.com",
    scale_h: 1,
    scale_w: 1,
    rot: "N",
    rotation: Math.PI / 180 * 10
  },*/ {
    type: 'fitted_text',
    left: 30,
    top: 60,
    width: 200,
    height: 200,
    text: 'TEST FITTED TEXT'
  }, {
    type: 'timer',
    left: 500,
    top: 60,
    width: 200,
    height: 200
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

function undo() {
  p.undo()
}

function redo() {
  p.redo()
}

function change() {
  p.target_element.addEventListener('click', function(e) {
    p.change('barcode', {
      text: '0987654321',
      alttext: '123456789012345'
    })
  });
}

function fullscreen() {
  p.fullscreen()
}
