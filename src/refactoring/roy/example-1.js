const setDataByName = (cart, name, key, value) => ({
  ...cart,
  [name]: {
    ...cart[name],
    [key]: value,
  },
})
const setProperty = prop => (cart, name, val) => setDataByName(cart, name, prop, val)
const setPriceByName = setProperty('price')
const setShippingByName = setProperty('shipping')
const setQuantityByName = setProperty('quantity')
const setTaxByName = setProperty('tax')
