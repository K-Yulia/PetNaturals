// const date = new Date();
// console.log(('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear());
dateNow = document.getElementById("date-now");
const date = new Date();
dateNow.innerHTML = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();