export const updateQuantity = (prevQuanlity, quantity) => {
  let newQuantity = prevQuanlity + quantity;

  if (newQuantity <= 0) {
    return 0;
  }
  return newQuantity;
};
