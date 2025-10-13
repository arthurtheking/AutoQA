function hello(param : string) {
    console.log(`Hello ${param}`)
}

hello('World');

enum Direction {
    Up,
    Down, 
    Left = 'LEFT', 
    Right = 'RIGHT'
}

console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right)