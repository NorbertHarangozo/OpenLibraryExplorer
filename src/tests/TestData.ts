import { Author } from "../models/Author"
import { WorkEntry } from "../models/WorkEntry"

export const mockedAuthorResponse = {
    "numFound":15,
    "start":0,
    "numFoundExact":true,
    "docs":[
       {
          "key":"OL2653686A",
          "type":"author",
          "name":"Robert C. Martin",
          "alternate_names":[
             "Robert Cecil Martin",
             "Uncle Bob",
             "Martin, Robert C.",
             "Martin Robert C.",
             "Robert C Martin"
          ],
          "birth_date":"1952",
          "top_work":"Clean Architecture: A Craftsman's Guide to Software Structure and Design",
          "work_count":20,
          "top_subjects":[
             "Protected DAISY",
             "Accessible book",
             "Computer software",
             "Development",
             "Object-oriented programming (Computer science)",
             "Computer software, development",
             "C++ (Computer program language)",
             "Extreme programming",
             "EXtreme programming",
             "Computer programming"
          ],
          "_version_":1735689590895804425
       },
       {
          "key":"OL9123380A",
          "type":"author",
          "name":"Robert C. Martin",
          "top_work":"Clean Craftsmanship",
          "work_count":4,
          "top_subjects":[
             "Oregon",
             "Coastal plants",
             "programming",
             "Uncle Bob (the Author)",
             "Rare plants",
             "Professional ethics",
             "Netarts Sand Spit Natural Area Preserve (Proposed)",
             "Mathematics",
             "Computer software",
             "Blacklock Point Natural Area Preserve (Proposed)"
          ],
          "_version_":1735714692725211140
       },
       {
          "key":"OL1803786A",
          "type":"author",
          "name":"Robert C. Martin",
          "birth_date":"4 December 1939",
          "death_date":"29 August 2014",
          "top_work":"The deep-sea diver",
          "work_count":1,
          "top_subjects":[
             "Deep diving"
          ],
          "_version_":1735686683860402188
       },
       {
          "key":"OL9386431A",
          "type":"author",
          "name":"Robert C. MARTIN",
          "top_work":"L'architecture logicielle propre",
          "work_count":1,
          "_version_":1735716296320876551
       },
       {
          "key":"OL9400681A",
          "type":"author",
          "name":"Robert C Martin",
          "top_work":"Coincidence",
          "work_count":1,
          "_version_":1735716146232950786
       },
       {
          "key":"OL590748A",
          "type":"author",
          "name":"Martin, Robert C. (Robert Charles)",
          "birth_date":"1966",
          "top_work":"Interpolating beyond the quantization of the Hough transform",
          "work_count":1,
          "_version_":1735702713279184906
       },
       {
          "key":"OL3259664A",
          "type":"author",
          "name":"James C. & Robert Sidney Martin",
          "top_work":"Maps of Texas and the Southwest, 1513-1900",
          "work_count":1,
          "top_subjects":[
             "Texas, maps"
          ],
          "_version_":1735692385299464192
       },
       {
          "key":"OL7172350A",
          "type":"author",
          "name":"Robert C. Solomon, Kathleen M. Higgins, Clancy Martin",
          "top_work":"Introducing Philosophy: A Text with Integrated Readings / Edition 10",
          "work_count":1,
          "top_subjects":[
             "Protected DAISY",
             "Philosophy",
             "Introductions",
             "Accessible book"
          ],
          "_version_":1735707790031192065
       },
       {
          "key":"OL3446308A",
          "type":"author",
          "name":"Martin P. Wattenberg, Robert L. Lineberry George C. Edwards III",
          "top_work":"Government in America People, Politics and Policy",
          "work_count":1,
          "_version_":1736844689489788928
       },
       {
          "key":"OL12245710A",
          "type":"author",
          "name":"Robert C. ; Karl F. Robinson ; Russell C. Tomlinson Martin",
          "work_count":0,
          "_version_":1755031718450954241
       },
       {
          "key":"OL11492769A",
          "type":"author",
          "name":"Robert C. Rathburn & Martin Steinmann, Jr, Editors",
          "work_count":0,
          "_version_":1751625924781015041
       },
       {
          "key":"OL5340805A",
          "type":"author",
          "name":"EDWARDS, GEORGE C. III, MARTIN P. WATTENBERG, AND ROBERT L. LINEBERRY",
          "top_work":"GOVERNMENT IN AMERICA: PEOPLE, POLITICS, AND POLICY",
          "work_count":1,
          "_version_":1736844777389817856
       },
       {
          "key":"OL12191096A",
          "type":"author",
          "name":"Edwards, George C.; Wattenberg, Martin P.; Lineberry, Robert L.",
          "work_count":0,
          "_version_":1754965096215347201
       },
       {
          "key":"OL11600199A",
          "type":"author",
          "name":"George C. Edwards III, Martin P. Wattenberg, and Robert L. Lineberry",
          "work_count":0,
          "_version_":1751802341399461889
       },
       {
          "key":"OL11528145A",
          "type":"author",
          "name":"C. Northcote PARKINSON, Brijen K. GUPTA, Nathan TALBOTT, Charles KAUT, R.E. DOWNS, Martin BRONFENBRENNER, Yuan-Li WU, Robert S. GORALSKI",
          "work_count":0,
          "_version_":1751655006580244481
       }
    ]
 }

export const mockedAuthors: Author[] = [
    {
      key: 'OL2653686A',
      name: 'Robert C. Martin',
      workCount: 20,
      topWork: "Clean Architecture: A Craftsman's Guide to Software Structure and Design"
    },
    {
      key: 'OL9123380A',
      name: 'Robert C. Martin',
      workCount: 4,
      topWork: 'Clean Craftsmanship'
    },
    {
      key: 'OL1803786A',
      name: 'Robert C. Martin',
      workCount: 1,
      topWork: 'The deep-sea diver'
    },
    {
      key: 'OL9386431A',
      name: 'Robert C. MARTIN',
      workCount: 1,
      topWork: "L'architecture logicielle propre"
    },
    {
      key: 'OL9400681A',
      name: 'Robert C Martin',
      workCount: 1,
      topWork: 'Coincidence'
    },
    {
      key: 'OL590748A',
      name: 'Martin, Robert C. (Robert Charles)',
      workCount: 1,
      topWork: 'Interpolating beyond the quantization of the Hough transform'
    },
    {
      key: 'OL3259664A',
      name: 'James C. & Robert Sidney Martin',
      workCount: 1,
      topWork: 'Maps of Texas and the Southwest, 1513-1900'
    },
    {
      key: 'OL7172350A',
      name: 'Robert C. Solomon, Kathleen M. Higgins, Clancy Martin',
      workCount: 1,
      topWork: 'Introducing Philosophy: A Text with Integrated Readings / Edition 10'
    },
    {
      key: 'OL3446308A',
      name: 'Martin P. Wattenberg, Robert L. Lineberry George C. Edwards III',
      workCount: 1,
      topWork: 'Government in America People, Politics and Policy'
    },
    {
      key: 'OL12245710A',
      name: 'Robert C. ; Karl F. Robinson ; Russell C. Tomlinson Martin',
      workCount: 0,
      topWork: undefined
    },
    {
      key: 'OL11492769A',
      name: 'Robert C. Rathburn & Martin Steinmann, Jr, Editors',
      workCount: 0,
      topWork: undefined
    },
    {
      key: 'OL5340805A',
      name: 'EDWARDS, GEORGE C. III, MARTIN P. WATTENBERG, AND ROBERT L. LINEBERRY',
      workCount: 1,
      topWork: 'GOVERNMENT IN AMERICA: PEOPLE, POLITICS, AND POLICY'
    },
    {
      key: 'OL12191096A',
      name: 'Edwards, George C.; Wattenberg, Martin P.; Lineberry, Robert L.',
      workCount: 0,
      topWork: undefined
    },
    {
      key: 'OL11600199A',
      name: 'George C. Edwards III, Martin P. Wattenberg, and Robert L. Lineberry',
      workCount: 0,
      topWork: undefined
    },
    {
      key: 'OL11528145A',
      name: 'C. Northcote PARKINSON, Brijen K. GUPTA, Nathan TALBOTT, Charles KAUT, R.E. DOWNS, Martin BRONFENBRENNER, Yuan-Li WU, Robert S. GORALSKI',
      workCount: 0,
      topWork: undefined
    }
  ]

export const mockedWorkEntriesResponse = {
    "links":{
       "self":"/authors/OL2653686A/works.json",
       "author":"/authors/OL2653686A"
    },
    "size":20,
    "entries":[
       {
          "subjects":[
             "Computer Technology",
             "Nonfiction",
             "Development",
             "Object-oriented programming (Computer science)",
             "C# (Computer program language)",
             "Computer software",
             "C sharp (computer program language)",
             "Microsoft visual basic (computer program)",
             "Microsoft .net"
          ],
          "description":"This is the eBook version of the printed book.With the award-winning book Agile Software Development: Principles, Patterns, and Practices, Robert C. Martin helped bring Agile principles to tens of thousands of Java and C++ programmers. Now .NET programmers have a definitive guide to agile methods with this completely updated volume from Robert C. Martin and Micah Martin, Agile Principles, Patterns, and Practices in C#.This book presents a series of case studies illustrating the fundamentals of Agile development and Agile design, and moves quickly from UML models to real C# code. The introductory chapters lay out the basics of the agile movement, while the later chapters show proven techniques in action. The book includes many source code examples that are also available for download from the authors\u2019 Web site.Readers will come away from this book understandingAgile principles, and the fourteen practices of Extreme ProgrammingSpiking, splitting, velocity, and planning iterations and releasesTest-driven development, test-first design, and acceptance testingRefactoring with unit testingPair programmingAgile design and design smellsThe five types of UML diagrams and how to use them effectivelyObject-oriented package design and design patternsHow to put all of it together for a real-world projectWhether you are a C# programmer or a Visual Basic or Java programmer learning C#, a software development manager, or a business analyst, Agile Principles, Patterns, and Practices in C# is the first book you should read to understand agile software and how it applies to programming in the .NET Framework.",
          "key":"/works/OL15180507W",
          "title":"Agile Principles, Patterns, and Practices in C#",
          "authors":[
             {
                "author":{
                   "key":"/authors/OL2653686A"
                },
                "type":{
                   "key":"/type/author_role"
                }
             },
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653687A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "covers":[
             88621
          ],
          "latest_revision":4,
          "revision":4,
          "created":{
             "type":"/type/datetime",
             "value":"2010-06-30T20:03:50.114169"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-09-13T17:19:03.484443"
          }
       },
       {
          "description":{
             "type":"/type/text",
             "value":"In the <i>Clean Coder: A Code of Conduct for Professional Programmers</i>, legendary software expert Robert C Martin introduces the disciplines, techniques, tools, and practices of true software craftsmanship."
          },
          "covers":[
             7318893,
             7318890
          ],
          "key":"/works/OL16298147W",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "title":"The clean coder",
          "subjects":[
             "Computer programmers",
             "Computer programming",
             "Moral and ethical aspects",
             "Professional ethics"
          ],
          "type":{
             "key":"/type/work"
          },
          "latest_revision":5,
          "revision":5,
          "created":{
             "type":"/type/datetime",
             "value":"2011-11-23T08:51:47.462130"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "lc_classifications":[
             "PN4121 .M3325"
          ],
          "key":"/works/OL3526666W",
          "title":"Practical speech for modern business",
          "first_publish_date":"1963",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "dewey_number":[
             "808.5"
          ],
          "type":{
             "key":"/type/work"
          },
          "subjects":[
             "Public speaking",
             "Art de parler en public"
          ],
          "latest_revision":4,
          "revision":4,
          "created":{
             "type":"/type/datetime",
             "value":"2009-12-10T03:46:37.630386"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2022-07-11T09:59:20.900974"
          }
       },
       {
          "title":"Clean Code - Refactoring, Patterns, Testen und Techniken f\u00fcr sauberen Code",
          "key":"/works/OL17626745W",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "latest_revision":2,
          "revision":2,
          "created":{
             "type":"/type/datetime",
             "value":"2017-03-01T06:11:52.401031"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "subtitle":"Manual de estilo para el desarrollo \u00e1gil de software",
          "key":"/works/OL16793907W",
          "title":"C\u00f3digo Limpio",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "covers":[
             7236652
          ],
          "latest_revision":4,
          "revision":4,
          "created":{
             "type":"/type/datetime",
             "value":"2012-09-06T12:52:23.187846"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "description":{
             "type":"/type/text",
             "value":"4\u00e8me de couverture\r\n\r\n> Si un code sale peut fonctionner, il peut \u00e9galement compromettre la p\u00e9rennit\u00e9 d'une entreprise de d\u00e9veloppement de logiciels. Chaque ann\u00e9e, du temps et des ressources sont gaspill\u00e9s \u00e0 cause d'un code mal \u00e9crit. Toutefois, ce n'est pas une fatalit\u00e9.\r\n> \r\n> Gr\u00e2ce \u00e0 cet ouvrage, vous apprendrez \u00e0 r\u00e9diger du bon code, ainsi qu'\u00e0 le nettoyer \u00ab \u00e0 la vol\u00e9e \u00bb, et vous obtiendrez des applications plus robustes, plus \u00e9volutives et donc plus durables. Concret et p\u00e9dagogique, ce manuel se base sur les bonnes pratiques d'une \u00e9quipe de d\u00e9veloppeurs aguerris r\u00e9unie autour de Robert C. Martin, expert logiciel reconnu. Il vous inculquera les valeurs d'un artisan du logiciel et fera de vous un meilleur programmeur.\r\n> \r\n> Coder proprement est d\u00e9compos\u00e9 en trois parties. La premi\u00e8re d\u00e9crit les principes, les motifs et les pratiques employ\u00e9s dans l'\u00e9criture d'un code propre. La deuxi\u00e8me est constitu\u00e9e de plusieurs \u00e9tudes de cas \u00e0 la complexit\u00e9 croissante. Chacune d'elles est un exercice de nettoyage: vous partirez d'un exemple de code pr\u00e9sentant certains probl\u00e8mes, et l'auteur vous expliquera comment en obtenir une version saine et performante. La troisi\u00e8me partie, enfin, sera votre r\u00e9compense. Son unique chapitre contient une liste d'indicateurs \u00e9prouv\u00e9s par l'auteur qui vous seront pr\u00e9cieux pour rep\u00e9rer efficacement les d\u00e9fauts de votre code.\r\n> \r\n> Apr\u00e8s avoir lu ce livre, vous saurez :\r\n>\r\n> - faire la diff\u00e9rence entre du bon et du mauvais code ;\r\n> - \u00e9crire du bon code et transformer le mauvais code en bon code ;\r\n> - choisir des noms, des fonctions, des objets et des classes appropri\u00e9s ;\r\n> - mettre en forme le code pour une lisibilit\u00e9 maximale ;\r\n> - impl\u00e9menter le traitement des erreurs sans perturber la logique du code ;\r\n> - mener des tests unitaires et pratiquer le d\u00e9veloppement pilot\u00e9 par les tests.\r\n> \r\n>V\u00e9ritable manuel du savoir-faire en d\u00e9veloppement agile, cet ouvrage est un outil indispensable \u00e0 tout d\u00e9veloppeur, ing\u00e9nieur logiciel, chef de projet, responsable d'\u00e9quipe ou analyste des syst\u00e8mes dont l'objectif est de produire un meilleur code."
          },
          "key":"/works/OL20635386W",
          "title":"Coder Proprement",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "covers":[
             9249617
          ],
          "latest_revision":7,
          "revision":7,
          "created":{
             "type":"/type/datetime",
             "value":"2020-01-16T08:51:13.110357"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "subjects":[
             "Agile software development",
             "Reliability",
             "Computer software",
             "Computer software, development",
             "Coding theory"
          ],
          "key":"/works/OL17618370W",
          "title":"Clean Code",
          "authors":[
             {
                "author":{
                   "key":"/authors/OL2653686A"
                },
                "type":{
                   "key":"/type/author_role"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "covers":[
             8065615,
             5547794
          ],
          "subtitle":"A Handbook of Agile Software Craftsmanship",
          "first_publish_date":"2008",
          "first_sentence":{
             "type":"/type/text",
             "value":"You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better programmer. Good. We need better programmers."
          },
          "excerpts":[
             {
                "excerpt":"You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better programmer. Good. We need better programmers."
             }
          ],
          "lc_classifications":[
             "QA76.76.D47 M3652 2008"
          ],
          "dewey_number":[
             "005.1"
          ],
          "latest_revision":8,
          "revision":8,
          "created":{
             "type":"/type/datetime",
             "value":"2017-02-09T02:17:10.400677"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "first_publish_date":"1995",
          "title":"Designing object-oriented C++ applications using the Booch method",
          "covers":[
             89282
          ],
          "lc_classifications":[
             "QA76.64 .M384 1995"
          ],
          "key":"/works/OL3526664W",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "dewey_number":[
             "005.13/3"
          ],
          "type":{
             "key":"/type/work"
          },
          "subjects":[
             "Booch method",
             "C++ (Computer program language)",
             "Computer software",
             "Development",
             "Object-oriented programming (Computer science)",
             "Programmation orient\u00e9e objets (informatique)",
             "Computadores (software)",
             "Logiciels",
             "D\u00e9veloppement",
             "C (langage de programmation)",
             "Programmation orient\u00e2ee objets (informatique)",
             "D\u00e2eveloppement",
             "C plus plus (computer program language)",
             "Computer software, development",
             "Object-oriented programming (computer science)"
          ],
          "latest_revision":11,
          "revision":11,
          "created":{
             "type":"/type/datetime",
             "value":"2009-12-10T03:46:37.630386"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "title":"Agile Software Development Principles Patterns And Practices",
          "covers":[
             7703527
          ],
          "key":"/works/OL17500875W",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "latest_revision":3,
          "revision":3,
          "created":{
             "type":"/type/datetime",
             "value":"2016-10-14T14:35:46.309742"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "title":"Clean Agile",
          "covers":[
             10222947
          ],
          "key":"/works/OL20891686W",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "latest_revision":2,
          "revision":2,
          "created":{
             "type":"/type/datetime",
             "value":"2020-06-30T06:49:50.905508"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "title":"El limpiador de c\u00f3digo",
          "covers":[
             10479789
          ],
          "key":"/works/OL22587735W",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "latest_revision":2,
          "revision":2,
          "created":{
             "type":"/type/datetime",
             "value":"2020-10-15T13:41:06.318290"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "title":"Tiszta k\u00f3d",
          "key":"/works/OL16810795W",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "latest_revision":2,
          "revision":2,
          "created":{
             "type":"/type/datetime",
             "value":"2014-01-09T08:39:17.071007"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "subjects":[
             "Development",
             "Computer software",
             "Software patterns",
             "Object-oriented programming (Computer science)",
             "Programming languages (electronic computers)"
          ],
          "key":"/works/OL19841455W",
          "title":"Pattern languages of program design 3",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             },
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2730508A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "covers":[
             134342
          ],
          "latest_revision":3,
          "revision":3,
          "created":{
             "type":"/type/datetime",
             "value":"2019-06-29T17:00:52.539295"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "subjects":[
             "C plus plus (computer program language)",
             "C++ (Computer program language)"
          ],
          "key":"/works/OL20988609W",
          "title":"More C++ Gems",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             },
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL3385195A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "covers":[
             355326
          ],
          "latest_revision":3,
          "revision":3,
          "created":{
             "type":"/type/datetime",
             "value":"2020-07-31T15:35:37.558923"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "title":"Czysty kod",
          "covers":[
             8783963
          ],
          "key":"/works/OL20132627W",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "latest_revision":2,
          "revision":2,
          "created":{
             "type":"/type/datetime",
             "value":"2019-09-17T13:32:18.781818"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "first_publish_date":"2003",
          "title":"UML for Java programmers",
          "covers":[
             87160
          ],
          "lc_classifications":[
             "QA76.73.J38 M3515 2003"
          ],
          "key":"/works/OL3526668W",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "dewey_number":[
             "005.13/3"
          ],
          "type":{
             "key":"/type/work"
          },
          "subjects":[
             "Java (Computer program language)",
             "Development",
             "UML (Computer science)",
             "Computer software"
          ],
          "latest_revision":6,
          "revision":6,
          "created":{
             "type":"/type/datetime",
             "value":"2009-12-10T03:46:37.630386"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-23T08:17:49.404389"
          }
       },
       {
          "subjects":[
             "Extreme programming",
             "Computer software, development",
             "Computer software",
             "Development",
             "EXtreme programming"
          ],
          "key":"/works/OL21372994W",
          "title":"Extreme Programming in Practice",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2670952A"
                }
             },
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "covers":[
             135924
          ],
          "latest_revision":2,
          "revision":2,
          "created":{
             "type":"/type/datetime",
             "value":"2020-08-19T00:59:04.514132"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2020-12-03T14:21:34.759811"
          }
       },
       {
          "title":"Clean Architecture",
          "covers":[
             8605114,
             8435213,
             8510059,
             10660416
          ],
          "key":"/works/OL19809141W",
          "authors":[
             {
                "author":{
                   "key":"/authors/OL2653686A"
                },
                "type":{
                   "key":"/type/author_role"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "subtitle":"A Craftsman's Guide to Software Structure and Design",
          "subjects":[
             "Development",
             "Software architecture",
             "Computer software",
             "Computer programming",
             "History",
             "Computer architecture"
          ],
          "latest_revision":3,
          "revision":3,
          "created":{
             "type":"/type/datetime",
             "value":"2019-06-26T05:47:06.833128"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2021-03-24T09:01:50.654283"
          }
       },
       {
          "title":"Clean Code: Guida per diventare bravi artigiani nello sviluppo agile di software (Maestri di programmazione Vol. 2) (Italian Edition)",
          "created":{
             "type":"/type/datetime",
             "value":"2019-03-13T21:05:24.380914"
          },
          "covers":[
             8435210
          ],
          "last_modified":{
             "type":"/type/datetime",
             "value":"2019-03-13T21:05:24.380914"
          },
          "latest_revision":1,
          "key":"/works/OL19316344W",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "revision":1
       },
       {
          "subjects":[
             "C & Visual C",
             "C++ (Computer program language)",
             "Object-oriented programming (Computer science)",
             "Agile software development",
             "Extreme programming",
             "EXtreme programming"
          ],
          "key":"/works/OL7952934W",
          "title":"Agile Software Development, Principles, Patterns, and Practices",
          "authors":[
             {
                "type":{
                   "key":"/type/author_role"
                },
                "author":{
                   "key":"/authors/OL2653686A"
                }
             }
          ],
          "type":{
             "key":"/type/work"
          },
          "covers":[
             91081
          ],
          "latest_revision":7,
          "revision":7,
          "created":{
             "type":"/type/datetime",
             "value":"2009-12-10T22:14:59.472617"
          },
          "last_modified":{
             "type":"/type/datetime",
             "value":"2020-12-05T17:20:44.409542"
          }
       }
    ]
 }

export const mockedWorkEntries: WorkEntry[] = [
  {
    subjects: [
      'Computer Technology',
      'Nonfiction',
      'Development',
      'Object-oriented programming (Computer science)',
      'C# (Computer program language)',
      'Computer software',
      'C sharp (computer program language)',
      'Microsoft visual basic (computer program)',
      'Microsoft .net'
    ],
    description: 'This is the eBook version of the printed book.With the award-winning book Agile Software Development: Principles, Patterns, and Practices, Robert C. Martin helped bring Agile principles to tens of thousands of Java and C++ programmers. Now .NET programmers have a definitive guide to agile methods with this completely updated volume from Robert C. Martin and Micah Martin, Agile Principles, Patterns, and Practices in C#.This book presents a series of case studies illustrating the fundamentals of Agile development and Agile design, and moves quickly from UML models to real C# code. The introductory chapters lay out the basics of the agile movement, while the later chapters show proven techniques in action. The book includes many source code examples that are also available for download from the authors’ Web site.Readers will come away from this book understandingAgile principles, and the fourteen practices of Extreme ProgrammingSpiking, splitting, velocity, and planning iterations and releasesTest-driven development, test-first design, and acceptance testingRefactoring with unit testingPair programmingAgile design and design smellsThe five types of UML diagrams and how to use them effectivelyObject-oriented package design and design patternsHow to put all of it together for a real-world projectWhether you are a C# programmer or a Visual Basic or Java programmer learning C#, a software development manager, or a business analyst, Agile Principles, Patterns, and Practices in C# is the first book you should read to understand agile software and how it applies to programming in the .NET Framework.',
    key: 'OL15180507W',
    title: 'Agile Principles, Patterns, and Practices in C#',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
        {
            author: { key: "/authors/OL2653687A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    covers: [ 88621 ],
    latest_revision: 4,
    revision: 4,
    created: { type: '/type/datetime', value: '2010-06-30T20:03:50.114169' },
    last_modified: { type: '/type/datetime', value: '2021-09-13T17:19:03.484443' }
  },
  {
    description: {
      type: '/type/text',
      value: 'In the <i>Clean Coder: A Code of Conduct for Professional Programmers</i>, legendary software expert Robert C Martin introduces the disciplines, techniques, tools, and practices of true software craftsmanship.'
    },
    covers: [ 7318893, 7318890 ],
    key: 'OL16298147W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    title: 'The clean coder',
    subjects: [
      'Computer programmers',
      'Computer programming',
      'Moral and ethical aspects',
      'Professional ethics'
    ],
    type: { key: '/type/work' },
    latest_revision: 5,
    revision: 5,
    created: { type: '/type/datetime', value: '2011-11-23T08:51:47.462130' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    lc_classifications: [ 'PN4121 .M3325' ],
    key: 'OL3526666W',
    title: 'Practical speech for modern business',
    first_publish_date: '1963',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    dewey_number: [ '808.5' ],
    type: { key: '/type/work' },
    subjects: [ 'Public speaking', 'Art de parler en public' ],
    latest_revision: 4,
    revision: 4,
    created: { type: '/type/datetime', value: '2009-12-10T03:46:37.630386' },
    last_modified: { type: '/type/datetime', value: '2022-07-11T09:59:20.900974' }
  },
  {
    title: 'Clean Code - Refactoring, Patterns, Testen und Techniken für sauberen Code',
    key: 'OL17626745W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    latest_revision: 2,
    revision: 2,
    created: { type: '/type/datetime', value: '2017-03-01T06:11:52.401031' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    subtitle: 'Manual de estilo para el desarrollo ágil de software',
    key: 'OL16793907W',
    title: 'Código Limpio',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    covers: [ 7236652 ],
    latest_revision: 4,
    revision: 4,
    created: { type: '/type/datetime', value: '2012-09-06T12:52:23.187846' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    description: {
      type: '/type/text',
      value: '4ème de couverture\r\n' +
        '\r\n' +
        "> Si un code sale peut fonctionner, il peut également compromettre la pérennité d'une entreprise de développement de logiciels. Chaque année, du temps et des ressources sont gaspillés à cause d'un code mal écrit. Toutefois, ce n'est pas une fatalité.\r\n" +
        '> \r\n' +
        "> Grâce à cet ouvrage, vous apprendrez à rédiger du bon code, ainsi qu'à le nettoyer « à la volée », et vous obtiendrez des applications plus robustes, plus évolutives et donc plus durables. Concret et pédagogique, ce manuel se base sur les bonnes pratiques d'une équipe de développeurs aguerris réunie autour de Robert C. Martin, expert logiciel reconnu. Il vous inculquera les valeurs d'un artisan du logiciel et fera de vous un meilleur programmeur.\r\n" +
        '> \r\n' +
        "> Coder proprement est décomposé en trois parties. La première décrit les principes, les motifs et les pratiques employés dans l'écriture d'un code propre. La deuxième est constituée de plusieurs études de cas à la complexité croissante. Chacune d'elles est un exercice de nettoyage: vous partirez d'un exemple de code présentant certains problèmes, et l'auteur vous expliquera comment en obtenir une version saine et performante. La troisième partie, enfin, sera votre récompense. Son unique chapitre contient une liste d'indicateurs éprouvés par l'auteur qui vous seront précieux pour repérer efficacement les défauts de votre code.\r\n" +
        '> \r\n' +
        '> Après avoir lu ce livre, vous saurez :\r\n' +
        '>\r\n' +
        '> - faire la différence entre du bon et du mauvais code ;\r\n' +
        '> - écrire du bon code et transformer le mauvais code en bon code ;\r\n' +
        '> - choisir des noms, des fonctions, des objets et des classes appropriés ;\r\n' +
        '> - mettre en forme le code pour une lisibilité maximale ;\r\n' +
        '> - implémenter le traitement des erreurs sans perturber la logique du code ;\r\n' +
        '> - mener des tests unitaires et pratiquer le développement piloté par les tests.\r\n' +
        '> \r\n' +
        ">Véritable manuel du savoir-faire en développement agile, cet ouvrage est un outil indispensable à tout développeur, ingénieur logiciel, chef de projet, responsable d'équipe ou analyste des systèmes dont l'objectif est de produire un meilleur code."
    },
    key: 'OL20635386W',
    title: 'Coder Proprement',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    covers: [ 9249617 ],
    latest_revision: 7,
    revision: 7,
    created: { type: '/type/datetime', value: '2020-01-16T08:51:13.110357' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    subjects: [
      'Agile software development',
      'Reliability',
      'Computer software',
      'Computer software, development',
      'Coding theory'
    ],
    key: 'OL17618370W',
    title: 'Clean Code',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    covers: [ 8065615, 5547794 ],
    subtitle: 'A Handbook of Agile Software Craftsmanship',
    first_publish_date: '2008',
    first_sentence: {
      type: '/type/text',
      value: 'You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better programmer. Good. We need better programmers.'
    },
    excerpts: [ { excerpt: "You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better programmer. Good. We need better programmers."} ],
    lc_classifications: [ 'QA76.76.D47 M3652 2008' ],
    dewey_number: [ '005.1' ],
    latest_revision: 8,
    revision: 8,
    created: { type: '/type/datetime', value: '2017-02-09T02:17:10.400677' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    first_publish_date: '1995',
    title: 'Designing object-oriented C++ applications using the Booch method',
    covers: [ 89282 ],
    lc_classifications: [ 'QA76.64 .M384 1995' ],
    key: 'OL3526664W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    dewey_number: [ '005.13/3' ],
    type: { key: '/type/work' },
    subjects: [
      'Booch method',
      'C++ (Computer program language)',
      'Computer software',
      'Development',
      'Object-oriented programming (Computer science)',
      'Programmation orientée objets (informatique)',
      'Computadores (software)',
      'Logiciels',
      'Développement',
      'C (langage de programmation)',
      'Programmation orientâee objets (informatique)',
      'Dâeveloppement',
      'C plus plus (computer program language)',
      'Computer software, development',
      'Object-oriented programming (computer science)'
    ],
    latest_revision: 11,
    revision: 11,
    created: { type: '/type/datetime', value: '2009-12-10T03:46:37.630386' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    title: 'Agile Software Development Principles Patterns And Practices',
    covers: [ 7703527 ],
    key: 'OL17500875W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    latest_revision: 3,
    revision: 3,
    created: { type: '/type/datetime', value: '2016-10-14T14:35:46.309742' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    title: 'Clean Agile',
    covers: [ 10222947 ],
    key: 'OL20891686W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    latest_revision: 2,
    revision: 2,
    created: { type: '/type/datetime', value: '2020-06-30T06:49:50.905508' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    title: 'El limpiador de código',
    covers: [ 10479789 ],
    key: 'OL22587735W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    latest_revision: 2,
    revision: 2,
    created: { type: '/type/datetime', value: '2020-10-15T13:41:06.318290' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    title: 'Tiszta kód',
    key: 'OL16810795W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    latest_revision: 2,
    revision: 2,
    created: { type: '/type/datetime', value: '2014-01-09T08:39:17.071007' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    subjects: [
      'Development',
      'Computer software',
      'Software patterns',
      'Object-oriented programming (Computer science)',
      'Programming languages (electronic computers)'
    ],
    key: 'OL19841455W',
    title: 'Pattern languages of program design 3',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
        {
            author: { key: "/authors/OL2730508A" },
            type: { key: "/type/author_role" }
        }
    ],
    type: { key: '/type/work' },
    covers: [ 134342 ],
    latest_revision: 3,
    revision: 3,
    created: { type: '/type/datetime', value: '2019-06-29T17:00:52.539295' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    subjects: [
      'C plus plus (computer program language)',
      'C++ (Computer program language)'
    ],
    key: 'OL20988609W',
    title: 'More C++ Gems',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
        {
            author: { key: "/authors/OL3385195A" },
            type: { key: "/type/author_role" }
        }
    ],
    type: { key: '/type/work' },
    covers: [ 355326 ],
    latest_revision: 3,
    revision: 3,
    created: { type: '/type/datetime', value: '2020-07-31T15:35:37.558923' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    title: 'Czysty kod',
    covers: [ 8783963 ],
    key: 'OL20132627W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    latest_revision: 2,
    revision: 2,
    created: { type: '/type/datetime', value: '2019-09-17T13:32:18.781818' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    first_publish_date: '2003',
    title: 'UML for Java programmers',
    covers: [ 87160 ],
    lc_classifications: [ 'QA76.73.J38 M3515 2003' ],
    key: 'OL3526668W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    dewey_number: [ '005.13/3' ],
    type: { key: '/type/work' },
    subjects: [
      'Java (Computer program language)',
      'Development',
      'UML (Computer science)',
      'Computer software'
    ],
    latest_revision: 6,
    revision: 6,
    created: { type: '/type/datetime', value: '2009-12-10T03:46:37.630386' },
    last_modified: { type: '/type/datetime', value: '2021-03-23T08:17:49.404389' }
  },
  {
    subjects: [
      'Extreme programming',
      'Computer software, development',
      'Computer software',
      'Development',
      'EXtreme programming'
    ],
    key: 'OL21372994W',
    title: 'Extreme Programming in Practice',
    authors: [
        {
            author: { key: "/authors/OL2670952A" },
            type: { key: "/type/author_role" }
        },
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        }
    ],
    type: { key: '/type/work' },
    covers: [ 135924 ],
    latest_revision: 2,
    revision: 2,
    created: { type: '/type/datetime', value: '2020-08-19T00:59:04.514132' },
    last_modified: { type: '/type/datetime', value: '2020-12-03T14:21:34.759811' }
  },
  {
    title: 'Clean Architecture',
    covers: [ 8605114, 8435213, 8510059, 10660416 ],
    key: 'OL19809141W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    subtitle: "A Craftsman's Guide to Software Structure and Design",
    subjects: [
      'Development',
      'Software architecture',
      'Computer software',
      'Computer programming',
      'History',
      'Computer architecture'
    ],
    latest_revision: 3,
    revision: 3,
    created: { type: '/type/datetime', value: '2019-06-26T05:47:06.833128' },
    last_modified: { type: '/type/datetime', value: '2021-03-24T09:01:50.654283' }
  },
  {
    title: 'Clean Code: Guida per diventare bravi artigiani nello sviluppo agile di software (Maestri di programmazione Vol. 2) (Italian Edition)',
    created: { type: '/type/datetime', value: '2019-03-13T21:05:24.380914' },
    covers: [ 8435210 ],
    last_modified: { type: '/type/datetime', value: '2019-03-13T21:05:24.380914' },
    latest_revision: 1,
    key: 'OL19316344W',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    revision: 1
  },
  {
    subjects: [
      'C & Visual C',
      'C++ (Computer program language)',
      'Object-oriented programming (Computer science)',
      'Agile software development',
      'Extreme programming',
      'EXtreme programming'
    ],
    key: 'OL7952934W',
    title: 'Agile Software Development, Principles, Patterns, and Practices',
    authors: [
        {
            author: { key: "/authors/OL2653686A" },
            type: { key: "/type/author_role" }
        },
    ],
    type: { key: '/type/work' },
    covers: [ 91081 ],
    latest_revision: 7,
    revision: 7,
    created: { type: '/type/datetime', value: '2009-12-10T22:14:59.472617' },
    last_modified: { type: '/type/datetime', value: '2020-12-05T17:20:44.409542' }
  }
]