import faker from "faker";

const userDraft = (list) => {
  let drafts = [];
  let draft = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = getRandomInt(0, list.length - 1);
    let player = list.splice(randomNumber, 1);
    
    player[0].picture = `https://avatars.dicebear.com/api/avataaars/:${player[0].name}.svg`;
    console.log(player);
    draft.push(player[0]);
  }

  drafts.push(draft);
  drafts.push(list);
  console.table(draft);
  return drafts;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createPlayers = () => {
  let playersList = [];

  for (let i = 0; i < 48; i++) {
    let player = {};
    player.name = faker.name.findName();
    if (i % 5 === 0) {
      player.role = "Offensive Tackle";
      player.primaryStat = "Quarterback sacks";
      player.primaryNumber = faker.datatype.number({ min: 1, max: 200 });
      player.secondaryStat = "Running Back sacks";
      player.seconaryNumber = faker.datatype.number({ min: 1, max: 200 });
    } else if (i % 2 !== 0) {
      player.role = "Running Back";
      player.primaryStat = "Rushing Yards";
      player.primaryNumber = faker.datatype.number({ min: 1, max: 500 });
      player.secondaryStat = "Touchdowns";
      player.seconaryNumber = faker.datatype.number({ min: 1, max: 50 });
    } else {
      player.role = "Quarterback";
      player.primaryStat = "Passing Yards";
      player.primaryNumber = faker.datatype.number({ min: 1, max: 500 });
      player.secondaryStat = "Touchdowns";
      player.seconaryNumber = faker.datatype.number({ min: 1, max: 50 });
    }

    playersList.push(player);
  }
  return playersList;
};

//export default players;
export { createPlayers, userDraft };
