function fibonacci(n) {
    if (n === 1) return 1
    if (n === 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}
for (let i = 1; i < 100; i++)
    console.log('fibonacci[', i, ']= ', fibonacci(i))
