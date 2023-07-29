const movies = [{
    name: "Bleak Night",
    budget: 306837.63,
    date: "1998-11-12 00:02:34",
    duration: 142
}, {
    name: "Visioneers",
    budget: 851341.78,
    date: "2013-03-28 08:35:45",
    duration: 223
}, {
    name: "Wild Heritage",
    budget: 627117.38,
    date: "2013-05-25 17:11:17",
    duration: 167
}, {
    name: "Devil's Backbone, The (Espinazo del diablo, El)",
    budget: 614825.75,
    date: "2020-09-15 06:42:36",
    duration: 131
}, {
    name: "Picnic on the Grass (Le déjeuner sur l'herbe)",
    budget: 583609.84,
    date: "2008-07-29 08:12:56",
    duration: 142
}, {
    name: "Blame (6 Films to Keep You Awake) (Películas para no dormir: La culpa)",
    budget: 728523.66,
    date: "2006-09-24 01:13:01",
    duration: 127
}, {
    name: "Tyson",
    budget: 283273.30,
    date: "2011-06-22 00:17:14",
    duration: 216
}, {
    name: "Maiden's Cheek (To xylo vgike apo ton Paradeiso)",
    budget: 896716.66,
    date: "2015-03-30 23:03:12",
    duration: 116
}, {
    name: "Penelope",
    budget: 738703.45,
    date: "2012-01-12 17:53:40",
    duration: 88
}, {
    name: "The Missouri Breaks",
    budget: 927204.05,
    date: "1991-06-11 07:57:06",
    duration: 151
}, {
    name: "Ripe",
    budget: 796035.42,
    date: "1998-09-21 05:11:07",
    duration: 186
}, {
    name: "Relentless",
    budget: 743300.90,
    date: "2007-11-12 15:55:23",
    duration: 186
}, {
    name: "Mar Baum",
    budget: 220707.75,
    date: "1997-09-21 19:11:04",
    duration: 80
}, {
    name: "Promise, The (La promesse)",
    budget: 689705.66,
    date: "1998-12-04 18:22:29",
    duration: 205
}, {
    name: "Red: Werewolf Hunter",
    budget: 793766.68,
    date: "2015-05-18 08:43:07",
    duration: 69
}, {
    name: "Fast and the Furious: Tokyo Drift, The (Fast and the Furious 3, The)",
    budget: 353558.96,
    date: "2000-07-13 01:47:53",
    duration: 134
}, {
    name: "Dating Games People Play",
    budget: 313814.83,
    date: "2022-09-19 17:58:47",
    duration: 182
}, {
    name: "Ziggy Stardust and the Spiders from Mars",
    budget: 668361.53,
    date: "2020-07-14 05:21:48",
    duration: 82
}, {
    name: "Kiss for Corliss, A (Almost a Bride)",
    budget: 437142.37,
    date: "1997-12-16 20:06:49",
    duration: 182
}, {
    name: "Kite Runner, The",
    budget: 472927.65,
    date: "2013-09-10 06:56:43",
    duration: 210
}, {
    name: "Ninth Gate, The",
    budget: 460447.54,
    date: "1995-08-01 13:53:13",
    duration: 206
}, {
    name: "Happy, Happy (Sykt lykkelig)",
    budget: 541845.43,
    date: "2017-04-01 13:24:07",
    duration: 233
}, {
    name: "Mansion of Madness, The",
    budget: 205074.19,
    date: "2018-09-23 19:05:55",
    duration: 107
}, {
    name: "Zombie (a.k.a. Zombie 2: The Dead Are Among Us) (Zombi 2)",
    budget: 641515.83,
    date: "2007-01-11 11:43:57",
    duration: 158
}, {
    name: "Haunt",
    budget: 122346.16,
    date: "1987-04-01 07:24:56",
    duration: 74
}, {
    name: "7 Seconds",
    budget: 624989.07,
    date: "1986-04-11 10:27:11",
    duration: 171
}, {
    name: "Beerfest",
    budget: 673201.87,
    date: "1997-12-08 20:51:33",
    duration: 104
}, {
    name: "To Hell and Back",
    budget: 240024.55,
    date: "2000-11-12 15:56:16",
    duration: 82
}, {
    name: "Deep Crimson (Profundo carmesí)",
    budget: 960447.62,
    date: "2010-02-27 02:18:01",
    duration: 210
}, {
    name: "Philanthropy (Filantropica)",
    budget: 836264.86,
    date: "1994-09-10 06:17:12",
    duration: 68
}, {
    name: "Belarmino",
    budget: 601096.12,
    date: "2005-02-05 14:17:19",
    duration: 233
}, {
    name: "Lured",
    budget: 617744.84,
    date: "1997-04-05 16:12:49",
    duration: 65
}, {
    name: "Fishtales",
    budget: 895648.18,
    date: "1993-02-11 08:24:21",
    duration: 208
}, {
    name: "I Bought a Vampire Motorcycle",
    budget: 437740.88,
    date: "2001-09-18 21:22:19",
    duration: 143
}, {
    name: "Evangelion: 1.0 You Are (Not) Alone (Evangerion shin gekijôban: Jo)",
    budget: 742088.55,
    date: "1994-12-01 19:34:47",
    duration: 101
}, {
    name: "Enigma of Kaspar Hauser, The (a.k.a. Mystery of Kaspar Hauser, The) (Jeder für sich und Gott Gegen Alle)",
    budget: 659947.10,
    date: "2012-07-14 23:43:35",
    duration: 195
}, {
    name: "Born Reckless",
    budget: 980741.62,
    date: "1997-02-23 00:04:25",
    duration: 143
}, {
    name: "Robin Hood",
    budget: 832088.46,
    date: "2021-06-27 00:22:55",
    duration: 184
}, {
    name: "Meilleur espoir féminin",
    budget: 166255.49,
    date: "1985-01-23 09:32:03",
    duration: 76
}, {
    name: "There Will Be Blood",
    budget: 931277.50,
    date: "2022-11-26 16:38:44",
    duration: 85
}, {
    name: "Fog City Mavericks",
    budget: 562543.61,
    date: "2001-06-27 16:27:35",
    duration: 186
}, {
    name: "Statement, The",
    budget: 215388.18,
    date: "1984-01-31 03:44:57",
    duration: 162
}, {
    name: "Railway Man, The",
    budget: 838761.82,
    date: "1991-07-12 05:02:06",
    duration: 81
}, {
    name: "Order and Disorder",
    budget: 916039.93,
    date: "2001-04-27 03:55:42",
    duration: 117
}, {
    name: "But I'm a Cheerleader",
    budget: 646026.53,
    date: "2016-10-21 03:32:04",
    duration: 149
}, {
    name: "Devil, Probably, The (Diable probablement, Le)",
    budget: 356731.95,
    date: "1993-08-03 19:00:23",
    duration: 94
}, {
    name: "Payback",
    budget: 773881.38,
    date: "2004-12-14 15:40:55",
    duration: 167
}, {
    name: "Stewart Lee: If You Prefer a Milder Comedian, Please Ask for One",
    budget: 588889.51,
    date: "1992-02-03 19:58:33",
    duration: 229
}, {
    name: "No Retreat, No Surrender",
    budget: 950533.62,
    date: "2002-05-21 01:17:26",
    duration: 181
}, {
    name: "Where Were You When the Lights Went Out?",
    budget: 631327.88,
    date: "1995-08-12 12:53:35",
    duration: 90
}, {
    name: "Just Friends",
    budget: 213219.01,
    date: "2000-08-18 22:45:36",
    duration: 71
}, {
    name: "Shockproof",
    budget: 159682.28,
    date: "1998-01-05 22:26:23",
    duration: 85
}, {
    name: "Australia",
    budget: 116276.45,
    date: "2017-04-20 01:12:20",
    duration: 211
}, {
    name: "Moon Warriors, The (Zhan shen chuan shuo)",
    budget: 162632.80,
    date: "2000-09-21 00:49:35",
    duration: 73
}, {
    name: "Louis Cyr: The Strongest Man in the World",
    budget: 695163.97,
    date: "1987-03-01 15:04:37",
    duration: 67
}, {
    name: "Slam Dunk Ernest",
    budget: 924025.08,
    date: "1981-01-20 06:46:17",
    duration: 129
}, {
    name: "Farmageddon",
    budget: 330269.63,
    date: "2014-04-10 10:14:43",
    duration: 190
}, {
    name: "Dragonwyck",
    budget: 583834.01,
    date: "2005-04-17 15:55:14",
    duration: 240
}, {
    name: "The Call of the Wild",
    budget: 388053.05,
    date: "1987-08-17 14:19:09",
    duration: 127
}, {
    name: "Abbott and Costello Meet the Invisible Man",
    budget: 773739.48,
    date: "1980-12-12 02:57:33",
    duration: 75
}, {
    name: "Thérèse: The Story of Saint Thérèse of Lisieux",
    budget: 922422.42,
    date: "2007-10-13 19:33:54",
    duration: 120
}, {
    name: "Mr. Thank You (Arigatô-san)",
    budget: 253721.92,
    date: "1997-04-10 01:52:07",
    duration: 137
}, {
    name: "Adventures of Milo and Otis, The (Koneko monogatari)",
    budget: 887071.30,
    date: "2020-07-17 23:26:03",
    duration: 187
}, {
    name: "Nothing Sacred",
    budget: 369615.63,
    date: "2015-12-24 16:27:19",
    duration: 173
}, {
    name: "Louis Cyr: The Strongest Man in the World",
    budget: 819423.80,
    date: "1992-11-26 02:22:25",
    duration: 132
}, {
    name: "Woods, The",
    budget: 253569.69,
    date: "1997-01-10 04:06:10",
    duration: 231
}, {
    name: "Dark Tide",
    budget: 940264.40,
    date: "1998-08-01 19:14:16",
    duration: 104
}, {
    name: "Lords of Discipline, The",
    budget: 932184.66,
    date: "1999-04-20 19:40:21",
    duration: 95
}, {
    name: "Chain Letter",
    budget: 103637.30,
    date: "1992-06-19 02:48:04",
    duration: 219
}, {
    name: "Big Fella",
    budget: 470857.57,
    date: "2023-01-10 11:38:48",
    duration: 160
}, {
    name: "For the Boys",
    budget: 681005.19,
    date: "1992-07-11 03:10:46",
    duration: 209
}, {
    name: "Road North (Tie pohjoiseen)",
    budget: 231683.14,
    date: "2012-02-10 02:31:09",
    duration: 113
}, {
    name: "Neds",
    budget: 229100.50,
    date: "1995-03-20 13:35:33",
    duration: 232
}, {
    name: "White God (Fehér isten)",
    budget: 442253.27,
    date: "2005-08-08 06:59:09",
    duration: 227
}, {
    name: "American Beauty",
    budget: 829975.30,
    date: "2010-05-28 16:17:01",
    duration: 76
}, {
    name: "It Should Happen to You",
    budget: 700698.44,
    date: "2011-09-03 13:29:37",
    duration: 122
}, {
    name: "Me and Orson Welles",
    budget: 519128.70,
    date: "1992-06-18 23:11:06",
    duration: 139
}, {
    name: "Salvatore Giuliano",
    budget: 620266.65,
    date: "2005-09-23 19:27:12",
    duration: 158
}, {
    name: "Santa Clause 3: The Escape Clause, The",
    budget: 769213.90,
    date: "1991-10-21 17:04:59",
    duration: 231
}, {
    name: "Battlefield Baseball (Jigoku kôshien)",
    budget: 572794.38,
    date: "1994-12-16 03:23:47",
    duration: 166
}, {
    name: "City Below, The (Unter dir die Stadt)",
    budget: 169600.75,
    date: "1996-03-23 01:50:47",
    duration: 151
}, {
    name: "Devil's Brigade, The",
    budget: 183139.73,
    date: "2002-12-13 11:03:06",
    duration: 150
}, {
    name: "Art and Craft",
    budget: 513733.80,
    date: "1995-11-29 01:11:14",
    duration: 124
}, {
    name: "Queen and I, The (Drottningen och jag)",
    budget: 112003.03,
    date: "2012-10-30 23:53:16",
    duration: 71
}, {
    name: "Blonde Venus",
    budget: 905471.51,
    date: "2016-05-26 23:39:27",
    duration: 210
}, {
    name: "Return to Lonesome Dove",
    budget: 138359.37,
    date: "2004-10-17 11:42:25",
    duration: 152
}, {
    name: "Confessions of a Teenage Drama Queen",
    budget: 415546.07,
    date: "2001-03-27 03:59:49",
    duration: 77
}, {
    name: "Night Train Murders (Last Stop on the Night Train) (Ultimo treno della notte, L')",
    budget: 777304.03,
    date: "1995-03-16 05:57:05",
    duration: 222
}, {
    name: "Get Hard",
    budget: 530750.30,
    date: "2000-07-08 06:07:24",
    duration: 118
}, {
    name: "Booty Call",
    budget: 384834.06,
    date: "2002-11-14 19:42:58",
    duration: 193
}, {
    name: "Lookin' to Get Out",
    budget: 883283.25,
    date: "2014-01-10 13:42:44",
    duration: 154
}, {
    name: "Reservoir Dogs",
    budget: 723863.46,
    date: "1993-10-09 14:55:36",
    duration: 189
}, {
    name: "Zone Troopers",
    budget: 893043.83,
    date: "2022-12-05 10:24:31",
    duration: 122
}, {
    name: "Planes, Trains & Automobiles",
    budget: 808941.52,
    date: "1994-07-02 12:07:20",
    duration: 95
}, {
    name: "Separation, The (Séparation, La)",
    budget: 561184.25,
    date: "1988-08-24 05:30:41",
    duration: 178
}, {
    name: "Bounce",
    budget: 938524.90,
    date: "2022-02-06 11:23:49",
    duration: 226
}, {
    name: "Dangerous Game",
    budget: 775220.00,
    date: "2008-08-23 12:43:44",
    duration: 162
}, {
    name: "Beerfest",
    budget: 159252.18,
    date: "2013-10-18 19:05:09",
    duration: 127
}, {
    name: "Reindeer Games",
    budget: 886114.32,
    date: "2000-07-18 03:39:14",
    duration: 131
}, {
    name: "Pete 'n' Tillie",
    budget: 657867.44,
    date: "2009-12-20 05:58:36",
    duration: 212
}];

export default movies