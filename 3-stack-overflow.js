function stackOverflow(n) {
    if (n < 10) {
        return 1
    }
    return stackOverflow(n-1)
}