function change_bg() {
    var totalCount = 3;
    var num = Math.ceil( Math.random() * totalCount );
    document.body.background = 'assets/rain/'+num+'.gif';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

change_bg();
