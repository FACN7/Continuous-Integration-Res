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
test('other route', (t) => {
  supertest(hello)
    .get("/other")
    .expect(400)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, '404 page', 'response should contain 404 page');
      t.end();
    });
});