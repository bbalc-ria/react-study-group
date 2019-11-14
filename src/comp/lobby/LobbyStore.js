const messages = []; //["name1: message 1 to dupliy", "name2: message 2 to dupliy"];
const players = []; //["player1", "player 2", "player 4"];

export const getMessages = () => {
  let copy = [...messages];
  console.log("GetMessages - Copy:", copy);
  return copy;
};

export const addMessage = msg => {
  if (msg) {
    messages.push(msg);
    console.log("AddMessage - Message:", msg, ", Messages: ", messages);
  }
};

export const getPlayers = () => {
  let copy = [...players];
  console.log("getPlayers - Copy:", copy);
  return copy;
};

export const addPlayers = playersToAdd => {
  if (playersToAdd) {
    players.push(...playersToAdd);
    console.log(
      "addPlayer - playersToAdd:",
      playersToAdd,
      ", players: ",
      players
    );
  }
};

export const addPlayer = player => {
  if (player) {
    players.push(player);
    console.log("addPlayer - player:", player, ", players: ", players);
  }
};

export const playerReady = name => {
  if (name) {
    let player = players.find(p => p.name === name);
    if (player) player.ready = !player.ready;
  }
};
