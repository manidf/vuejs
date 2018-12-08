<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email addres is: {{ email }}</p>
  </div>
</template>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
<script>
import axios from 'axios'
export default {
  name: 'Dashboard',
  data () {
    email: ''
  },
  created () {
    axios.get('https://vue-update-31134.firebaseio.com/users.json')
      .then(res => {
        console.log('res: ', res)
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log('users: ', users)
        this.email = users[0].email
      })
      .catch(error => console.log('error', error))


  }
}
</script>
