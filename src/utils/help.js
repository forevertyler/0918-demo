import axios from 'axios';

function searchGit (add) {
  let address = `https://api.github.com/users/${add}`
  return axios.get(address)
    .then( (res) => (
      { getDate:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}
function getJson (add) {
  let address = `https://raw.githubusercontent.com/forevertyler/demodata/master/card.json?${Math.random()}`
  return axios.get(address)
    .then( (res) => (
      { getJson:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}
function Md (add) {
  let address = `https://raw.githubusercontent.com/forevertyler/demodata/master/blog/${add}.md`
  return axios.get(address)
    .then( (res) => (
      { Md:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

export { getJson,searchGit,Md };
