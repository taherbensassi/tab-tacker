import axios from 'axios'
/** create Connetion url**/
/** connect to server side using axios**/
export default () => {
  return axios.create({
    baseURL: 'http://localhost:5000'
  })
}
