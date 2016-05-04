var model = {
  components: [{
    type: 'text',
    top: 30,
    left: 30,
    textAlign: 'left',
    fontSize: '30',
    fontFamily: 'serif',
    text: '이 예제에서는 모델의 기본 구조를 설명합니다.'
  }, {

    type: 'line',

    x1: 100,
    y1: 100,
    x2: 200,
    y2: 200,
  }]
};

var target = 'scene';

var p1 = null;

function create() {
  p1 = scene.create({
    target: target,
    model: model
  });
}

function dispose() {
  p1.dispose();
}

function fullscreen() {
  p.fullscreen()
}
