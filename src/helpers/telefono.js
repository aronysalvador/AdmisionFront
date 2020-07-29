/*
 * Valida el numero de celular mediante regex, devuelve tro or false
 */
export const validatePhoneNumberFormat = (phoneNumber = "") => {
  const pattern = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
  return phoneNumber && pattern.test(phoneNumber);
};
