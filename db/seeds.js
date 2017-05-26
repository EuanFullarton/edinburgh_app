use Edinburgh;

db.dropDatabase();

db.places.insert({name:"Edinburgh Castle"})

db.history.insert({fact:"Edinburgh Castle is a historic fortress which dominates the skyline of the city of Edinburgh, Scotland, from its position on the Castle Rock."})

db.places.find();
db.history.find();
