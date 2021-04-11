function cateTab() {
  var cate_tabList = document.getElementsByClassName('cate-tab-list');
  var cate_tabCon = document.getElementsByClassName('cate-tab-con');

  // 通过js修改cata-tab-con的宽度
  for (var j = 2; j < cate_tabCon.length; j++) {
    cate_tabCon[j].style.width = 796 + 'px';
  }
  cate_tabCon[3].style.width = 992 + 'px';
  cate_tabCon[6].style.width = 530 + 'px';


  for (var i = 0; i < cate_tabList.length; i++) {
    // i是全局变量，但可以通过闭包把每一轮i的值保存下来
    (function (i) {
      // 先注册事件，而回调函数要等到才触发事件才会执行，如果没有闭包，在这期间i的值已经被改变
      cate_tabList[i].addEventListener('mouseover', function () {
        // 下面这种可以得到和闭包一样的结果
        // for (var j = 0; j < cate_tabCon.length; j++) {
        //   cate_tabCon[j].style.display = 'block';
        //   cate_tabCon[j].style.zIndex = 1;
        // }
        cate_tabCon[i].style.display = 'block';
        // cate_tabCon[i].style.zIndex = 1;
      })
      cate_tabList[i].addEventListener('mouseout', function () {
        cate_tabCon[i].style.display = 'none';
        // cate_tabCon[i].style.zIndex = 0;
      })
    })(i)

  }
}