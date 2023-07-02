// Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?

// In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get(). In option, you can extend the current config type by the given key and value. We should about to access the final result via get.

// For example

declare const config: Chainable<Result>

type Chainable<T> = {
    option: <K extends string, V>(key: K extends keyof T ?
        V extends keyof T[K] ? never : K
        :
        K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
    get: () => T

}
const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

// expect the type of result to be:
interface Result {
    foo: number
    name: string
    bar: {
        value: string
    }
}