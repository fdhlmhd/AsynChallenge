const axios = require("axios").default;

function getPost() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

function getUser() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

axios.all([getPost(), getUser()]).then(
  axios.spread(function(post, users) {
    const [data1, data2] = [post.data, users.data];

    data1.forEach(element => {
      for (let i = 1; i <= data2.length; i++) {
          if(element.userId == i){
              element.user =Object.assign({},data2[i-1])
          }
      }
    });

    console.log(data1);
  })
);
