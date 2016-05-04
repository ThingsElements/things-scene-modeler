```
import * as presentor from 'presentor'

var model = {

  components: [{

    type: 'line',

    x1: 100,
    y1: 100,
    x2: 200,
    y2: 200,
    rotation: 0
  }]
};

var target = 'presenter';

var p1 = presentor.create(target, model);
```
