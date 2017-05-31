use Edinburgh;

db.dropDatabase();

db.places.insert([
  {name:"Edinburgh Castle", info:"Edinburgh Castle is a historic fortress which dominates the skyline of the city of Edinburgh, Scotland, from its position on the Castle Rock", latlng: {lat: 55.9485947, lng:-3.1999135}, image: "/images/castlesmall.jpg", favourited: true},
  {name:"Arthur's Seat", info:"Arthur's Seat is the main peak of the group of hills in Edinburgh, Scotland which form most of Holyrood Park", latlng: {lat: 55.9440833, lng:-3.164022}, image: "/images/Arthursseat.jpg", favourited: false},
  {name:"CodeClan Edinburgh", info: "CodeClan is Scotland's first digital skills academy, with campuses in Edinburgh and Glasgow", latlng: {lat: 55.9469623, lng:-3.2019583}, image: "/images/CodeClan.png", favourited: false},
  {name:"Scott Monument", info:"The Scott Monument is a Victorian Gothic monument to Scottish author Sir Walter Scott. It is the largest monument to a writer in the world", latlng: {lat: 55.952381, lng:-3.1932741},image: "/images/scottmonument.jpeg", favourited: false},
  {name:"Canongate Kirk", info:"In 1688 King James VII of Scotland (also King James II of England) ordered the construction of the Kirk of the Canongate and it was completed in 1691. Burial place of Adam Smith", latlng: {lat: 55.9518274, lng:-3.1817981},image: "/images/canongatekirk.jpg", favourited: false},
  {name:"St. Mary's Cathedral", info:"The neo-Gothic St. Mary's Cathedral is a striking building set in large grounds. Designed by George Gilbert Scott, it was consecrated in 1879. St. Mary's is the largest ecclesiastical building to be built in Scotland since the Reformation", latlng: {lat: 55.9485238, lng:-3.2251928},image: "/images/maryscathedral.jpeg", favourited: false},
  {name:"Palace of Hollyrood", info:"Built in 1128 and served as the main residence for the Kings and Queens of Scotland from the 15th century onwards. It is in fact still the Queen's official residence when she visits Edinburgh", latlng: {lat: 55.952715, lng:-3.1744591},image: "/images/holyroodplace.jpg", favourited: false},
  {name:"St. Gile's Cathedral", info:"There has been a church on the site of this cathedral since the 9th century. St. Giles' Cathedral was built in 1120, and it has served an important role in Scottish religion as the Mother Church of Presbyterianism", latlng: {lat: 55.952381, lng:-3.1932741},image: "/images/StGiles.jpg", favourited: false},
  {name:"Greyfriars Kirkyard", info:"Greyfriars Kirk is a beautiful sixteenth century church located in the heart of Edinburgh's Old Town. It is surrounded by a churchyard in which over 80,000 people have been interred since it was dedicated in 1561", latlng: {lat: 55.9466076, lng:-3.1944566},image: "/images/GreyfriarsKirkyard.jpg", favourited: false},
  {name:"Scott Monument", info:"The Scott Monument is a Victorian Gothic monument to Scottish author Sir Walter Scott. It is the largest monument to a writer in the world", latlng: {lat: 55.952381, lng:-3.1932741},image: "/images/scottmonument.jpeg", favourited: false}
])

db.history.insert([
  {year: "c.8500 BC", fact:"The earliest known human habitation in the Edinburgh area is from Cramond where evidence has been found of a Mesolithic site dated to c.8500 BC",image:"/images/cramond.jpg"},
  {year: "400 BC", fact:"Traces of later Bronze Age and Iron Age settlements have been found on the Castle Rock, Arthur's Seat, Craiglockhart Hill and the Pentland Hills. The culture of these early inhabitants bears similarities with the Celtic cultures of the Iron Age found at Hallstatt and La Tene in central Europe",image:"/images/craiglock.jpeg"},
  {year: "100", fact:"When the Romans arrived in the Lothian area towards the end of the 1st century AD, they discovered a Celtic Brythonic tribe whose name they recorded as the Votadini",image:"/images/celth.jpg"},
  {year: "500", fact:"At some point before the 7th century AD, the Gododdin, presumed descendants of the Votadini, built a hillfort known as Din Eidyn or Etin, almost certainly somewhere within the bounds of modern Edinburgh",image:"/images/Celtic_hillfort.png"},
  {year: "550", fact:"During the time of the Gododdin, the territory of Lothian came into existence, with Edinburgh as its main stronghold",image:"/images/lot.jpg"},
  {year: "600",fact:"Around the year 600, Welsh tradition records that Mynyddog Mwynfawr, the Brythonic ruler of the kingdom of Gododdin, assembled a force within the vicinity of Edinburgh to oppose Germanic settlers to the south. This force was decisively defeated by the Angles at the Battle of Catraeth (probably at Catterick)",image:"/images/catraeth_warriors.jpg"},
  {year: "638",fact:"The Angles of the Kingdom of Bernicia had a significant influence on what would be successively Bernicia, Northumbria and finally south-east Scotland, notably from AD 638 when it appears that the Gododdin stronghold was besieged by forces loyal to King Oswald of Northumbria. Whether or not this battle marked the precise passing of control over the hillfort of Etin from the Brythonic Celts to the Northumbrians, it was around this time that the Edinburgh region came under Northumbrian rule",image:"/images/northumbria1.jpg"},
  {year: "650",fact:"In the following years the Angles extended their influence west and north of Edinburgh but following their defeat at the Battle of Nechtansmere in AD 685 Edinburgh may have come to mark the north west extremity of the Angles' kingdom",image:"/images/battle_nechtans.jpg"},
  {year: "675",fact:"Traditionally and less certainly, Saint Cuthbert is said to have preached the gospel around the castle rock in the second half of the seventh century",image:"/images/St_Cuthbert.jpg"},
  {year: "900",fact:"During the tenth century its northernmost part, which had retained its Brythonic name Lothian, came under the sway of the Kingdom of Scotland",image:"/images/northumbria1.jpg"},
  {year: "973",fact:"In AD 973 the English king Edgar the Peaceful formally granted Lothian to Kenneth II, King of Scots",image:"/images/Kennet.jpg"},
  {year: "1018",fact:"By the early 11th century the Scottish hold over the area was secured when Malcolm II ended the Northumbrian threat by his victory at the battle of Carham in 1018",image:"/images/malcolm2.jpg"},
  {year: "1130",fact:"In the 12th century (c.1130), King David I, established the town of Edinburgh as one of Scotland's earliest royal burghs, protected by his royal fortress, on the slope below the castle rock",image:"/images/david1.jpg"},
  {year: "1291",fact:"Edinburgh was largely in English hands from 1291 to 1314 and from 1333 to 1341, during the Wars of Scottish Independence. The English nobleman, Lord Basset was made Governor of Edinburgh Castle in 1291. When the English invaded Scotland in 1298, King Edward I chose not to enter the English controlled town of Edinburgh but passed by with his army",image:"/images/basset.jpg"},
  {year: "1365",fact:"By the middle of the 14th century, in the reign of David II, the French chronicler Froissart described the town of around 400 dwellings as 'the Paris of Scotland' (c.1365 )",image:"/images/david2.jpg"},
  {year: "1544",fact:"The Burning of Edinburgh in 1544 by an English sea-borne army was the first major action of the war of the Rough Wooing. A Scottish army observed the landing on 3 May 1544 but did not engage with the English force. The Provost of Edinburgh was compelled to allow the English to sack Leith and Edinburgh",image:"/images/storyleith.jpg"},
  {year: "1560",fact:"In 1560, at a time when Scotland's total population was an estimated one million people, Edinburgh's population reached 12,000, with another 4,000 in separate jurisdictions such as Canongate and the port of Leith",image:"/images/queenof_scots.jpg"},
  {year: "1560",fact:"The Siege of Leith ended a twelve-year encampment of French troops at Leith, the port near Edinburgh, Scotland. The French troops arrived by invitation in 1548 and left in 1560 after an English force arrived to attempt to assist in removing them from Scotland",image:"/images/attck1.jpg"},
  {year: "1561",fact:"The town played a central role in events leading to the establishment of Protestantism in the mid-16th century Scottish Reformation. During her brief reign the Catholic Mary, Queen of Scots, who returned to Scotland from France in 1561, suffered from the deep discord that had been sown prior to her arrival",image:"/images/hist.png"},
  {year: "1573",fact:"The civil war that followed her escape from imprisonment, defeat at Langside and flight to England ended with the final surrender of her remaining loyal supporters in the 'Lang Siege' of Edinburgh Castle in 1573",image:"/images/civil.jpg"},
  {year: "1600",fact:"The internal religious division within Scottish Protestantism, between Presbyterians and Episcopalians, continued into the 17th century, culminating in the Wars of the Covenant and the Wars of the Three Kingdoms, during which Edinburgh, as the seat of the Scottish Parliament with its Kirk-dominated Committee of Estates, figured prominently",image:"/images/covenanter.jpg"},
  {year: "1601",fact:"In the period 1550 to 1650, Edinburgh's town council was controlled by merchants despite efforts by the king's agents to manipulate it. The most important factors in obtaining the office were social status, followed by wealth; a person's religion made relatively little difference",image:"/images/edinburghcouncil.jpg"},
  {year: "1603",fact:"In 1603 King James VI of Scotland succeeded to the English throne, uniting the monarchies of Scotland and England in a regal union known as the Union of the Crowns. In all other respects Scotland remained a separate kingdom retaining the Parliament of Scotland in Edinburgh",image:"/images/Kingjames4.jpg"},
  {year: "1639",fact:"Stiff Presbyterian opposition to King Charles I's attempt to introduce Anglican forms of worship and church governance in the Church of Scotland culminated in the Bishops' Wars of 1639 and 1640, the initial conflicts in the civil war period",image:"/images/kingcharles1.jpg"},
  {year: "1650",fact:"In 1650, following Scottish support for the restoration of Charles Stuart to the throne of England, Edinburgh was occupied by the Commonwealth forces of Oliver Cromwell[53] after the Battle of Dunbar",image:"/images/cromwell.jpg"},
  {year: "1675",fact:"In the 17th century, Edinburgh was still enclosed within the 140 acres of its 'ancient royalty' by the defensive Flodden and Telfer Walls, built mainly in the 16th century as protection against possible English invasion. Due to the restricted land area available for development, houses increased in height to accommodate a growing population. Buildings of 11 stories were common; some, according to contemporary travellers' accounts, even taller, as high as 14 or even 15 stories",image:"/images/edinburgh17.jpg"},
  {year: "1696",fact:"The Presbyterian establishment worked to purge the Episcopalians and heretics, and made blasphemy a capital crime. Thomas Aitkenhead, the son of a surgeon in the city, aged 18, was indicted for blasphemy by order of the Privy Council for calling the New Testament 'The History of the Imposter Christ'; he was hung in 1696--the last person to be executed for heresy in Britain",image:"/images/kingcharles1.jpg"},
  {year: "1706",fact:"In 1706 and 1707, the Acts of Union were passed by the Parliaments of England and Scotland uniting the two kingdoms into the Kingdom of Great Britain",image:"/images/brit.jpg"},
  {year: "1725",fact:"By the first half of the 18th century, rising prosperity was evidenced by the growth of the Bank of Scotland, Royal Bank of Scotland and British Linen Bank, all based in the city. However Edinburgh was one of the most densely populated, overcrowded and insanitary towns in the whole of Europe",image:"/images/building.jpg"},
  {year: "1745",fact:"During the Jacobite rising of 1745, Edinburgh was briefly occupied by the Jacobite Highland Army' before its march into England",image:"/images/jacobite.jpg"},
  {year: "1750",fact:"Building of the New Town:The proposals for improvement envisaged the building of a new Exchange for merchants (now the City Chambers), new law courts and an advocates' library, expansion north and southwards, and the draining of the Nor Loch",image:"/images/edinburgh.jpg"},
  {year: "1770",fact:"In the old town, O=observing conditions there in the 1770s, a widely travelled English visitor already reported that, 'No people in the World undergo greater hardships, or live in a worse degree of wretchedness and poverty, than the lower classes here'",image:"/images/boscot.jpg"},
  {year: "1821",fact:"By 1821, Edinburgh's city centre between Princes Street and George Street became a predominantly commercial and shopping district. This development was partly stimulated by the advent of railways penetrating the city centre from east and west in the 1840s.",image:"/images/princess.jpg"},
  {year: "1867",fact:"In the meantime the Old Town continued to decay into an increasingly dilapidated, overcrowded slum with high mortality rates, and was practically segregated socially from the rest of the city. in 1865, major street improvements were carried out in the Old Town under Lord Provost William Chambers, and the Edinburgh City Improvement Act of 1867 initiated the transformation of the area into the predominantly Victorian Old Town seen today",image:"/images/oldtown.jpeg"},
  {year: "1916",fact:"During the First World War, Edinburgh was bombed on the night of 2–3 April 1916. Two German Zeppelins dropped high explosive and incendiary bombs on, among other places, Leith, the Mound, Lothian Road, the Castle Rock and the Grassmark,et. Eleven civilian deaths, numerous injuries and property damage resulted",image:"/images/war1.jpg"},
  {year: "1920",fact:"Continued growth meant that Leith and Edinburgh formed a contiguous urban area. Leith was merged with Edinburgh in 1920 despite a plebiscite in which the people of Leith voted 26,810 to 4,340 against the merger",image:"/images/1920.jpg"},
  {year: "1940",fact:"In WW2 the port of Leith was hit on 22 July 1940 when a 1000 lb bomb fell on the Albert Dock, though it is unclear whether the originally intended target had been the well-defended Rosyth Dockyard. Bombs were dropped on at least 11 other occasions between June 1940 and July 1942",image:"/images/portleith.jpg"},
  {year: "1960",fact:"More piecemeal improvements to the Old Town followed in the early 20th century at the instigation of the pioneering town planner Patrick Geddes, who described his work as 'conservative surgery', but a period of relative economic stagnation through the two world wars and their aftermaths saw its fabric deteriorate further before major slum clearance in the 1960s and 1970s began to reverse the process. Even so, its population dropped by over two-thirds (to 3,000) between 1950 and 1975; and of 292 houses in the Cowgate in 1920 only eight remained in 1980",image:"/images/1960.jpg"},
  {year: "1968",fact:"By the late 1960s, such developments perceived by many as unsympathetic to the historical character of the city, together with the further remodelling of sections of Princes Street, prompted the eminent historian Christopher Smout to urge its citizens 'to save the New Town from the vandalism of neglect and development carried on today'",image:"/images/histedin.jpg"},
  {year: "1990",fact:"Since the 1990s a new 'financial district', including a new Edinburgh International Conference Centre, has grown mainly on demolished railway property to the west of the castle, stretching into Fountainbridge, a run-down 19th-century industrial suburb which has undergone radical change since the 1980s with the demise of industrial and brewery premises",image:"/images/1990.jpg"},
  {year: "1998",fact:"In 1998, the Scotland Act, which came into force the following year, established a devolved Scottish Parliament and Scottish Executive (renamed the Scottish Government since September 2007). Both based in Edinburgh",image:"/images/parl.jpg"}
])

db.places.find();
db.history.find();
