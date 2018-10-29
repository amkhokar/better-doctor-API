
export function getDoctor() {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/specialties?skip=0&limit=20&user_key=39de8161fff69275b44ddd87c8981e86`;
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