import axios from "axios";

export const httpRequest = axios.create({
  // baseURL: 'https://tony-auth-express-vdee.vercel.app',
  baseURL: 'http://localhost:3000', // run localhost BE
  timeout: 5000,
});

export const initRequest = () => {
  // Add a request interceptor
  httpRequest.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/json';

    // alway add x-auth-token when call api
    const access_token = window.localStorage.getItem('access_token');
    if (access_token) {
      config.headers['x-auth-token'] = access_token
    }
    console.log('httpRequest.interceptors.request success:  ', config)

    return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  httpRequest.interceptors.response.use(function onFulfilled(response) {
      console.log('httpRequest.interceptors.response success:  ', response)
      return response.data;
    }, async function onRejected(error) {
      
      // access token expired
      if (error.response.status === 401) {
       try {
          const bodyData = {
            "data": {
              "refresh_token": window.localStorage.getItem('refresh_token')
            }
          }
          const res = await httpRequest('/api/user/refresh-token', {
            method: 'POST',
            data: bodyData
          })
          const access_token = res.data.access_token;
          window.localStorage.setItem('access_token', access_token);
          httpRequest.defaults.headers.common['x-auth-token'] = access_token;
          return httpRequest(error.config)
        } catch (err) {
          console.error('Fail refrersh token: ',err)
        }
      }

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });
}