import { TOKEN_TYPE } from "@/model/variable";
import Cookies from "js-cookie";

export const HEADER = {
  defaultHeader: () => ({
    accept: 'application/json',
  }),
  refreshTokenHeader: () => {
    const token = Cookies.get(TOKEN_TYPE.REFRESH_TOKEN);
    return {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }
  },
  protectedHeader: () => {
    const token = Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
    return {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }
  }
}

export const endPoint = {
  auth: {
    loginGoogle: () => ({
      url: "account/api/v1/public/login-google",
      method: "POST",
      headers: HEADER.defaultHeader(),
    }),
    refreshToken: () => ({
      url: "account/api/v1/protected/refresh-token",
      method: "POST",
      headers: HEADER.refreshTokenHeader(),
    })
  }
}