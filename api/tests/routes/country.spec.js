/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, Activity, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  id: "COL",
  name: "Colombia",
  flagImg: ["https://flagcdn.com/co.svg", "https://flagcdn.com/w320/co.png"],
  continent: "South America",
  capital: ["Bogotá"],
  subregion: "South America",
  area: 1141748,
  population: 50882884,
  createdAt: "2023-05-04T04:49:44.145Z",
  updatedAt: "2023-05-04T04:49:44.145Z",
  activities: [],
};
const activity = {
  name: "Party",
  dificult: 5,
  duration: 4,
  season: "Winter",
  countries: ["Colombia"],
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(
    () => Country.sync({ force: true }).then(() => Country.create(country)),
    Activity.sync({ force: true }).then(() => Activity.create(activity))
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
  });
  describe("GET /activities", () => {
    it("should get 200", () => agent.get("/activities").expect(200));
  });
});
