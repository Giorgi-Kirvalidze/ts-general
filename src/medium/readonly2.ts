// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

// For example

interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyExlude<T, K> = T extends K ? never : T;
type MyReadonly2<T, K extends keyof T = keyof T> =
    {
        readonly [k in K]: T[k]
    } &
    {
        [k in MyExlude<keyof T, K>]: T[k]
    }

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
// todo.completed = true // OK