import { lazy } from 'react'

export const getLocationSearch = key => {
  var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i")
  var r = window.location.search.substr(1).match(reg) || []
  if (r != null && r[2]) return unescape(r[2])
  return null
}

export const getTriggerId = id => `#${id}`

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const hashCode = (s = 'random_anim_') => s + makeid(24)

export const lazyImport = cb => lazy(() => cb)


export const scrollTop = (number = 0, time) => {
  if (!time) {
    document.body.scrollTop = document.documentElement.scrollTop = number;
    return number
  }
  const spacingTime = 20
  let spacingInex = time / spacingTime
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop
  let everTop = (number - nowTop) / spacingInex
  let scrollTimer = setInterval(() => {
    if (spacingInex > 0) {
      spacingInex--
      scrollTop(nowTop += everTop)
    } else {
      clearInterval(scrollTimer)
    }
  }, spacingTime)
}

export function toDataURL(url, callback) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        // callback(reader.result);
        resolve(reader.result)
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  })
}