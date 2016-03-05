var movementLogic=function(spaceClass){

    /*
    *
    *     GAME SPACE VARs
    *
    * */

    var spaceSelector=$('.'+spaceClass);

    this.spaceSize={"x":spaceSelector.width(),"y":spaceSelector.height()};
    this.spacePosition={"x":spaceSelector.offset().left,"y":spaceSelector.offset().top};


    /*
    *
    *     POINTS METHODS
    *
    * */


    this.point=function(x,y){

        var point=[];

        var position={"x":x,"y":y};

        point.realPosition={
            "x":this.spacePosition.x+position.x,
            "y":this.spacePosition.y+position.y
        };

        point.isInSpace=function(){
            if(position.x>0&&position.x<movementLogic(spaceClass).spaceSize.x&&position.y>0&&position.y<movementLogic(spaceClass).spaceSize.y){
                return true
            }else{
                return false;
            }
        };

        return point;
    };

    /*
    *
    *     OBJECTS METHODS
    *
    * */

    this.object=function(objectId){

        var object=[];

        if(objectId!=undefined) {
            var objectSelector = $('#' + objectId);
            objectSelector.css('position', 'absolute');

            object.size = {"x": objectSelector.width(), "y": objectSelector.height()};
            object.position = {"x": objectSelector.offset().left, "y": objectSelector.offset().top};

            object.moveUp = function (px) {
                var newYPosition = object.position.y - px;
                objectSelector.css('top', newYPosition + 'px');
            };

            object.moveDown = function (px) {
                var newYPosition = object.position.y + px;
                objectSelector.css('top', newYPosition + 'px');
            };

            object.moveLeft = function (px) {
                var newXPosition = object.position.x - px;
                objectSelector.css('left', newXPosition + 'px');
            };

            object.moveRight = function (px) {
                var newXPosition = object.position.x + px;
                objectSelector.css('left', newXPosition + 'px');
            };

            object.setPosition = function(x,y){
                var newPositionPosition=movementLogic(spaceClass).point(x,y).realPosition;
                objectSelector.css('left',newPositionPosition.x);
                objectSelector.css('top',newPositionPosition.y);
            };

            object.remove = function () {
                objectSelector.remove();
            };
        } else {
            object.insert=function(htmlCode){
                spaceSelector.append(htmlCode);
            };
        }

        return object;
    };

    return this;
};