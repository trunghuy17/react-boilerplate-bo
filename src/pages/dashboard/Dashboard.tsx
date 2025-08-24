import { httpRequest } from '../../initRequest';

function Dashboard() {

  async function getAuth() {
    try {
        const bodyData = {
          "data": {
            "email": "hoanghai@gmail.com",
            "password": "123456"
          }
        }
        const res = await httpRequest('/api/auth', {
          method: 'POST',
          data: bodyData
        })
        console.log("get Auth ", res)
        // const { access_token, refresh_token } = res?.data || {};
        // window.localStorage.setItem('access_token', access_token);
        // window.localStorage.setItem('refresh_token', refresh_token);
        // navigate(PATH.ROOT)
      } catch (err) {
        console.error('Login fail: ',err)
      }
  }

  return (
    <div>
      Dashboard
      <br />
      <button type="button" onClick={getAuth}>
        Test access token + refresh token
      </button>
    </div>
  )
}

export default Dashboard