function animate() {
  var fs_list = document.getElementById('fs-list');
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var count = 4;


  for (var i = 0; i < fs_list.children.length; i++) {
    // 用随机生成函数 随机生成 秒杀列表li的上边框颜色，增强趣味性
    switch (Math.floor(Math.random() * 100) % 4) {
      case 3:
        fs_list.children[i].style.borderTopColor = '#ffac13';
        break;
      case 2:
        fs_list.children[i].style.borderTopColor = '#83c44e';
        break;
      case 1:
        fs_list.children[i].style.borderTopColor = '#2196f3';
        break;
      case 0:
        fs_list.children[i].style.borderTopColor = '#f321d3';
        break;
    }
  }


  btn1.disabled = true;    // 布尔型
  btn1.style.color = '#e2e0e0';
  btn1.style.cursor = 'default';


  // 缓动动画效果
  function slowChange(target) {
    var timer = setInterval(function () {
      var step = target / 10;   // 计算步长
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      var subtr = (target / 10) > 0 ? Math.ceil(target / 10) : Math.floor(target / 10); // 计算减数
      target = target - subtr;
      if (target == 0)
        clearInterval(timer);
      fs_list.style.left = fs_list.offsetLeft + step + 'px';
    }, 8)
  }


  // 左移动
  function animateL() {
    if (count > 4) {
      switch (count % 4) {
        case 0:
          slowChange(992)
          count = count - 4;
          break;
        case 3:
          slowChange(774);
          count = count - 3;
          break;
        case 2:
          slowChange(496);
          count = count - 2;
          break;
        case 1:
          slowChange(248);
          count--;
          break;
      }
    }
    btn2.disabled = false;
    btn2.style.color = '#919191';
    btn2.style.cursor = 'pointer';
    if (count == 4) {
      btn1.disabled = true;
      btn1.style.color = '#e2e0e0';
      btn1.style.cursor = 'default';
    }
  }


  // 右移动
  function animateR() {
    if (fs_list.children.length - count >= 4) {
      slowChange(-992);
      count = count + 4;
    } else {
      switch (fs_list.children.length - count) {
        case 3:
          slowChange(-774);
          count = count + 3;
          break;
        case 2:
          slowChange(-496);
          count = count + 2;
          // 不要漏了break
          break;
        case 1:
          slowChange(-248);
          count++;
          break;
      }
    }
    btn1.disabled = false;
    btn1.style.color = '#919191';
    btn1.style.cursor = 'pointer';
    if (fs_list.children.length == count) {
      btn2.disabled = true;
      btn2.style.color = '#e2e0e0';
      btn2.style.cursor = 'default';
    }
  }


  btn1.addEventListener('click', animateL);
  btn2.addEventListener('click', animateR);
}