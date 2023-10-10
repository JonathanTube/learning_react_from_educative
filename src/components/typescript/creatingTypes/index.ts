(() => {
    console.group('Using the Array generic type#')
    let arr: Array<string> = [] // this is how to define a arr with type annotation
    // arr[1, '2'] // error
    arr.push('1')
    // arr.push(0)// error
    console.log(arr)

    // another way to use it
    let arr2: string[] = [];
    arr2 = ['three']
    arr2.unshift('two')
    console.log(arr2)
    console.groupEnd()


    console.group('Strongly-typing rest parameters')
    function logScores(firstName: string, ...scores: Array<number>) {
        console.log(firstName, scores);
    }
    logScores("Ben", 50, 75, 85)
    // logScores("Jack", 50, 75, '0') // error
    console.groupEnd()
})()