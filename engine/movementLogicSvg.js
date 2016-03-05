var movementLogicSvg=function(spaceClass){
    var spaceSelector=$('.'+spaceClass);

    this.spaceSize={"x":spaceSelector.width(),"y":spaceSelector.height()};
    this.spacePosition={"x":spaceSelector.offset().left,"y":spaceSelector.offset().top};

    //TODO: insert svg logic

    return this;
}