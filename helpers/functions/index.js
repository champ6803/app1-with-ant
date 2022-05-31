import decode from "jwt-decode";
import moment from "moment";

export const getTokenExpirationDate = (encodedToken) => {
  if (!encodedToken) {
    return new Date(0); // is expired
  }

  const token = decode(encodedToken);
  if (!token.exp) {
    return new Date(0); // is expired
  }

  const expirationDate = new Date(token.exp * 1000);
  return expirationDate;
};

export const isExpiredToken = (encodedToken) => {
  const expirationDate = getTokenExpirationDate(encodedToken);
  const rightNow = moment();
  const isExpiredToken = moment(rightNow).isAfter(moment(expirationDate));

  return isExpiredToken;
};
