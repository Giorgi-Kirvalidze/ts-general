// Implement the built-in ReturnType<T> generic without using it.

// For example

const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type MyReturnType<Function> = Function extends (args: any) => infer D ? D : never

type a = MyReturnType<typeof fn> // should be "1 | 2"