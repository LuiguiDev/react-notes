// Types can be exported as modules, the file could have the extension .d.ts to indicate that they are declarations, no functions or other kind of code. Its just with visual porpuse

// The difference between a type and an interface is that type is meant to single varibales and an interface is used to declare the types of an object
type toDosType = {
  id: string,
  title: string,
  completed: boolean
}

export interface ToDo {
  id: number
  title: string
  completed: boolean
}

export type ListOfToDos = ToDo[] // This line declare that the list is an array of toDos, also can be writen like: Array<toDos>
