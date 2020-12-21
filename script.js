function addtextarea(count){
    return function(){
        var t1 = new fabric.Textbox('TYPE HERE', {
            id: 'txtarea'+count,
            width: 200,
            top: 200,
            left: 300,
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            fixedWidth: 150
        });
        canvas.on('text:changed', function(opt) {
            var t1 = opt.target;
            if (t1.width > t1.fixedWidth) {
                t1.fontSize *= t1.fixedWidth / (t1.width + 1);
                t1.width = t1.fixedWidth;
            }
        });
        canvas.add(t1);
        count++;
    }
}

function deltextarea(){
    if(canvas.getActiveObjects().length>0){
        if(confirm("-------DELETE-------")){
            canvas.getActiveObjects().forEach((obj) => {
                canvas.remove(obj)
              });
              canvas.discardActiveObject().renderAll()
           
        }  
    }
      
}
var canvas = new fabric.Canvas('c');
var count = 1;
var textbtn = document.getElementById("txt").addEventListener("click",addtextarea(count));
var delbtn = document.getElementById("del");
delbtn.addEventListener("click",deltextarea);
document.addEventListener("keydown", function(event) {
    if (event.key === 'Delete') {
       deltextarea();
    }
});

