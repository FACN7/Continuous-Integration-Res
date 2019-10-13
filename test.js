var test = require("tape");
var supertest = require("supertest");
var hello = require("./hello");

test('Home route', (t) => {
  supertest(hello)
    .get("/")
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, 'Hello Travis!', 'response should contain \'Hello Travis!\'');
      t.end();
    });
});