import jwtDecode from 'jwt-decode';

export function logout() {
  localStorage.removeItem("token");
  window.location.href = "/";
}

export function isLoggedIn() {
  if (typeof window !== "undefined" && window.localStorage) {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  }
}

export function decodeToken(token) {
  const decodedToken = jwtDecode(token);
  return decodedToken;
}
