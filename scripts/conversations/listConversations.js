/*
    Note:
    - The conversation name must be unique
    - There cannot be 2 conversation with default=true
    The composition of every message:
    - Key = Key of the message, needed i  options
    - Message = What you send WIP, for now we send Key
    - options = Which options we can take
    - effect = What happens when we take the option
    Of the effects:
    - None = Nothing happens
    - Print stats = Print the stats
    - Print new quests = Print the new quests
    - Print current quests = Print the current quests
    - check-dexterity-5-firstMessage = Check if dexterity is 5, if no, print firstMessage, else continue like normal
        This can be used with every kind of skills
    - failure-Talk to techale = It sets to failure the quest Talk to techale
        TODO this should be automatic lol, but for now i dont have time, it should also solve Message tho
    - success-Talk to techale = It sets to success the quest Talk to techale
    - dexterity 35, it gives 35 xp to dexterity, it can be used with any skills
    - continue-Yes please-No please-Talk to techale-firstMessage = If Talk to techale is off cooldown, yes please, else no please
 */

// noinspection BadExpressionStatementJS
const conversations = {
    "diary" : {
        "name": "Diary",
        "description" : "A diary of the user's daily activitiesfsadljbkahjflsdlfjkbadslbfasdlb",
        "icon" : "diary.png",
        "default": true,
        "messages": {
            "firstMessage": {
                "message": "Hi",
                "response": "Hello! What do you want to do today?",
                "options": ["Check stats", "Check new quests improvement", "Check current quests improvement", "Check new quests story", "Check current quests story", "Show karma cards"],
                "effect": "None"
            },
            "Check stats": {
                "message": "Check my stats",
                "response": "Here your stats:",
                "options": ["Check new quests improvement", "Check current quests improvement", "Check new quests story", "Check current quests story", "Show karma cards"],
                "effect": "Print stats"
            },
            "Check new quests improvement": {
                "message": "What are some new quests for improvement?",
                "response": "Here are your new quests:",
                "options": ["Check current quests improvement", "Check stats", "Check new quests story", "Check current quests story", "Show karma cards"],
                "effect": "Print new quests"
            },
            "Check current quests improvement": {
                "message": "What are the quests for improvements that i have ongoing?",
                "response": "Here are your current quests:",
                "options": ["Check new quests improvement", "Check stats", "Check new quests story", "Check current quests story", "Show karma cards"],
                "effect": "Print current quests"
            },
            "Check new quests story": {
                "message": "What are some new story quests?",
                "response": "Here are your new story quests:",
                "options": ["Check current quests story", "Check stats", "Check new quests improvement", "Check current quests improvement", "Show karma cards"],
                "effect": "Print new quests story"
            },
            "Check current quests story": {
                "message": "What are the story quests that i have ongoing?",
                "response": "Here are your current story quests:",
                "options": ["Check new quests story", "Check stats", "Check new quests improvement", "Check current quests improvement", "Show karma cards"],
                "effect": "Print current quests story"

            },
            "Show karma cards": {
                "message": "Show karma cards",
                "response": "Here are your karma cards:",
                "options": ["Check stats", "Check new quests improvement", "Check current quests improvement", "Check new quests story", "Check current quests story"],
                "effect": "Print karma cards"
            }
        }
    },

    "Goldie-Mani-Quest": {
        "name": "Goldie",
        "description": "Goldie may help you with Mani",
        "icon": "techale.png",
        "messages": {
            "firstMessage": {
                "response": "Hello Detective! Do you need help?",
                "options": ["Check out this assignment... Send ss", "Heard about WolvesCo", "babaganoosh"],
                "effect": "None"
            },
            "babaganoosh": {
                "response": "Babaganoosh!!11!!!!1!!1!!!!1!!1111",
                "options": ["Check out this assignment... Send ss", "Heard about WolvesCo"],
                "effect": "None"
            },
            "Check out this assignment... Send ss": {
                "response": "Oh. Mani. I see she found someone at last. Good! Maybe you’ll knock\n" +
                    "some scene into her.",
                "options": ["What do you mean?"],
                "effect": ""
            },
            "Heard about WolvesCo": {
                "response": "Yes, Orange one is my favorite!",
                "options": ["Do you just like how it matches your fur?", "babaganoosh", "Check out this assignment... Send ss"],
                "effect": ""
            },
            "Do you just like how it matches your fur?": {
              "response": "I am afraid, my dear Catson, that most of your conclusions were erroneous. Orange soda is like drinking liquid sunshine. it’s my go-to mood booster. Who needs therapy when you have orange soda?",
              "options": ["babaganoosh", "Check out this assignment... Send ss"],
              "effect": ""
            },
            "What do you mean?": {
                "response": "She really took doom scrolling to a new level. Mani shares about 30\n" +
                    "TubeYube shorts in our town’s discussion board... Per DAY. She keeps saying it’s for public safety, but I think she’s just watching bad news for the sake of bad news. Mayor Rooner is SO close to perma-banning her!",
                "options": ["What exactly is doom scrolling?", "TubeYube shorts?"],
                "effect": ""
            },
            "What exactly is doom scrolling?": {
                "response": "When people get hooked on scrolling through negative news and\n" +
                    "content. It makes some people feel really down, but they keep going at it anyway.",
                "options": ["Interesting. So, are these TubeYubers taking advantage of that?", "TubeYube shorts?"],
                "effect": ""
            },
            "TubeYube shorts?": {
                "response": "Yeah, they’re addicting. I heard they are very profitable too! Although I still can’t figure out why my squirrel-watching shorts get no views...",
                "options": ["Have you tried asking one of the TubeYubers?", "What exactly is doom scrolling?"],
                "effect": ""
            },
            "Interesting. So, are these TubeYubers taking advantage of that?": {
                "response": "That’s for you to find out!",
                "options": ["TubeYube shorts?", "Thanks for the informations!"],
                "effect": ""
            },
            "Have you tried asking one of the TubeYubers?": {
                "response": "I have... But my comments never get enough likes for their QnA!",
                "options": ["What exactly is doom scrolling?", "Thanks for the informations!"],
                "effect": ""
            },
            "Thanks for the informations!": {
                "response": "GASP!!! An Undercover Mission!!! Good thinking. They’ll reveal their view-mining strategies without even realizing it!!! Surely they’ll pick my Q’s for them A’s if YOU pretend to be a big influencer!",
                "options": ["I was going to email them about doom scrolling for Mani. Rings a bell?"],
                "effect": ""
            },
            "I was going to email them about doom scrolling for Mani. Rings a bell?": {
                "response": "Yeah, that too. Sure.",
                "options": ["... Are we doing this?"],
                "effect": ""
            },
            "... Are we doing this?": {
                "response": "Wait a minute...",
                "options": ["Ok (and wait a minute)"],
                "effect": ""
            },
            "Ok (and wait a minute)": {
                "response": "Alrighty! I prepared everything for your mission. All you have to do now is text TybeYuber HopDay. Just be careful, if she realizes you’re investigating, she will ghost you...",
                "options": ["Wait, How do you know she'll ghost me?", "Is that my baby picture?..."],
                "effect": ""
            },
            "Wait, How do you know she'll ghost me?": {
                "response": "I might have tried pulling this mission a few times before... heh But this time is different! HopDay commented on one of the videos, and now it's your move, detective!",
                "options": ["A lot can still go wrong. Undercover missions are tricky.", "Is that my baby picture?..."],
                "effect": ""
            },
            "A lot can still go wrong. Undercover missions are tricky.": {
                "response": "I believe in you! Go gettem, tiger!",
                "options": ["Alrighty then, let's get this over with.", "Is that my baby picture?..."],
                "effect": ""
            },
            "Is that my baby picture?...": {
                "response": "Your new icon? Do you like it? I had to dig deep for it. Good thing\n" +
                    "I’m a dog of persistence ;)",
                "options": ["Why me..?", "Wait, How do you know she'll ghost me?"],
                "effect": ""
            },
            "Why me..?": {
                "response": "Listen, I couldn’t fake ALL the followers, so I had to get SOME real\n" +
                    "ones. The internet loves cats, what can ya do...",
                "options": ["Wait, How do you know she'll ghost me?", "Alrighty then, let's get this over with."],
                "effect": ""
            },
            "Alrighty then, let's get this over with.": {
                "response": "Good Luck, Kit-Cat!",
                "options": [],
                "effect": "success-Mani2"
            }
        }
    },

    "Mani-Jewel-Start" : {
        "name": "Mani Jewel",
        "description": "Mani Jewel needs your help",
        "icon": "techale.png",
        "messages": {
            "firstMessage": {
                "response": "Hello Catective <br>My name is Mani Jewel. I’m a junior at Gnomes Borough College. Detective, I need your help. I’ve been scrolling through all this news about the Wolves Corporation—they’re out to get me, I just know it. The more I read, the more I feel I’m missing something important. I need to know everything they’re up to, but it’s overwhelming. Can you help me find out what’s really going on?",
                "options": ["Wolves Co?", "Do you have any evidence?", "I’m on it, Miss Jewel"],
                "effect": "None"
            },
            "Wolves Co?": {
                "response": "The energy drink company. Their energy drinks are everywhere, and" +
                    "I’m convinced there’s something dangerous they’re hiding. And due" +
                    "to recent events... I think they are on to me!",
                "options": ["Do you have any evidence?", "I'm on it, Miss Jewel", "I see. Which events would that be?"],
                "effect": "None"
            },
            "I see. Which events would that be?": {
                "response": "I’m glad you asked, Detective! Take a look at this.\n" +
                    "out for info.\n" +
                    "Sends ss of her emails... top reads “You need more storage” My phone keeps glitching, my emails are a mess, and it’s been like that ever since I started looking into the Wolves Corporation. But it’s not just the tech stuff—it’s the bizarre events too. My\n" +
                    "cousin Timmy lost his job and his house got broken into last week, and then there’s that frog rain that happened on Thursday. So many frogs ripped from their homes... It’s too much to ignore.\n" +
                    "Think about it. The Wolves Corporation's has been expanding its market aggressively. They engineered that frog rain to create chaos and distract us from their shady business! With their resources, it’s not impossible. I just need your help to dig deeper and find the truth.",
                "options": ["Do you have any evidence?", "I'm on it, Miss Jewel"],
                "effect": "None"
            },
            "Do you have any evidence?": {
                "response": "I have plenty!\n" +
                    "<i>Mani spams fake links to shorts and images of wolves.</i>",
                "options": ["I'm on it, Miss Jewel", "Wolves Co?", "That is... A lot of wolves."],
                "effect": "None"
            },
            "That is... A lot of wolves.": {
                "response": "Vicious wolves. Hope it helps.",
                "options": ["Wolves Co?", "I'm on it, Miss Jewel"],
                "effect": "None"
            },
            "I'm on it, Miss Jewel": {
                "response": "Thank you so much, detective! I am mighty grateful! Let me know if\n" +
                    "you need anything from me. I am always watching<br><i><b>She is hiding something</b></i><br><i>Note: in one of your options there is written (Awareness 5), that means that only if your level of Awareness is 5 or higher you can choose that option</i>",
                "options": ["What accounts do you follow? (Awareness 5)", "What does your security system look like?", "Is there anything else I need to know?"],
                "effect": ""
            },
            "What accounts do you follow? (Awareness 5)" : {
                "response": "Oh you know, Daily Horoscopes and DoomBunni, BinniBunni, and HopDie. I mean HopDay! She rebranded...<br><i>(Companies know their target...)</i>",
                "options": ["What does your security system look like?", "Is there anything else I need to know?"],
                "effect": ""
            },
            "What does your security system look like?" : {
                "response": "Just my own two eyes, detective. I’m always watching threats. for potential",
                "options": ["If you're worried, I recommend my friend, Guy, she makes strong locks.", "What accounts do you follow? (Awareness 5)", "Is there anything else I need to know?"],
                "effect": ""
            },
            "If you're worried, I recommend my friend, Guy, she makes strong locks.": {
                "response": "Oh... Locks are not something I can find a use for.",
                "options": ["What do you mean?", "What accounts do you follow? (Awareness 5)", "What does your security system look like?"],
            },
            "What do you mean?": {
                "response": "It’s not as bad as it sounds, I just got rid of my door.", // ????
                "options": ["... You got rid of your door?", "Do you need help installing it back up?", "HUH?"],
                "effect": ""
            },
            "HUH?": {
                "response": "Yeah so, please don’t freak out, you’re the only person\n" +
                    "left in this town that is willing to help me... You’re kind of my last hope.",
                "options": ["Okay...", "I'm not 'freaking out' because you don't have a door. Admittedly, it is bizarre, though that won't interfere with my investigation."],
                "effect": ""
            },
            "Okay...": {
                "response": "So...",
                "options": ["What accounts do you follow? (Awareness 5)", "What does your security system look like?", "Is there anything else I need to know?"],
                "effect": ""
            },
            "... You got rid of your door?": {
                "response": "Yeah so, please don’t freak out, you’re the only person\n" +
                    "left in this town that is willing to help me... You’re kind of my last hope.",
                "options": ["Okay...", "I'm not 'freaking out' because you don't have a door. Admittedly, it is bizarre, though that won't interfere with my investigation."],
                "effect": ""
            },
            "Do you need help installing it back up?": {
                "response": "That's a relief!",
                "options": ["Okay..."],
                "effect": ""
            },
            "I'm not 'freaking out' because you don't have a door. Admittedly, it is bizarre, though that won't interfere with my investigation.": {
                "response": "That's a relief!",
                "options": ["What accounts do you follow? (Awareness 5)", "What does your security system look like?", "Is there anything else I need to know?"],
                "effect": ""
            },
            "Is there anything else I need to know?": {
                "response": "Not much, just that I’m counting on you detective. I sense they will come for me any day now. I don’t have enough information, I need to know more. When will they come? How many? How should I prepare? There are still so many unknown factors. Please Hurry...<br><i>(It sounds as if she is expecting guests...)</i>",
                "options": ["I will do my best to aid you, Ms. Jewel."],
                "effect": ""
            },
            "I will do my best to aid you, Ms. Jewel.": {
                "response": "You're the only one who’s left who believes in what I’m going through right now... I have to say... It means a lot. Thank you...",
                "options": [""],
                "effect": "success-Mani1"
            },
        }
    },
    
    "Tutorial" : {
        "name": "Goldie",
        "description": "A tutorial",
        "icon": "techale.png",
        "messages": {
            "firstMessage": {
                "response": "Hello, Detective. This is G from HR, I am texting to assess your move-in status and ask you a few questions regarding your stats.",
                "options": ["Assess away.", "New phone who's dis?", "Say, how did you get the name 'G'?"],
                "effect": "None"
            },
            "New phone who's dis?": {
                "response": "Dis is G from HR, here to do some evaluating. Are you ready?",
                "options": ["Assess away.", "Say, how did you get the name 'G'?"],
                "effect": "None"
            },
            "Say, how did you get the name 'G'?": {
                "response": "I am G because I am the one who gives you the gold. Are you ready to start?",
                "options": ["Assess away.", "New phone who's dis?"],
                "effect": "None"
            },
            "Assess away.": {
                "response": "On a scale of 1 to 10, how would you rate your Physical wellness",
                "options": ["Physical wellness 1", "Physical wellness 2", "Physical wellness 3", "Physical wellness 4", "Physical wellness 5", "Physical wellness 6", "Physical wellness 7", "Physical wellness 8", "Physical wellness 9", "Physical wellness 10"],
                "effect": ""
            },
            "Physical wellness 1": {
                "response": "On a scale of 1 to 10, how would you rate your Physical Awareness",
                "options": ["Physical Awareness 1", "Physical Awareness 2", "Physical Awareness 3", "Physical Awareness 4", "Physical Awareness 5", "Physical Awareness 6", "Physical Awareness 7", "Physical Awareness 8", "Physical Awareness 9", "Physical Awareness 10"],
                "effect": "Physical-wellness 100"
            },
            "Physical wellness 3": {
                "response": "On a scale of 1 to 10, how would you rate your Physical Awareness",
                "options": ["Physical Awareness 1", "Physical Awareness 2", "Physical Awareness 3", "Physical Awareness 4", "Physical Awareness 5", "Physical Awareness 6", "Physical Awareness 7", "Physical Awareness 8", "Physical Awareness 9", "Physical Awareness 10"],
                "effect": "Physical-wellness 300"
            },
            "Physical wellness 4": {
                "response": "On a scale of 1 to 10, how would you rate your Physical Awareness",
                "options": ["Physical Awareness 1", "Physical Awareness 2", "Physical Awareness 3", "Physical Awareness 4", "Physical Awareness 5", "Physical Awareness 6", "Physical Awareness 7", "Physical Awareness 8", "Physical Awareness 9", "Physical Awareness 10"],
                "effect": "Physical-wellness 400"
            },
            "Physical wellness 5": {
                "response": "On a scale of 1 to 10, how would you rate your Physical Awareness",
                "options": ["Physical Awareness 1", "Physical Awareness 2", "Physical Awareness 3", "Physical Awareness 4", "Physical Awareness 5", "Physical Awareness 6", "Physical Awareness 7", "Physical Awareness 8", "Physical Awareness 9", "Physical Awareness 10"],
                "effect": "Physical-wellness 500"
            },
            "Physical wellness 6": {
                "response": "On a scale of 1 to 10, how would you rate your Physical Awareness",
                "options": ["Physical Awareness 1", "Physical Awareness 2", "Physical Awareness 3", "Physical Awareness 4", "Physical Awareness 5", "Physical Awareness 6", "Physical Awareness 7", "Physical Awareness 8", "Physical Awareness 9", "Physical Awareness 10"],
                "effect": "Physical-wellness 600"
            },
            "Physical wellness 7": {
                "response": "On a scale of 1 to 10, how would you rate your Physical Awareness",
                "options": ["Physical Awareness 1", "Physical Awareness 2", "Physical Awareness 3", "Physical Awareness 4", "Physical Awareness 5", "Physical Awareness 6", "Physical Awareness 7", "Physical Awareness 8", "Physical Awareness 9", "Physical Awareness 10"],
                "effect": "Physical-wellness 700"
            },
            "Physical wellness 8": {
                "response": "On a scale of 1 to 10, how would you rate your Physical Awareness",
                "options": ["Physical Awareness 1", "Physical Awareness 2", "Physical Awareness 3", "Physical Awareness 4", "Physical Awareness 5", "Physical Awareness 6", "Physical Awareness 7", "Physical Awareness 8", "Physical Awareness 9", "Physical Awareness 10"],
                "effect": "Physical-wellness 800"
            },
            "Physical wellness 9": {
                "response": "On a scale of 1 to 10, how would you rate your Physical Awareness",
                "options": ["Physical Awareness 1", "Physical Awareness 2", "Physical Awareness 3", "Physical Awareness 4", "Physical Awareness 5", "Physical Awareness 6", "Physical Awareness 7", "Physical Awareness 8", "Physical Awareness 9", "Physical Awareness 10"],
                "effect": "Physical-wellness 900"
            },
            "Physical wellness 10": {
                "response": "On a scale of 1 to 10, how would you rate your Physical Awareness",
                "options": ["Physical Awareness 1", "Physical Awareness 2", "Physical Awareness 3", "Physical Awareness 4", "Physical Awareness 5", "Physical Awareness 6", "Physical Awareness 7", "Physical Awareness 8", "Physical Awareness 9", "Physical Awareness 10"],
                "effect": "Physical-wellness 1000"
            },
            "Physical Awareness 1": {
                            "response": "On a scale of 1 to 10, how would you rate your Sleep hygiene",
                            "options": ["Sleep hygiene 1", "Sleep hygiene 2", "Sleep hygiene 3", "Sleep hygiene 4", "Sleep hygiene 5", "Sleep hygiene 6", "Sleep hygiene 7", "Sleep hygiene 8", "Sleep hygiene 9", "Sleep hygiene 10"],
                            "effect": "Physical-awareness 100"
                        },
            "Physical Awareness 2": {
                "response": "On a scale of 1 to 10, how would you rate your Sleep hygiene",
                "options": ["Sleep hygiene 1", "Sleep hygiene 2", "Sleep hygiene 3", "Sleep hygiene 4", "Sleep hygiene 5", "Sleep hygiene 6", "Sleep hygiene 7", "Sleep hygiene 8", "Sleep hygiene 9", "Sleep hygiene 10"],
                "effect": "Physical-awareness 200"
            },
            "Physical Awareness 3": {
                "response": "On a scale of 1 to 10, how would you rate your Sleep hygiene",
                "options": ["Sleep hygiene 1", "Sleep hygiene 2", "Sleep hygiene 3", "Sleep hygiene 4", "Sleep hygiene 5", "Sleep hygiene 6", "Sleep hygiene 7", "Sleep hygiene 8", "Sleep hygiene 9", "Sleep hygiene 10"],
                "effect": "Physical-awareness 300"
            },
            "Physical Awareness 4": {
                "response": "On a scale of 1 to 10, how would you rate your Sleep hygiene",
                "options": ["Sleep hygiene 1", "Sleep hygiene 2", "Sleep hygiene 3", "Sleep hygiene 4", "Sleep hygiene 5", "Sleep hygiene 6", "Sleep hygiene 7", "Sleep hygiene 8", "Sleep hygiene 9", "Sleep hygiene 10"],
                "effect": "Physical-awareness 400"
            },
            "Physical Awareness 5": {
                "response": "On a scale of 1 to 10, how would you rate your Sleep hygiene",
                "options": ["Sleep hygiene 1", "Sleep hygiene 2", "Sleep hygiene 3", "Sleep hygiene 4", "Sleep hygiene 5", "Sleep hygiene 6", "Sleep hygiene 7", "Sleep hygiene 8", "Sleep hygiene 9", "Sleep hygiene 10"],
                "effect": "Physical-awareness 500"
            },
            "Physical Awareness 6": {
                "response": "On a scale of 1 to 10, how would you rate your Sleep hygiene",
                "options": ["Sleep hygiene 1", "Sleep hygiene 2", "Sleep hygiene 3", "Sleep hygiene 4", "Sleep hygiene 5", "Sleep hygiene 6", "Sleep hygiene 7", "Sleep hygiene 8", "Sleep hygiene 9", "Sleep hygiene 10"],
                "effect": "Physical-awareness 600"
            },
            "Physical Awareness 7": {
                "response": "On a scale of 1 to 10, how would you rate your Sleep hygiene",
                "options": ["Sleep hygiene 1", "Sleep hygiene 2", "Sleep hygiene 3", "Sleep hygiene 4", "Sleep hygiene 5", "Sleep hygiene 6", "Sleep hygiene 7", "Sleep hygiene 8", "Sleep hygiene 9", "Sleep hygiene 10"],
                "effect": "Physical-awareness 700"
            },
            "Physical Awareness 8": {
                "response": "On a scale of 1 to 10, how would you rate your Sleep hygiene",
                "options": ["Sleep hygiene 1", "Sleep hygiene 2", "Sleep hygiene 3", "Sleep hygiene 4", "Sleep hygiene 5", "Sleep hygiene 6", "Sleep hygiene 7", "Sleep hygiene 8", "Sleep hygiene 9", "Sleep hygiene 10"],
                "effect": "Physical-awareness 800"
            },
            "Physical Awareness 9": {
                "response": "On a scale of 1 to 10, how would you rate your Sleep hygiene",
                "options": ["Sleep hygiene 1", "Sleep hygiene 2", "Sleep hygiene 3", "Sleep hygiene 4", "Sleep hygiene 5", "Sleep hygiene 6", "Sleep hygiene 7", "Sleep hygiene 8", "Sleep hygiene 9", "Sleep hygiene 10"],
                "effect": "Physical-awareness 900"
            },
            "Physical Awareness 10": {
                "response": "On a scale of 1 to 10, how would you rate your Sleep hygiene",
                "options": ["Sleep hygiene 1", "Sleep hygiene 2", "Sleep hygiene 3", "Sleep hygiene 4", "Sleep hygiene 5", "Sleep hygiene 6", "Sleep hygiene 7", "Sleep hygiene 8", "Sleep hygiene 9", "Sleep hygiene 10"],
                "effect": "Physical-awareness 1000"
            },
            "Sleep hygiene 1": {
                "response": "On a scale of 1 to 10, how would you rate your Knowledge",
                "options": ["Knowledge 1", "Knowledge 2", "Knowledge 3", "Knowledge 4", "Knowledge 5", "Knowledge 6", "Knowledge 7", "Knowledge 8", "Knowledge 9", "Knowledge 10"],
                "effect": "Sleep-hygiene 100"
            },
            "Sleep hygiene 2": {
                "response": "On a scale of 1 to 10, how would you rate your Knowledge",
                "options": ["Knowledge 1", "Knowledge 2", "Knowledge 3", "Knowledge 4", "Knowledge 5", "Knowledge 6", "Knowledge 7", "Knowledge 8", "Knowledge 9", "Knowledge 10"],
                "effect": "Sleep-hygiene 200"
            },
            "Sleep hygiene 3": {
                "response": "On a scale of 1 to 10, how would you rate your Knowledge",
                "options": ["Knowledge 1", "Knowledge 2", "Knowledge 3", "Knowledge 4", "Knowledge 5", "Knowledge 6", "Knowledge 7", "Knowledge 8", "Knowledge 9", "Knowledge 10"],
                "effect": "Sleep-hygiene 300"
            },
            "Sleep hygiene 4": {
                "response": "On a scale of 1 to 10, how would you rate your Knowledge",
                "options": ["Knowledge 1", "Knowledge 2", "Knowledge 3", "Knowledge 4", "Knowledge 5", "Knowledge 6", "Knowledge 7", "Knowledge 8", "Knowledge 9", "Knowledge 10"],
                "effect": "Sleep-hygiene 400"
            },
            "Sleep hygiene 5": {
                "response": "On a scale of 1 to 10, how would you rate your Knowledge",
                "options": ["Knowledge 1", "Knowledge 2", "Knowledge 3", "Knowledge 4", "Knowledge 5", "Knowledge 6", "Knowledge 7", "Knowledge 8", "Knowledge 9", "Knowledge 10"],
                "effect": "Sleep-hygiene 500"
            },
            "Sleep hygiene 6": {
                "response": "On a scale of 1 to 10, how would you rate your Knowledge",
                "options": ["Knowledge 1", "Knowledge 2", "Knowledge 3", "Knowledge 4", "Knowledge 5", "Knowledge 6", "Knowledge 7", "Knowledge 8", "Knowledge 9", "Knowledge 10"],
                "effect": "Sleep-hygiene 600"
            },
            "Sleep hygiene 7": {
                "response": "On a scale of 1 to 10, how would you rate your Knowledge",
                "options": ["Knowledge 1", "Knowledge 2", "Knowledge 3", "Knowledge 4", "Knowledge 5", "Knowledge 6", "Knowledge 7", "Knowledge 8", "Knowledge 9", "Knowledge 10"],
                "effect": "Sleep-hygiene 700"
            },
            "Sleep hygiene 8": {
                "response": "On a scale of 1 to 10, how would you rate your Knowledge",
                "options": ["Knowledge 1", "Knowledge 2", "Knowledge 3", "Knowledge 4", "Knowledge 5", "Knowledge 6", "Knowledge 7", "Knowledge 8", "Knowledge 9", "Knowledge 10"],
                "effect": "Sleep-hygiene 800"
            },
            "Sleep hygiene 9": {
                "response": "On a scale of 1 to 10, how would you rate your Knowledge",
                "options": ["Knowledge 1", "Knowledge 2", "Knowledge 3", "Knowledge 4", "Knowledge 5", "Knowledge 6", "Knowledge 7", "Knowledge 8", "Knowledge 9", "Knowledge 10"],
                "effect": "Sleep-hygiene 900"
            },
            "Sleep hygiene 10": {
                "response": "On a scale of 1 to 10, how would you rate your Knowledge",
                "options": ["Knowledge 1", "Knowledge 2", "Knowledge 3", "Knowledge 4", "Knowledge 5", "Knowledge 6", "Knowledge 7", "Knowledge 8", "Knowledge 9", "Knowledge 10"],
                "effect": "Sleep-hygiene 1000"
            },
            "Knowledge 1": {
                "response": "On a scale of 1 to 10, how would you rate your Positive self image",
                "options": ["Positive self image 1", "Positive self image 2", "Positive self image 3", "Positive self image 4", "Positive self image 5", "Positive self image 6", "Positive self image 7", "Positive self image 8", "Positive self image 9", "Positive self image 10"],
                "effect": "Knowledge 100"
            },
            "Knowledge 2": {
                "response": "On a scale of 1 to 10, how would you rate your Positive self image",
                "options": ["Positive self image 1", "Positive self image 2", "Positive self image 3", "Positive self image 4", "Positive self image 5", "Positive self image 6", "Positive self image 7", "Positive self image 8", "Positive self image 9", "Positive self image 10"],
                "effect": "Knowledge 200"
            },
            "Knowledge 3": {
                "response": "On a scale of 1 to 10, how would you rate your Positive self image",
                "options": ["Positive self image 1", "Positive self image 2", "Positive self image 3", "Positive self image 4", "Positive self image 5", "Positive self image 6", "Positive self image 7", "Positive self image 8", "Positive self image 9", "Positive self image 10"],
                "effect": "Knowledge 300"
            },
            "Knowledge 4": {
                "response": "On a scale of 1 to 10, how would you rate your Positive self image",
                "options": ["Positive self image 1", "Positive self image 2", "Positive self image 3", "Positive self image 4", "Positive self image 5", "Positive self image 6", "Positive self image 7", "Positive self image 8", "Positive self image 9", "Positive self image 10"],
                "effect": "Knowledge 400"
            },
            "Knowledge 5": {
                "response": "On a scale of 1 to 10, how would you rate your Positive self image",
                "options": ["Positive self image 1", "Positive self image 2", "Positive self image 3", "Positive self image 4", "Positive self image 5", "Positive self image 6", "Positive self image 7", "Positive self image 8", "Positive self image 9", "Positive self image 10"],
                "effect": "Knowledge 500"
            },
            "Knowledge 6": {
                "response": "On a scale of 1 to 10, how would you rate your Positive self image",
                "options": ["Positive self image 1", "Positive self image 2", "Positive self image 3", "Positive self image 4", "Positive self image 5", "Positive self image 6", "Positive self image 7", "Positive self image 8", "Positive self image 9", "Positive self image 10"],
                "effect": "Knowledge 600"
            },
            "Knowledge 7": {
                "response": "On a scale of 1 to 10, how would you rate your Positive self image",
                "options": ["Positive self image 1", "Positive self image 2", "Positive self image 3", "Positive self image 4", "Positive self image 5", "Positive self image 6", "Positive self image 7", "Positive self image 8", "Positive self image 9", "Positive self image 10"],
                "effect": "Knowledge 700"
            },
            "Knowledge 8": {
                "response": "On a scale of 1 to 10, how would you rate your Positive self image",
                "options": ["Positive self image 1", "Positive self image 2", "Positive self image 3", "Positive self image 4", "Positive self image 5", "Positive self image 6", "Positive self image 7", "Positive self image 8", "Positive self image 9", "Positive self image 10"],
                "effect": "Knowledge 800"
            },
            "Knowledge 9": {
                "response": "On a scale of 1 to 10, how would you rate your Positive self image",
                "options": ["Positive self image 1", "Positive self image 2", "Positive self image 3", "Positive self image 4", "Positive self image 5", "Positive self image 6", "Positive self image 7", "Positive self image 8", "Positive self image 9", "Positive self image 10"],
                "effect": "Knowledge 900"
            },
            "Knowledge 10": {
                "response": "On a scale of 1 to 10, how would you rate your Positive self image",
                "options": ["Positive self image 1", "Positive self image 2", "Positive self image 3", "Positive self image 4", "Positive self image 5", "Positive self image 6", "Positive self image 7", "Positive self image 8", "Positive self image 9", "Positive self image 10"],
                "effect": "Knowledge 1000"
            },
            "Positive self image 1": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional regulation",
                "options": ["Emotional regulation 1", "Emotional regulation 2", "Emotional regulation 3", "Emotional regulation 4", "Emotional regulation 5", "Emotional regulation 6", "Emotional regulation 7", "Emotional regulation 8", "Emotional regulation 9", "Emotional regulation 10"],
                "effect": "Positive-self-image 100"
            },
            "Positive self image 2": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional regulation",
                "options": ["Emotional regulation 1", "Emotional regulation 2", "Emotional regulation 3", "Emotional regulation 4", "Emotional regulation 5", "Emotional regulation 6", "Emotional regulation 7", "Emotional regulation 8", "Emotional regulation 9", "Emotional regulation 10"],
                "effect": "Positive-self-image 200"
            },
            "Positive self image 3": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional regulation",
                "options": ["Emotional regulation 1", "Emotional regulation 2", "Emotional regulation 3", "Emotional regulation 4", "Emotional regulation 5", "Emotional regulation 6", "Emotional regulation 7", "Emotional regulation 8", "Emotional regulation 9", "Emotional regulation 10"],
                "effect": "Positive-self-image 300"
            },
            "Positive self image 4": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional regulation",
                "options": ["Emotional regulation 1", "Emotional regulation 2", "Emotional regulation 3", "Emotional regulation 4", "Emotional regulation 5", "Emotional regulation 6", "Emotional regulation 7", "Emotional regulation 8", "Emotional regulation 9", "Emotional regulation 10"],
                "effect": "Positive-self-image 400"
            },
            "Positive self image 5": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional regulation",
                "options": ["Emotional regulation 1", "Emotional regulation 2", "Emotional regulation 3", "Emotional regulation 4", "Emotional regulation 5", "Emotional regulation 6", "Emotional regulation 7", "Emotional regulation 8", "Emotional regulation 9", "Emotional regulation 10"],
                "effect": "Positive-self-image 500"
            },
            "Positive self image 6": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional regulation",
                "options": ["Emotional regulation 1", "Emotional regulation 2", "Emotional regulation 3", "Emotional regulation 4", "Emotional regulation 5", "Emotional regulation 6", "Emotional regulation 7", "Emotional regulation 8", "Emotional regulation 9", "Emotional regulation 10"],
                "effect": "Positive-self-image 600"
            },
            "Positive self image 7": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional regulation",
                "options": ["Emotional regulation 1", "Emotional regulation 2", "Emotional regulation 3", "Emotional regulation 4", "Emotional regulation 5", "Emotional regulation 6", "Emotional regulation 7", "Emotional regulation 8", "Emotional regulation 9", "Emotional regulation 10"],
                "effect": "Positive-self-image 700"
            },
            "Positive self image 8": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional regulation",
                "options": ["Emotional regulation 1", "Emotional regulation 2", "Emotional regulation 3", "Emotional regulation 4", "Emotional regulation 5", "Emotional regulation 6", "Emotional regulation 7", "Emotional regulation 8", "Emotional regulation 9", "Emotional regulation 10"],
                "effect": "Positive-self-image 800"
            },
            "Positive self image 9": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional regulation",
                "options": ["Emotional regulation 1", "Emotional regulation 2", "Emotional regulation 3", "Emotional regulation 4", "Emotional regulation 5", "Emotional regulation 6", "Emotional regulation 7", "Emotional regulation 8", "Emotional regulation 9", "Emotional regulation 10"],
                "effect": "Positive-self-image 900"
            },
            "Positive self image 10": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional regulation",
                "options": ["Emotional regulation 1", "Emotional regulation 2", "Emotional regulation 3", "Emotional regulation 4", "Emotional regulation 5", "Emotional regulation 6", "Emotional regulation 7", "Emotional regulation 8", "Emotional regulation 9", "Emotional regulation 10"],
                "effect": "Positive-self-image 1000"
            },
            "Emotional regulation 1": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional awareness",
                "options": ["Emotional awareness 1", "Emotional awareness 2", "Emotional awareness 3", "Emotional awareness 4", "Emotional awareness 5", "Emotional awareness 6", "Emotional awareness 7", "Emotional awareness 8", "Emotional awareness 9", "Emotional awareness 10"],
                "effect": "Emotional-regulation 100"
            },
            "Emotional regulation 2": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional awareness",
                "options": ["Emotional awareness 1", "Emotional awareness 2", "Emotional awareness 3", "Emotional awareness 4", "Emotional awareness 5", "Emotional awareness 6", "Emotional awareness 7", "Emotional awareness 8", "Emotional awareness 9", "Emotional awareness 10"],
                "effect": "Emotional-regulation 200"
            },
            "Emotional regulation 3": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional awareness",
                "options": ["Emotional awareness 1", "Emotional awareness 2", "Emotional awareness 3", "Emotional awareness 4", "Emotional awareness 5", "Emotional awareness 6", "Emotional awareness 7", "Emotional awareness 8", "Emotional awareness 9", "Emotional awareness 10"],
                "effect": "Emotional-regulation 300"
            },
            "Emotional regulation 4": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional awareness",
                "options": ["Emotional awareness 1", "Emotional awareness 2", "Emotional awareness 3", "Emotional awareness 4", "Emotional awareness 5", "Emotional awareness 6", "Emotional awareness 7", "Emotional awareness 8", "Emotional awareness 9", "Emotional awareness 10"],
                "effect": "Emotional-regulation 400"
            },
            "Emotional regulation 5": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional awareness",
                "options": ["Emotional awareness 1", "Emotional awareness 2", "Emotional awareness 3", "Emotional awareness 4", "Emotional awareness 5", "Emotional awareness 6", "Emotional awareness 7", "Emotional awareness 8", "Emotional awareness 9", "Emotional awareness 10"],
                "effect": "Emotional-regulation 500"
            },
            "Emotional regulation 6": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional awareness",
                "options": ["Emotional awareness 1", "Emotional awareness 2", "Emotional awareness 3", "Emotional awareness 4", "Emotional awareness 5", "Emotional awareness 6", "Emotional awareness 7", "Emotional awareness 8", "Emotional awareness 9", "Emotional awareness 10"],
                "effect": "Emotional-regulation 600"
            },
            "Emotional regulation 7": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional awareness",
                "options": ["Emotional awareness 1", "Emotional awareness 2", "Emotional awareness 3", "Emotional awareness 4", "Emotional awareness 5", "Emotional awareness 6", "Emotional awareness 7", "Emotional awareness 8", "Emotional awareness 9", "Emotional awareness 10"],
                "effect": "Emotional-regulation 700"
            },
            "Emotional regulation 8": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional awareness",
                "options": ["Emotional awareness 1", "Emotional awareness 2", "Emotional awareness 3", "Emotional awareness 4", "Emotional awareness 5", "Emotional awareness 6", "Emotional awareness 7", "Emotional awareness 8", "Emotional awareness 9", "Emotional awareness 10"],
                "effect": "Emotional-regulation 800"
            },
            "Emotional regulation 9": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional awareness",
                "options": ["Emotional awareness 1", "Emotional awareness 2", "Emotional awareness 3", "Emotional awareness 4", "Emotional awareness 5", "Emotional awareness 6", "Emotional awareness 7", "Emotional awareness 8", "Emotional awareness 9", "Emotional awareness 10"],
                "effect": "Emotional-regulation 900"
            },
            "Emotional regulation 10": {
                "response": "On a scale of 1 to 10, how would you rate your Emotional awareness",
                "options": ["Emotional awareness 1", "Emotional awareness 2", "Emotional awareness 3", "Emotional awareness 4", "Emotional awareness 5", "Emotional awareness 6", "Emotional awareness 7", "Emotional awareness 8", "Emotional awareness 9", "Emotional awareness 10"],
                "effect": "Emotional-regulation 1000"
            },
            "Emotional awareness 1": {
                "response": "On a scale of 1 to 10, how would you rate your Awareness",
                "options": ["Awareness 1", "Awareness 2", "Awareness 3", "Awareness 4", "Awareness 5", "Awareness 6", "Awareness 7", "Awareness 8", "Awareness 9", "Awareness 10"],
                "effect": "Emotional-awareness 100"
            },
            "Emotional awareness 2": {
                "response": "On a scale of 1 to 10, how would you rate your Awareness",
                "options": ["Awareness 1", "Awareness 2", "Awareness 3", "Awareness 4", "Awareness 5", "Awareness 6", "Awareness 7", "Awareness 8", "Awareness 9", "Awareness 10"],
                "effect": "Emotional-awareness 200"
            },
            "Emotional awareness 3": {
                "response": "On a scale of 1 to 10, how would you rate your Awareness",
                "options": ["Awareness 1", "Awareness 2", "Awareness 3", "Awareness 4", "Awareness 5", "Awareness 6", "Awareness 7", "Awareness 8", "Awareness 9", "Awareness 10"],
                "effect": "Emotional-awareness 300"
            },
            "Emotional awareness 4": {
                "response": "On a scale of 1 to 10, how would you rate your Awareness",
                "options": ["Awareness 1", "Awareness 2", "Awareness 3", "Awareness 4", "Awareness 5", "Awareness 6", "Awareness 7", "Awareness 8", "Awareness 9", "Awareness 10"],
                "effect": "Emotional-awareness 400"
            },
            "Emotional awareness 5": {
                "response": "On a scale of 1 to 10, how would you rate your Awareness",
                "options": ["Awareness 1", "Awareness 2", "Awareness 3", "Awareness 4", "Awareness 5", "Awareness 6", "Awareness 7", "Awareness 8", "Awareness 9", "Awareness 10"],
                "effect": "Emotional-awareness 500"
            },
            "Emotional awareness 6": {
                "response": "On a scale of 1 to 10, how would you rate your Awareness",
                "options": ["Awareness 1", "Awareness 2", "Awareness 3", "Awareness 4", "Awareness 5", "Awareness 6", "Awareness 7", "Awareness 8", "Awareness 9", "Awareness 10"],
                "effect": "Emotional-awareness 600"
            },
            "Emotional awareness 7": {
                "response": "On a scale of 1 to 10, how would you rate your Awareness",
                "options": ["Awareness 1", "Awareness 2", "Awareness 3", "Awareness 4", "Awareness 5", "Awareness 6", "Awareness 7", "Awareness 8", "Awareness 9", "Awareness 10"],
                "effect": "Emotional-awareness 700"
            },
            "Emotional awareness 8": {
                "response": "On a scale of 1 to 10, how would you rate your Awareness",
                "options": ["Awareness 1", "Awareness 2", "Awareness 3", "Awareness 4", "Awareness 5", "Awareness 6", "Awareness 7", "Awareness 8", "Awareness 9", "Awareness 10"],
                "effect": "Emotional-awareness 800"
            },
            "Emotional awareness 9": {
                "response": "On a scale of 1 to 10, how would you rate your Awareness",
                "options": ["Awareness 1", "Awareness 2", "Awareness 3", "Awareness 4", "Awareness 5", "Awareness 6", "Awareness 7", "Awareness 8", "Awareness 9", "Awareness 10"],
                "effect": "Emotional-awareness 900"
            },
            "Emotional awareness 10": {
                "response": "On a scale of 1 to 10, how would you rate your Awareness",
                "options": ["Awareness 1", "Awareness 2", "Awareness 3", "Awareness 4", "Awareness 5", "Awareness 6", "Awareness 7", "Awareness 8", "Awareness 9", "Awareness 10"],
                "effect": "Emotional-awareness 1000"
            },
            "Awareness 1": {
                "response": "On a scale of 1 to 10, how would you rate your Journaling",
                "options": ["Journaling 1", "Journaling 2", "Journaling 3", "Journaling 4", "Journaling 5", "Journaling 6", "Journaling 7", "Journaling 8", "Journaling 9", "Journaling 10"],
                "effect": "Awareness 100"
            },
            "Awareness 2": {
                "response": "On a scale of 1 to 10, how would you rate your Journaling",
                "options": ["Journaling 1", "Journaling 2", "Journaling 3", "Journaling 4", "Journaling 5", "Journaling 6", "Journaling 7", "Journaling 8", "Journaling 9", "Journaling 10"],
                "effect": "Awareness 200"
            },
            "Awareness 3": {
                "response": "On a scale of 1 to 10, how would you rate your Journaling",
                "options": ["Journaling 1", "Journaling 2", "Journaling 3", "Journaling 4", "Journaling 5", "Journaling 6", "Journaling 7", "Journaling 8", "Journaling 9", "Journaling 10"],
                "effect": "Awareness 300"
            },
            "Awareness 4": {
                "response": "On a scale of 1 to 10, how would you rate your Journaling",
                "options": ["Journaling 1", "Journaling 2", "Journaling 3", "Journaling 4", "Journaling 5", "Journaling 6", "Journaling 7", "Journaling 8", "Journaling 9", "Journaling 10"],
                "effect": "Awareness 400"
            },
            "Awareness 5": {
                "response": "On a scale of 1 to 10, how would you rate your Journaling",
                "options": ["Journaling 1", "Journaling 2", "Journaling 3", "Journaling 4", "Journaling 5", "Journaling 6", "Journaling 7", "Journaling 8", "Journaling 9", "Journaling 10"],
                "effect": "Awareness 500"
            },
            "Awareness 6": {
                "response": "On a scale of 1 to 10, how would you rate your Journaling",
                "options": ["Journaling 1", "Journaling 2", "Journaling 3", "Journaling 4", "Journaling 5", "Journaling 6", "Journaling 7", "Journaling 8", "Journaling 9", "Journaling 10"],
                "effect": "Awareness 600"
            },
            "Awareness 7": {
                "response": "On a scale of 1 to 10, how would you rate your Journaling",
                "options": ["Journaling 1", "Journaling 2", "Journaling 3", "Journaling 4", "Journaling 5", "Journaling 6", "Journaling 7", "Journaling 8", "Journaling 9", "Journaling 10"],
                "effect": "Awareness 700"
            },
            "Awareness 8": {
                "response": "On a scale of 1 to 10, how would you rate your Journaling",
                "options": ["Journaling 1", "Journaling 2", "Journaling 3", "Journaling 4", "Journaling 5", "Journaling 6", "Journaling 7", "Journaling 8", "Journaling 9", "Journaling 10"],
                "effect": "Awareness 800"
            },
            "Awareness 9": {
                "response": "On a scale of 1 to 10, how would you rate your Journaling",
                "options": ["Journaling 1", "Journaling 2", "Journaling 3", "Journaling 4", "Journaling 5", "Journaling 6", "Journaling 7", "Journaling 8", "Journaling 9", "Journaling 10"],
                "effect": "Awareness 900"
            },
            "Awareness 10": {
                "response": "On a scale of 1 to 10, how would you rate your Journaling",
                "options": ["Journaling 1", "Journaling 2", "Journaling 3", "Journaling 4", "Journaling 5", "Journaling 6", "Journaling 7", "Journaling 8", "Journaling 9", "Journaling 10"],
                "effect": "Awareness 1000"
            },
            "Journaling 1": {
                "response": "On a scale of 1 to 10, how would you rate your Meditation",
                "options": ["Meditation 1", "Meditation 2", "Meditation 3", "Meditation 4", "Meditation 5", "Meditation 6", "Meditation 7", "Meditation 8", "Meditation 9", "Meditation 10"],
                "effect": "Journaling 100"
            },
            "Journaling 2": {
                "response": "On a scale of 1 to 10, how would you rate your Meditation",
                "options": ["Meditation 1", "Meditation 2", "Meditation 3", "Meditation 4", "Meditation 5", "Meditation 6", "Meditation 7", "Meditation 8", "Meditation 9", "Meditation 10"],
                "effect": "Journaling 200"
            },
            "Journaling 3": {
                "response": "On a scale of 1 to 10, how would you rate your Meditation",
                "options": ["Meditation 1", "Meditation 2", "Meditation 3", "Meditation 4", "Meditation 5", "Meditation 6", "Meditation 7", "Meditation 8", "Meditation 9", "Meditation 10"],
                "effect": "Journaling 300"
            },
            "Journaling 4": {
                "response": "On a scale of 1 to 10, how would you rate your Meditation",
                "options": ["Meditation 1", "Meditation 2", "Meditation 3", "Meditation 4", "Meditation 5", "Meditation 6", "Meditation 7", "Meditation 8", "Meditation 9", "Meditation 10"],
                "effect": "Journaling 400"
            },
            "Journaling 5": {
                "response": "On a scale of 1 to 10, how would you rate your Meditation",
                "options": ["Meditation 1", "Meditation 2", "Meditation 3", "Meditation 4", "Meditation 5", "Meditation 6", "Meditation 7", "Meditation 8", "Meditation 9", "Meditation 10"],
                "effect": "Journaling 500"
            },
            "Journaling 6": {
                "response": "On a scale of 1 to 10, how would you rate your Meditation",
                "options": ["Meditation 1", "Meditation 2", "Meditation 3", "Meditation 4", "Meditation 5", "Meditation 6", "Meditation 7", "Meditation 8", "Meditation 9", "Meditation 10"],
                "effect": "Journaling 600"
            },
            "Journaling 7": {
                "response": "On a scale of 1 to 10, how would you rate your Meditation",
                "options": ["Meditation 1", "Meditation 2", "Meditation 3", "Meditation 4", "Meditation 5", "Meditation 6", "Meditation 7", "Meditation 8", "Meditation 9", "Meditation 10"],
                "effect": "Journaling 700"
            },
            "Journaling 8": {
                "response": "On a scale of 1 to 10, how would you rate your Meditation",
                "options": ["Meditation 1", "Meditation 2", "Meditation 3", "Meditation 4", "Meditation 5", "Meditation 6", "Meditation 7", "Meditation 8", "Meditation 9", "Meditation 10"],
                "effect": "Journaling 800"
            },
            "Journaling 9": {
                "response": "On a scale of 1 to 10, how would you rate your Meditation",
                "options": ["Meditation 1", "Meditation 2", "Meditation 3", "Meditation 4", "Meditation 5", "Meditation 6", "Meditation 7", "Meditation 8", "Meditation 9", "Meditation 10"],
                "effect": "Journaling 900"
            },
            "Journaling 10": {
                "response": "On a scale of 1 to 10, how would you rate your Meditation",
                "options": ["Meditation 1", "Meditation 2", "Meditation 3", "Meditation 4", "Meditation 5", "Meditation 6", "Meditation 7", "Meditation 8", "Meditation 9", "Meditation 10"],
                "effect": "Journaling 1000"
            },
            "Meditation 1": {
                "response": "Thank you for your responses. However, there is one more thing...",
                "options": ["Hit me.", "What is it, pal?"],
                "effect": "Meditation 100"
            },
            "Meditation 2": {
                "response": "Thank you for your responses. However, there is one more thing...",
                "options": ["Hit me.", "What is it, pal?"],
                "effect": "Meditation 200"
            },
            "Meditation 3": {
                "response": "Thank you for your responses. However, there is one more thing...",
                "options": ["Hit me.", "What is it, pal?"],
                "effect": "Meditation 300"
            },
            "Meditation 4": {
                "response": "Thank you for your responses. However, there is one more thing...",
                "options": ["Hit me.", "What is it, pal?"],
                "effect": "Meditation 400"
            },
            "Meditation 5": {
                "response": "Thank you for your responses. However, there is one more thing...",
                "options": ["Hit me.", "What is it, pal?"],
                "effect": "Meditation 500"
            },
            "Meditation 6": {
                "response": "Thank you for your responses. However, there is one more thing...",
                "options": ["Hit me.", "What is it, pal?"],
                "effect": "Meditation 600"
            },
            "Meditation 7": {
                "response": "Thank you for your responses. However, there is one more thing...",
                "options": ["Hit me.", "What is it, pal?"],
                "effect": "Meditation 700"
            },
            "Meditation 8": {
                "response": "Thank you for your responses. However, there is one more thing...",
                "options": ["Hit me.", "What is it, pal?"],
                "effect": "Meditation 800"
            },
            "Meditation 9": {
                "response": "Thank you for your responses. However, there is one more thing...",
                "options": ["Hit me.", "What is it, pal?"],
                "effect": "Meditation 900"
            },
            "Meditation 10": {
                "response": "Thank you for your responses. However, there is one more thing...",
                "options": ["Hit me.", "What is it, pal?"],
                "effect": "Meditation 1000"
            },
            "Hit me.": {
                "response": "Surprise!! I am... No other... than your BEST PAL, GOLDIE~! I got promoted to HR!",
                "options": ["Woah! Congratulations", "babaganoosh!"],
                "effect": "None"
            },
            "Woah! Congratulations": {
                "response": "Why, thank you! I was so glad to see you move to Gnomes Borough! Have you gotten your assignment yet?",
                "options": ["Still waiting, pal. Could you show me the ropes?"],
                "effect": "None"
            },
            "babaganoosh!": {
                "response": "Haha, I haven’t heard that one since school. Babaganoosh to you too! Have you gotten your assignment yet?",
                "options": ["Still waiting, pal. Could you show me the ropes?"],
                "effect": "None"
            },
            "What is it, pal?": {
                "response": "I am... None other... Than your BEST FRIEND, GOLDIE! I got promoted to HR! Oh, waIT, “pal”?? You knew Who I was and let me play a fool this whole time?! Classic Cat move.",
                "options": ["Whattt? Nooo...", "Yeah :)"],
                "effect": "None"
            },
            "Whattt? Nooo...": {
                "response": "Right... I guess I can’t fool you, detective! Your high stats don’t lie. Say, have you gotten your assignment yet?",
                "options": ["Still waiting, pal. Could you show me the ropes?"],
                "effect": "None"
            },
            "Yeah :)": {
                "response": "Right... I guess I can’t fool you, detective! Your high stats don’t lie. Say, have you gotten your assignment yet?",
                "options": ["Still waiting, pal. Could you show me the ropes?"],
                "effect": "None"
            },
            "Still waiting, pal. Could you show me the ropes?": {
                "response": "Of course! (Gives a brief tour) Ya, got that?",
                "options": ["Think so! I just got my 1st message. Nice chatting, pal."],
                "effect": "unlockDiary"
            },
            "Think so! I just got my 1st message. Nice chatting, pal.": {
                "response": "Great! I’ll be around if you need anything. Good luck on your first case!",
                "options": ["Thanks, Goldie!"],
                "effect": "None"
            },
            "Thanks, Goldie!": {
                "response": "You’re welcome! I’ll see you around, detective!",
                "options": [],
                "effect": "None"
            },

        }


    }
}