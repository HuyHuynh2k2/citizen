const multiple_choice_data = [
  {
    question: "What is the supreme law of the land?",
    answers: ["the Constitution"],
    options: [
      "the Constitution",
      "the Bill of Rights",
      "the Declaration of Independence",
      "the Articles of Confederation",
    ],
  },
  {
    question: "What does the Constitution do?",
    answers: [
      "sets up the government",
      "defines the government",
      "protects basic rights of Americans",
    ],
    options: [
      "sets up the government",
      "defines the government",
      "protects basic rights of Americans",
      "all of the above",
    ],
  },
  {
    question:
      "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answers: ["We the People"],
    options: [
      "We the People",
      "In God We Trust",
      "Life, Liberty, Pursuit",
      "United We Stand",
    ],
  },
  {
    question: "What is an amendment?",
    answers: [
      "a change (to the Constitution)",
      "an addition (to the Constitution)",
    ],
    options: [
      "a change to the Constitution",
      "a law passed by Congress",
      "a court decision",
      "a presidential order",
    ],
  },
  {
    question: "What do we call the first ten amendments to the Constitution?",
    answers: ["the Bill of Rights"],
    options: [
      "the Bill of Rights",
      "the Amendments",
      "the Constitution",
      "the Declaration",
    ],
  },
  {
    question: "What is one right or freedom from the First Amendment?",
    answers: [
      "speech",
      "religion",
      "assembly",
      "press",
      "petition the government",
    ],
    options: [
      "freedom of speech",
      "right to bear arms",
      "right to vote",
      "right to privacy",
    ],
  },
  {
    question: "How many amendments does the Constitution have?",
    answers: ["twenty-seven (27)"],
    options: ["twenty-seven (27)", "ten (10)", "fifty (50)", "twenty-six (26)"],
  },
  {
    question: "What did the Declaration of Independence do?",
    answers: [
      "announced our independence (from Great Britain)",
      "declared our independence (from Great Britain)",
      "said that the United States is free (from Great Britain)",
    ],
    options: [
      "declared independence from Great Britain",
      "established the Constitution",
      "created the first government",
      "ended slavery",
    ],
  },
  {
    question: "What are two rights in the Declaration of Independence?",
    answers: ["life", "liberty", "pursuit of happiness"],
    options: [
      "life and liberty",
      "freedom and justice",
      "peace and prosperity",
      "faith and hope",
    ],
  },
  {
    question: "What is freedom of religion?",
    answers: ["You can practice any religion, or not practice a religion."],
    options: [
      "You can practice any religion, or not practice a religion",
      "You must practice Christianity",
      "You cannot practice religion",
      "You can only practice one religion",
    ],
  },
  {
    question: "What is the economic system in the United States?",
    answers: ["capitalist economy", "market economy"],
    options: [
      "capitalist economy",
      "socialist economy",
      "communist economy",
      "feudalist economy",
    ],
  },
  {
    question: 'What is the "rule of law"?',
    answers: [
      "Everyone must follow the law.",
      "Leaders must obey the law.",
      "Government must obey the law.",
      "No one is above the law.",
    ],
    options: [
      "Everyone must follow the law",
      "Only citizens follow the law",
      "Laws don't apply to government",
      "Laws change daily",
    ],
  },
  {
    question: "Name one branch or part of the government.",
    answers: [
      "Congress",
      "legislative",
      "President",
      "executive",
      "the courts",
      "judicial",
    ],
    options: ["legislative", "military", "educational", "religious"],
  },
  {
    question: "What stops one branch of government from becoming too powerful?",
    answers: ["checks and balances", "separation of powers"],
    options: [
      "checks and balances",
      "the military",
      "the people",
      "the states",
    ],
  },
  {
    question: "Who is in charge of the executive branch?",
    answers: ["the President"],
    options: [
      "the President",
      "Congress",
      "the Supreme Court",
      "the Vice President",
    ],
  },
  {
    question: "Who makes federal laws?",
    answers: [
      "Congress",
      "Senate and House (of Representatives)",
      "(U.S. or national) legislature",
    ],
    options: ["Congress", "the President", "the Supreme Court", "the states"],
  },
  {
    question: "What are the two parts of the U.S. Congress?",
    answers: ["the Senate and House (of Representatives)"],
    options: [
      "Senate and House of Representatives",
      "Democrats and Republicans",
      "Upper and Lower Courts",
      "Executive and Judicial",
    ],
  },
  {
    question: "How many U.S. Senators are there?",
    answers: ["one hundred (100)"],
    options: [
      "one hundred (100)",
      "fifty (50)",
      "four hundred thirty-five (435)",
      "two hundred (200)",
    ],
  },
  {
    question: "We elect a U.S. Senator for how many years?",
    answers: ["six (6)"],
    options: ["six (6)", "four (4)", "two (2)", "eight (8)"],
  },
  {
    question: "Who is one of your state's U.S. Senators now?",
    answers: ["Answers will vary."],
    options: [
      "Answers will vary",
      "Joe Biden",
      "Nancy Pelosi",
      "Mitch McConnell",
    ],
  },
  {
    question: "The House of Representatives has how many voting members?",
    answers: ["four hundred thirty-five (435)"],
    options: [
      "four hundred thirty-five (435)",
      "one hundred (100)",
      "fifty (50)",
      "five hundred (500)",
    ],
  },
  {
    question: "We elect a U.S. Representative for how many years?",
    answers: ["two (2)"],
    options: ["two (2)", "four (4)", "six (6)", "eight (8)"],
  },
  {
    question: "Name your U.S. Representative.",
    answers: ["Answers will vary."],
    options: [
      "Answers will vary",
      "The President",
      "Your Senator",
      "Your Governor",
    ],
  },
  {
    question: "Who does a U.S. Senator represent?",
    answers: ["all people of the state"],
    options: [
      "all people of the state",
      "only registered voters",
      "only citizens",
      "only their political party",
    ],
  },
  {
    question: "Why do some states have more Representatives than other states?",
    answers: [
      "(because of) the state's population",
      "(because) they have more people",
      "(because) some states have more people",
    ],
    options: [
      "because of the state's population",
      "because of the state's size",
      "because of the state's wealth",
      "because of the state's age",
    ],
  },
  {
    question: "We elect a President for how many years?",
    answers: ["four (4)"],
    options: ["four (4)", "six (6)", "two (2)", "eight (8)"],
  },
  {
    question: "In what month do we vote for President?",
    answers: ["November"],
    options: ["November", "October", "December", "January"],
  },
  {
    question: "What is the name of the President of the United States now?",
    answers: [
      "Visit uscis.gov/citizenship/testupdates for the name of the President of the United States.",
    ],
    options: [
      "Donald Trump",
      "Joe Biden",
      "Barack Obama",
      "Check current information",
    ],
  },
  {
    question:
      "What is the name of the Vice President of the United States now?",
    answers: [
      "Visit uscis.gov/citizenship/testupdates for the name of the Vice President of the United States.",
    ],
    options: [
      "J.D. Vance",
      "Kamala Harris",
      "Mike Pence",
      "Check current information",
    ],
  },
  {
    question: "If the President can no longer serve, who becomes President?",
    answers: ["the Vice President"],
    options: [
      "the Vice President",
      "the Speaker of the House",
      "the Chief Justice",
      "the Secretary of State",
    ],
  },
  {
    question:
      "If both the President and the Vice President can no longer serve, who becomes President?",
    answers: ["the Speaker of the House"],
    options: [
      "the Speaker of the House",
      "the Chief Justice",
      "the Secretary of State",
      "the Secretary of Defense",
    ],
  },
  {
    question: "Who is the Commander in Chief of the military?",
    answers: ["the President"],
    options: [
      "the President",
      "the Secretary of Defense",
      "the Chairman of the Joint Chiefs",
      "Congress",
    ],
  },
  {
    question: "Who signs bills to become laws?",
    answers: ["the President"],
    options: [
      "the President",
      "Congress",
      "the Supreme Court",
      "the Vice President",
    ],
  },
  {
    question: "Who vetoes bills?",
    answers: ["the President"],
    options: ["the President", "Congress", "the Supreme Court", "the states"],
  },
  {
    question: "What does the President's Cabinet do?",
    answers: ["advises the President"],
    options: [
      "advises the President",
      "makes laws",
      "enforces laws in states",
      "interprets the Constitution",
    ],
  },
  {
    question: "What are two Cabinet-level positions?",
    answers: [
      "Secretary of Agriculture",
      "Secretary of Commerce",
      "Secretary of Defense",
      "Secretary of Education",
      "Secretary of Energy",
      "Secretary of Health and Human Services",
      "Secretary of Homeland Security",
      "Secretary of Housing and Urban Development",
      "Secretary of the Interior",
      "Secretary of Labor",
      "Secretary of State",
      "Secretary of Transportation",
      "Secretary of the Treasury",
      "Secretary of Veterans Affairs",
      "Attorney General",
      "Vice President",
    ],
    options: [
      "Secretary of State and Secretary of Defense",
      "Governor and Mayor",
      "Senator and Representative",
      "Judge and Sheriff",
    ],
  },
  {
    question: "What does the judicial branch do?",
    answers: [
      "reviews laws",
      "explains laws",
      "resolves disputes (disagreements)",
      "decides if a law goes against the Constitution",
    ],
    options: [
      "reviews laws and explains laws",
      "makes laws",
      "enforces laws",
      "votes on laws",
    ],
  },
  {
    question: "What is the highest court in the United States?",
    answers: ["the Supreme Court"],
    options: [
      "the Supreme Court",
      "the Federal Court",
      "the District Court",
      "the Appeals Court",
    ],
  },
  {
    question: "How many justices are on the Supreme Court?",
    answers: [
      "Visit uscis.gov/citizenship/testupdates for the number of justices on the Supreme Court.",
    ],
    options: ["nine (9)", "seven (7)", "eleven (11)", "five (5)"],
  },
  {
    question: "Who is the Chief Justice of the United States now?",
    answers: [
      "Visit uscis.gov/citizenship/testupdates for the name of the Chief Justice of the United States.",
    ],
    options: [
      "John Roberts",
      "Clarence Thomas",
      "Ruth Bader Ginsburg",
      "Check current information",
    ],
  },
  {
    question:
      "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    answers: [
      "to print money",
      "to declare war",
      "to create an army",
      "to make treaties",
    ],
    options: [
      "to print money",
      "to issue driver's licenses",
      "to provide education",
      "to perform marriages",
    ],
  },
  {
    question:
      "Under our Constitution, some powers belong to the states. What is one power of the states?",
    answers: [
      "provide schooling and education",
      "provide protection (police)",
      "provide safety (fire departments)",
      "give a driver's license",
      "approve zoning and land use",
    ],
    options: [
      "provide schooling and education",
      "print money",
      "declare war",
      "make treaties with other countries",
    ],
  },
  {
    question: "Who is the Governor of your state now?",
    answers: ["Answers will vary."],
    options: [
      "Answers will vary",
      "The President",
      "Your Senator",
      "The Mayor",
    ],
  },
  {
    question: "What is the capital of your state?",
    answers: ["Answers will vary."],
    options: [
      "Answers will vary",
      "Washington, D.C.",
      "New York City",
      "Los Angeles",
    ],
  },
  {
    question: "What are the two major political parties in the United States?",
    answers: ["Democratic and Republican"],
    options: [
      "Democratic and Republican",
      "Liberal and Conservative",
      "Progressive and Traditional",
      "Federal and State",
    ],
  },
  {
    question: "What is the political party of the President now?",
    answers: [
      "Visit uscis.gov/citizenship/testupdates for the political party of the President.",
    ],
    options: [
      "Republican",
      "Democratic",
      "Independent",
      "Check current information",
    ],
  },
  {
    question:
      "What is the name of the Speaker of the House of Representatives now?",
    answers: [
      "Visit uscis.gov/citizenship/testupdates for the name of the Speaker of the House of Representatives.",
    ],
    options: [
      "Mike Johnson",
      "Nancy Pelosi",
      "Kevin McCarthy",
      "Check current information",
    ],
  },
  {
    question:
      "There are four amendments to the Constitution about who can vote. Describe one of them.",
    answers: [
      "Citizens eighteen (18) and older (can vote).",
      "You don't have to pay (a poll tax) to vote.",
      "Any citizen can vote. (Women and men can vote.)",
      "A male citizen of any race (can vote).",
    ],
    options: [
      "Citizens eighteen (18) and older can vote",
      "Only men can vote",
      "Only property owners can vote",
      "Only married people can vote",
    ],
  },
  {
    question:
      "What is one responsibility that is only for United States citizens?",
    answers: ["serve on a jury", "vote in a federal election"],
    options: ["serve on a jury", "pay taxes", "obey laws", "get an education"],
  },
  {
    question: "Name one right only for United States citizens.",
    answers: ["vote in a federal election", "run for federal office"],
    options: [
      "vote in a federal election",
      "freedom of speech",
      "freedom of religion",
      "right to a fair trial",
    ],
  },
  {
    question: "What are two rights of everyone living in the United States?",
    answers: [
      "freedom of expression",
      "freedom of speech",
      "freedom of assembly",
      "freedom to petition the government",
      "freedom of religion",
      "the right to bear arms",
    ],
    options: [
      "freedom of speech and freedom of religion",
      "right to vote and run for office",
      "right to free housing",
      "right to free healthcare",
    ],
  },
  {
    question:
      "What do we show loyalty to when we say the Pledge of Allegiance?",
    answers: ["the United States", "the flag"],
    options: [
      "the United States",
      "the President",
      "the Constitution",
      "Congress",
    ],
  },
  {
    question:
      "What is one promise you make when you become a United States citizen?",
    answers: [
      "give up loyalty to other countries",
      "defend the Constitution and laws of the United States",
      "obey the laws of the United States",
      "serve in the U.S. military (if needed)",
      "serve (do important work for) the nation (if needed)",
      "be loyal to the United States",
    ],
    options: [
      "defend the Constitution and laws of the United States",
      "never leave the United States",
      "donate money to charity",
      "learn to speak English perfectly",
    ],
  },
  {
    question: "How old do citizens have to be to vote for President?",
    answers: ["eighteen (18) and older"],
    options: [
      "eighteen (18) and older",
      "twenty-one (21) and older",
      "sixteen (16) and older",
      "twenty-five (25) and older",
    ],
  },
  {
    question:
      "What are two ways that Americans can participate in their democracy?",
    answers: [
      "vote",
      "join a political party",
      "help with a campaign",
      "join a civic group",
      "join a community group",
      "give an elected official your opinion on an issue",
      "call Senators and Representatives",
      "publicly support or oppose an issue or policy",
      "run for office",
      "write to a newspaper",
    ],
    options: [
      "vote and join a political party",
      "pay taxes and obey laws",
      "work and pay bills",
      "watch TV and read news",
    ],
  },
  {
    question: "When is the last day you can send in federal income tax forms?",
    answers: ["April 15"],
    options: ["April 15", "December 31", "January 31", "March 15"],
  },
  {
    question: "When must all men register for the Selective Service?",
    answers: [
      "at age eighteen (18)",
      "between eighteen (18) and twenty-six (26)",
    ],
    options: [
      "at age eighteen (18)",
      "at age twenty-one (21)",
      "at age sixteen (16)",
      "when they get married",
    ],
  },
  {
    question: "What is one reason colonists came to America?",
    answers: [
      "freedom",
      "political liberty",
      "religious freedom",
      "economic opportunity",
      "practice their religion",
      "escape persecution",
    ],
    options: [
      "religious freedom",
      "to find gold",
      "to conquer Native Americans",
      "to build cities",
    ],
  },
  {
    question: "Who lived in America before the Europeans arrived?",
    answers: ["American Indians", "Native Americans"],
    options: [
      "American Indians",
      "Spanish settlers",
      "French explorers",
      "African slaves",
    ],
  },
  {
    question: "What group of people was taken to America and sold as slaves?",
    answers: ["Africans", "people from Africa"],
    options: ["Africans", "Europeans", "Asians", "Native Americans"],
  },
  {
    question: "Why did the colonists fight the British?",
    answers: [
      "because of high taxes (taxation without representation)",
      "because the British army stayed in their houses (boarding, quartering)",
      "because they didn't have self-government",
    ],
    options: [
      "because of high taxes (taxation without representation)",
      "because they wanted to expand west",
      "because of religious differences",
      "because they wanted a king",
    ],
  },
  {
    question: "Who wrote the Declaration of Independence?",
    answers: ["(Thomas) Jefferson"],
    options: [
      "Thomas Jefferson",
      "George Washington",
      "Benjamin Franklin",
      "John Adams",
    ],
  },
  {
    question: "When was the Declaration of Independence adopted?",
    answers: ["July 4, 1776"],
    options: [
      "July 4, 1776",
      "July 4, 1777",
      "December 25, 1776",
      "January 1, 1776",
    ],
  },
  {
    question: "There were 13 original states. Name three.",
    answers: [
      "New Hampshire",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New York",
      "New Jersey",
      "Pennsylvania",
      "Delaware",
      "Maryland",
      "Virginia",
      "North Carolina",
      "South Carolina",
      "Georgia",
    ],
    options: [
      "Virginia, Massachusetts, Pennsylvania",
      "California, Texas, Florida",
      "Alaska, Hawaii, Montana",
      "Illinois, Ohio, Michigan",
    ],
  },
  {
    question: "What happened at the Constitutional Convention?",
    answers: [
      "The Constitution was written.",
      "The Founding Fathers wrote the Constitution.",
    ],
    options: [
      "The Constitution was written",
      "The Declaration of Independence was signed",
      "The Revolutionary War began",
      "The first President was elected",
    ],
  },
  {
    question: "When was the Constitution written?",
    answers: ["1787"],
    options: ["1787", "1776", "1791", "1783"],
  },
  {
    question:
      "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    answers: [
      "(James) Madison",
      "(Alexander) Hamilton",
      "(John) Jay",
      "Publius",
    ],
    options: [
      "James Madison",
      "Thomas Jefferson",
      "George Washington",
      "Benjamin Franklin",
    ],
  },
  {
    question: "What is one thing Benjamin Franklin is famous for?",
    answers: [
      "U.S. diplomat",
      "oldest member of the Constitutional Convention",
      "first Postmaster General of the United States",
      'writer of "Poor Richard\'s Almanac"',
      "started the first free libraries",
    ],
    options: [
      "U.S. diplomat",
      "first President",
      "wrote the Declaration of Independence",
      "led the Continental Army",
    ],
  },
  {
    question: 'Who is the "Father of Our Country"?',
    answers: ["(George) Washington"],
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Benjamin Franklin",
      "John Adams",
    ],
  },
  {
    question: "Who was the first President?",
    answers: ["(George) Washington"],
    options: [
      "George Washington",
      "John Adams",
      "Thomas Jefferson",
      "Benjamin Franklin",
    ],
  },
  {
    question: "What territory did the United States buy from France in 1803?",
    answers: ["the Louisiana Territory", "Louisiana"],
    options: ["the Louisiana Territory", "Texas", "California", "Alaska"],
  },
  {
    question: "Name one war fought by the United States in the 1800s.",
    answers: [
      "War of 1812",
      "Mexican-American War",
      "Civil War",
      "Spanish-American War",
    ],
    options: ["Civil War", "World War I", "Revolutionary War", "Korean War"],
  },
  {
    question: "Name the U.S. war between the North and the South.",
    answers: ["the Civil War", "the War between the States"],
    options: [
      "the Civil War",
      "the Revolutionary War",
      "World War I",
      "the War of 1812",
    ],
  },
  {
    question: "Name one problem that led to the Civil War.",
    answers: ["slavery", "economic reasons", "states' rights"],
    options: [
      "slavery",
      "taxation",
      "foreign invasion",
      "religious differences",
    ],
  },
  {
    question: "What was one important thing that Abraham Lincoln did?",
    answers: [
      "freed the slaves (Emancipation Proclamation)",
      "saved (or preserved) the Union",
      "led the United States during the Civil War",
    ],
    options: [
      "freed the slaves (Emancipation Proclamation)",
      "wrote the Constitution",
      "was the first President",
      "bought Louisiana",
    ],
  },
  {
    question: "What did the Emancipation Proclamation do?",
    answers: [
      "freed the slaves",
      "freed slaves in the Confederacy",
      "freed slaves in the Confederate states",
      "freed slaves in most Southern states",
    ],
    options: [
      "freed the slaves",
      "ended the Civil War",
      "gave women the right to vote",
      "established income tax",
    ],
  },
  {
    question: "What did Susan B. Anthony do?",
    answers: ["fought for women's rights", "fought for civil rights"],
    options: [
      "fought for women's rights",
      "was the first female President",
      "started the Civil War",
      "invented the telephone",
    ],
  },
  {
    question: "Name one war fought by the United States in the 1900s.",
    answers: [
      "World War I",
      "World War II",
      "Korean War",
      "Vietnam War",
      "(Persian) Gulf War",
    ],
    options: ["World War II", "Civil War", "Revolutionary War", "War of 1812"],
  },
  {
    question: "Who was President during World War I?",
    answers: ["(Woodrow) Wilson"],
    options: [
      "Woodrow Wilson",
      "Theodore Roosevelt",
      "Franklin Roosevelt",
      "Harry Truman",
    ],
  },
  {
    question: "Who was President during the Great Depression and World War II?",
    answers: ["(Franklin) Roosevelt"],
    options: [
      "Franklin Roosevelt",
      "Theodore Roosevelt",
      "Harry Truman",
      "Dwight Eisenhower",
    ],
  },
  {
    question: "Who did the United States fight in World War II?",
    answers: ["Japan, Germany, and Italy"],
    options: [
      "Japan, Germany, and Italy",
      "Russia, China, and Korea",
      "England, France, and Spain",
      "Mexico, Canada, and Brazil",
    ],
  },
  {
    question:
      "Before he was President, Eisenhower was a general. What war was he in?",
    answers: ["World War II"],
    options: ["World War II", "World War I", "Korean War", "Vietnam War"],
  },
  {
    question:
      "During the Cold War, what was the main concern of the United States?",
    answers: ["Communism"],
    options: [
      "Communism",
      "Terrorism",
      "Nuclear weapons",
      "Economic depression",
    ],
  },
  {
    question: "What movement tried to end racial discrimination?",
    answers: ["civil rights (movement)"],
    options: [
      "civil rights movement",
      "women's rights movement",
      "labor movement",
      "environmental movement",
    ],
  },
  {
    question: "What did Martin Luther King, Jr. do?",
    answers: [
      "fought for civil rights",
      "worked for equality for all Americans",
    ],
    options: [
      "fought for civil rights",
      "was President",
      "was a general in World War II",
      "invented the light bulb",
    ],
  },
  {
    question:
      "What major event happened on September 11, 2001, in the United States?",
    answers: ["Terrorists attacked the United States."],
    options: [
      "Terrorists attacked the United States",
      "The Cold War ended",
      "World War II began",
      "The Civil War ended",
    ],
  },
  {
    question: "Name one American Indian tribe in the United States.",
    answers: [
      "Cherokee",
      "Navajo",
      "Sioux",
      "Chippewa",
      "Choctaw",
      "Pueblo",
      "Apache",
      "Iroquois",
      "Creek",
      "Blackfeet",
      "Seminole",
      "Cheyenne",
      "Arawak",
      "Shawnee",
      "Mohegan",
      "Huron",
      "Oneida",
      "Lakota",
      "Crow",
      "Teton",
      "Hopi",
      "Inuit",
    ],
    options: ["Cherokee", "Spanish", "French", "English"],
  },
  {
    question: "Name one of the two longest rivers in the United States.",
    answers: ["Missouri (River)", "Mississippi (River)"],
    options: [
      "Mississippi River",
      "Colorado River",
      "Hudson River",
      "Columbia River",
    ],
  },
  {
    question: "What ocean is on the West Coast of the United States?",
    answers: ["Pacific (Ocean)"],
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
  },
  {
    question: "What ocean is on the East Coast of the United States?",
    answers: ["Atlantic (Ocean)"],
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
  },
  {
    question: "Name one U.S. territory.",
    answers: [
      "Puerto Rico",
      "U.S. Virgin Islands",
      "American Samoa",
      "Northern Mariana Islands",
      "Guam",
    ],
    options: ["Puerto Rico", "Hawaii", "Alaska", "Canada"],
  },
  {
    question: "Name one state that borders Canada.",
    answers: [
      "Maine",
      "New Hampshire",
      "Vermont",
      "New York",
      "Pennsylvania",
      "Ohio",
      "Michigan",
      "Minnesota",
      "North Dakota",
      "Montana",
      "Idaho",
      "Washington",
      "Alaska",
    ],
    options: ["Alaska", "California", "Texas", "Florida"],
  },
  {
    question: "Name one state that borders Mexico.",
    answers: ["California", "Arizona", "New Mexico", "Texas"],
    options: ["Texas", "Florida", "New York", "Maine"],
  },
  {
    question: "What is the capital of the United States?",
    answers: ["Washington, D.C."],
    options: ["Washington, D.C.", "New York City", "Philadelphia", "Boston"],
  },
  {
    question: "Where is the Statue of Liberty?",
    answers: [
      "New York (Harbor)",
      "Liberty Island",
      "New Jersey, near New York City",
      "on the Hudson (River)",
    ],
    options: ["New York Harbor", "Washington, D.C.", "Philadelphia", "Boston"],
  },
  {
    question: "Why does the flag have 13 stripes?",
    answers: [
      "because there were 13 original colonies",
      "because the stripes represent the original colonies",
    ],
    options: [
      "because there were 13 original colonies",
      "because there are 13 amendments",
      "because it looks good",
      "because of the 13 founding fathers",
    ],
  },
  {
    question: "Why does the flag have 50 stars?",
    answers: [
      "because there is one star for each state",
      "because each star represents a state",
      "because there are 50 states",
    ],
    options: [
      "because there are 50 states",
      "because there are 50 senators",
      "because there are 50 representatives",
      "because it looks good",
    ],
  },
  {
    question: "What is the name of the national anthem?",
    answers: ["The Star-Spangled Banner"],
    options: [
      "The Star-Spangled Banner",
      "America the Beautiful",
      "God Bless America",
      "My Country 'Tis of Thee",
    ],
  },
  {
    question: "When do we celebrate Independence Day?",
    answers: ["July 4"],
    options: ["July 4", "July 14", "December 25", "November 11"],
  },
  {
    question: "Name two national U.S. holidays.",
    answers: [
      "New Year's Day",
      "Martin Luther King, Jr. Day",
      "Presidents' Day",
      "Memorial Day",
      "Independence Day",
      "Labor Day",
      "Columbus Day",
      "Veterans Day",
      "Thanksgiving",
      "Christmas",
    ],
    options: [
      "Independence Day and Christmas",
      "Easter and Halloween",
      "Valentine's Day and St. Patrick's Day",
      "Earth Day and Arbor Day",
    ],
  },
];

export default multiple_choice_data;
