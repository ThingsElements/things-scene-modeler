var p = null;

function handler_rect_click(e, obj) {
  p.change('text', {
    text: obj.origin.get('name') + '이 클릭되었습니다.'
  })
}

var model = {
  components: [{
    type: 'text',
    top: 30,
    left: 30,
    width: 50,
    height: 30,
    textAlign: 'left',
    fontSize: 30,
    fontFamily: 'serif',
    text: '이 예제에서는 애니메이션의 기본 구조를 설명합니다.(오브젝트를 클릭해보세요)'
  }, {
    type: 'rect',
    name: '첫번째 사각형',
    fillStyle: 'black',
    left: 0,
    top: 200,
    rotation: 0,
    width: 100,
    height: 100,
    eventMap: {
      '(self)': {
        '(self)': {
          click: handler_rect_click
        }
      }
    }
  }, {
    type: 'rect',
    name: '두번째 사각형',
    left: 0,
    top: 500,
    fillStyle: 'black',
    rotation: 0,
    width: 100,
    height: 100,
    eventMap: {
      '(self)': {
        '(self)': {
          click: handler_rect_click
        }
      }
    }
  }],

  /* 현재 모델 자손 중 사각형에서 클릭 이벤트가 발생할 때, ... */
  eventMap: {
    '(self)': {
      'rect': {
        click: animate
      }
    }
  }
};

function create() {
  p = scene.create({
    target: 'scene',
    model: model
  });
}

function dispose() {
  p.dispose();
}

function animate(e, obj) {
  var target = obj.origin

  p.animate({
    step: function(delta) {
      target.set({
        left: delta * 300
      })
    },

    delta: function(progress) { /* bounce */
      for(var a = 0, b = 1; 1; a += b, b /= 2) {
        if (progress >= (7 - 4 * a) / 11) {
          return - Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2)
        }
      }
    }
  }).start()
}

function change() {
}

function fullscreen() {
  p.fullscreen()
}
