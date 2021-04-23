import axios from "axios";
import "regenerator-runtime/runtime";
const END_POINT = "https://swapi.dev/api/starships/";
const people = 'https://swapi.dev/api/people/'
const api = 'https://swapi.dev/api/';

function addToDom(list, dom) {
  for (const e of list) {
    dom.innerHTML += `<li>${e.name}</li>`;
  }
}
const getList = async (url) => {
  try {
    const { data } = await axios.get(url);
    console.log(Object.keys(data))
    for(let endPoint of Object.keys(data)){
      console.log(endPoint)
    }
    return data.results;
  } catch (err) {
    return err;
  }
};

const renderContent = async (url) => {
  const list = await getList(url);
  addToDom(list, document.querySelector("#app"));
};


// renderContent(END_POINT);
renderContent(api);
