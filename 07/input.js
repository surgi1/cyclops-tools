// added also https://github.com/Azure-Samples/jfkfileshooverbot/blob/master/bot/cia-cryptonyms.json
let dict = `AEACRE
AECASSOWARY
AECROAK
AEFOXTROT
AELADLE
AERODYNAMIC
AERANTER
AESCREEN
AETENURE
AMBIDDY
AMBLOOD
AMCLATTER
AMBUD
AMCLEOPATRA
AMCOBRA
AMCROW
AMCRUZ
AMCRUX
AMFOX
AMGLOSSY
AMHALF
AMJUDGE
AMLASH
AMOT
AMPALM
AMQUACK
AMTHUG
AMTRUNK
AMWHIP
AMWORLD
BGGYPSY
BOND
Caesar
CALLIGERIS
CARTEL
CKGULL
CKSPHERE
CKVANQUISH
CKTRIGON
CKTWINE
CKUTOPIA
CKQUARTZ
CORONA
DBACHILLES
DBANABASIS
DBROCKSTARS
Doc
DTFROGS
DYCLAIM
Eddie
ESCOBILLA
ESMERALDITE
ESSENCE
FJHOPEFUL
Frank
Goss
GROSSBAHN
GTACCORD
GTCOWL
GTFITNESS
GTGAUZE
GTGENTILE
GTTICKLE
GTJOGGER
GTMILLION
GTWEIGH
Hank
HTAUTOMAT
HTKEEPER
HTLINGUAL
HTNEIGH
HTPLUME
Ike
Jack
JMADD
JMATE
JMBELL
JMBLUG
JMFURY
JMGLOW
JMTIDE
JMTRAX
JMWAVE
JMZIP
Kent
KKMOUNTAIN
KMFLUSH
KMPAJAMA
KMPLEBE
KUBARK
KUBASS
KUCAGE
KUCHAP
KUCITY
KUCLUB
KUDESK
KUDOVE
KUFIRE
KUGOWN
KUHOOK
KUJAZZ
KUJUMP
KUKNOB
KUMONK
KUPALM
KURIOT
KUSODA
KUTUBE
KUTWIN
KUWOLF
KUWRAP
Larry
LCFLUTTER
LCPANGS
LNHARP
LIENVOY
LINC
LINCOLN
LIONIZER
LITENSOR
LITEMPO
LILINK
LIOVAL
LICOWL
LICOZY
LICALLA
LIMBRACE
LISAMPAN
LICOBRA
LIFIRE
MHCHAOS
Mike
MJTRUST
MKCHICKWIT
MKDELTA
MKNAOMI
MKOFTEN
MKSEARCH
MKULTRA
MPBLOTCH
Nick
ODACID
ODEARL
ODENVY
ODEUM
ODOATH
ODOPAL
ODUNIT
ODURGE
ODYOKE
OFFSPRING
PANCHO
PBFORTUNE
PBHISTORY
PBJOINTLY
PBCRUET
PBPRIME
PBRUMEN
PBS
PBSUCCESS
POCAPON
PODAM
PYREX
QJWIN
QKBROIL
QKCIGAR
QKELUSION
QKFLOWAGE
QKENCHANT
QKFLOWAGE
QKHILLTOP
QRDYNAMIC
QRTENURE
QTGULL
RANTER
RUFUS
SARANAC
SCRANTON
SD
SGUAT
SHELLAC
SHERWOOD
SKILLET
SKIMMER
SLINC
STANDEL
STORMY
SMOTH
SYNCARP
TPBEDAMN
TPAJAX
TPCREDO
TPROACH
TPTONIC
UNREST
UPTHRUST
USAGE
UTILITY
WASHTUB
WEMCA
WSBURNT
WSHOOFS
ZIPPER
ZRRIFLE
APPLE
ARTICHOKE
AZORIAN
BGGYPSY
BIRCH
BLACKSHIELD
BLUEBIRD
BOND
CATIDE
CHARITY
CHERRY
CKTAW
DTFROGS
ESCOBILLA
ESMERALDITE
ESQUIRE
ESSENCE
FDTRODPINT
FIR
FUBELT
FJGROUND
FJHOPEFUL
FPBERM
GESENIOR
GPFLOOR
GPIDEAL
GRATTIC 
GUSTO
HBFAIRY
HTCURIO
IAFEATURE
IDIOM
Project
JENNIFER
KEMPSTER
KMHYMNAL
LEMON
LNWILT
LPMEDLEY
MAGPIE
MATADOR
MOCKINGBIRD
MONGOOSE
OAK
PANCHO
PAPERCLIP
PHOENIX
PINE
RAINBOW
QKWAVER
RUFUS
RYBAT
SARANAC
SCRANTON
SGCIDER
SGUAT
SHERWOOD
SKILLET
SKIMMER
SLINC
STANDEL
STARGATE
STBAILEY
STBARNUM
STCIRCUS
STSPIN
SYNCARP
THERMOS
THROWOFF
OPERATION
TROPIC
VALUABLE
WASHTUB
WBFISHY
WSBURNT
WSHOOFS
ZAPATA`.split('\n');

let dg = `AE
AL
AM
AV
BE
BG
BI
CA
CK
DB
DI
DM
DN
DU
EC
ES
FU
GT
HA
IA
IR
JM
KK
KU
LC
LN
LI
MH
MJ
MK
MO
OD
PB
PD
PO
SD
SM
ST
SZ
TP
TU
WI
DT
ER
FJ
HB
HO
HT
JU
KM
KO
QK
SC
SE
SG
WO
WS
ZI`.split("\n")


let cryptonyms = {
  "AE": "Soviet Union sources, in particular defectors and agents.",
  "AEBARMAN": "Soviet officer Yuri Ivonovich Nosenko, who defected in Feb 1964 with information about Oswald.",
  "AEBURBLE": "Stateside Soviet double-agent controlled by the FBI, and code-named TUMBLEWEED by the FBI. Actual name Guenter Schulz.",
  "AEDINOSAUR": "Soviet Russia Division project.  Designed to get censored books inside the Soviet Union.",
  "AEDIPPER-20": "Piotr Deriabin - aka Peter Deryabin - a Soviet defector during 1954. [status: Probable]",
  "AEDONOR": "Soviet officer Yuri Ivonovich Nosenko, who defected in Feb 1964 with information about Oswald.",
  "AEFOXTROT": "Soviet officer Yuri Ivonovich Nosenko, who defected in Feb 1964 with information about Oswald.",
  "AEGENERATE": "A target in Mexico City that was wiretapped by LIFEAT'S listening post, referred to as the AEGENERATE LP. This was an important CI/CE operation that involved the NSA. During late October 1963, Staff D concluded that the subject was not currently communicating from \"his shop\". [status: Probable]",
  "AEGUSTO": "Yuriy Loginov, a KGB officer who became an in-place double agent for the CIA. [status: Probable]",
  "AEJAMMER": "Translations and exploitations of Soviet mail intercept programs.",
  "AELADLE": "Anatoliy Golitsyn, a Soviet defector prized by CIA CounterIntelligence head James Angleton.",
  "AEMIQUELET-2": "A suspect Soviet support agent in Mexico City in 1963.  \"Miquilet\" means musket.   [status: Probable]",
  "AEOCEAN": "The legal travelers program; i.e., the intelligence use of legal travelers to the Soviet Union. ",
  "AEOCEAN-3": "Philip R. Neilson was the agent used by CIA Officer Jacques Richardson aka Thomas B. Casasin for the CIA's Legal Travelers Program inside the Soviet Union. This agent similar to Lee Harvey Oswald was able to marry a Russian woman named Tamara Kungarova and later immigrate to France with her. ",
  "AM": "Operations, organizations, and individuals relating to Cuba.",
  "AMAPACHE-2": "Iglesais Pons, JMWAVE FI asset, arrived Key West 6/16/61 on boat PANMAJA.",
  "AMAPOLA": "A Cuban agent in Miami, run by the Cuban Intelligence Service (CUIS).  ",
  "AMBANG": "Initially, MRP; in 1962 the group outside of Cuba became JURE.",
  "AMBANG-1": "Manuel Ray Rivero, leader of the Revolutionary Movement of the People (MRP) and later Junta Revolucionaria Cubana (JURE).  ",
  "AMBANG-2": "Ignacio Mendoza y de la Torre.",
  "AMBANG-3": "Jose Antonio Duarte Oropesa",
  "AMBANG-4": "Rogelio Winceslao Cisneros y Diaz, one of the leaders of MRP inside Cuba; shortly after his arrival in the US, the MRP group split off and became JURE.",
  "AMBANG-5": "Oswaldo Rodriguez Moura.",
  "AMBANTY": "Paramilitary operation of internal resistance in Cuba, originally called AMCOBRA, rolled up by Castro in 1964.",
  "AMBANTY-1": "Colonel Abad was his pseudonym; his actual identity was probably Esteban Marquez Novo.",
  "AMBARB": "Propaganda project to place DRE members in universities throughout Latin America.",
  "AMBARK-1": "Hernandez (first name unknown). [status: Unknown]",
  "AMBASS-1": "Anis Felaifel, the chief of intelligence for the MRR.",
  "AMBIDDY-1": "Manuel Artime Buesa, a prominent Cuban exile who was in the Bay of Pigs invasion, in 1963 moved to Nicaragua as leader of operation AMWORLD.",
  "AMBLAB-1": "AMBLAB-1 is \"Alligator.\" Alligator is another messenger (besides AMULAR) used by Silvio Cardenas as a channel to William Pawley. Cardenas was the contact person for Rubio Padilla to communicate with Pawley. Rubio, Cardenas, and Pepin Rivero were active in the anti-Castro Accion Democratica Christiana (ADC) group in Cuba. ",
  "AMBLEAK-1": "Estaben Joaquin Blanco Sanchez, an official of Rescate.  Also known as Fernando Fernandez Cavada y Paris, an official of UR.  ",
  "AMBLOOD": "Luis Torroella y Martin Rivero, former Cuban Treasury minister who was executed in 1962 for his role in planning to kill Fidel Castro.",
  "AMBLYGON": "Rolando Masferrer Rojas.  Was a casual informant - not an employee - from 1948-1950. [status: Probable]",
  "AMBOAR": "Mitchell Livingston Werbell, III [status: Probable]",
  "AMBRONC-1": "Eduardo Martin y Elena",
  "AMBRONC-5": "Juan Manuel Guillot Castelloro aka Renato M. Lopez Zamoka",
  "AMBRUSH": "Intel Section of the FRD (Cuban Democratic Revolutionary Front).  Later described as the CRC's security and counter-intelligence team.",
  "AMBUD": "Cuban Revolutionary Council (CRC), Cuban exile organization formed on 22 Mar 1961 under U.S. guidance to unify various exile groups.",
  "AMBUD-1": "Jose Miro Cardona, first Prime Minister of Cuba under Castro, who left Cuba and headed the Cuban Revolutionary Council (CRC) exile group.",
  "AMCALL": "Catholic Action group. [status: Probable]",
  "AMCALL-1": "Reinol Gonzalez Gonzalez, head of the Catholic-based MRP in Cuba until arrested at the Cesar Odio farm in October 1961.  Also referred to as \"Reynoldo\". His war name was \"Antonio\".\n",
  "AMCALL-2": "Known as \"Pepe Alegria\", and possibly the man known to Antonio Veciana as \"Melton\".  HIs actual identity may have been CIA officer James O'Mailia.  O'Mailia was also known as \"Pepe\".   [status: Speculative]",
  "AMCANOE": "Project of U.S. contacts for a resistance group in Cuba, incl. support of Unidad de Liberacion Nacional (ULN).  Paulino Sierra worked with this group in an effort to unify exiles.",
  "AMCANOE-1": "Eduardo Garcia Molina.",
  "AMCANOE-3": "Antonio Jose Ramirez Mendez aka Tony Ramallo",
  "AMCANOE-7": "Benjamin Acosta Valdes.",
  "AMCANOE-9": "Juan Amestoy Dominguez.",
  "AMCAPE-1": "Tad Szulc, New York Times journalist involved in AMTRUNK project, suspected by CIA of being hostile foreign agent.",
  "AMCARBON-1": "Al Burt, Miami Herald journalist used as source and \"operational support\" for CIA's JMWAVE station.",
  "AMCARBON-2": "A Miami Herald journalist who introduced Shackley to Al Burt/AMCARBON-1 in late 1962 to ensure that CIA always had access to a Herald reporter.  One possibility is Dom Bonafede, who was the chief Latin American correspondent until mid-1963. [status: Speculative]",
  "AMCARBON-3": "Donald Dean Bohning, Latin American editor of Miami Herald and CIA source.",
  "AMCHEER": "The AMCHEERS were a group of approximately 100 older, non-political Cubans, who received training from Dave Morales at JMWAVE as reserve intelligence personnel—80 had been trained by April 1961. ",
  "AMCHEER-1": "Julio G. Garcia aka Al Smith",
  "AMCIGAR": "Frente Revolucionario Democratico (FRD) Executive Committee; changed name in November 1960 to AMPORT.",
  "AMCLATTER-1": "Bernard Leon Barker, Cuban exile and contract agent for CIA, worked with E. Howard Hunt and Frank Sturgis. One of the Watergate burglars.",
  "AMCLATTER-4": "Pedro Fernandez",
  "AMCLATTER-5": "Alberto de Jesus Alberty Garcia.",
  "AMCLATTER-6": "Associate of Bernard Barker (AMCLATTER-1); identity unknown.\n [status: Probable]",
  "AMCLEVE-15": "Luis Posada Carriles, aka Luis Clemente Faustino Posada, Luis Clemente Posada, Luis Clemente Faustino Posada Carriles, El Bambi.   ",
  "AMCOAX-1": "Jose Pujals Mederos.  His patronymic is also seen as Pujol and Pujols. Aliases included Chacho and Ernesto. [status: Probable]",
  "AMCOBRA": "Paramilitary operation of internal resistance in Cuba, renamed AMBANTY, rolled up by Castro in 1964. One of the two teams infiltrated into Cuba during the Cuban missile crisis.",
  "AMCOG": "A “complex” operational net inside Cuba.",
  "AMCOG-1": "Ramón Grau Alsina, a.k.a. Mongo.  Brother of AMCOG-2.  Nephew and later adopted son of AMCOG-3.",
  "AMCOG-2": "Mrs. (Maria) Leopoldina Grau Alsina de Agüero, aka “Polita.” ",
  "AMCOG-3": "Ramon Grau San Martin, uncle of AMCOG-2 and AMCOG-1 (later foster father of AMCOG-1).  Former (1944-48) Cuban President.\n \n",
  "AMCOG-5": "Alleged sighting of Oswald in Cuba by a woman who was a source for AMCOG-5.",
  "AMCONCERT-1": "Francisco Wilfredo Varona Alonso, AKA \"Pancho,\" AKA \"Paco.\"  No relation to FRD chief Tony Varona.",
  "AMCOO": "Delia Failde, the “Dragon Lady”, operator of commercial boats including the Veramar used in CIA exfiltrations.",
  "AMCOOP-1": "Miguel Xiques Macias.  Allied with AMCALL-1 during 1961.",
  "AMCORE": "A political action/propaganda operation using radio commentators to promote resistance, harassment, and sabotage against the Castro government.",
  "AMCORE-1": "Abel Mestre, former owner of television and radio station \"Circuito CMQ\" in Cuba.",
  "AMCORE-2": "Luis Ernesto Conte Aguero, former radio and TV commentator in Cuba who subsequently \"worked on propaganda for the FRD\" under AMCORE-1.",
  "AMCOUP-1": "Ralph Brent aka Rolf Brent, president of WRUL and in charge of programming.   [status: Probable]",
  "AMCOVE": "An \"operation centered around an FI (Foreign Intelligence) net in Cuba to report intelligence information via Secret Writing.\"",
  "AMCOVE-1": "Alejandra Sanchez.",
  "AMCRAG-1": "Francisco Bilbao Alvarez.",
  "AMCROAK-1": "Bernardo Milanes Lopez,  Castro’s mother’s doctor, recruited by Tony Sforza in Madrid in 1963.  Part of Operation Raphael, a plot to assassinate Fidel, Raul, and Che.",
  "AMCROW-1": "Oscar de la Vega Torres",
  "AMDENIM-1": "Alberto Fernandez Hechevarria, aka Echevarria, Cuban exile whose boat Tejana was used in anti-Castro activities.  Leader of the paramilitary wing of the Unidad Revolucionario (UR).  A source on CIA unsanctioned exile missions such as those conducted by Alpha 66.",
  "AMDENIM-11": "Eduardo Perez Gonzalez, aka Eddie Bayo",
  "AMDENIM-14": "Antonio (\"Tony\") Cuesta Vallee, aka Lobanillo, military operations officer for Alpha-66 and other militant anti-Castro organizations.",
  "AMDENIM-4": "Larry Laborde, captain of the Tejana III for many years.  The vessel was used for resupply and infiltration operations until Laborde was laid off in 1962.",
  "AMDESK-1": "Ricardo Anibal Morales Navarrete, aka Monkey Morales.",
  "AMDIP-1": "Tony Varona, full name Manuel Antonio de Varona.  He was president of the CRC (Cuban Revolutionary Council).",
  "AMDIP-2": "Jesus Exposito Lorenzo [status: Unknown]",
  "AMDIP-3": "Ramon Augusto Ruisanchez",
  "AMDITTO-23": "Orlando Bosch Avila, a famous Cuban exile who led the MIRR.  The MIRR engaged in a number of raids directed at the sugar industry in Cuba during 1963 in an effort to disrupt the economy.  Bosch was linked to a number of bombing attacks directed at Cuba, particularly during the 1960s and 1970s. \n",
  "AMDOFF-1": "Juan Orta, Director of the Office of the Prime Minister from 1959-1961.  Described as Fidel Castro's private secretary.   [status: Probable]",
  "AMDOT": "An Army team that conducts training at Eglin Air Force Base. CIA officer Norman Kiggins (possibly Bob Wall) was one of the trainers. [status: Probable]",
  "AMECRU-1": "Guillermo Alonso Pujol, who was Vice-President of Cuba from 1948 to 1952 in the government of Carlos Prio. His son was among the exiles captured at the Bay of Pigs.",
  "AMEER": "The AAA, or \"Triple A\", a wing of the Autentico party.  Autentico led Cuba between 1944-1952, the first four years by Ramon Grau Martin and the latter four years by Carlos Prio.",
  "AMEER-1": "Aureliano Sanchez Arango, head of the AAA, a wing of the Autentico party in Cuba.  Sanchez was associated with Gerry Hemming and initially endorsed the anti-Castro activities of Hemming's Interpen group. ",
  "AMEMBER-1": "Julio Lobo, sugar magnate in Cuba and later an exile and donor to the anti-Castro cause.  Known in Cuba as \"Mr. Sugar\".",
  "AMFAST": "The apparent core of Operation 40.  A hundred selected Cubans trained to serve as counterintelligence (CI) officers and future government leaders.  In a revolt such as the Bay of Pigs, their role was to penetrate inland as fast as possible and to identify and seize documents of the Castro government - and then serve as the intelligence arm of a temporary civilian government of Cuba.\n",
  "AMFAUNA": "Network of in-Cuba agents, nearly all women, providing military, political, and economic reporting, including reports on attempts to kill Castro.",
  "AMFAUNA-1": "David Cabeza Coupau",
  "AMFOX-1": "Juan Falcon Tamar, aka Juan Esteban.  One of his aliases was \"Montes\", or Monty. [status: Probable]",
  "AMGABE-1": "Julio Gaspar Hubert Rico. Among a small group of agents supposedly asked to determine if pro-Castro Cubans or anti-Castro Cubans were involved in the killing of JFK.  ",
  "AMGLEN-1": "Jesus A. Valdes Cardenas.",
  "AMHALF": "Action involving Uruguay in Cuba [status: Probable]",
  "AMHALF-2": "German Roosen, Second Secretary at the Uruguayan embassy in Havana.  Willing to assist in helping people defect for a fee.   [status: Speculative]",
  "AMHAM-1": "Juan Felaifel Canahan testified against Rolando Cubela and others at the 1966 criminal trial in Cuba.",
  "AMHAWK": "Manuel Antonio (Tony) de Varona, a leader in the Cuban Revolutionary Council and other anti-Castro exile groups.",
  "AMHAWK-2": "Jesus Exposito Lorenzo",
  "AMHAZE": "A post-Bay of Pigs CIA operational group consisting of exiles initially recruited for the 2506 Brigade.  This brigade was the  anti-Castro Cuban exiles and allies that participated in the Bay of Pigs.",
  "AMHIM": "Project for the \"distribution of news and information bulletins and radio newscast tapes to addresses throughout Latin America\" via AIP (Agencia de Informaciones Periodisticas).",
  "AMHIM-2": "Augustin Alles Soberon, worked under AMHIM project and also for Juana Castro's radio program.",
  "AMHINT": "A branch of the DRE that conducted paramilitary and infiltration operations in Cuba.  Their case officer was JMWAVE chief of operations David Morales. [status: Probable]",
  "AMHINT-1": "Alberto Muller Quintana, also known as AMING-3.",
  "AMHINT-2": "Juan Manuel Salvat Roque.",
  "AMHINT-24": "Victor Espinosa Hernandez aka Papucho.",
  "AMHINT-26": "John Koch Gene, aka Jose R. Alsina Vazquez",
  "AMHINT-3": "Miguel A. Garcia Armengol.",
  "AMHINT-4": "Antonio Garcia Crew.",
  "AMHINT-5": "Isidro 'Chilo' Borja, early member of the DRE. Educated as an engineer in Canada, he controlled the group's boats and headed the group's military section in 1963.",
  "AMHINT-53": "Luis Fernandez-Rocha, Secretary General of the Revolutionary Student Directorate (DRE).",
  "AMHINT-56": "Juan Francisco Blanco Fernandez, participated in DRE raids on Cuba.  Head of the DRE's military section.",
  "AMHOBO": "Newsletter in Mexico that received funds from CIA. [status: Probable]",
  "AMICE": "FORDC, Frente Obrero Revolucionario Democratico Cubano. The English translation is Labor Revolutionary Democratic Front of Cuba.",
  "AMICE-1": "Pascasio Linera Lopez, leader of FORDC.  Also referred to as Pascasio Lineras. [status: Probable]",
  "AMICE-14": "Miguel A. Diaz Isalgue, a \"principal\" in the AMTRUNK operation.",
  "AMICE-27": "Dr. Nestor Moreno, a \"principal\" in the AMTRUNK operation.",
  "AMICE-31": "Reinaldo Pico Ramon, captured at the Bay of Pigs.",
  "AMIGGY-1": "Espino Lopez Rieto.",
  "AMING-3": "Alberto Muller Quintana [status: Unknown]",
  "AMING-4": "Juan Manuel Salvat Roque. Salvat was later AMHINT-2.",
  "AMIRE-1": "Emilio Americo Rodriguez",
  "AMIRON": "The Frente Revolucionario Democratico (FRD), aka Cuban Democratic Revolutionary Front.  The FRD Executive Committee was known as AMCIGAR.",
  "AMJAG": "Justo Carrillo Hernandez",
  "AMJAG-1": "Justo A. Carrillo Hernandez.  Changed from AMWAIL-1 after breach of security in December 1960.",
  "AMJAVA-4": "Rafael Quintero, aka Rafael Aureli Quintero Ibarbia, aka Jose M. Hernandez Valdes",
  "AMJUTE-1": "Arnesto Napoleon Rodriguez y Gonzalez",
  "AMKHAN-2": "Carlos Martin Ahrens Temple, Western Union employee in Cuba recruited by CIA agent Bernard Barker (AMCLATTER-1).",
  "AMKIRK-1": "Maria Witoski, the estranged wife of Castro's personal physician Rene Vallejo.",
  "AMLACE-1": "Luis Bastian Pinto, Brazil's ambassador to Cuba.",
  "AMLAME-1": "Arturo Sueiras, a Cuban exile with contacts in the exile community in both Miami and New York.",
  "AMLASH": "Rolando Cubela Secades, a Cuban doctor and official who was recruited in 1963 for an assassination attempt on Castro. Cubela stated that Castro had to be eliminated before any coup could succeed and had initially requested a high powered rifle from the CIA.  The CIA balked at that and Cubela was being given a CIA poison pen on Nov 22 when news of JFK's death broke. Suspicion remains that Cubela may have been acting as a dangle to the CIA by Castro; that is fueled by his lenient treatment after being exposed and convicted of treason. ",
  "AMLASH-2": "Jorge Carlos Robreno Marieguez aka \"El Mago\" (The Wizard)",
  "AMLASH-3": "Alberto Blanco Ramirez aka \"El Loco\" (The Crazy One) ",
  "AMLAW-1": "Armando Hart, Cuban Minister of Education under Castro. [status: Probable]",
  "AMLAW-3": "Carlos Lechuga Hevia, the diplomat at the Cuban Embassy in Mexico who became Cuba's Ambassador to the United Nations.  Had an affair with Cuban embassy secretary Silvia Duran; this affair was used by the CIA by leaning on his wife in an effort to convince Lechuga and his family to defect.",
  "AMLEG": "An FI (foreign intelligence) operation using Cuban merchant seamen.",
  "AMLEO": "\"An FI propaganda operation involving the exploitation of Capt. Jose Ricardo Rabel Nunez (AMLEO-3), a high-level defector who escaped from Cuba in an INRA plane on 6 December 1962.\"",
  "AMLEO-3": "Capt. Jose Ricardo Rabel Nunez, \"a high-level defector who escaped from Cuba in an INRA plane on 6 December 1962.\"",
  "AMLEPTON": "Program run jointly by Ted Shackley's Miami station known as JMWAVE and James Angleton's CI Branch.  Aimed at spotting refugees in Miami area who could serve as intermediaries to reach and ultimately recruit persons in Cuba for counterintelligence purposes.",
  "AMLIGHT-1": "Huber Matos Benitez, important Cuban military leader in Camaguey province until his purge in 1959 for challenging Fidel Castro. Imprisoned until the 1970s.",
  "AMLILAC": "\"Commando Groups\" (Comandos Mambises and others) involved in infiltrations into Cuba.",
  "AMLISP": "\"A FI (foreign intelligence) project targeted against political and economic targets.\" ",
  "AMLOON-1": "Ricardo Rafael Sardinas Sanchez, aka Rafael Sardina Sanchez, active with the Cuban Association of Cane Growers and the FRD. ",
  "AMLOUT-1": "Raul Castro, brother of Fidel.",
  "AMLUNCH-1": "Carlos A. Valdes-Fauli, an agent in Miami that reported Jack Ruby's alleged visits to Cuba during the 1962-63 period.",
  "AMLUNT-1": "Alwin Odio Tamayo.",
  "AMLUNT-2": "Duney Perez Alamo, aka Dunney Perez Alamo.",
  "AMMUG-1": "Cuban intelligence officer named Vladimir Lahera Rodriguez, who defected to U.S. via Canada in April 1964, and was interrogated about Oswald in addition to other matters.",
  "AMNIP-1": "Miguel Roche Monroy - Cuban DGI defector.",
  "AMNORM-1": "Higino Diaz, aka Nino Diaz.",
  "AMOT": "Team of some 40 Cubans trained by David Morales to be a new Cuban intelligence service once Castro had been ousted.",
  "AMOT-119": "Max Lesnick Menendez, aka Max Lesnik. Lesnick ran the radio show \"Cuba Despierta\" aka \"Cuba Awakens\", which originated in Miami and transmitted from the Dominican Republic 1962-1963.  Editor of the small Miami newspaper \"Replica\", beginning in 1963 and continuing for many years afterwards.  ",
  "AMOT-2": "Jose Joaquin Sanjenis Perdomo, also known as Joaquin Sanjenis, titular head of the AMOT organization circa 1961 prior to the Bay of Pigs landings and into 1962. His pseudonym was Carlos Blanco.",
  "AMOT-3": "Vincente Rafael Zorrilla Zorrilla",
  "AMOT-31": "Felix Gutierrez Fernandez, deputy to AMOT leader Joaquin Sanjenis. [status: Probable]",
  "AMOT-6": "Marcos Diaz Lanz.  Source used by David Morales in 1961.  Among the AMOTS, knnown as C-5. Also known as QDCHAR. [status: Probable]",
  "AMOT-87": "Mercedes Maria de los Angeles Meana Contina",
  "AMOT-99": "Julio Fernandez Gonzalez",
  "AMOURETTE-7": "Unsure of this person's identity.  Traveled during April 1957 with Cuban ambassador Emilio Nunez Portunado. [status: Probable]",
  "AMOURETTE-9": "Padre Enrique Osler, aka Enrique Osle, Jesuit priest. Spiritual advisor to the youth workers JOC (Juventad Obrera Catolica) and the labor group UTC (Union Trabajadorsa Cristianos).  Father Osler worked with Reynoldo Gonzalez/AMCALL-1 both before and after his capture at the farm of Amador Odio in October 1961.  [status: Probable]",
  "AMOURETTE-A": "La Asociacion Cubana Pro-Democracia, based in Havana, spearheaded a wide variety of anti-Communist propaganda campaigns.  [status: Probable]",
  "AMOURETTE-B": "The Catholic Youth Workers, known as the JOC or the Joventud Obrera Catolica. This group ran a \nradio program operation that was designed to create an active body of anti-Communists within the Cuban labor movement.  ",
  "AMOURETTE-X": "A project of developmental propaganda activities in the television field under the direction of the Havana Station. Supported by David Phillips under alias of Michael Choaden. ",
  "AMPAL-1": "Alec Resnick, also known as Abe Resnick.  Havana station source.  Old friend of Lino Hernandez.  Used the alias Joe Anderson.",
  "AMPALM": "Described as the MDC/MRR complex circa 1960.  An early effort, aided by CIA, to develop an organized anti-Castro united political front  The MDC, also known as the Christian Democrats, probably got this crypt as being part of the \"palm\" of the peace of Jesus Christ.",
  "AMPALM-1": "Oscar Echeverria y Salvat, Ministry of Commerce",
  "AMPALM-2": "Laureano Batista Falla, military chief for the MDC.  JMWAVE gave US Army permission to use Batista in 1962.  Batista then became head of training site in Lacombe, Louisiana, and told Garrison the trainees were going to Manuel Artime's base in Nicaragua.",
  "AMPALM-26": "Salvador Diaz Verson, a newsman who became Cuban National Police chief in 1934, and then military intelligence chief during Carlos Prio's presidency from 1948 to 1952. After JFK was killed, he admitted that he was the source of a phony rumor that Oswald and Silvia Duran met with the Cuban ambassador to Mexico.",
  "AMPALM-3": "Roberto Ortiz Batista Falla, aka \"Roberto Ortiz Crabb\". [status: Unknown]",
  "AMPALM-4": "Angel Fernandez Varela, paramilitary leader of the MDC/MRR complex.",
  "AMPALM-5": "Jose Ignacio Agusto Rasco Bermudez, aka Jose Rasco, head of the Christian Democratic Movement (MDC).  In 1961, Chicago cop/Mafia man Richard Cain served as his bodyguard. ",
  "AMPALP-1": "One of three net chiefs in Cuba involved in the \"staybehind plan\" - the ones organizing the resistance inside Cuba after U.S. interests were forced to leave. [status: Unknown]",
  "AMPANIC-2": "Antonio Santiago Ruiz",
  "AMPANIC-7": "Emilio Adolfo Rivero Caro",
  "AMPARCH-1": "Warren E. Frank, AKA Edward D. Knapman",
  "AMPATRIN": "Michael \"Jack\" Malone, Vice President of Czarnikow-Rionda, a major sugar company with its headquarters in New York City. Malone was an important CIA and FBI informant.  ",
  "AMPATROL": "AMPATROL was an operation created in 1959-1960 with Edward Tichborn (aka Henry Preston Lopez) hired by the CIA as a \"political organizer\" to bring together the most promising anti-Castro groups.  [status: Probable]",
  "AMPATROL-1": "Jose Antonio Gomez Perez.",
  "AMPOON-1": "Manuel Vega Perez, pseudonym \"Marcos\".  High ranking Cuban intelligence official in Mexico City in late 1963.",
  "AMPORT": "FRD Executive Committee; it was known as AMCIGAR until November 1960.",
  "AMPUG-1": "Alfredo Izaguirre Revoi aka Alfredo Izaguirre de la Riva, Alfredo Izaguirre Rivas.  Also used the alias \"Luis\".  201-273550.",
  "AMQUACK": "Che Guevera, guerrilla leader and minister in Castro's Cuba, killed in Bolivia in 1968. Aka AMQUACK-1.",
  "AMRANGE": "A foreign intelligence project targeting Fidel Castro and other high-level officials in the Ministry of Industry.",
  "AMRASP": "FRD (Democratic Revolutionary Front).  This crypt was changed in December 1960 for security reasons.",
  "AMRAZZ-1": "Joaquin Godoy y Solis.  Informant, a leader within the MRP, associate of Antonio Veciana.  Used as a penetration inside the MRP/Alpha-66/November 30 alliance.",
  "AMRIFT-1": "Ramon Sinobas.",
  "AMRIPE-2": "Involved in the attempt to exfiltrate AMCANOE-3 from Cuba on 11/22/63.  Sent pouch to Mexico City on 11/21/63. [status: Unknown]",
  "AMRIPE-3": "Raul Roa Kouri.  In 1963, he was the Cuban ambassador to Brazil, son of Cuban foreign minister Raul Roa Garcia.  Also known as Raulito Roa.",
  "AMROD": "CIA operations against the Cuban intelligence service. One such operation involved planting false papers on Cuban Cultural Attache Teresa Proenza, to make it look like the Vice-Minister of Defense had betrayed the Soviet missile buildup in Cuba to the Americans.",
  "AMRUG-5": "Victor Paneque Batista, aka Comandante Diego Rene Ricardo.  MIRR coordinator answering to AMDITTO-23/Orlando Bosch during early sixties.  Sent by his uncle, AMPALM-2/Laureano  Batista, to set up the training camp in Lacombe, Louisiana in 1963.",
  "AMRUNG-1": "Rogelio Gonzalez y Corso, code name \"Francisco\".\nName also referred to as Corzo and Corcho.  Head of the internal resistance in Cuba until his capture in March 1961.",
  "AMRYE-1": "Anthony “Tony” Sforza",
  "AMSAIL-1": "Carlos Fernandez Trujillo",
  "AMSANTA": "Joint FBI/CIA program to place willing FPCC members into Cuba to collect intelligence.",
  "AMSCROLL": "UR, also known as Unidad Revolucionaria.  Its organizing membership was described as impatient former members of the MRR, well-educated and with the skills needed to overthrow a government. ",
  "AMSERF-1": "Francisco (Frank) Bartes.",
  "AMSESS-1": "Oscar Concepcion Mendoza",
  "AMSEVER-2": "Double agent in Mexico City.  Referred to as a \"contract agent\" and a \"marginal agent\". [status: Unknown]",
  "AMSHALE-1": "Antonia Veciana, leader of Cuban exile group ALPHA-66. Veciana told HSCA investigator Gaeton Fonzi that he had worked with a \"Maurice Bishop\" who Fonzi came to believe was CIA officer David Phillips.",
  "AMSIGH-2": "Clemente Inclan Werner, prisoner released in 1970 and then used as intermediary between the Cuban government and imprisoned anti-Castro agents.",
  "AMSLAW-1": "Pedro Julio Martinez Fraga y Fernandez ",
  "AMSLOUCH-1": "Cuban businessman, trained in use of wireless telegraphy communications.  Worked with CIA, may have become a double agent for Cuban intelligence.  [status: Unknown]",
  "AMSOUR": "An operation based in Pinar del Rio province, utilizing the American rancher Lawrence K. Lunt. Collection of military, political and economic intelligence.   [status: Probable]",
  "AMSOUR-1": "Lawrence Kirby Lunt.",
  "AMSPELL": "The Directorio Revolucionario Estudiantil, or DRE (Cuban Student Directorate). DRE delegate Carlos Bringuier had the famous altercation with Lee Oswald in New Orleans in the summer of 1963, and DRE members quickly spread information about Oswald after JFK's assassination.",
  "AMSPICE-1": "Geraldine Shamma de Carrera aka Geraldine Shamman de Carrera, close colleague of Manuel Artime in 1960.",
  "AMSPILL": "Project centered around a Cuban intelligence source (AMSPILL-1) who provided political and economic intelligence. The intelligence AMSPILL-1 provided \"...dealt with Soviet personnel activity, Cuban military activity, shipping and health-related information.\"  ",
  "AMSTALK-1": "Miguel Angel Diaz Isalgue ",
  "AMSTET-1": "Jose Antonio \"Nico\" Garcia Lara, commercial attache in the Cuban embassy during 1962-63.  A source of great value on the defection and recruitment front regarding Cubans.",
  "AMSTOKE-1": "Lucas Roig, aka Pedro Lucas Roig Ortega, assistant commercial attache at the Cuban embassy in Mexico City who defected during June 1962.  [status: Probable]",
  "AMSTRUT": "The operation and net of assets involved in the defection and recruitment of AMSTRUT-2 and, subsequently, her anti-Castro radio broadcasts.",
  "AMSTRUT-2": "Juana de la Caridad Castro Ruz, sister of Fidel and Raul, who ran a radio program against her brothers' regime.",
  "AMSUPER-1": "Dimas Domingo Figueredo Fernandez, CRC representative in Mexico City. [status: Probable]",
  "AMSWEEP": "A foreign intelligence operation concerned with the collection of Cuban military and political information via shortwave and OWVL (one way voice link).",
  "AMSWIRL-1": "Customs agent Cesar Diosdado.",
  "AMTABBY": "A major paramilitary operation consisting of numerous sabotage operations against targets inside Cuba.",
  "AMTABBY-27": "A major paramilitary operation consisting of numerous sabotage operations against on-island targets.  At least some of these operations were reviewed and approved by the Special Group (Augmented).",
  "AMTAUP-1": "Dr. Ernesto Alanis Angulo. [status: Probable]",
  "AMTAUP-10": "Juan Bautista Perez Luis, chief gardener at the naval base in Cuba.  Arrested as part of an CIA espionage net in 1965.",
  "AMTAUP-2": "Armando Alanis Angulo, personnel chief of JURE and a penetration agent of the CIA. [status: Probable]",
  "AMTHIGH": "A political action/propaganda operation using WRUL - the radio station owned by the Mormon Church - to sponsor anti-Castro broadcasts aimed at Cuba.",
  "AMTHUG": "Fidel Castro, the Cuban leader who took power in 1959 and whose demise the U.S. began unsuccessfully plotting soon thereafter.  201-97456.",
  "AMTIKI-1": "Believed to be Juan A. Paula Baez.  The Official History of the Bay of Pigs Operation states that his true name was Manuel F. Goudie.",
  "AMTOAD-1": "Julian Arias Prado, 1960 defector from Cuba after a stint as consul at the embassy in Los Angeles.  Lee Oswald visited this embassy during Arias' stint while stationed at EL Toro in 1959.  ",
  "AMTORRID": "One of the two CIA assault teams that Bill Harvey sent into Cuba during the Cuban missile crisis in 1962. [status: Probable]",
  "AMTRIGON-1": "Argimiro Fonseca Fernandez, aka Argimino Fonseca Fernandez.",
  "AMTRUNK": "Operation for military overthrow of Castro's government in 1963, promoted within White House circles but distrusted by CIA. Aka Plan Leonardo.",
  "AMTRUNK-1": "George Volsky aka Jorge Volsky.  His name was originally Jerzy Stanislaw Ajbuszyc when he served in the Polish military under the British operational command during World War II.  Volsky was his grandmother's name.",
  "AMTRUNK-10": "Ramon Tomas Guin Diaz.",
  "AMTRUNK-11": "Carlos Pedraza Aguilar.",
  "AMTRUNK-2": "Enrique Cayado Rivera, aka Enrique Javier Cavado\nRivera",
  "AMTRUNK-3": "Antonio Garcia Perez.",
  "AMTRUNK-9": "Modesto Orlando Orozco Basulto.",
  "AMTURVY": "An operation \"designed for the purpose of conducting sabotage operations against Cuba. It consisted of a net of 13 AMTURVY assets whose primary function, apart from sabotage, was the preparation of target studies and analysis of sabotage operations.\"",
  "AMTURVY-1": "Arturo Maria Jesus Varona Alonso.",
  "AMTURVY-13": "Mario Salabarria Aguiar.",
  "AMTURVY-4": "Enrique Diaz Fernandez.",
  "AMULAR": "The most likely candidate is Paul Bethel.  Number two might be David Phillips.\n [status: Speculative]",
  "AMULLA-1": "Owner of Havana TV station.  Probably Goar Mestre, owner of CMQ TV. [status: Probable]",
  "AMUPAS-1": "Viola June Cobb, who informed for CIA under crypt AMUPAS-1 while working for Castro, and played a role in the Elena Garro de Paz story, with Mexican crypt LICOOKY-1.",
  "AMWAIL": "Agrapucion Montecristi",
  "AMWAIL-1": "Justo Carrillo Hernandez, leader of Agrupacion Montecristi and a founding member of the Frente Civico Revolucionario (FRD), forerunner of the CRC.",
  "AMWAIL-5": "Manuel F. Goudie, also known as Juan Paula/AMTIKI-1.",
  "AMWARM": "A foreign intelligence operation that targeted Cubana Airlines and provided intelligence on travelers, negotiations, flight traffic, scheduled flights, and personnel at Rancho Boyeros Airport in Cuba. ",
  "AMWHIP-1": "Carlos Tepedino Gonzalez, a Cuban exile living in the U.S. who was a \"long-time friend\" of Rolando Cubela (AMLASH). AMWHIP-1 arranged the 1961 meeting between a CIA case officer and Cubela, who was recruited to attempt to assassinate Fidel Castro.",
  "AMWOO-1": "Jose Enrique Dausa Alvarez. Member of the Directional Committee of the MRR. [status: Unknown]",
  "AMWORLD": "Plan for offensive military operations against  Cuba from offshore, led by Manuel Artime (AMBIDDY-1).",
  "AMWORM-1": "Miguel Angel Leon, aka Miguel de Leon Rojas, aka \"Cuco\", former Cuban senator and aide to Manuel Artime.  Used the alias of Domingo Beltard when he helped Tony Sforza and other CIA officers escape from Cuba in the wake of the Bay of Pigs\n",
  "AMWORRY-1": "Contact of Raul Roa, Jr./AMRIPE-3 during the fall of 1963.",
  "AMYUM": "MRR - Revolutionary Recovery Movement.  ",
  "AMYUM-1": "Lino Bernabe Fernandez Martinez, psychiatrist from Sagua la Grande and MRR leader outside of Cuba.  Also known as Ojeda.",
  "AMYUM-19": "Cesar Baro Esteva.  Until he had a falling out with Manuel Artime/AMBIDDY-1, Baro was the number three man on the AMWORLD project.  He had previously been head of the MRR.",
  "GP": "Crypts related to JFK, including JFK's alleged assassin.",
  "GPAZURE": "Richard Goodwin, JFK's chief staffer on Latin American affairs.  Tried to take over the CIA's Latin American division after the Bay of Pigs. [status: Probable]",
  "GPBEFIT": "Mexican writer and playwright Elena Garro.  She was married in 1937 to poet and diplomat Octavio Paz; they separated in 1959.  Both of them were major figures in the artistic and literary communities in Latin America.   [status: Speculative]",
  "GPFLOOR": "Lee Harvey Oswald (post-assassination designation).  It is usually used as a \"slug\" to describe the contents of a memo as \"Oswald-related\".",
  "GPFOCUS": "Robert F. Kennedy, JFK's  brother and Attorney General in the JFK administration.",
  "GPIDEAL": "President Kennedy.",
  "GPLOGIC": "Lyndon B. Johnson ",
  "GPPHOTO": "General Maxwell Taylor, chair of the Cuba study group after the Bay of Pigs and later the head of the Joint Chiefs of Staff. [status: Probable]",
  "HT": "??? [status: Unknown]",
  "HTLINGUAL": "CIA mail opening and mail cover program, operated from 1952 to 1973.  It was a joint operation of the CI Staff and the Deputy Director of Security/Investigations and Operational Support.  The mail of Lee Harvey Oswald while in the USSR was among the targets of this program.  ",
  "HTPLUME": "The nation of Panama. ",
  "JM": "??? [status: Unknown]",
  "JMADD": "Retalhuleu Air Base, used for air training at the time of the Bay of Pigs.  Also known as Rayo Base or as MADD.  ",
  "JMARC": "WH/4 Bay of Pigs Project before December 1960 (later JMATE).",
  "JMASH": "Forward operating base - CIA, Miami.  Original name for JMWAVE. JMASH used until after Bay of Pigs.",
  "JMATE": "WH/4 Bay of Pigs Project beginning in December 1960 (formerly JMARC).  This crypt continued to be used for Cuban matters well into 1962.",
  "JMBAR": "CIA maritime covert operations group located at Key West, Florida. [status: Probable]",
  "JMBELL": "A special channel used primarily for JMWAVE and Headquarters communications but also for communications with other JM sites. [status: Probable]",
  "JMBLUG": "John S. Peurifoy, U.S. Ambassador to Guatemala",
  "JMCLEAR": "Air Operations during the Bay of Pigs. [status: Probable]",
  "JMCLIPPER": "The National Catholic Welfare Conference.  Formerly known until 1952 as the National Catholic  War Conference.  Now known as the US Conference of Catholic Bishops. [status: Probable]",
  "JMCLOSET": "Program working with potential allies who are using embassies as sanctuary. [status: Speculative]",
  "JMDUSK": "The security division within JMWAVE.  There was a portion of the JMWAVE grounds that was reserved for the buildings of these officers. They had their own separate payroll. They had the ability to \"backstop\" (provide cover) and provide clearance to classified information.   [status: Speculative]",
  "JMFIG": "The Opa-locka air station, where Cuban immigrants were screened at the Caribbean Admissions Center prior to entry into the United States.  ",
  "JMFURY": "The airstrike designed to take out Castro's air force at the outset of the Bay of Pigs invasion.",
  "JMGIN": "Cuban travel surveillance activities [status: Probable]",
  "JMGOLD": "A JMWAVE unit within the CIA base in Havana itself.  This base was forced to disband when diplomatic relations between the US and Cuba ceased in January 1961. [status: Probable]",
  "JMHARP": "Some of these dissidents were held as \"prisoners\" after a revolt within the Guatemalan Army during November 1960.  Another memo describes them as CRC expeditionary force \"detainees\" - anti-Castro exiles at foreign bases that could not join the Bay of Pigs invasion for military disciplinary reasons.  These detainees broke into the AMOT and CRC intelligence files in the wake of the Bay of Pigs.     [status: Probable]",
  "JMHOPE": "A radio station within range of Havana, probably Radio Swan, based on one of the Swan Islands near Cuba.   [status: Probable]",
  "JMMOVE": "This program included a CIA controlled training camp from Feb-May 1961 used for special explosives and underwater training for Cuban exiles involved in the Bay of Pigs landing, located at the Algiers Ammunition Dump area in Belle Chasse, Louisiana.  ",
  "JMNET": "Routing indicator for the Latin American Division. [status: Probable]",
  "JMPALM": "Exile political intelligence collections operations run from JMWAVE - targeting Latin American countries ranging from Haiti to Venezuela.",
  "JMRIMM": "Communications facility in the Miami area. [status: Probable]",
  "JMSPUR": "Investigation of traces (or \"spoor\") of former programs or records that for political reasons (Kennedy assassination, Watergate) became extremely sensitive. [status: Probable]",
  "JMTIDE": "Strike base for the Bay of Pigs at Puerto Cabezas, Nicaragua.",
  "JMTRAV": "Infantry training base in Guatemala used for the Bay of Pigs invasion.",
  "JMWAVE": "CIA Station in Miami, training facility for anti-Cuban operations, existing on what is now the site of the Miami Zoo.",
  "JMZIP": "Latin American Division routing indicator.",
  "KU": "Divisions of the CIA itself.",
  "KUBARK": "CIA.",
  "KUCAGE": "CIA Psychological and Paramilitary Operations Staff.",
  "KUCLUB": "CIA Office of Communications.",
  "KUDESK": "Counter Intelligence (CI) division of CIA.",
  "KUDOVE": "Clandestine services of CIA.",
  "KUFIRE": "Intelligence.",
  "KUGOWN": "Psychological and Paramilitary Staff.  Related to Operation KUGOWN, a propaganda effort designed to inform on the extent communism had infiltrated Guatemala following the 1954 overthrow. KUGOWN was later changed to KUWOLF.",
  "KUHOOK": "CIA Paramilitary Operations Staff",
  "KUJAZZ": "The CIA Office of National Estimates.",
  "KUJUMP": "Office of Operations (OO)",
  "KULOOK": "Domestic Collections Division",
  "KUMONK": "CIA Office of Political Analysis (OPA).",
  "KURIOT": "CIA Technical Services Division (TSD).",
  "KUROAR": "Training Branch. [status: Probable]",
  "KUSODA": "CIA Office of Security.",
  "KUTUBE": "Foreign Intelligence (FI) division of CIA.",
  "KUTUBE/D": "CIA \"Staff D\" responsible for SIGINT (Signals Intelligence - electronic intercepts), where the ZR/RIFLE \"executive action\" (assassination) program was housed.",
  "KUWOLF": "Psychological and Paramilitary Staff.  Replaced the earlier name, KUGOWN.  ",
  "LC": "??? [status: Unknown]",
  "LCFLUTTER": "Polygraph (\"lie detector\") testing, sometimes referred to simply as \"FLUTTER\".",
  "LCHARVEST": "LCHARVEST (TPFAST, TPTERRY, VLVIGOR) involved operations against Peoples Republic of China (PRC) scientists and efforts to monitor PRC state \ntechnology.",
  "LCIMPROVE": "Counter-espionage involving Soviet intelligence services, worldwide.",
  "LCPANGS": "The nation of Costa Rica.",
  "LCPIPIT": "Program utilizing journalists as informants or sources, based in Paris.  The pipit is a songbird that blends in easily with its environment.  [status: Probable]",
  "LI": "Operations, organizations, and individuals related to Mexico City.",
  "LIANCHOR": "A program to create an Agency-controlled \"leftist\" press service to distribute political articles in Latin American countries.",
  "LIBIGHT": "Mail opening operation in Mexico City, with Soviet and/or Cuban targets.",
  "LICALLA": "One of three photo surveillance sites under the LIEMPTY umbrella project. LILYRIC was an apartment which provided a view of the back of the Soviet Embassy  compound in Mexico City. The other two photo sites were LIMITED and LILYRIC.",
  "LICHANT-1": "Unwitting asset Manuel Calvillo, who the HSCA failed to locate in its attempt to corroborate Elena Garro de Paz's story regarding Oswald in Mexico City.",
  "LICHEW": "Leo C. Redlich, US citizen and professor at the University of Mexico, a contract agent serving as the outside case officer between 1962-1968 for covert action projects LINLUCK and LICOAX among others.",
  "LICOAX": "Student group in Mexico City, used by Agency for political action and intelligence. [status: Unknown]",
  "LICOMET-1": "Carlos Fernandez.",
  "LICOOKY-1": "Viola June Cobb, who informed for CIA under crypt AMUPAS-1 while working for Castro.  As LICOOKY-1 in Mexico, she played a role in both the FPCC campaigns and monitoring Mexican playwright Elena Garro de Paz.",
  "LICOOL": "Microphone/transmitters.  Used at the Soviet embassy and the Cuban embassy.  Last installation was in 1960 with the Soviets, and 1961 with the Cubans.",
  "LIELEGANT": "Rodolfo Echeverria, Mexican lawyer and Presidential adviser in charge of the Mexican DFS (Treasury Dept. intelligence), father of President Luis Echeverria. Both men played a role in the LIENVOY telephone tap operation.  [status: Probable]",
  "LIEMBRACE": "A Mexico City-based surveillance project, under the umbrella LIPSTICK project. LIEMBRACE included a surveillance team, a radio repairman, and a phototruck team.",
  "LIEMBRACE-11": "Yolanda del Valle Gonzalez, engaged to LIEMBRACE-4.",
  "LIEMPTY": "Umbrella surveillance project in Mexico City, formerly code-named LIPSTICK. Included a variety of sub-projects under it.",
  "LIEMPTY-1": "Ramon Joseph Alvarez aka Raymond Gerende, who ran the three photographic basehouses focused on the Soviet compound in Mexico City.",
  "LIEMPTY-14": "LILYRIC surveillance was run by a meticulous woman known as LIEMPTY-14.  LIEMPTY-14’s daily logs and reports were reportedly \"detailed and complete”.  LILYRIC provided the best vantage point for photos of visitors, as it was aimed at the Soviet embassy front gate.  lIEMPTY-14's identity is unknown.",
  "LIEMPTY-19": "Hester Roos De Alvarez",
  "LIEMPTY-2": "Juan Nepomuseno Frias Ramirez, using the pseudonym of Oliver Scantling and the cryptonym of LIEMPTY-2 in Mexico City.",
  "LIEMPTY-6": "LIMITED was the best of the three surveillance sites focused on the Soviet compound, as it was fixed on both the vehicle entrance and the pedestrian entrance. Run by an older man known as LIEMPTY-6 who lived in the basehouse with his family, the LIMITED take yielded no pictures of Oswald.  LIEMPTY-6's identity is unknown.",
  "LIEMPTY-9": "She was the head of the LILYRIC photosurveillance basehouse focusing on the Soviet compound in Mexico City.  Her name is unknown. [status: Unknown]",
  "LIENTRAP": "Mobile surveillance photo truck with several support agents used to track Soviet operatives in Mexico City.",
  "LIENVOY": "CIA telephone tapping program in Mexico City, targeting Cuban and Soviet embassies and run in conjunction with the Mexican DFS. Netted phone calls allegedy of Oswald. See also LIFEAT.",
  "LIENVOY-16": "Anita Tarasoff.  When it was discovered that her husband, transcriber Boris Tarasoff, knew Russian and English but virtually no Spanish, his wife was pressed into service to help him. [status: Speculative]",
  "LIENVOY-2": "Identity unclear, possibly Luis Echeverria Alvarez - described as \"a Mexican supervisor field agent\", #4 in the command flowchart, and right under intercept center chief and CIA officer Charles Flick [status: Speculative]",
  "LIERODE": "CIA photosurveillance and tapping operation targeting the Cuban embassy compound in Mexico City (see refs for confusion on this). It is the LIERODE operation which allegedly failed to obtain photos of Oswald due to a camera breakdown.",
  "LIEVICT": "This program supported a national Catholic student group that was anticommunist; it considered allying with the PRI (the Mexican governing party); the president's group met biweekly with a station officer.",
  "LIFEAT": "CIA telephone tapping program on a number of phone lines in Mexico City, collecting information on a variety of targets, including home phone lines of Soviet officers, the Yugoslav Embassy, and more. Project grew to include TELEX systems and microphone placements.  See also LIENVOY.",
  "LIFEUD-1": "Unidentified individual who retired from the LIFEAT program in 1963, played a valuable role in protecting LIFEAT. [status: Unknown]",
  "LIFEUD-2": "Lineman for the Mexico City telephone company. [status: Unknown]",
  "LIFEUD-22": "Alberto Cesar Rodriguez Gallego, the main photographer in the LIERODE basehouse covering the Cuban embassy in Mexico City.",
  "LIFIRE": "A joint program with the Mexican security forces.  LIFIRE obtained passenger manifests of all commercial flights, passport photographs of travelers to Cuba, and could sometimes even follow a passenger to the hotel with their surveillance truck.",
  "LIGAFF": "A covert anti-communist propaganda program in Mexico in 1963, using a variety of legal and illegal tactics. [status: Probable]",
  "LIHABIT": "A base used to conduct photographic surveillance targeting the Soviet allied Czechoslovakian Embassy in Mexico City.  ",
  "LIHUFF": "An anti-communist organization in Mexico with emphasis on students, economics, civil pressure and propaganda.  Financed by the Mexico City station.",
  "LIHUFF-1": "Alfonso Rudolph Wichtrich, Executive VP, American Chamber of Commerce in Mexico.",
  "LIHUFF-2": "Augustin Navarro.",
  "LIJERSEY": "Physical surveillance team operating in Mexico City. Renamed LIRICE in 1962.",
  "LIKAYAK-2": "Ran a postal intercept operation in Mexico City with 22 agents between 1957 to 1969.",
  "LILISP": "A funding mechanism for covert action projects in Mexico.",
  "LILYRIC": "One of three photo surveillance sites under the LIEMPTY umbrella project, the only one of the three that photographed license plates of all vehicles entering the compound. LILYRIC was a 3rd story apartment across the street from the Soviet Embassy in Mexico City, south of the LIMITED installation. The other two photo sites were LIMITED and LICALLA.",
  "LIMASK-1": "Long-time agent in Mexico City. Answered to AMSUPER-1 in the Gyrose Debriefing Unit.  Member of AMBUD. [status: Unknown]",
  "LIMERICK": "Soviet Embassy in Mexico City.",
  "LIMESA": "Extremely sensitive monitoring operation targeting Soviet Embassy in Mexico City, run by FI/D. ",
  "LIMEW": "George Munro, often used the psuedonym Jeremy Benadum.  An ex-FBI agent that was one of Mexico City CIA station chief Win Scott's chief lieutenants.  Munro helped run the LITEMPO program. [status: Probable]",
  "LIMITED": "One of three photo surveillance sites under the LIEMPTY umbrella project. LIMITED was a fixed site right across the street from the front gate of the Soviet Embassy. The other two photo sites were LILYRIC and LICALLA.",
  "LIMOTOR": "An \"eyes and ears\" project using American students at Mexico City universities to observe the operations of the Soviet intelligence service and to determine which American students were Soviet targets.  ",
  "LIMUD": "Mail intercept operation in Mexico.",
  "LIMUST": "A collection of four housing units used in the LIMESA project as part of a sensitive FI/D operation.  One of these units housed the LICALLA photographic surveillance on the Soviet embassy.",
  "LINEB-1": "Double agent working for the CIA and the FBI as well as the USSR.  Based in Mexico City, but would travel within the United States.  Identity is unknown. [status: Unknown]",
  "LINILE-1": "One of the known five double agents working for the Mexico City station in 1963. [status: Unknown]",
  "LINLUCK": "Carlos Manuel Pellecer [status: Probable]",
  "LINOODLE": "Press placement and publications program in Mexico City.",
  "LIONION": "Photosurveillance project targeting Cuban Embassy in Mexico City, also referred to as LIERODE.  The purported failure of the LIONION installation to capture a picture of Lee Oswald in late September 1963 was a matter of concern and some disbelief in the HSCA's investigation.",
  "LIONION-1": "Alberto Rodriguez Gallego, part of LIONION photography project targeting Cuban embassy.",
  "LIONION-2": "The mother of LIONION-1.  She assisted him in caretaking the technical surveillance operation against the Cuban embassy in Mexico City. ",
  "LIOOZE-1": "Double agent. [status: Unknown]",
  "LIOSAGE": "Ferguson Dempster, friend of Win Scott, head of British intelligence in Mexico. [status: Unknown]",
  "LIOVAL-1": "John Emil Blankeneagel, American friend of Soviet consul Pavel Yatskov in Mexico City.",
  "LIPLUG": "Listening post in Mexico City aimed at two Soviets, GRU officer Vadim Aleksandrovich Sheynok and Yuriy Mikhaylov.",
  "LIPSTICK": "This Mexico City-based project was an \"umbrella type project...consisted of multiline phone taps, three photographic sites, a mobile surveillance team and a mail intercept operation.\" Under this project were LIMITED, LILYRIC, and LICALLA, LIEMBRACE, LIENTRAP, and possibly other projects. Renamed LIEMPTY.",
  "LIPSTICK-20": "The initial cryptonym for Raymond Joseph Alvarez Durant aka Raymond H. Gerende, assigned in the 1950s.  He later became LIEMPTY-1.",
  "LIRAVINE": "Mid-1960s project \"for the purpose of consolidating into one administrative group a number of active Cuban informants,\" including LIOLEO-1, LISICLE-1, AMSEVER-2, AMPACA-1,  and LICARD-1.",
  "LIRICE": "Surveillance project targeting the Communist Party in Mexico City. Some of its agents were arrested and their CIA case officer detained by the Mexican Security Service and subsequently allowed to leave the country. Originally named LIJERSEY.",
  "LIRING-1": "Debriefed the double agent AMKNOB-1 in 1966, during the trial of Rolando Cubela. [status: Unknown]",
  "LIRING-3": "Carlos Jurado-Delmar, also known as Carlos Jurado J. Delmar and Carlos Delmar Jurado.  Claimed tha Silvia Duran told him that she had sexual relations with Lee Harvey Oswald.  ",
  "LIROMANCE": " A CIA Mexico City Station audio surveillance operation; the listening device was installed inside the furniture in the Cuban embassy in Mexico City.",
  "LISAMPAN": "LISAMPAN was a multiaudio project covering the Cuban Embassy and the residence of the Cuban ambassador in Mexico. [status: Unknown]",
  "LISICLE-1": "Marginal agent, medical student. [status: Unknown]",
  "LITABBY": "A photographic base used by Mexico City Station to obtain intelligence on foreign officials and related individuals. ",
  "LITAINT": "Harassment efforts directed at the Cuban compound in Mexico City in the 1960s.",
  "LITAINT-1": "Angel Lorenzo Saavedra Correa was a Cuban Military and Air Attaché who defected to the US and was interviewed by the FBI in April 1960. He also previously offered intelligence for a short time to US officials.",
  "LITAINT-5": "Julian Arias Prado, a member of Task Force W's Debriefing Unit in Mexico City in 1962; active with LITAINT since 1960 after resigning as Cuban vice consul in Los Angeles and moving into Mexico.  Also known as AMTOAD-1.",
  "LITAINT-7": "Antonio Montanes, Second secretary at the Cuban embassy in Mexico who made a dramatic defection speech that \"received wide play in the Mex. press\". ",
  "LITAMIL": "Cuban operations.",
  "LITAMIL-1": "Manuel Machado Llosas, a Cuban businessman in Mexico and active in the July 26 movement. [status: Probable]",
  "LITAMIL-13": "Source for LITAMIL-2, used in late 1963 in the MHVIPER program for economic warfare on Cuba.  201-329618. [status: Unknown]",
  "LITAMIL-2": " 201-275992.   Had diplomatic plates in 1960.  Purchased arms and equipment, established a clandestine radio station in Mexico prior to Castro's successful revolt. All these factors point to Carlos Maristany, the ambassador to the Netherlands. [status: Probable]",
  "LITAMIL-3": "Ricardo Vidal Dominguez. Informant within the Cuban diplomatic corps who tried to convince consul Eusebio Azcue to defect during September 1963.  He himself had a history as consul in the Cuban embassy in Mexico City, 1959-1961.",
  "LITAMIL-7": "Consuelo Esperon Perez, a secretary at the Cuban Embassy, received operational approval as an agent of Task Force W, Mexico City during 1962-1963.",
  "LITAMIL-9": "Luis Alberu Soeto, Cuban Cultural Attache in Mexico City, working as a double-agent for the CIA. According to one CIA document, LITAMIL-9 made photo identifications for the LIONION surveillance project. John Newman mistakenly identified Alberu as LIRING-3 in ''Oswald and the CIA''.",
  "LITEMPO": "Operation support and security backstopping for the Mexico City operations, commencing in 1960. Involved a liaison relationship with the Mexican government.",
  "LITEMPO-1": "Emilio Bolanos, a nephew of Gustavo Díaz Ordaz, Minister of Gobernación and then President of Mexico from 1964-1970.",
  "LITEMPO-12": "Miguel Nazar Haro, aka Angus J. Laverdure aka Juan Noriega - a Mexico City station agent close to Win Scott between 1960-1971 who became head of the DFS in 1976 before his US conviction in the 1980s for smuggling stolen cars. [status: Probable]",
  "LITEMPO-2": "Gustavo Diaz Ordaz, President of Mexico from 1964 to 1970. He was president in 1968 during the famous Tlatelcolco massacre. Diaz Ortiz was part of Mexico City station chief Win Scott's LITEMPO program.",
  "LITEMPO-4": "Fernando Gutierrez Barrios, head of the Mexican secret police (DFS) from 1964 to 1970, and later held other Mexican government posts. Gutierrez Barrios was part of Mexico City station chief Win Scott's LITEMPO program.",
  "LITEMPO-8": "Luis Echeverria Alvarez, acting secretary of Gobernacion in 1963; Mexican Interior Minister in 1964; President from 1970-76; and the liaison contact with the Mexico City station during chief Win Scott's tenure.",
  "LITENSOR": "Adolfo Lopez Mateos, President of Mexico in 1963.",
  "OD": "Departments or agencies of the U.S. government.",
  "ODACID": "U.S. State Department.",
  "ODALOE": "U.S. Secret Service.",
  "ODBEAT": "Defense Intelligence Agency. [status: Probable]",
  "ODBOON": "U.S. Customs Agency.",
  "ODEARL": "U.S. Department of Defense.",
  "ODENVY": "Federal Bureau of Investigation (FBI).",
  "ODFOAM": "U.S. Secret Service.",
  "ODIBEX": "U.S. Army.",
  "ODINCH": "National Security Agency",
  "ODOATH": "U.S. Navy.",
  "ODUNIT": "U.S. Air Force.",
  "ODURGE": "U.S. Immigration and Naturalization Service (INS)",
  "ODWIFE": "Agency for International Development ",
  "ODYOKE": "United States government.  It sometimes specifically means \"The White House\".  Note to see if it is referring to an individual or entity in charge for a particular set of decisions on behalf of the US government.  ",
  "PB": "Related to entire countries, or possibly countries in North America or Western Hemisphere. [status: Speculative]",
  "PBHISTORY": "\"Central Intelligence Agency project to gather and analyze documents from the Arbenz government in Guatemala that would incriminate Arbenz as a Communist.\"",
  "PBPRIME": "United States of America.",
  "PBRUMEN": "Cuba.",
  "PBSUCCESS": "Project to overthrow Arbenz government in Guatemala in 1954.",
  "PBSWING": "U.S. Embassy or official installation.",
  "QD": "Anti-Castro activists working directly with William Pawley. [status: Speculative]",
  "QDBIAS": "Pedro Diaz Lanz.",
  "QDCHAR": "Marcos Diaz Lanz, brother of Pedro Diaz Lanz.",
  "QDCOVE": "Ricardo de la Lorie, aka Ricardo Luis de la Lorie-Bals, aka Ricardo Lorie Valls.",
  "QDDALE": "William D. Pawley.",
  "QDELF": "Possibly Hal Hendrix, Source with a great deal of background on Miami journalists.  Identity still unknown. [status: Probable]",
  "QK": "??? [status: Unknown]",
  "QKACTIVE": "Program to weaken the Soviet regime, run by the CIA's Soviet division, utilizing radio broadcasts (Radio Free Europe and Radio Liberty), the Institute for the Study of the USSR (BGCALLUS) chaired by Stanislaw Stankiewicz, and published articles and books. [status: Probable]",
  "QKENCHANT": "\"Agency project used to provide security approvals on non-Agency personnel and facilities.....to discuss proposed projects, activities, and possible relationships.\"",
  "QKFLOWAGE": "United States Information Agency/USIA",
  "QKGLACE": "Propaganda issued by political organizations. [status: Probable]",
  "QKHILLTOP": "A cryptonym assigned in 1954 to a project to study Chinese Communist brainwashing techniques and to develop interrogation techniques.",
  "QKMAGNET": "A consortium of agents from Immigration (INS), Customs, the Bureau of International Programs of the Department of Commerce, and the US Coast Guard.  The apparent purpose was to allow certain raids on Cuba based on approval from intelligence chiefs. [status: Probable]",
  "WO": "Divisions of the CIA itself (see also KU).",
  "WOBONE": "The CIA's Office of Security [status: Probable]",
  "WOFACT": "CIA.",
  "WOHIVE": "The Office of Strategic Services",
  "WOMACE": "DDO - Directorate of Operations (formerly Directorate of Plans).",
  "WOMUSE": "CIA CounterIntelligence staff. [status: Probable]",
  "ZR": "Related, in an elastic sense, to CIA foreign intercept and code-breaking activities conducted to collect data for the NSA. [status: Speculative]",
  "ZRAFRAID": "Congress of still-unidentified group that held their biennial meeting in December 1963 in Mexico City. [status: Probable]",
  "ZRALERT": "Use of hypnotism by CounterIntelligence staff in \"certain operational situations.\"",
  "ZRBEACH": "Communications intercepts by the CIA that are passed on to the NSA.",
  "ZRCHEST": "A Staff D project which put Technical Services Division/Audio chief David Christ and his team into Cuba to tap the New China News Agency circuits and obtain information for breaking their commercial codes. [status: Speculative]",
  "ZRCLIFF": "Southern Air Transport Inc., a CIA \"proprietary\" aviation company in Miami.",
  "ZRGRACE": "The operation that hunted for the NSA defectors, Martin and Mitchell.   [status: Unknown]",
  "ZRJOINT": "Alternate name for LIENVOY.",
  "ZRKNICK": "The communications monitoring operation against Cuban agents in Latin America. To avoid violating the rule prohibiting CIA operations inside the US, the FBI would obtain the take in these instances and then share the results with CIA.  ",
  "ZRMETAL": "Washington, DC.",
  "ZRPENNY": "Activity to counter Cuban student participation in communist-sponsored world youth festival in Helsinki in 1962.  ",
  "ZRPRIMA": "Program to penetrate the foreign technical personnel being hired by Castro to work in Havana.",
  "ZRRIFLE": "Program to recruit foreign criminal assets for various illegal activities including burglary, wire taps, strong arm work and thefts in support of ZR code breaking work. Later used by William Harvey as a cover for an Executive Action assassinations program. ",
  "ZRSIGN": "A program using American labor organizer and CIA agent Serafino Romualdi. [status: Probable]",
  "ZRSOLO": "An alternate name for the Mexico City listening posts of LIFEAT.",
  "ZRWAGON": "A program of overseas dockside sabotage operations targeting commercial shipments to Cuba. [status: Probable]",
  "ZRWAHOO": "Generic intelligence reports on Latin American subjects in the Western Hemisphere, appears to be unverified reports collected outside regular channels that need to be checked out more thoroughly.   [status: Probable]",
  "ANTLERS": "A highly sensitive CIA project to move a defector from Europe to the US \"...without leaving any trace of\nhis true identity.\"",
  "AQUATIC": "AQUATIC was an Office of Technical Security program that deployed a variety of intrusive techniques. Documented usage against Cuban diplomatic facilities in Mexico City. ",
  "ARTICHOKE": "The study and/or use of \"special\" interrogation methods and techniques.  These \"special\" interrogation methods have been known to include the use of drugs and hypnosis, and \"total isolation\", a form of psychological harassment.",
  "ATTIC": "Pyotr Popov, who provided information on the Soviet Union to CI/SIG.",
  "BARR": "The communications designator for the the JMBAR facility at Key West. [status: Probable]",
  "BE": "The CIA nation designation for operations in Soviet controlled Poland. [status: Probable]",
  "BESMOOTH": "A project to monitor and translate foreign intelligence communications, process the material, and assess and recruit potential targets as intelligence sources. ",
  "BEVISION ": "Project using the Polish defector Michael Goleniewski [status: Unknown]",
  "BGACTRESS": "International Organizations Division [status: Probable]",
  "BGGYPSY": "The nation of Russia and Russian connected operations. [status: Probable]",
  "BKCROWN": "CIA. This cryptonym was adopted in the early 1970s. [status: Probable]",
  "BKHERALD": "CIA, Soviet Bloc division. This cryptonym was used in the 1970s. [status: Probable]",
  "BLANKET": "A request to permit discussion of National Security Council 5412/2 matters on a need-to-know basis.",
  "BUTANE": "A surveillance project created at the direction of the Director of Central Intelligence to determine the activities and contacts of Victor Marchetti a former CIA employee with current Agency employees. ",
  "CANDI": "Cuban intelligence service clandestine drop in Mexico City",
  "CAPRICE-1": "Possibly Oscar Mendoza Concepcion.  Cuban intelligence agent, stationed in the Cuban embassy.   [status: Speculative]",
  "CARROT": "Exfiltration operation in 1961",
  "CELOTEX-1": "Physical surveillance by CIA of Washington Post reporter for four month period in early 70s.",
  "CELOTEX-2": "Surveillance of DC journalist Jack Anderson and his staff.",
  "CIFENCE-4": "Luis Posada.  This cryptonym was used after the use of AMCLEVE-15.",
  "CITASTE": "Director of Central Intelligence Allan Dulles",
  "DAINOLD": "Desmond FitzGerald, chief of Special Affairs Section (SAS) during 1963, the successor group to Bill Harvey's Task Force W.",
  "DI": "The CIA nation designation for operations in Soviet controlled Czechoslovakia.",
  "DIZTAG": "Czechoslovakia",
  "DM": "The CIA nation designation for operations in Soviet controlled Yugoslavia. [status: Probable]",
  "DMLIVID": "Major Djurorie Dujare Djurorie  [status: Probable]",
  "DN": "The CIA nation designation for South Korea.  [status: Probable]",
  "DTDORIC": "Indicator for book distribution programs directed at intellectuals in communist and socialist countries.  [status: Probable]",
  "DTFROGS": "The nation of El Salvador.",
  "DTGODOWN": "Projected Mexican intellectual journal.",
  "DTLEAFAGE": "Literary project to counter Soviet propaganda. [status: Probable]",
  "DYVOUR": "Routing indicator for Mexico City station. [status: Probable]",
  "ERACERB-1": "Luis Debayle Somoza, President of Nicaragua. [status: Probable]",
  "ERYTHROID-3": "Captain Franklin Anthony Wheelock Garcia, chief of the Anti-Communist Section, Office of National Security, Nicaragua. [status: Probable]",
  "ESLARD-1": "Juan Jose Arevalo Bermejo.",
  "EVAL-3": "Secretary of CIA officer Nestor Sanchez.\n\n\n\n\n\n\n [status: Probable]",
  "FJDUST": "Cable indicator for CIA security.",
  "FJHEARSAY": "The Coordinating Secretariat of National Unions of Students (COSEC).  Later in the 60s, it became known as the International Student Conference.  This organization had contacts with and support from friends within the CIA and was generally supportive of anti-Communist positions. ",
  "FJSTEAL": "USSR.",
  "GFGESTETNER": "Herbert Manell, chief of anti-Soviet operations in Mexico City station from 1959-1964.",
  "GOLIATH": "Description of the CIA during late fifties and sixties, with perhaps an emphasis on its domestic intelligence activities.  [status: Speculative]",
  "GOOSECREEK": "Slugline used when requests are made for traces or other assistance from Staff D. [status: Speculative]",
  "GRIP": "Western European business excecutive of proven reliability, had business inside Cuba and was involved in a variety of operations, including an AMLASH operation to deliver pills to poison or otherwise kill Fidel Castro in a Vedado restaurant between 1962-1964.  [status: Unknown]",
  "GYROSE": "Routing indicator for Task Force W's communications regarding Cuba.",
  "HBEPITOME": "Officers Foundation for Youth and Student Affairs.  Worked with the International Organizations Division, which later was folded into the Covert Action Division. [status: Probable]",
  "HBFINCH": "US Embassy.",
  "HTBASTE": "A pitch for defection made by a CIA officer that is as enticing as possible. [status: Probable]",
  "HTKEEPER": "Mexico City",
  "HYSAGE-1": "Thelma King, Panamanian legislator.",
  "JKLANCE": "Codename for the CIA, adopted by the Agency in about 1967 and borrowed from JFK's Secret Service code name LANCER, in the wake of charges made by New Orleans DA Jim Garrison and others of CIA involvement in the JFK assassination.  ",
  "KAPOK": "Cable indicator for the highest level of document sensitivity. KAPOK is above RYBAT, which is above EYES ONLY.  ",
  "KEYWAY": "CIA Europe Division",
  "KL": "Digraph for operations in Bolivia. [status: Probable]",
  "KLAMBROSIA-29": "Lydia Duran became a CIA source in Bolivia during October 1959. She was the sister-in-law of Cuban consulate secretary Silvia Duran. ",
  "KMFLUSH": "The nation of Nicaragua.",
  "KMFORGET": "A program where stories planted by the agency in one country would be clipped and mailed to media in other countries, and such efforts enhanced the likelihood that the stories would be seen by an American correspondent and transmitted home.",
  "KMLASKING": "World Assembly of Youth, an anti-Communist organization run by the CIA since 1954.",
  "KMPAJAMA": "The nation of Mexico.",
  "KMPLEBE": "The nation of Peru.",
  "LAROB": "Double agent of FBI and USSR.  A saIes representative for American Airlines, may be 201-729524, identity remains unknown. [status: Unknown]",
  "LAURICLE": "An action indicator for Staff D operations.",
  "LNAGON": "Bureau of Narcotics and Dangerous Drugs.  This cryptonym was used during the seventies.  ",
  "LNERGO": "FBI, used during the late 60s and 70s.",
  "LPHIDDEN": "An extremely sensitive operation run by the Office of Security in 1954.  Private investigator Robert A. Maheu was paid by a competitor of Aristotle Onassis in 1954 to carry out a campaign of wiretaps and dirty tricks against the Greek shipping tycoon - with the knowledge and approval of the CIA and then-vice president Richard M. Nixon. [status: Unknown]",
  "LPOVER": "Conover Mast Publications [status: Probable]",
  "MERRIMAC": "A penetration and surveillance project designed to monitor dissident groups and potential threats to Agency personnel and operations.  ",
  "MH": "Designation is to signify the program had a worldwide area of operations. [status: Probable]",
  "MHAPRON": "Worldwide program for the penetration of the power centers and armed forces of the Cuban regime.",
  "MHCHAOS": "Program to gather and evaluate all available information about foreign links to racial, antiwar and other protest activity in the United States.",
  "MHCHILD": "A program encompassing a variety of so-called \"babysitting\" chores. [status: Probable]",
  "MHDOWEL": "A descriptor for the revelations in 1967 about the CIA's subsidies to the\nNational Student Association, unions, businesses, foundations, and various\nother groups in the public sphere.\n [status: Probable]",
  "MHORDER": "Indicator for negative publicity about the CIA. [status: Probable]",
  "MHVIPER": "Economic sabotage operation aimed at Cuba.",
  "MK": "An operation of the CIA's Office of Technical Services Staff.",
  "MKCHARITY": "Equipment basehouse in Mexico City, supported by the CIA's Technical Services Division.  http://alphas.wikia.com/wiki/MK-Ultra [status: Speculative]",
  "MKNAOMI": "A joint project between the CIA and the Army's Special Operations Division involving the use of chemical and biological agents for a variety of purposes including both incapacitation and elimination. Program operational between 1952 and 1970.",
  "MKTOPAZ": "CIA Technical Services Division. Functions included preparation of false documents and related cover/backstop identity materials. ",
  "MKTRAP": "The technical nomenclature of a hot-mike telephone installation. Beginning in 1962, such a device was installed at the Cuban embassy in Mexico City.  ",
  "MKULTRA": "MKULTRA was the principal CIA program involving the research and development of chemical, biological and radiological materials capable of employment in clandestine operations to control human behavior.  ",
  "MONGOOSE": "A major covert action program aimed at overthrowing the Castro regime in Cuba from November 1961 to October 1962.  The Chief of Operations was Gen. Edward Lansdale, who coordinated the activities among the CIA, the State Department, and the Defense Department.",
  "NEMOV-1": "Marvin Kantor, a Russian-speaking student who defected to Minsk, and left shortly before Oswald's arrival.  Like Oswald, he was the only American in Minsk at the time.",
  "NIEXIT-3": "An agent handling a communication circuit based in Mexico. [status: Probable]",
  "NOTLOX": "The radio channel used by CIA to communicate with MRR inside Cuba.",
  "OLYMPUS": "A PW effort with the DRE.  The plan was to parachute into an airdrop zone and set up propaganda programs for the guerilla movement.",
  "OPIM": "Operational immediate",
  "OWVL": "One way, coded radio telegraphy link. Required sender/receiver one time PAD for decoding message. ",
  "PALP": "CIA Headquarters station in Washington, D.C.",
  "PARAGON": "The domestic surveillance of Thelma King, a Latin American revolutionary whose group possessed alleged ties to a prominent CIA detractor. The CIA's Office of Security also conducted domestic surveillance of several of King's contacts in multiple US cities. ",
  "PASSAVOY": "Col. Wendell C. Johnson, retired Army colonel, was hired in 1961 as a contract agent. [status: Probable]",
  "PAWNEE-3": "REDSKIN student in Helsinki during the summer of 1959.  Friendly with Gregoriy Golub, the Soviet consul in Helsinki. Her Finnish was not as good as that of another REDSKIN student, PAWNEE-5. PAWNEE-3's identity is unknown.",
  "PAWNEE-5": "REDSKIN student in Helsinki during the summer of 1959.  Flirted with Gregoriy Golub, the Soviet consul in Helsinki.  During Sept. 1959, Golub began to offer \"instant visas\" for foreigners seeking to enter the USSR through Helsinki.  Lee Oswald was one of the first to use this new arrangement.  PAWNEE-5's identity is unknown.",
  "PBIMPULSE": "A hot-mike telephone, used in Mexico City.",
  "PEKLOK": "Radio communications circuit used by the MRR before NOTLOX.",
  "PLMHABYSS": "Persons or events that provide \"low points\" in the CIA's history. Offered from the viewpoint of the Office of Security. [status: Speculative]",
  "PLVWBLANKET": "Descriptor for embarrassing information about the CIA that has or will enter the public arena. [status: Probable]",
  "QJBANNER-1": "Arnold M. Silver, during his tenure as chief of the CIA Luxembourg station between 1957-1960.  Also known as James Rabney and Kurt G. Herzfanz.",
  "QJWIN": "Jose Marie Andre Mankel",
  "QKIVORY": "National Committee for a Free Europe and its subcommittees.",
  "QKOPERA": "Congress of Cultural Freedom, sponsoring Western intellectuals, artists, and musicians - some knew about their CIA benefactors, while others did not.",
  "QUHOPS-1": "Jose Luis Gonzalez Gallarreta who was associated with the CIA AMLASH Operation.",
  "QUSPORT-1": "Bichi Bernal, Cuban military attache in Japan who was recruited by the CIA and then defected.",
  "QUSWIFT-1": "Earl Williamson, Chief of Madrid Station in the nation of Spain [status: Probable]",
  "QUSWIFT-7": "Miguelina Teurbe-Tollon Collado, nicknamed\"Tota\", a woman in Paris that worked with the AMLASH group after her partner was killed in a Cuban prison.",
  "REDCAP": "REDCAP was a program of operational exploitation of Soviet personnel.  Included within its objectives was inducement of Soviets to defect from their official posts, or to extract information from them in the course of attempting to convince them to defect.",
  "REDCOAT": "Information indicator for the Soviet/Eastern European Division.",
  "REDSKIN": "CIA source program based in legal traveler to the Iron Curtain countries.",
  "REDSOX": "Illegal operations mounted into the USSR.",
  "REDTOP": "CIA Soviet Division.",
  "REDWOOD": "Action indicator for the Soviet/Eastern European Division.",
  "RYBAT": "\"Slug\" indicating a high level of extreme sensitivity for message.\n",
  "SGHOUSE": "An accounting program used to provide vouchered funds for administrative purposes.",
  "SKEWER-1": "Luis A. Ferre, former governor of Puerto Rico",
  "SLEEPER": "This project used a Cuban official within the Communist Party to gather intelligence.  [status: Probable]",
  "SLFREE-1": "Irving Richard Poyle, jailed in Cuba between 1964-1973.   201-733547.",
  "SM": "The CIA nation designation for the United Kingdom. [status: Probable]",
  "SMOTH": "MI-6, the British intelligence agency that provides the British government with foreign intelligence.",
  "STESCALADE": "The bugging or attempted bugging of the New China News Agency in Havana by David Christ and his Office of Technical Security colleagues in 1960. [status: Probable]",
  "TARBRUSH": "A black propaganda program run by the Mexico City station during the 1950s-1960s.",
  "TODHUNTER": "DDCI Marshall Carter",
  "TOPAZ": "In Leon Uris' book Topaz, this was the pseudonym for Phillipe Thyraud de Vosjoli, member of the French intelligence service SDECE.",
  "TPELIDE": "At least through 4/64, used by the Mexico City station as a generic term for \"embassy\" and also used for a CIA team conducting surveillance.  Caused confusion within CIA ranks.  [status: Probable]",
  "TWIXT": "Robert Maheu's first project with the CIA, assigning him to work against the interests of Greek industrialist Aristotle Onassis.  Maheu was retained by the CIA to aid Onassis' competitor Stavros Nairchos after Onassis cut a deal to control 90% of Saudi Arabia's oil.  ",
  "UN": "Operations or agents based in France. [status: Probable]",
  "UNRUMBLE-2": "Pedro Ruiz Quintero, a Cuban medical student living in Paris. ",
  "UNSNAFU-9": "Luis Enrique Trasancos, a CIA penetration agent at the Cuban embassy in Paris.",
  "UNSTAR": "An unknown French diplomat, who in the days after 11/22/63 allegedly claimed that JFK was killed due to a joint plot by the Chinese government and Castro. ",
  "WIROGUE": "David Tzitzichvili aka David de Panaskhet.",
  "WS": "Warfare - more in the context of sabotage than weaponry.  Examples would include psychological warfare, political warfare, and economic warfare, in the Cold War context. [status: Probable]",
  "WSACROBAT": "Co-organizers on a literacy seminar.  Identity unknown. [status: Unknown]",
  "WSBURNT": "Guatemala",
  "WSCHILD": "U.S. National Student Association",
  "WSHOOFS": "Honduras.",
  "WUBONBON": "Book publishing project - one of the Domestic Operations Division propaganda programs supervised by E. Howard Hunt.",
  "WUBRINY": "Haitian operations.",
  "WUBRINY-1": "Thomas Devine, former CIA staffer who then became an \"oil-wildcatting associate\" with George Bush at Zapata Offshore Drilling Company.   Devine also became a member of the investment firm of Train, Cabot and Associates, New York. [status: Probable]",
  "WUMUTUAL": "A mutual fund, used as a proprietary corporation by the CIA. [status: Probable]",
  "YEAST": "Slugline used for Operation Yeast, a landing plan for a small group during the Bay of Pigs.",
  "YOACRE": "Guantanamo Naval Base.",
  "YOBELT": "University of Miami. [status: Probable]",
  "ZIPPER": "Gehlen Organization",
  "ZODIAC": "Internal CIA system for processing travel information regarding all Soviet satellite nationals that travel into or from the United States.",
  "ZOMBIE": "A list maintained within the CIA's Records Integration Division of all non-Soviet/satellite nationals who travel to the Soviet bloc.",
  "ZRTORCH": "Communications between CIA officers and defectors or potential defectors. [status: Probable]"
}