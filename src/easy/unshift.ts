// Implement the type version of Array.unshift

// For example:

type Unshift<T extends any[], K> = [K, ...T]
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
