function change_bg() {
    var totalCount = 4;
    var num = Math.ceil( Math.random() * totalCount );
    document.body.background = 'assets/bg/'+num+'.gif';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
}

change_bg();
