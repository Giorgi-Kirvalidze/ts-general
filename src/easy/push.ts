// Implement the generic version of Array.push

// For example:
type Push<T extends unknown[], K> = [...T, K]
type Result = Push<[1, 2], '3'> // [1, 2, '3']