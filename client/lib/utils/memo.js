import { getNode } from "../dom/getNode.js";


const cache = {

}

const memo = (key, callback) => {
  if(!callback) return cache[key]
  
  if(cache[key]){
    console.warn(`${key}안에는 이미 캐시된 값이 존재합니다.`);
    return cache[key];
  }

  cache[key] = callback();



}

console.log(cache);

memo('큐브', ()=>getNode('#cube'))

console.log( memo('큐브'));