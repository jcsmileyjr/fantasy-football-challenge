import faker from "faker";

const players = [
  {
    name: faker.name.findName(),
    role: "Running Back",
    primaryStat: "Rushing Yards",
    primaryNumber: faker.datatype.number({'min':1, "max":500}),
    secondaryStat: "Touchdowns",
    seconaryNumber: faker.datatype.number({'min':1, "max":50}),
  },
  {
    name: faker.name.findName(),
    role: "Running Back",
    primaryStat: "Rushing Yards",
    primaryNumber: faker.datatype.number({'min':1, "max":500}),
    secondaryStat: "Touchdowns",
    seconaryNumber: faker.datatype.number({'min':1, "max":50}),
  },
  {
    name: faker.name.findName(),
    role: "Quarterback",
    primaryStat: "Passing Yards",
    primaryNumber: faker.datatype.number({'min':1, "max":500}),
    secondaryStat: "Touchdowns",
    seconaryNumber: faker.datatype.number({'min':1, "max":50}),
  },
  {
    name: faker.name.findName(),
    role: "Quarterback",
    primaryStat: "Passing Yards",
    primaryNumber: faker.datatype.number({'min':1, "max":500}),
    secondaryStat: "Touchdowns",
    seconaryNumber: faker.datatype.number({'min':1, "max":50}),
  },
  {
    name: faker.name.findName(),
    role: "Offensive Tackle",
    primaryStat: "Quarterback sacks",
    primaryNumber: faker.datatype.number({'min':1, "max":200}),
    secondaryStat: "Running Back sacks",
    seconaryNumber: faker.datatype.number({'min':1, "max":200}),
  },
  {
    name: faker.name.findName(),
    role: "Offensive Tackle",
    primaryStat: "Quarterback sacks",
    primaryNumber: faker.datatype.number({'min':1, "max":200}),
    secondaryStat: "Running Back sacks",
    seconaryNumber: faker.datatype.number({'min':1, "max":200}),
  },
];

export default players;
