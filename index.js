value="night" onclick="
    var target = document.querySelector('body');
    if(this.value === 'night'){
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      this.value = 'day';

      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = 'white';
        i = i + 1;
      }
    } else {
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      this.value = 'night';

      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = 'black';
        i = i + 1;
      }
    }