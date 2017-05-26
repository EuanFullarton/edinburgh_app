use Edinburgh;

db.dropDatabase();

db.places.insert([
  {name:"Edinburgh Castle"},
  {name:"Arthur's Seat"},
  {name:"CodeClan Edinburgh"},
  {name:"Scott Monument"}
])

db.history.insert([
  {fact:"Edinburgh Castle is a historic fortress which dominates the skyline of the city of Edinburgh, Scotland, from its position on the Castle Rock"},
  {fact:"Edinburgh was beseiged several times during the Scottish wars of independence"},
  {fact:"The earliest known human habitation in the Edinburgh area is from Cramond where evidence has been found of a Mesolithic site dated to c.8500 BC"},
  {fact:"Traces of later Bronze Age and Iron Age settlements have been found on the Castle Rock, Arthur's Seat, Craiglockhart Hill and the Pentland Hills.[3] The culture of these early inhabitants bears similarities with the Celtic cultures of the Iron Age found at Hallstatt and La Tene in central Europe"},
  {fact:"When the Romans arrived in the Lothian area towards the end of the 1st century AD, they discovered a Celtic Brythonic tribe whose name they recorded as the Votadini"},
  {fact:"At some point before the 7th century AD, the Gododdin, presumed descendants of the Votadini, built a hillfort known as Din Eidyn or Etin, almost certainly somewhere within the bounds of modern Edinburgh"},
  {fact:"During the time of the Gododdin, the territory of Lothian came into existence, with Edinburgh as its main stronghold"},
  {fact:"The Angles of the Kingdom of Bernicia had a significant influence on what would be successively Bernicia, Northumbria and finally south-east Scotland, notably from AD 638 when it appears that the Gododdin stronghold was besieged by forces loyal to King Oswald of Northumbria. Whether or not this battle marked the precise passing of control over the hillfort of Etin from the Brythonic Celts to the Northumbrians, it was around this time that the Edinburgh region came under Northumbrian rule"},
  {fact:"In the following years the Angles extended their influence west and north of Edinburgh but following their defeat at the Battle of Nechtansmere in AD 685 Edinburgh may have come to mark the north west extremity of the Angles' kingdom"},
  {fact:"Around the year 600, Welsh tradition records that Mynyddog Mwynfawr, the Brythonic ruler of the kingdom of Gododdin, assembled a force within the vicinity of Edinburgh to oppose Germanic settlers to the south. This force was decisively defeated by the Angles at the Battle of Catraeth (probably at Catterick)"},
  {fact:"Traditionally and less certainly, Saint Cuthbert is said to have preached the gospel around the castle rock in the second half of the seventh century"},
  {fact:"During the tenth century its northernmost part, which had retained its Brythonic name Lothian, came under the sway of the Kingdom of Scotland"},
  {fact:"In AD 973 the English king Edgar the Peaceful formally granted Lothian to Kenneth II, King of Scots"},
])

db.places.find();
db.history.find();
