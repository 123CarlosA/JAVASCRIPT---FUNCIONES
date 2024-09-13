function sumarConReduce(aee) {
    return aee.reduce((acc, num) => acc + num, 0);
}


console.log(sumarConReduce([4, 10, 20, 12])); 