export const HEADER = {
  defaultHeader: () => ({
    accept: 'application/json',
  })
}

export const endPoint = {
  auth: {
    loginGoogle: () => ({
      url: "account/api/v1/public/login-google",
      method: "POST",
      headers: HEADER.defaultHeader(),
    }),
  }
}