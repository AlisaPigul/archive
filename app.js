/**
 * Created by Alice on 24.12.2016.
 */


(function a() {
    var lastItem = document.querySelector(".menu-item.selected");
    var menuModel = [{link:'#main'},{link:'#main2'},{link:'#main3'},{link:'#main4'}];
    function redirectTo(linkUrl) {
        window.location = linkUrl;
    }
    document.querySelector(".login").addEventListener('click',function(){
        wrapper.classList.add('visible');
    });
    document.querySelectorAll('.menu-item').forEach(function (item,i) {


        item.addEventListener('click', function () {
            if(lastItem!==item) {
                lastItem.classList.remove('selected');
                lastItem = item;
                item.classList.add('selected');
                redirectTo(menuModel[i].link);
            }
        })
    });
})();
