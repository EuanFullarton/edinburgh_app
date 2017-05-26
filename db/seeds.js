use Edinburgh;

db.dropDatabase();

db.places.insert([
  {name:"Edinburgh Castle"},
  {name:"Arthur's Seat"},
  {name:"CodeClan Edinburgh"},
  {name:"Scott Monument"}
])

db.history.insert([
  {fact:"Edinburgh Castle is a historic fortress which dominates the skyline of the city of Edinburgh, Scotland, from its position on the Castle Rock."},
  {fact:"Edinburgh was beseiged several times during the Scottish wars of independence."}
])

db.places.find();
db.history.find();
