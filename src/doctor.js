
export function getDoctor() {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://rickandmortyapi.com/api/character/`;
    request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}