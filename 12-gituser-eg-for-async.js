const axios = require('axios')
console.log("Get ready for user info from GitHub!!")


const fetchGitUser = async (username) => {
    try {
        const data = await axios.get(`https://api.github.com/users/${username}`)
        console.log(data)
    }catch(err) {
        console.log(err)
    }finally {
        console.log("Whatever the case We are done")
    }
} 

console.log("Nah! I can't wait")

fetchGitUser("hassan-buruhani")