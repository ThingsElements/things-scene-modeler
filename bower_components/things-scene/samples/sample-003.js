var model = {
  components: [{
    type: 'text',
    top: 30,
    left: 30,
    textAlign: 'left',
    fontSize: '30',
    fontFamily: 'serif',
    text: '이 예제에서는 컴포넌트 속성의 동적 변경을 설명합니다.'
  }, {
      type: 'barcode',

      top: 100,
      left: 100,
      width: 500,
      height: 200,
      symbol: "code39",
      text: "1234567890",
      alttext: "8741493123493123",
      scale_h: 1,
      scale_w: 2,
      rot: "N",

      strokeStyle: '#00FF00',

    }, {
      type: 'barcode',

      top: 400,
      left: 400,
      width: 500,
      height: 200,
      symbol: "code39",
      text: "1234567890",
      alttext: "8741493123493123",
      scale_h: 1,
      scale_w: 2,
      rot: "N",

      strokeStyle: '#00FF00',

    }
  ]
};

var p = null;

function create() {
  p = scene.create({
    target: 'scene',
    model: model
  });
}

function dispose() {
  p.dispose();
}

function change() {
  p.change('barcode', {
    width: 800
  });
  p.draw();
}

function fullscreen() {
  p.fullscreen()
}
