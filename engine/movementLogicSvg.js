var movementLogicSvg=function(spaceClass){
    var spaceSelector=$('.'+spaceClass);

    this.spaceSize={"x":spaceSelector.attr('width'),"y":spaceSelector.attr('height')};

    this.object=function(objectId){
        var objectSelector = $('#' + objectId);

        if(objectId!=undefined) {
            object.size = {"x": objectSelector.attr('width'), "y": objectSelector.attr('height')};
            object.position = {"x": objectSelector.attr('x'), "y": objectSelector.attr('y')};

            object.moveUp = function (px) {
                var newPosition = parseInt(objectSelector.attr('y')) - 10;
                objectSelector.attr('y', newPosition);
            };

            object.moveDown = function (px) {
                var newPosition = parseInt(objectSelector.attr('y')) + 10;
                objectSelector.attr('y', newPosition);
            };

            object.moveRight = function (px) {
                var newPosition = parseInt(objectSelector.attr('x')) + 10;
                objectSelector.attr('x', newPosition);
            };

            object.moveLeft = function (px) {
                var newPosition = parseInt(objectSelector.attr('x')) - 10;
                objectSelector.attr('x', newPosition);
            };

            object.setPosition = function (x, y) {
                objectSelector.attr('x', x);
                objectSelector.attr('y', y);
            };

            object.remove = function () {
                objectSelector.remove();
            };
        } else {
            object.insert=function(svgCode){
                spaceSelector.append(svgCode);
            };

            object.insertBitmap=function(x,y,bWidth,bHeight,bPath,id){
                var bitmap='<image id="'+id+'" x="'+x+'" y="'+y+'" width="'+bWidth+'" height="'+bHeight+'" xlink:href="'+bPath+'"></image>';

                spaceSelector.append(bitmap);
            };
        }

        //TODO: animate move methods

        return object;
    };

    return this;
}