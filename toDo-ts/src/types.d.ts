// Types can be exported as modules, the file could have the extension .d.ts to indicate that they are declarations, no functions or other kind of code. Its just with visual porpuse

type toDosType = { // not used
  id: string,
  title: string,
  completed: boolean
}

// The difference between a type and an interface is that type is meant to single varibales and an interface is used to declare the types of an object
export interface ToDo {
  id: number
  title: string
  completed: boolean
}

// // When using interfaces directly, if the type of a property changes, such as the 'id' property changing from a string to a number, it can cause errors in the application. To avoid this, we can use 'Pick', an utility in TypeScript to extract specific properties from an interface and export them using 'export type'. This way, when we make changes to the extracted properties, the changes will be reflected throughout the codebase wherever the exported type is used.

export type TodoId = Pick<ToDo, 'id'> // or Omit<ToDo, 'completed' | 'title'>
export type TodoTitle = Pick<ToDo, 'title'>
export type TodoCompleted = Pick<ToDo, 'completed'>

export type ListOfToDos = ToDo[] // This line declare that the list is an array of toDos, also can be writen like: Array<toDos>
