const Map = (array, f) => {
    const copyArray = [...array];
    for(let i = 0; i < copyArray.length; i++) {
        f(i, copyArray[i]);
    }
};

const Filter = (array, f) => {
    const tmp = [];
    const copyArray = [...array];

    Map(copyArray, ((idx,value) => {
        if(f(idx, value)) {
            tmp.push(f(idx,value));
        }
    }));

    return tmp;
};

const Reduce = (array, f,initValue) => {
    const copyArray = array;
    let init = initValue ?? 0;
    
    Map(copyArray, (acc, cur) => {
        init = f(init, cur);
    } )
    
    return init;
}

const array = [1,2,3,4,5];

console.log('---------------Map----------------');
Map(array,((idx,value) => {
    console.log(`value : ${value}, index : ${idx}`);
}));

console.log('---------------Filter----------------');
const filteredArray = Filter(array, ((idx, value) => {
    if(value % 2 === 1) {
        return value;
    }
}))
console.log(filteredArray);

console.log('---------------Reduce----------------');
const reduce = Reduce([1.1,1.2,1.3], ((acc, cur) => {
    return acc + cur
    }), 0);
