const express = require('express')
const router = express.Router()
const cors = require('cors')
var app = express()
app.use(router)

 
app.use(cors())


app.get('/movies', (req, res) =>{
    console.log('------------------')
    res.status(200).json(
        [
          {
            "id": 1,
            "url": "http://www.tvmaze.com/shows/1/under-the-dome",
            "name": "Under the Dome",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Science-Fiction", "Thriller"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2013-06-24",
            "officialSite": "http://www.cbs.com/shows/under-the-dome/",
            "schedule": { "time": "22:00", "days": ["Thursday"] },
            "rating": { "average": 6.5 },
            "weight": 91,
            "network": {
              "id": 2,
              "name": "CBS",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 25988, "thetvdb": 264492, "imdb": "tt1553656" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg"
            },
            "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
            "updated": 1529612668,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/1" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/185054" }
            }
          },
          {
            "id": 2,
            "url": "http://www.tvmaze.com/shows/2/person-of-interest",
            "name": "Person of Interest",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Action", "Crime"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2011-09-22",
            "officialSite": "http://www.cbs.com/shows/person_of_interest/",
            "schedule": { "time": "22:00", "days": ["Tuesday"] },
            "rating": { "average": 9 },
            "weight": 96,
            "network": {
              "id": 2,
              "name": "CBS",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 28376, "thetvdb": 248742, "imdb": "tt1839578" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
            },
            "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
            "updated": 1535507028,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/2" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/659372" }
            }
          },
          {
            "id": 3,
            "url": "http://www.tvmaze.com/shows/3/bitten",
            "name": "Bitten",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Horror", "Romance"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2014-01-11",
            "officialSite": "http://bitten.space.ca/",
            "schedule": { "time": "22:00", "days": ["Friday"] },
            "rating": { "average": 7.6 },
            "weight": 75,
            "network": {
              "id": 7,
              "name": "Space",
              "country": {
                "name": "Canada",
                "code": "CA",
                "timezone": "America/Halifax"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 34965, "thetvdb": 269550, "imdb": "tt2365946" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg"
            },
            "summary": "<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her \"happily ever after\" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>",
            "updated": 1534079818,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/3" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/631862" }
            }
          },
          {
            "id": 4,
            "url": "http://www.tvmaze.com/shows/4/arrow",
            "name": "Arrow",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Action", "Science-Fiction"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2012-10-10",
            "officialSite": "http://www.cwtv.com/shows/arrow",
            "schedule": { "time": "20:00", "days": ["Monday"] },
            "rating": { "average": 7.6 },
            "weight": 99,
            "network": {
              "id": 5,
              "name": "The CW",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 30715, "thetvdb": 257655, "imdb": "tt2193021" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/165/414895.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/165/414895.jpg"
            },
            "summary": "<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>",
            "updated": 1536062117,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/4" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1426875" },
              "nextepisode": { "href": "http://api.tvmaze.com/episodes/1473817" }
            }
          },
          {
            "id": 5,
            "url": "http://www.tvmaze.com/shows/5/true-detective",
            "name": "True Detective",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Crime", "Thriller"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2014-01-12",
            "officialSite": "http://www.hbo.com/true-detective",
            "schedule": { "time": "21:00", "days": ["Sunday"] },
            "rating": { "average": 8.3 },
            "weight": 99,
            "network": {
              "id": 8,
              "name": "HBO",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 31369, "thetvdb": 270633, "imdb": "tt2356777" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/61.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/61.jpg"
            },
            "summary": "<p>Touch darkness and darkness touches you back. <b>True Detective</b> centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case.</p>",
            "updated": 1536053668,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/5" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/182325" },
              "nextepisode": { "href": "http://api.tvmaze.com/episodes/1519992" }
            }
          },
          {
            "id": 6,
            "url": "http://www.tvmaze.com/shows/6/the-100",
            "name": "The 100",
            "type": "Scripted",
            "language": "English",
            "genres": ["Action", "Adventure", "Science-Fiction"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2014-03-19",
            "officialSite": "http://www.cwtv.com/shows/the-100/",
            "schedule": { "time": "20:00", "days": ["Tuesday"] },
            "rating": { "average": 7.9 },
            "weight": 100,
            "network": {
              "id": 5,
              "name": "The CW",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 34770, "thetvdb": 268592, "imdb": "tt2661044" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/151/377511.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/151/377511.jpg"
            },
            "summary": "<p>Ninety-seven years ago, nuclear Armageddon decimated planet Earth, destroying civilization. The only survivors were the 400 inhabitants of 12 international space stations that were in orbit at the time. Three generations have been born in space, the survivors now number 4,000, and resources are running out on their dying \"Ark\" - the 12 stations now linked together and repurposed to keep the survivors alive. Draconian measures including capital punishment and population control are the order of the day, as the leaders of the Ark take ruthless steps to ensure their future, including secretly exiling a group of 100 juvenile prisoners to the Earth's surface to test whether it's habitable.</p>",
            "updated": 1535298845,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/6" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1471697" }
            }
          },
          {
            "id": 7,
            "url": "http://www.tvmaze.com/shows/7/homeland",
            "name": "Homeland",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Thriller", "Espionage"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2011-10-02",
            "officialSite": "http://www.sho.com/sho/homeland/home",
            "schedule": { "time": "21:00", "days": ["Sunday"] },
            "rating": { "average": 8.3 },
            "weight": 98,
            "network": {
              "id": 9,
              "name": "Showtime",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 27811, "thetvdb": 247897, "imdb": "tt1796960" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/143/359279.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/143/359279.jpg"
            },
            "summary": "<p>The winner of 6 Emmy Awards including Outstanding Drama Series, <b>Homeland</b> is an edge-of-your-seat sensation. Marine Sergeant Nicholas Brody is both a decorated hero and a serious threat. CIA officer Carrie Mathison is tops in her field despite being bipolar. The delicate dance these two complex characters perform, built on lies, suspicion, and desire, is at the heart of this gripping, emotional thriller in which nothing short of the fate of our nation is at stake.</p>",
            "updated": 1533619895,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/7" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1420861" }
            }
          },
          {
            "id": 8,
            "url": "http://www.tvmaze.com/shows/8/glee",
            "name": "Glee",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Music", "Romance"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2009-05-19",
            "officialSite": "http://www.fox.com/glee",
            "schedule": { "time": "21:00", "days": ["Tuesday"] },
            "rating": { "average": 6.7 },
            "weight": 71,
            "network": {
              "id": 4,
              "name": "FOX",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 21704, "thetvdb": 83610, "imdb": "tt1327801" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg"
            },
            "summary": "<p><b>Glee </b>is a musical comedy about a group of ambitious and talented young adults in search of strength, acceptance and, ultimately, their voice.</p>",
            "updated": 1536145055,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/8" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/142185" }
            }
          },
          {
            "id": 9,
            "url": "http://www.tvmaze.com/shows/9/revenge",
            "name": "Revenge",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Thriller", "Mystery"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2011-09-21",
            "officialSite": null,
            "schedule": { "time": "22:00", "days": ["Sunday"] },
            "rating": { "average": 8 },
            "weight": 87,
            "network": {
              "id": 3,
              "name": "ABC",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 28387, "thetvdb": 248837, "imdb": "tt1837642" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/82/206879.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/82/206879.jpg"
            },
            "summary": "<p>This is not a story about forgiveness; <b>Revenge</b> is a show about retribution. Meet Emily Thorne, the newest resident of The Hamptons. When she was a little girl (and known as Amanda Clarke) her father, David Clarke, was framed for a horrific crime and subsequently sent to prison. While serving his time, the conspirators plotted and murdered David in order to prevent the truth from coming out. Emily is now back with a new identity and ready to take vengeance on the people that murdered her father and stole her childhood.</p>",
            "updated": 1535975199,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/9" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/154117" }
            }
          },
          {
            "id": 10,
            "url": "http://www.tvmaze.com/shows/10/grimm",
            "name": "Grimm",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Crime", "Supernatural"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2011-10-28",
            "officialSite": "http://www.nbc.com/grimm",
            "schedule": { "time": "20:00", "days": ["Friday"] },
            "rating": { "average": 8.5 },
            "weight": 95,
            "network": {
              "id": 1,
              "name": "NBC",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 28352, "thetvdb": 248736, "imdb": "tt1830617" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/69/174906.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/69/174906.jpg"
            },
            "summary": "<p><b>Grimm </b>is a drama series inspired by the classic Grimm Brothers' Fairy Tales. After Portland homicide detective Nick Burkhardt discovers he's descended from an elite line of criminal profilers known as \"Grimms\", he increasingly finds his responsibilities as a detective at odds with his new responsibilities as a Grimm.</p>",
            "updated": 1531998068,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/10" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1009811" }
            }
          },
          {
            "id": 11,
            "url": "http://www.tvmaze.com/shows/11/gotham",
            "name": "Gotham",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Action", "Crime"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2014-09-22",
            "officialSite": "http://www.fox.com/gotham",
            "schedule": { "time": "20:00", "days": ["Thursday"] },
            "rating": { "average": 7.8 },
            "weight": 99,
            "network": {
              "id": 4,
              "name": "FOX",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 38049, "thetvdb": 274431, "imdb": "tt3749900" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/166/416219.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/166/416219.jpg"
            },
            "summary": "<p>The good. The evil. The beginning.</p><p>Everyone knows the name Commissioner Gordon. He is one of the crime world's greatest foes, a man whose reputation is synonymous with law and order. But what is known of Gordon's story and his rise from rookie detective to Police Commissioner? What did it take to navigate the multiple layers of corruption that secretly ruled Gotham City, the spawning ground of the world's most iconic villains? And what circumstances created them – the larger-than-life personas who would become Catwoman, The Penguin, The Riddler, Two-Face and The Joker?</p><p><b>Gotham </b>is an origin story of the great DC Comics Super-Villains and vigilantes, revealing an entirely new chapter that has never been told. It follows one cop's rise through a dangerously corrupt city teetering between good and evil, and chronicles the birth of one of the most popular super heroes of our time.</p>",
            "updated": 1536171775,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/11" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1422374" },
              "nextepisode": { "href": "http://api.tvmaze.com/episodes/1473788" }
            }
          },
          {
            "id": 12,
            "url": "http://www.tvmaze.com/shows/12/lost-girl",
            "name": "Lost Girl",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Fantasy", "Horror"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2010-09-12",
            "officialSite": "http://www.showcase.ca/lostgirl",
            "schedule": { "time": "22:00", "days": ["Sunday"] },
            "rating": { "average": 8 },
            "weight": 91,
            "network": {
              "id": 6,
              "name": "Showcase",
              "country": {
                "name": "Canada",
                "code": "CA",
                "timezone": "America/Halifax"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 26401, "thetvdb": 182061, "imdb": "tt1429449" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/137.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/137.jpg"
            },
            "summary": "<p><b>Lost Girl</b> follows supernatural seductress Bo, a Succubus who feeds on the sexual energy of humans. Growing up with human parents, Bo had no reason to believe she was anything other than the girl next door — until she drained her boyfriend to death in their first sexual encounter. Now she has hit the road alone and afraid. <br> She discovers she is one of the Fae, creatures of legend and folklore, who pass as humans while feeding off them secretly and in different ways, as they have for millennia. Relieved yet horrified to find out that she is not alone, Bo decides to take the middle path between the humans and the Fae while embarking on a personal mission to unlock the secrets of her origin.</p><p>With the help of her human sidekick, Kenzi, and Dyson, a sexy police detective, Bo takes on a challenge every week helping a Fae or human client who comes to her to solve a mystery, or to right a wrong.</p>",
            "updated": 1534079929,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/12" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/316120" }
            }
          },
          {
            "id": 13,
            "url": "http://www.tvmaze.com/shows/13/the-flash",
            "name": "The Flash",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Action", "Science-Fiction"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2014-10-07",
            "officialSite": "http://www.cwtv.com/shows/the-flash/",
            "schedule": { "time": "20:00", "days": ["Tuesday"] },
            "rating": { "average": 8.1 },
            "weight": 99,
            "network": {
              "id": 5,
              "name": "The CW",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 36939, "thetvdb": 279121, "imdb": "tt3107288" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/163/409858.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/163/409858.jpg"
            },
            "summary": "<p>After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash!</p>",
            "updated": 1535545468,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/13" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1426878" },
              "nextepisode": { "href": "http://api.tvmaze.com/episodes/1473791" }
            }
          },
          {
            "id": 14,
            "url": "http://www.tvmaze.com/shows/14/continuum",
            "name": "Continuum",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Crime", "Science-Fiction"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2012-05-27",
            "officialSite": "http://www.showcase.ca/Continuum",
            "schedule": { "time": "21:00", "days": ["Sunday"] },
            "rating": { "average": 8.2 },
            "weight": 84,
            "network": {
              "id": 6,
              "name": "Showcase",
              "country": {
                "name": "Canada",
                "code": "CA",
                "timezone": "America/Halifax"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 30789, "thetvdb": 258171, "imdb": "tt1954347" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/184.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/184.jpg"
            },
            "summary": "<p><b>Continuum </b>is a one-hour police drama centered on Kiera Cameron, a regular cop from 65 years in the future who finds herself trapped in present day Vancouver. She is alone, a stranger in a strange land, and has eight of the most ruthless criminals from the future, known as Liber8, loose in the city.</p><p>Lucky for Kiera, through the use of her CMR (cellular memory recall), a futuristic liquid chip technology implanted in her brain, she connects with Alec Sadler, a seventeen-year-old tech genius. When Kiera calls and Alec answers, a very unique partnership begins.</p><p>Kiera's first desire is to get \"home.\" But until she figures out a way to do that, she must survive in our time period and use all the resources available to her to track and capture the terrorists before they alter history enough to change the course of the future. After all, what's the point of going back if the future isn't the one you left?</p>",
            "updated": 1536247355,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/14" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/228308" }
            }
          },
          {
            "id": 15,
            "url": "http://www.tvmaze.com/shows/15/constantine",
            "name": "Constantine",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Action", "Horror"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2014-10-24",
            "officialSite": "https://www.nbc.com/constantine",
            "schedule": { "time": "20:00", "days": ["Friday"] },
            "rating": { "average": 7.4 },
            "weight": 87,
            "network": {
              "id": 1,
              "name": "NBC",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 38109, "thetvdb": 273690, "imdb": "tt3489184" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/154.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/154.jpg"
            },
            "summary": "<p>Based on the wildly popular comic book series \"Hellblazer\" from DC Comics, seasoned demon hunter and master of the occult John Constantine is armed with a ferocious knowledge of the dark arts and a wickedly naughty wit. He fights the good fight - or at least he did. With his soul already damned to hell, he's decided to abandon his campaign against evil until a series of events thrusts him back into the fray, and he'll do whatever it takes to protect the innocent. With the balance of good and evil on the line‎, <b>Constantine </b>will use his skills to travel the country, find the supernatural terrors that threaten our world and send them back where they belong. After that, who knows... maybe there's hope for him and his soul after all.</p>",
            "updated": 1516808973,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/15" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/122719" }
            }
          },
          {
            "id": 16,
            "url": "http://www.tvmaze.com/shows/16/penny-dreadful",
            "name": "Penny Dreadful",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Horror", "Thriller"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2014-05-11",
            "officialSite": "http://www.sho.com/penny-dreadful",
            "schedule": { "time": "21:00", "days": ["Sunday"] },
            "rating": { "average": 8.3 },
            "weight": 84,
            "network": {
              "id": 9,
              "name": "Showtime",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 34172, "thetvdb": 265766, "imdb": "tt2628232" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/48/122237.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/48/122237.jpg"
            },
            "summary": "<p>Some of literature's most terrifying characters, including Dr. Frankenstein and his monster, Dorian Gray, and iconic figures from the novel Dracula are lurking in the darkest corners of Victorian London. They are joined by a core of original characters in a complex, frightening new narrative. <b>Penny Dreadful </b>is a psychological thriller filled with dark mystery and suspense, where personal demons from the past can be stronger than vampires, evil spirits and immortal beasts.</p>",
            "updated": 1536427994,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/16" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/766196" }
            }
          },
          {
            "id": 18,
            "url": "http://www.tvmaze.com/shows/18/the-amazing-race",
            "name": "The Amazing Race",
            "type": "Reality",
            "language": "English",
            "genres": ["Action", "Adventure", "Family"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2001-09-05",
            "officialSite": "http://www.cbs.com/shows/amazing_race/",
            "schedule": { "time": "20:00", "days": ["Wednesday"] },
            "rating": { "average": 7.5 },
            "weight": 89,
            "network": {
              "id": 2,
              "name": "CBS",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 5566, "thetvdb": 77666, "imdb": "tt0285335" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/141/352923.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/141/352923.jpg"
            },
            "summary": "<p><b>The Amazing Race </b>is an adventure reality show in which 10-12 teams race around the world and compete vs each other in very difficult tasks. Each team consists of two racers. At the end the winning team is granted 1 Million Dollars. The show is hosted by Phil Keoghan.</p>",
            "updated": 1532342006,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/18" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1365499" }
            }
          },
          {
            "id": 19,
            "url": "http://www.tvmaze.com/shows/19/supernatural",
            "name": "Supernatural",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Action", "Supernatural"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2005-09-13",
            "officialSite": "http://www.cwtv.com/shows/supernatural",
            "schedule": { "time": "20:00", "days": ["Thursday"] },
            "rating": { "average": 8.4 },
            "weight": 99,
            "network": {
              "id": 5,
              "name": "The CW",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 5410, "thetvdb": 78901, "imdb": "tt0460681" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/149/374777.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/149/374777.jpg"
            },
            "summary": "<p>The show follows brothers Sam and Dean Winchester, who travel across America in a black 1967 Chevy Impala investigating and combating paranormal events and other unexplained occurrences, many of them based on American urban legends and folklore as well as classic supernatural creatures such as vampires, werewolves, and ghosts.</p>",
            "updated": 1536045363,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/19" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1422914" },
              "nextepisode": { "href": "http://api.tvmaze.com/episodes/1473821" }
            }
          },
          {
            "id": 20,
            "url": "http://www.tvmaze.com/shows/20/the-strain",
            "name": "The Strain",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Horror", "Thriller"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2014-07-13",
            "officialSite": "http://www.fxnetworks.com/thestrain",
            "schedule": { "time": "22:00", "days": ["Sunday"] },
            "rating": { "average": 7.6 },
            "weight": 90,
            "network": {
              "id": 13,
              "name": "FX",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 33229, "thetvdb": 276564, "imdb": "tt2654620" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/130/325621.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/130/325621.jpg"
            },
            "summary": "<p><b>The Strain</b> is a high-concept thriller that tells the story of Dr. Ephraim Goodweather, the head of the Center for Disease Control Canary Team in New York City. He and his team are called upon to investigate a mysterious viral outbreak with hallmarks of an ancient and evil strain of vampirism. As the strain spreads, Goodweather, his team, and an assembly of everyday New Yorkers wage war for the fate of humanity itself.</p>",
            "updated": 1536276977,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/20" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1128366" }
            }
          },
          {
            "id": 21,
            "url": "http://www.tvmaze.com/shows/21/the-last-ship",
            "name": "The Last Ship",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Action", "Thriller"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2014-06-22",
            "officialSite": "http://www.tntdrama.com/shows/the-last-ship",
            "schedule": { "time": "21:00", "days": ["Sunday"] },
            "rating": { "average": 7.8 },
            "weight": 100,
            "network": {
              "id": 14,
              "name": "TNT",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 33158, "thetvdb": 269533, "imdb": "tt2402207" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/164/412464.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/164/412464.jpg"
            },
            "summary": "<p>Their mission is simple: Find a cure. Stop the virus. Save the world. When a global pandemic wipes out eighty percent of the planet's population, the crew of a lone naval destroyer must find a way to pull humanity from the brink of extinction.</p>",
            "updated": 1536575637,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/21" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1499133" },
              "nextepisode": { "href": "http://api.tvmaze.com/episodes/1499134" }
            }
          },
          {
            "id": 22,
            "url": "http://www.tvmaze.com/shows/22/true-blood",
            "name": "True Blood",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Romance", "Supernatural"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2008-09-07",
            "officialSite": "http://www.hbo.com/true-blood",
            "schedule": { "time": "21:00", "days": ["Sunday"] },
            "rating": { "average": 8 },
            "weight": 89,
            "network": {
              "id": 8,
              "name": "HBO",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 12662, "thetvdb": 82283, "imdb": "tt0844441" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/241.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/241.jpg"
            },
            "summary": "<p><b>True Blood </b>is a horror/drama based on a series of novels called <i>The Southern American Vampires Mysteries</i>. It focuses on Sookie Stackhouse and her various encounters with vampires and other supernatural beings. The show is centred in the small town of Bon Temps in Louisiana. The show focuses heavily on the co-existence of humans with vampires. The show also touches on several other controversial issues involving equal rights, violence, discrimination and religion.</p>",
            "updated": 1535396317,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/22" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1292" }
            }
          },
          {
            "id": 23,
            "url": "http://www.tvmaze.com/shows/23/once-upon-a-time-in-wonderland",
            "name": "Once Upon a Time in Wonderland",
            "type": "Scripted",
            "language": "English",
            "genres": ["Adventure", "Fantasy"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2013-10-10",
            "officialSite": null,
            "schedule": { "time": "20:00", "days": ["Thursday"] },
            "rating": { "average": 6.7 },
            "weight": 80,
            "network": {
              "id": 3,
              "name": "ABC",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 35215, "thetvdb": 269654, "imdb": "tt2802008" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/73/183661.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/73/183661.jpg"
            },
            "summary": "<p>In Victorian England, the young and beautiful Alice tells a tale of a strange new land that exists on the other side of a rabbit hole. An invisible cat, a hookah smoking caterpillar and playing-cards that talk are just some of the fantastic things she's seen during this impossible adventure. Surely this troubled girl must be insane, and her doctors aim to cure her with a treatment that will make her forget everything. Alice seems ready to put it all behind her, especially the painful memory of the genie she fell in love with and lost forever -- the handsome and mysterious Cyrus . But deep down Alice knows this world is real, and just in the nick of time the sardonic Knave of Hearts and the irrepressible White Rabbit arrive to save her from a doomed fate. Together the trio will take a tumble down the rabbit hole to this Wonderland where nothing is impossible.</p>",
            "updated": 1514481175,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/23" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1313" }
            }
          },
          {
            "id": 24,
            "url": "http://www.tvmaze.com/shows/24/hawaii-five-0",
            "name": "Hawaii Five-0",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Action", "Crime"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2010-09-20",
            "officialSite": "http://www.cbs.com/shows/hawaii_five_0/",
            "schedule": { "time": "21:00", "days": ["Friday"] },
            "rating": { "average": 7.9 },
            "weight": 98,
            "network": {
              "id": 2,
              "name": "CBS",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 24840, "thetvdb": 164541, "imdb": "tt1600194" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/135/337500.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/135/337500.jpg"
            },
            "summary": "<p><b>Hawaii Five-0</b> is a contemporary take on the classic series about a new elite federalized task force whose mission is to wipe out the crime that washes up on the Islands' sun-drenched beaches. Detective Steve McGarrett, a decorated Naval officer-turned-cop, returned to Oahu to investigate his father's murder and stayed after Hawaii's former governor persuaded him to head up the new team: his rules, no red tape and full blanket authority to hunt down the biggest \"game\" in town. Joining McGarrett is Detective Danny \"Danno\" Williams, a relocated ex-New Jersey cop - a working man in paradise who prefers skyscrapers to the coastline - but who's committed to keeping the Islands safe for his young daughter; Chin Ho Kelly, an ex-Honolulu police detective and former protégé of McGarrett's father who was wrongly accused of corruption; Dr. Max Bergman, the quirky coroner; Chin's cousin, Kono Kalakaua, a beautiful and fearless native; and Captain Lou Grover, who formerly headed Hawaii's SWAT unit. Joining them is Jerry Ortega, a former classmate of Chin's and the Island's local conspiracy theorist. The state's brash FIVE-0 unit, who may spar and jest among themselves, remain determined to eliminate the seedy elements from the 50th state.</p>",
            "updated": 1536292815,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/24" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1431738" },
              "nextepisode": { "href": "http://api.tvmaze.com/episodes/1494027" }
            }
          },
          {
            "id": 25,
            "url": "http://www.tvmaze.com/shows/25/hellsing",
            "name": "Hellsing",
            "type": "Animation",
            "language": "Japanese",
            "genres": ["Anime", "Horror", "Supernatural"],
            "status": "Ended",
            "runtime": 30,
            "premiered": "2001-10-10",
            "officialSite": null,
            "schedule": { "time": "", "days": ["Wednesday"] },
            "rating": { "average": 8.3 },
            "weight": 22,
            "network": {
              "id": 131,
              "name": "Fuji TV",
              "country": { "name": "Japan", "code": "JP", "timezone": "Asia/Tokyo" }
            },
            "webChannel": null,
            "externals": { "tvrage": 9139, "thetvdb": 71278, "imdb": "tt0325547" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/247.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/247.jpg"
            },
            "summary": "<p><b>Hellsing </b>is a 13-part anime based on the manga of the same name. The plot is significantly difficult to that of the the manga although the characters are the same. The show mainly focuses on the hellsing institute that houses the anti-hero named Alucard who swore loyalty to the Helsing family many years before. Alucard being the first ever vampire takes on a new apprentice named Sera's.</p>",
            "updated": 1504676730,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/25" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/398491" }
            }
          },
          {
            "id": 26,
            "url": "http://www.tvmaze.com/shows/26/hellsing-ultimate",
            "name": "Hellsing Ultimate",
            "type": "Animation",
            "language": "Japanese",
            "genres": ["Drama", "Action", "Anime", "Horror"],
            "status": "Ended",
            "runtime": 50,
            "premiered": "2006-02-10",
            "officialSite": null,
            "schedule": { "time": "12:00", "days": ["Wednesday"] },
            "rating": { "average": 8.1 },
            "weight": 0,
            "network": {
              "id": 159,
              "name": "TBS",
              "country": { "name": "Japan", "code": "JP", "timezone": "Asia/Tokyo" }
            },
            "webChannel": null,
            "externals": { "tvrage": 29109, "thetvdb": 263688, "imdb": "tt0495212" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/22/55037.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/22/55037.jpg"
            },
            "summary": "<p><b>Hellsing Ultimate</b>, unlike the 13-part <i>Hellsing</i> series, follows the manga of the same name very closely. Alucard being the main protagonist and anti-hero/vampire. <i>Hellsing Ultimate</i> is a 10-part series of OVAs whereby Alucard turns Sera's into a vampire. The main focus of the plot being on an enemy neo-nazi group.</p>",
            "updated": 1504676814,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/26" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1437" }
            }
          },
          {
            "id": 27,
            "url": "http://www.tvmaze.com/shows/27/berserk",
            "name": "Berserk",
            "type": "Animation",
            "language": "Japanese",
            "genres": ["Anime", "Fantasy", "Horror"],
            "status": "Ended",
            "runtime": 25,
            "premiered": "1997-10-07",
            "officialSite": null,
            "schedule": { "time": "", "days": ["Tuesday"] },
            "rating": { "average": 9.2 },
            "weight": 58,
            "network": {
              "id": 137,
              "name": "NTV",
              "country": { "name": "Japan", "code": "JP", "timezone": "Asia/Tokyo" }
            },
            "webChannel": null,
            "externals": { "tvrage": 2764, "thetvdb": 73752, "imdb": "tt0318871" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/249.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/249.jpg"
            },
            "summary": "<p><b>Berserk </b>is a 25-part anime set in a dark fantasy/horror environment whereby the series focuses on the main character guts; a lone swordman who later meets up with a group of mercenaries called the band of the hawk. The leader of this band holds a strange necklace called a behelit that will only lead to evil.</p>",
            "updated": 1504676900,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/27" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1462" }
            }
          },
          {
            "id": 28,
            "url": "http://www.tvmaze.com/shows/28/californication",
            "name": "Californication",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Comedy"],
            "status": "Ended",
            "runtime": 30,
            "premiered": "2007-08-13",
            "officialSite": "http://www.sho.com/sho/californication/home",
            "schedule": { "time": "21:30", "days": ["Sunday"] },
            "rating": { "average": 8.1 },
            "weight": 78,
            "network": {
              "id": 9,
              "name": "Showtime",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 15319, "thetvdb": 80349, "imdb": "tt0904208" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/250.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/250.jpg"
            },
            "summary": "<p><b>Californication </b>is a comedy/drama series based around the writer Hank Moody. He moves to California and suffers a writers block as well as many other family and personal issues. His drinking and generally unhealthy lifestyle interrupts his relationships with his long term lover Karen and his daughter Becca as he struggles with his manager Charlie Runkle.</p>",
            "updated": 1535457239,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/28" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1546" }
            }
          },
          {
            "id": 29,
            "url": "http://www.tvmaze.com/shows/29/vikings",
            "name": "Vikings",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Action", "History"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2013-03-03",
            "officialSite": "http://www.history.com/shows/vikings",
            "schedule": { "time": "21:00", "days": ["Wednesday"] },
            "rating": { "average": 8.8 },
            "weight": 99,
            "network": {
              "id": 118,
              "name": "History",
              "country": {
                "name": "Canada",
                "code": "CA",
                "timezone": "America/Halifax"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 31136, "thetvdb": 260449, "imdb": "tt2306299" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/139/348365.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/139/348365.jpg"
            },
            "summary": "<p><b>Vikings</b> transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.</p>",
            "updated": 1532960010,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/29" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1315259" },
              "nextepisode": { "href": "http://api.tvmaze.com/episodes/1499249" }
            }
          },
          {
            "id": 30,
            "url": "http://www.tvmaze.com/shows/30/american-horror-story",
            "name": "American Horror Story",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Horror", "Thriller"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2011-10-05",
            "officialSite": "http://www.fxnetworks.com/shows/american-horror-story",
            "schedule": { "time": "22:00", "days": ["Wednesday"] },
            "rating": { "average": 7.8 },
            "weight": 99,
            "network": {
              "id": 13,
              "name": "FX",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 28776, "thetvdb": 250487, "imdb": "tt1844624" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/163/409065.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/163/409065.jpg"
            },
            "summary": "<p><b>American Horror Story </b>is an horror television anthology series. Each season is conceived as a self-contained miniseries, following a disparate set of characters and settings, and a storyline with its own beginning, middle, and end. While some actors appear for more than one year, they play completely different roles in each season.</p>",
            "updated": 1536504185,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/30" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1277290" },
              "nextepisode": { "href": "http://api.tvmaze.com/episodes/1486732" }
            }
          },
          {
            "id": 31,
            "url": "http://www.tvmaze.com/shows/31/marvels-agents-of-shield",
            "name": "Marvel's Agents of S.H.I.E.L.D.",
            "type": "Scripted",
            "language": "English",
            "genres": ["Action", "Adventure", "Science-Fiction"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2013-09-24",
            "officialSite": "http://abc.go.com/shows/marvels-agents-of-shield",
            "schedule": { "time": "21:00", "days": ["Friday"] },
            "rating": { "average": 8 },
            "weight": 99,
            "network": {
              "id": 3,
              "name": "ABC",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 32656, "thetvdb": 263365, "imdb": "tt2364582" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/142/356776.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/142/356776.jpg"
            },
            "summary": "<p>Phil Coulson heads an elite team of fellow agents with the worldwide law-enforcement organization known as S.H.I.E.L.D. (Strategic Homeland Intervention Enforcement and Logistics Division), as they investigate strange occurrences around the globe. Its members -- each of whom brings a specialty to the group -- work with Coulson to protect those who cannot protect themselves from extraordinary and inconceivable threats.</p>",
            "updated": 1535091903,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/31" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1445220" }
            }
          },
          {
            "id": 32,
            "url": "http://www.tvmaze.com/shows/32/fargo",
            "name": "Fargo",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Crime"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2014-04-15",
            "officialSite": "http://www.fxnetworks.com/fargo",
            "schedule": { "time": "22:00", "days": ["Wednesday"] },
            "rating": { "average": 9 },
            "weight": 94,
            "network": {
              "id": 13,
              "name": "FX",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 35276, "thetvdb": 269613, "imdb": "tt2802850" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/107/269526.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/107/269526.jpg"
            },
            "summary": "<p><b>Fargo </b>is an American crime drama with some dark comical elements inspired by the film <i>Fargo</i> written by the Coen brothers. It was met with considerable acclaim as insurance salesman Lester Nygaard faces off against the psychopath Lorne Malvo.</p>",
            "updated": 1533352800,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/32" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1104774" }
            }
          },
          {
            "id": 33,
            "url": "http://www.tvmaze.com/shows/33/hemlock-grove",
            "name": "Hemlock Grove",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Horror", "Thriller"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2013-04-19",
            "officialSite": "https://www.netflix.com/title/70242310",
            "schedule": { "time": "", "days": ["Friday"] },
            "rating": { "average": 7.1 },
            "weight": 89,
            "network": null,
            "webChannel": { "id": 1, "name": "Netflix", "country": null },
            "externals": { "tvrage": 33272, "thetvdb": 259948, "imdb": "tt2309295" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/305.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/305.jpg"
            },
            "summary": "<p>Secrets are just a part of daily life in the small Pennsylvania town of <b>Hemlock Grove</b>, where the darkest evils hide in plain sight.</p>",
            "updated": 1520337911,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/33" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/393772" }
            }
          },
          {
            "id": 34,
            "url": "http://www.tvmaze.com/shows/34/helix",
            "name": "Helix",
            "type": "Scripted",
            "language": "English",
            "genres": ["Horror", "Science-Fiction", "Thriller"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2014-01-10",
            "officialSite": null,
            "schedule": { "time": "22:00", "days": ["Friday"] },
            "rating": { "average": 6.5 },
            "weight": 78,
            "network": {
              "id": 16,
              "name": "Syfy",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 34277, "thetvdb": 265912, "imdb": "tt2758950" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/322.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/322.jpg"
            },
            "summary": "<p><b>Helix </b>is a science fiction thriller that focuses on a CDC expedition into the arctic. They go there to investigate the potential outbreak of a disease with no idea what they are getting themselves into. They encounter an almost zombie-like threat that could threaten mankind itself whilst the operator of the facility seems to know more than what he is saying.</p>",
            "updated": 1520337929,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/34" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/143215" }
            }
          },
          {
            "id": 35,
            "url": "http://www.tvmaze.com/shows/35/the-killing",
            "name": "The Killing",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Crime", "Thriller"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2011-04-03",
            "officialSite": "http://www.amc.com/shows/the-killing",
            "schedule": { "time": "00:00", "days": ["Friday"] },
            "rating": { "average": 8.3 },
            "weight": 85,
            "network": {
              "id": 20,
              "name": "AMC",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 27387, "thetvdb": 210171, "imdb": "tt1637727" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/326.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/326.jpg"
            },
            "summary": "<p><b>The Killing </b>is a crime drama television series based on the Danish series Forbrydelsen. It follows detectives Stephen Holder and Sarah Linden and their work as detectives investigating murders. Sarah Linden takes cases very seriously and has issues keeping her work and family separate, as she pairs up with recovering addict Stephen Holder to solve dark murders.</p>",
            "updated": 1535651226,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/35" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1726" }
            }
          },
          {
            "id": 37,
            "url": "http://www.tvmaze.com/shows/37/intruders",
            "name": "Intruders",
            "type": "Scripted",
            "language": "English",
            "genres": ["Drama", "Fantasy", "Thriller"],
            "status": "Ended",
            "runtime": 60,
            "premiered": "2014-08-23",
            "officialSite": "http://www.bbc.co.uk/programmes/b04nf78f",
            "schedule": { "time": "22:00", "days": ["Saturday"] },
            "rating": { "average": 6.4 },
            "weight": 36,
            "network": {
              "id": 15,
              "name": "BBC America",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 38479, "thetvdb": 277500, "imdb": "tt3552166" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/126/316698.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/126/316698.jpg"
            },
            "summary": "<p>A contemporary, chilling, paranormal tale set in the moody Pacific Northwest, the series spins a fascinating and complex web of drama. As strange, apparently unrelated events start happening, multiple story-lines - a missing wife, an assassin covering his crimes, a child on the run - begin to intertwine to reveal a conspiracy that will forever change our understanding of human nature.</p>",
            "updated": 1535820437,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/37" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1808" }
            }
          },
          {
            "id": 38,
            "url": "http://www.tvmaze.com/shows/38/z-nation",
            "name": "Z Nation",
            "type": "Scripted",
            "language": "English",
            "genres": ["Action", "Horror", "Science-Fiction"],
            "status": "Running",
            "runtime": 60,
            "premiered": "2014-09-12",
            "officialSite": "http://www.syfy.com/znation",
            "schedule": { "time": "22:00", "days": ["Friday"] },
            "rating": { "average": 7.3 },
            "weight": 97,
            "network": {
              "id": 16,
              "name": "Syfy",
              "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
              }
            },
            "webChannel": null,
            "externals": { "tvrage": 41883, "thetvdb": 280494, "imdb": "tt3843168" },
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/156/391143.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/156/391143.jpg"
            },
            "summary": "<p><b>Z Nation</b> starts three years after the zombie virus has gutted the country, a team of everyday heroes must transport the only known survivor of the plague from New York to California, where the last functioning viral lab waits for his blood. Although the antibodies he carries are the world's last, best hope for a vaccine, he hides a dark secret that threatens them all. With humankind's survival at stake, the ragtag band embarks on a journey of survival across three thousand miles of rusted-out post-apocalyptic America.</p>",
            "updated": 1536215230,
            "_links": {
              "self": { "href": "http://api.tvmaze.com/shows/38" },
              "previousepisode": { "href": "http://api.tvmaze.com/episodes/1356759" },
              "nextepisode": { "href": "http://api.tvmaze.com/episodes/1525485" }
            }
          }
        ]
        )
})

app.listen()

app.listen(3000, "192.168.1.36", () =>{
    console.log("connect success")
})