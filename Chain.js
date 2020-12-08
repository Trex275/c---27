class Chain  {
    constructor(object1, object2) {
      var option = {
          bodyA:object1, // object1 = bird.body
          bodyB:object2, // object2 = log6.body
          length:20, 
          stiffness:0.2
      } 
      this.elastic = Constraint.create(option);
      console.log(this.elastic);
      World.add(world , this.elastic)
    }
    display() {
        line(this.elastic.bodyA.position.x,this.elastic.bodyA.position.y, this.elastic.bodyB.position.x,this.elastic.bodyB.position.y)
    }
}