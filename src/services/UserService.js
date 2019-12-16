let users = [
  {
    id: "0",
    firstName: "Bob",
    lastName: "Usernicus",
    email: "user@gmail.com",
    password: "test",
    avatarImage:
      "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png",
    dateOfBirth: new Date("01 Jan 1970 00:00:00 GMT"),
    signUpDate: new Date("01 Jan 2018 00:00:00 GMT"),
    lastModifiedDAte: new Date("01 Jan 1970 00:00:00 GMT"),
    nrReviews: 100
  },
  {
    id: "1",
    firstName: "Ion",
    lastName: "Ionescu",
    email: "user1@gmail.com",
    password: "test",
    avatarImage:
      "https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg",
    dateOfBirth: new Date("01 Jan 1970 00:00:00 GMT"),
    signUpDate: new Date("01 Jan 2018 00:00:00 GMT"),
    lastModifiedDAte: new Date("01 Jan 1970 00:00:00 GMT"),
    nrReviews: 183
  },
  {
    id: "2",
    firstName: "Vasilica",
    lastName: "Smardoi",
    email: "user2@gmail.com",
    password: "test",
    avatarImage:
      "https://store.playstation.com/store/api/chihiro/00_09_000/container/RO/en/999/EP0149-CUSA09988_00-AV00000000000002/1553528383000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",
    dateOfBirth: new Date("01 Jan 1970 00:00:00 GMT"),
    signUpDate: new Date("01 Jan 2018 00:00:00 GMT"),
    lastModifiedDAte: new Date("01 Jan 1970 00:00:00 GMT"),
    nrReviews: 1298
  },
  {
    id: "3",
    firstName: "Sandu",
    lastName: "Sandu",
    email: "user3@gmail.com",
    password: "test",
    avatarImage:
      "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png",
    dateOfBirth: new Date("01 Jan 1970 00:00:00 GMT"),
    signUpDate: new Date("01 Jan 2018 00:00:00 GMT"),
    lastModifiedDAte: new Date("01 Jan 1970 00:00:00 GMT"),
    nrReviews: 890
  },
  {
    id: "4",
    firstName: "SAM",
    lastName: "Sartis",
    email: "user4@gmail.com",
    password: "test",
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
  getUser,
  WarmUp,
  login
};

function WarmUp() {
  if (!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify(users));
}

let getUsersLocalStorage = () => {
  return JSON.parse(localStorage.getItem("users"));
};

function getCurrentUser() {
  return getUsersLocalStorage()[0];
}
function getUser(userId) {
  return getUsersLocalStorage()[userId];
}

function login(userPass) {
  var userExists = users.filter(
    x => x.email === userPass.email && x.password === userPass.password
  )[0];
  if (userExists) return userExists;
  return undefined;
}
