/**
 * Time complexity : O(2^n)
 */
function fibonacci_recursive(num) {
    if(num <= 1) {
        return num
    }
    return fibonacci_recursive(num-1) + fibonacci_recursive(num-2)
}

/**
 * Time complexity : O(n)
 */
function fibonacci_memo(num, memo=[]) {
    if(memo[num] !== undefined) return memo[num]
    if(num <= 2) return 1

    let res = fibonacci((num - 1), memo) + fibonacci((num - 2), memo)
    
    memo[num] = res
    return res
}

/**
 * Best space complexity
 * Time complexity: O(n)
 */
function fibonacci_table(num) {
    let tabulation = [0, 1, 1]
    if(tabulation[num] !== undefined) return tabulation[num]

    for(let i =3; i <= num; i++) {
        tabulation[i] = tabulation[i-1] + tabulation[i-2]
    }

    return tabulation[num]
}
