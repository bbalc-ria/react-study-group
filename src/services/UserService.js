let users = [
  {
    firstName: "Bob",
    lastName: "Usernicus",
    email: "bobUsernicus@gmail.com",
    avatarImage:
      "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png",
    dateOfBirth: new Date("01 Jan 1970 00:00:00 GMT"),
    signUpDate: new Date("01 Jan 2018 00:00:00 GMT"),
    lastModifiedDAte: new Date("01 Jan 1970 00:00:00 GMT"),
    nrReviews: 100
  },
  {
    firstName: "Ion",
    lastName: "Ionescu",
    email: "ionnescu@gmail.com",
    avatarImage:
      "https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg",
    dateOfBirth: new Date("01 Jan 1970 00:00:00 GMT"),
    signUpDate: new Date("01 Jan 2018 00:00:00 GMT"),
    lastModifiedDAte: new Date("01 Jan 1970 00:00:00 GMT"),
    nrReviews: 183
  },
  {
    firstName: "Vasilica",
    lastName: "Smardoi",
    email: "smardoiul@gmail.com",
    avatarImage:
      "https://store.playstation.com/store/api/chihiro/00_09_000/container/RO/en/999/EP0149-CUSA09988_00-AV00000000000002/1553528383000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",
    dateOfBirth: new Date("01 Jan 1970 00:00:00 GMT"),
    signUpDate: new Date("01 Jan 2018 00:00:00 GMT"),
    lastModifiedDAte: new Date("01 Jan 1970 00:00:00 GMT"),
    nrReviews: 1298
  },
  {
    firstName: "Sandu",
    lastName: "Sandu",
    email: "sandusandu@gmail.com",
    avatarImage:
      "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png",
    dateOfBirth: new Date("01 Jan 1970 00:00:00 GMT"),
    signUpDate: new Date("01 Jan 2018 00:00:00 GMT"),
    lastModifiedDAte: new Date("01 Jan 1970 00:00:00 GMT"),
    nrReviews: 890
  },
  {
    firstName: "SAM",
    lastName: "Sartis",
    email: "bobUsernicus@gmail.com",
    avatarImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAiODNjb28f4nkgZya8fGMi0b-tBTZY7P5hoYJq-2Jjvgxit5cw&s",
    dateOfBirth: new Date("01 Jan 1970 00:00:00 GMT"),
    signUpDate: new Date("01 Jan 2018 00:00:00 GMT"),
    lastModifiedDAte: new Date("01 Jan 1970 00:00:00 GMT"),
    nrReviews: 270
  }
];

export const UserService = {
  getCurrentUser,
  getUser
};

function getCurrentUser() {
  return users[0];
}
function getUser(userId) {
  let x = shuffle(users);
  return x[0];
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
