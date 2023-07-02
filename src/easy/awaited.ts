// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

// For example: if we have Promise<ExampleType> how to get ExampleType?

type Thenable<T> = {
    then: (resolve: (arg: T) => unknown) => unknown;
}
type MyAwaited<T extends Thenable<unknown> | Promise<unknown>> = T extends Promise<infer Inner>
    ? Inner extends Promise<unknown> ? MyAwaited<Inner> : Inner
    : T extends Thenable<infer U> ? U : false


type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string