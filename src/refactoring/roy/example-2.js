const forEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}
const map = (arr, func) => {
  let res = []
  forEach(arr, v => {
    res.push(func(v))
  })
  return res
}
const reduce = (arr, func, initialValue) => {
  const hasInitialValue = initialValue !== undefined
  let res = hasInitialValue ? initialValue : arr[0]
  let i = hasInitialValue ? 0 : 1
  for (i; i < arr.length; i++) {
    res = func(res, arr[i])
  }
  return res
}

const pipe = (data, funcs) => map(funcs, func => map(data, datum => func(datum)))

const cook = d => d + ' 요리'
const eat = d => d + ' 먹기'
const wash = d => d + ' 설거지'
const dry = d => d + ' 말리기'
const putAway = d => d + ' 치우기'

const foods = ['햄버거', '떡볶이', '된장찌개']
const dishes = ['쟁반', '밥그릇', '수저', '냄비']
console.log(pipe(foods, [cook, eat]))
console.log(pipe(dishes, [wash, dry, putAway]))
