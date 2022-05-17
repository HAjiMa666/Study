/*
 * @Author: czx
 * @Date: 2022-05-17 15:41:54
 * @LastEditTime: 2022-05-17 15:45:49
 * @LastEditors: czx
 * @Description: 
 */
enum Direction{
  TOP,
  LEFT,
  RIGHT,
  BOTTOM,
}

function turnDirection(direction:Direction){
  switch(direction){
    case Direction.LEFT:
      console.log("left");
      break;
    case Direction.RIGHT:
      console.log("RIGHT");
      break;
    case Direction.TOP:
      console.log("TOP");
      break;
    case Direction.BOTTOM:
      console.log("BOTTOM");
      break;
  }
}

turnDirection(Direction.LEFT)