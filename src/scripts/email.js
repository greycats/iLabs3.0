import axios from 'axios'

// const sentEmail = (user, house, bookingDate) => {
const sentEmail = ({ name, email, linkedin, project }) => {
  return axios.get('https://us-central1-ilabs3-5792b.cloudfunctions.net/sendEmail', {
      params: {
        name,
        email,
        linkedin,
        project
      }
    })
    .then(res => {
      console.log('res is ', res)
    })
}

export default sentEmail