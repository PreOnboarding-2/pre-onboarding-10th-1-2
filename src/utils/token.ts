export const setToken = (tokenKey: string, tokenValue: any) => {
  localStorage.setItem(tokenKey, tokenValue);
};

export const removeToken = (tokenKey: string) => {
  localStorage.removeItem(tokenKey);
};

export const getToken = (tokenKey: string) => {
  return localStorage.getItem(tokenKey);
};
