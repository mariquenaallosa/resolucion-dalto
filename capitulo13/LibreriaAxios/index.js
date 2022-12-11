axios("informacion.txt").then((res) => console.log(res.data));

// Si queres que sea si o si get

// axios.get("informacion.txt")
// .then((res) => console.log(res.data));

// En casi de necesitar hacer un POST

// axios.post("https://reqres.in/api/users", {
//   "nombre":"Lucas",
//   "apellido": "Dalto"
// })
// .then((res) => console.log(res));
