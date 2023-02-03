/* base */
const _ = {}

_.void = () => {}
_.array = () => []
_.push = (arr, v) => { arr.push(v); return arr }
_.unique = arr => [...new Set(arr)]

_.iter = (initiator, accumulator, asCondition = false) => (arr, callback, initialValue) => {
  let res = initiator(arr), i = -1, length = arr.length
  while (++i < length) {
    let result = callback(arr[i], i, arr)
    if (asCondition) {
      res = !!result ? accumulator(res, arr[i]) : res;
    } else {
      res = accumulator(res, result)
    }
  }
  return res
}
_.forEach = _.iter(_.void, _.void)
_.map = _.iter(_.array, _.push)
_.filter = _.iter(_.array, _.push, true)
_.reduce = (arr, callback, initialValue) => {
  const hasInitialValue = initialValue !== undefined
  let res = hasInitialValue ? initialValue : arr[0]
  let i = hasInitialValue ? -1 : 0, length = arr.length
  while (++i < length) {
    res = callback(res, arr[i], i, arr)
  }
  return res  
}
_.sort = (arr, func) => arr.sort(func)
_.split = (str, seperator) => str.split(seperator)
_.trim = str => str.trim()

_.log = val => { console.log(val); return val }
_.logger = modifier => (...args) => _.log(modifier(...args))

_.partialExceptFirst = func => (...args) => (firstArg) => func(firstArg, ...args)
_.pForEach = _.partialExceptFirst(_.forEach)
_.pMap = _.partialExceptFirst(_.map)
_.pFilter = _.partialExceptFirst(_.filter)
_.pReduce = _.partialExceptFirst(_.reduce)
_.pSort = _.partialExceptFirst(_.sort)
_.pSplit = _.partialExceptFirst(_.split)

_.pipe = (...funcs) => args => _.reduce(funcs, (res, func) => func(res), args)

/* for Quiz1 */
_.multiple = (base, residue = 0) => num => num % base === residue
_.odd = _.multiple(2, 1)
_.even = _.multiple(2)
_.tripple = _.multiple(3)

export default _