/* 淡入淡出轮播图控制函数 */
function slideshow() {
  var focus = document.getElementById('focus');
  var imgs = focus.getElementsByTagName('img');
  var arrow_pre = document.getElementById('arrow-pre');
  var arrow_next = document.getElementById('arrow-next');
  var circle = document.getElementById('circle');
  var current = 0;  //当前所在图片的顺序，从0开始计
  var slideon = null; //自动播放中的定时器标识符
  var timer = null; //节流阀中的定时器标识符
  var flag = true; //节阀流

  function slideOff() {
    imgs[current].className = "";
    circle.children[current].className = "";
  }

  function slideOn() {
    imgs[current].className = "active1";
    circle.children[current].className = "active2";
  }

  function changeSlideNext() {
    slideOff();
    current++;
    if (current > 4) current = 0;
    slideOn();
  }

  function changeSlidePre() {
    slideOff();
    current--;
    if (current < 0) current = 4;
    slideOn();
  }

  // 1.自动轮播图片
  slideon = setInterval(changeSlideNext, 3000);

  focus.addEventListener('mouseover', function () {
    clearInterval(slideon);
  })

  focus.addEventListener('mouseout', function () {
    slideon = setInterval(changeSlideNext, 3000);
  })

  // 2.通过箭头按钮轮播图片
  arrow_pre.addEventListener('click', function () {
    if (flag) {
      timer && clearTimeout(timer);     //如果有遗留下来的定时器，先把它清理掉
      flag = false;
      changeSlidePre();
      timer = setTimeout(function () {
        flag = true;
      }, 800);
    }
  });
  arrow_next.addEventListener('click', function () {
    if (flag) {
      timer && clearTimeout(timer);
      flag = false;
      changeSlideNext();
      setTimeout(function () {
        flag = true;
      }, 800);
    }
  });

  // 3.通过小圆圈轮播图片
  for (var i = 0; i < circle.children.length; i++) {
    circle.children[i].setAttribute('index', i);
    circle.children[i].addEventListener('click', function () {
      slideOff();
      current = this.getAttribute('index');
      slideOn();
    })
  }
}