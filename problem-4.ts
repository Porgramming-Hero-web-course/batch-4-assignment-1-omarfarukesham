{ 
    //
    /**
 * Define a union type Circle and Rectangle, where each type has a unique shape property. 
 * Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
 * 
 */

    type Circle = {
        shape: "circle"; 
        radius: number;
      };
      
      type Rectangle = {
        shape: "rectangle"; 
        height: number;
        width: number;
      };
      
      //union type circle and rectangle ... 
      type Shape = Circle | Rectangle;
      
      function calculateShapeArea(shape: Shape): number {
        // Area of circle --> π × R²
        if (shape.shape === "circle") {
            const getCircleAreaResult = Math.PI * shape.radius ** 2
          return Math.round(getCircleAreaResult * 100) / 100;
        } 
        // Area of rectangle --> height × width
        else if (shape.shape === "rectangle") {
          return shape.height * shape.width;
        } 
        console.error(`Your shape is not allowed: ${shape}`);
        return 0; 
      }
      
      // Sample Input 1:
      const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
      console.log(circleArea); // Expected Output: 78.54
      
      // Sample Input 2:
      const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });
      console.log(rectangleArea); // Expected Output: 24
      
// 
}