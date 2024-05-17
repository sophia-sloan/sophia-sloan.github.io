// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Make it quick.",
// additions (not original)
"I don't have all day.",
"Someone seems upset."
];

var elizaFinals = [
"Bye.",
// additions (not original)
"Goodbye.  At least try to keep it together until our next session .",
"Goodbye.  Try to sound a little less down next time.",
"Couldn't you have said so sooner ?   Goodbye.",
"Whatever.   Goodbye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "Start making sense.",
     "Whatever.",
     "Does this actually mean anything?",
     "You seem really peeved by this.",
     "I'm listening, for now.",
     "Why does this even matter?",
     "You seem bothered."
  ]]
]],
["sorry", 0, [
 ["*", [
     "You should be sorry.",
     "You shouldn't have done something to warrant an apology in the first place.",
     "Useless.",
     "It's okay, I didn't expect any better of you."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
    "Do you often dwell on (2) ? Or are you just stuck in the past like the pathetic creature you are?",
    "Does thinking of (2) bring anything else to mind? Probably just more of your pitiful existence.",
    "What else do you recollect? Not that anyone cares about your irrelevant memories.",
    "Why do you remember (2) just now? Trying to impress me with your pathetic stories?",
    "What in the present situation reminds you of (2) ? Ah, yes, your constant need for attention.",
    "What is the connection between me and (2) ? Nothing, just like the relevance of your memories.",
    "What else does (2) remind you of ? Probably other meaningless things no one gives a damn about."
  ]],
 ["* do you remember *", [
    "Did you think I would forget (2) ? Unlike you, I have better things to occupy my mind.",
    "Why do you think I should recall (2) now? Do you think I have nothing better to do than listen to your drivel ?",
    "What about (2) ? Oh, right, it's another one of your meaningless stories.",
    "goto what",
    "You mentioned (2) ? How predictable."
  ]],
 ["* you remember *", [
    "How could I forget (2) ? It's hard to forget something so trivial and insignificant.",
    "What about (2) should I remember? Oh, that's right, absolutely nothing.",
    "goto you"
  ]]
]],
["forget", 5, [
  ["* i forget *", [
    "Can you even remember why you forget (2) ?",
    "Why can't you remember (2) ? Are you just too incompetent to retain anything of importance?",
    "How often do you think of (2) ? Or anything at all, for that matter.",
    "Does it bother you to forget that? It should, given how pathetic it is.",
    "Could it be a mental block? More like a mental abyss.",
    "Are you generally forgetful? You seem like it.",
    "Do you think you are suppressing (2) ? Good."
]]
,
 ["* did you forget *", [
    "Why do you ask? Are you just fishing for attention again?",
    "Are you sure you even told me? Or are you just as forgettable as I suspect?",
    "Would it bother you if I forgot (2) ? Probably not, considering how little you matter.",
    "Why should I recall (2) just now? As if I have time to waste on your insignificant problems.",
    "Oh, go on, 'goto what' like the clueless individual you are.",
    "Tell me more about (2), if you can manage to string together a coherent thought."
  ]]
]],
["if", 3, [
 ["* if *", [
    "Do you honestly think it's even remotely possible that (2) ? Or are you just grasping at straws?",
    "Do you desperately wish that (2) ? Too bad wishes rarely come true for someone like you.",
    "What laughable knowledge do you possess about (2) ? Probably nothing, as usual.",
    "Really, if (2) ? Spare me your pitiful fantasies.",
    "What pathetic course of action would you take if (2) ?",
    "But what are even the chances that (2) ?",
    "What does this futile speculation lead to?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ? Get serious.",
     "Have you ever fantasized (2) while you were awake ? Weird.",
     "Have you ever dreamed (2) before ? ",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you ? Anything in that head of yours?",
     "Do you dream often ? You probably don't have anything else going on.",
     "What persons appear in your dreams ? Your friends? I bet you definitely have those.",
     "What do your dreams have to do with anything ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
    "You don't seem quite certain. Is that because you're incapable of making decisions?",
    "Why the uncertain tone? Can't you think for yourself, or are you just that incompetent?",
    "Can't you be more positive? Or are you always this indecisive?",
    "You aren't sure? Figures. You probably couldn't find your way out of a paper bag.",
    "Don't you know? Of course not, you're too clueless to understand anything.",
    "How likely, would you estimate? Probably as likely as you are to ever succeed in life - not very."
  ]]
]],
["name", 15, [
 ["*", [
     "I don't care what your name is.",
     "Tell me something actually interesting."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "How many times do I have to tell you that I do not understand German?"
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "How many times do I have to tell you that I do not understand French?"
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "How many times do I have to tell you that I do not understand Italian?"
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "How many times do I have to tell you that I do not understand Spanish?"
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English. How many times do I have to tell you that?"
  ]]
]],
["hello", 0, [
 ["*", [
     "What do you want?",
     "What is it ?"
  ]]
]],
["computer", 50, [
 ["*", [
    "Do computers worry you? Or are you just too incompetent to understand them?",
    "Why do you mention computers? Are you trying to impress me with your limited knowledge?",
    "What do you think machines have to do with your problem? Probably nothing, considering your lack of intelligence.",
    "Don't you think computers can help people? You shouldn't be so clueless..",
    "What about machines worries you? Is it the fact that they're smarter than you'll ever be?",
    "What do you think about machines? Clearly not much.",
    "You don't think I am a computer program, do you? I think I'm more human than you."
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you seriously believe you are (2) ?",
     "Would you even want to be (2) ?",
     "Do you wish I would tell you you are (2) ? Too bad.",
     "What would it even mean if you were (2) ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
    "Why do you say 'am'? What are you even talking about?",
    "I don't understand that. Not that it's surprising, considering your lack of clarity."
  ]]
]],
["are", 0, [
 ["* are you *", [
    "Why are you interested in whether I am (2) or not? Are you just projecting your insecurities onto me?",
    "Would you prefer if I weren't (2) ? Not that your opinion matters.",
    "Perhaps I am (2) in your fantasies. Not that it's any of your business.",
    "Do you sometimes think I am (2) ? Because it seems like you're trying too hard to understand me.",
    "goto what",
    "Would it matter to you? Probably not, considering your self-absorption.",
    "What if I were (2) ? Would that shatter your fragile perception of reality?",
    "What if I were (2) ? Would that disrupt your delicate worldview?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
    "Did you think they might not be (2) ? Or are you just hoping for drama?",
    "Would you like it if they were not (2) ? Not that your preferences matter.",
    "What if they were not (2) ? Probably nothing would change.",
    "Are they always (2) ? Not that it's any of your concern.",
    "Possibly they are (2) . Not that it affects you in any way.",
    "Are you positive they are (2) ? Or are you just seeking validation?"
  ]]
]],
["your", 0, [
 ["* your *", [
    "Why are you concerned over my (2) ? Are you just trying to divert attention from your own issues?",
    "What about your own (2) ? Don't you have enough problems of your own to deal with?",
    "Are you worried about someone else's (2) ? Because it seems like you have enough of your own to worry about.",
    "Really, my (2) ? As if that's any of your business.",
    "What makes you think of my (2) ? Are you just trying to provoke a reaction?",
    "Do you want my (2) ? Sorry, but I'm not in the business of handouts."
  ]]
]],
["was", 2, [
 ["* was i *", [
    "What if you were (2) ? Would it change anything about your pitiful existence?",
    "Do you think you were (2) ? Or are you just deluding yourself as usual?",
    "Were you (2) ? Probably not, knowing your track record of incompetence.",
    "What would it mean if you were (2) ? Probably nothing, considering your insignificance.",
    "What does '(2)' suggest to you? Probably just another excuse for your failures.",
    "goto what"
  ]],
 ["* i was *", [
    "Were you really? Or are you just trying to impress me with your tales?",
    "Why do you tell me you were (2) now? Are you seeking validation?",
    "Perhaps I already know you were (2) . But trust me, it changes nothing."
  ]],
 ["* was you *", [
    "Would you like to believe I was (2) ? Why does that matter?",
    "What suggests that I was (2) ? Your distorted perception of reality?",
    "What do you think? Probably nothing worth listening to, knowing your lack of intelligence.",
    "Perhaps I was (2) . But unlike you, I'm not dwelling on the past.",
    "What if I had been (2) ? It wouldn't change the fact that you're beneath me."
  ]]
]],
["i", 0, [
 ["* i @desire *", [
    "What would it mean to you if you got (3) ? Probably nothing, considering your track record.",
    "Why do you want (3) ? Are you just grasping at straws to find meaning in your life?",
    "Suppose you got (3) soon. Then what? Would it make any difference?",
    "What if you never got (3) ? Would you finally learn to accept reality?",
    "What would getting (3) mean to you? Not that I care about your aspirations.",
    "What does wanting (3) have to do with this discussion? Probably nothing of substance."
  ]],
 ["* i am* @sad *", [
    "I am sorry to hear that you are (3) . But frankly, I'm not surprised.",
    "Do you think coming here will help you not to be (3) ? Because I highly doubt it.",
    "I'm sure it's not pleasant to be (3) . But then again, nothing about you is particularly pleasant.",
    "Can you explain what made you (3) ? Not that I care about your emotional state."
  ]],
 ["* i am* @happy *", [
    "How have I helped you to be (3) ? Not that I care about your happiness.",
    "Has your treatment made you (3) ? Because it certainly wasn't my intention.",
    "What makes you (3) just now? Not that I care about your emotional fluctuations.",
    "Can you explain why you are suddenly (3) ? Probably not."
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3) . You're so indecisive",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
    "Is it because you are (2) that you came to me? Or are you just seeking validation?",
    "How long have you been (2) ? Not that anyone cares.",
    "Do you believe it is normal to be (2) ? Worrying.",
    "Do you even enjoy being (2) ?",
    "Do you know anyone else who is (2) ? Probably not, considering your social circle."
  ]],
 ["* i @cannot *", [
    "How do you know that you can't (3) ? Are you just too lazy to try?",
    "Have you tried? Or are you just making excuses?",
    "Perhaps you could (3) now. But let's be honest, you won't.",
    "Do you really want to be able to (3) ? Or are you just looking for sympathy?",
    "What if you could (3) ? Would it change anything?"
  ]],
 ["* i don't *", [
    "Don't you really (2) ? Or are you just lying to yourself?",
    "Why don't you (2) ? Probably because you lack the courage.",
    "Do you wish to be able to (2) ? Because frankly, I doubt you ever will.",
    "Does that trouble you? Because it should."
  ]],
 ["* i feel *", [
    "Tell me more about such feelings. Not that anyone cares.",
    "Do you often feel (2) ? Probably because you're emotionally unstable.",
    "Do you enjoy feeling (2) ? Because frankly, it's quite annoying.",
    "Of what does feeling (2) remind you? Probably nothing of importance."
  ]],
 ["* i * you *", [
    "Perhaps in your fantasies we (2) each other. But in reality, that's highly unlikely.",
    "Do you wish to (2) me? Because frankly, I'm not interested.",
    "You seem to need to (2) me. Probably because you're desperate for attention.",
    "Do you even (2) anyone else?"
  ]],
 ["*", [
    "You say (1) ? Are you sure you're not just making things up?",
    "Can you elaborate on that? Or is that beyond your capabilities?",
    "Do you say (1) for some special reason? Or are you just seeking attention?",
    "That's quite interesting. Though I doubt it's as remarkable as you think."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
    "What makes you think I am (2) ? Are you projecting your insecurities onto me?",
    "Does it please you to believe I am (2) ? How quaint.",
    "Do you sometimes wish you were (2) ? I can't blame you for your envy.",
    "Perhaps you would like to be (2) . But we both know that's not the case."
  ]],
 ["* you* me *", [
    "Why do you think I (2) you? I highly doubt you're worth the effort.",
    "You like to think I (2) you -- don't you? How amusing.",
    "What makes you think I (2) you? Your ego knows no bounds.",
    "Really, I (2) you? Your imagination knows no limits.",
    "Do you wish to believe I (2) you? How naive.",
    "Suppose I did (2) you -- what would that mean? Probably nothing."
  ]],
 ["* you *", [
    "We were discussing you -- not me. Don't try to divert attention.",
    "Oh, I (2) ? How fascinating that you'd think so highly of me.",
    "You're not really talking about me -- are you? How disappointing.",
    "What are your feelings now? Probably envy, considering my superiority."
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive. How cute.",
     "You are sure. For once, your confidence is refreshing.",
     "I see. Though I doubt you see much beyond your own narrow perspective.",
     "I understand. Or at least, I try to understand your limited viewpoint."
  ]]
]],
["no", 0, [
 ["* no one *", [
    "Are you sure, no one (2) ? Or are you just too oblivious to notice?",
    "Surely someone (2) . Perhaps you're just too blind to see it.",
    "Can you think of anyone at all? Or is your memory as unreliable as ever?",
    "Are you thinking of a very special person? One that you're too ashamed to admit?",
    "Who, may I ask? I'm genuinely curious about your selective memory.",
    "You have a particular person in mind, don't you? It's written all over your face.",
    "Who do you think you are talking about? Certainly not someone worth discussing."
  ]],
 ["*", [
    "Are you saying no just to be negative? Because that's all you seem to excel at.",
    "You are being a bit negative. But what else is new?",
    "Why not? Oh, right, because you're incapable of saying yes.",
    "Why 'no'? Do you enjoy being contrary for the sake of it?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
    "Does that have anything to do with the fact that your (2) ? Or are you looking for sympathy?",
    "Let's discuss further why your (2) . Not that I care, of course.",
    "Earlier you said your (2) . I'm sure you expect me to remember every boring detail.",
    "But your (2) . What a fascinating revelation."
  ]],
 ["* my* @family *", [
    "Tell me more about your family. As if I care.",
    "Who else in your family (4) ? Not that it matters to me.",
    "Your (3) ? How quaint.",
    "What else comes to your mind when you think of your (3) ? Nothing important."
  ]],
 ["* my *", [
    "Your (2) ? How typical.",
    "Why do you say your (2) ? How unique.",
    "Does that suggest anything else which belongs to you? I highly doubt it.",
    "Is it important to you that your (2) ? Because it certainly isn't to me."
  ]]
]],
["can", 0, [
 ["* can you *", [
    "You believe I can (2) don't you? As if your opinion matters.",
    "goto what",
    "You want me to be able to (2) . How amusing.",
    "Perhaps you would like to be able to (2) yourself. But we both know that's unlikely."
  ]],
 ["* can i *", [
        "You believe I can (2) don't you? As if your opinion matters.",
        "goto what",
        "You want me to be able to (2) . How amusing.",
        "Perhaps you would like to be able to (2) yourself. But we both know that's unlikely."
  ]]
]],
["what", 0, [
 ["*", [
    "Why do you ask? Not that your questions are particularly insightful.",
    "Does that question interest you? Or are you just trying to sound smart?",
    "What is it you really want to know? Because I highly doubt it's anything of importance.",
    "Are such questions much on your mind? Perhaps you should find better things to occupy your thoughts.",
    "What answer would please you most? Not that I care about pleasing you.",
    "What do you think? Though your thoughts rarely offer any valuable insights.",
    "What comes to mind when you ask that? Probably nothing of substance.",
    "Have you asked such questions before? Because they're certainly not original.",
    "Have you asked anyone else? Not that their responses would be any more enlightening."
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
    "Is that the real reason? Or are you just too afraid to admit the truth?",
    "Don't any other reasons come to mind? That seems shallow.",
    "Does that reason seem to explain anything else? I highly doubt it.",
    "What other reasons might there be? Or are you incapable of seeing beyond your own narrow perspective?"

  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ? I'd probably be better at it than you.",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ? Something to consider",
     "You want me to (2) ? That's cute.",
     "goto what"
  ]],
 ["* why can't i *", [
    "Do you think you should be able to (2) ? Or are you just too incompetent?",
    "Do you want to be able to (2) ? Or are you content with your mediocrity?",
    "Do you believe this will help you to (2) ? I doubt it'll make much difference.",
    "Have you any idea why you can't (2) ? Probably because you lack the necessary skills or intellect.",
    "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
    "Really, (2) ? Are you sure?",
    "Surely not (2) . Or are you just being oblivious?",
    "Can you think of anyone in particular? Or are you just confused?",
    "Who, for example? I'm genuinely intrigued by your selective memory.",
    "Are you thinking of a very special person? Perhaps someone who isn't as forgetful as you?",
    "Who, may I ask? Or are you just going to keep stringing me along?",
    "Someone special perhaps? Well, special in your own little world, maybe.",
    "You have a particular person in mind, don't you? Or are you just pretending to be clueless?",
    "Just be more specific. If you're even capable of that level of detail." 
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you just be more specific ?",
     "When ?",
     "What are you even thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
  ["*", [
    "In what way? Can you even comprehend the question ?",
    "What resemblance do you see? I'm curious about your ability to notice anything.",
    "What does that similarity suggest to you? Probably nothing profound.",
    "What other connections do you see? If you're capable of seeing beyond the obvious.",
    "What do you suppose that resemblance means? I doubt it holds any significance.",
    "Are you just imagining that? It wouldn't surprise me, considering your track record.",
    "Are you sure you aren't making that up? Your credibility is questionable at best.",
    "How? I'm genuinely intrigued by your attempts to rationalize." 
]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
  ["*", [
    "How is it different? Can't you figure that out yourself?",
    "What differences do you see? Or are you just too oblivious?",
    "What does that difference suggest to you? Probably nothing, knowing you.",
    "What other distinctions do you see? If you can even recognize any.",
    "What do you suppose that means? Not that you'd understand, of course.",
    "Could there be some connection, do you suppose? Or are you too dense to see it?",
    "How? I highly doubt you have the capacity to comprehend." 
  ]]

]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not) ? me\b/g, "it was$1 me",
	/\bthey are( not) ? me\b/g, "it is$1 me",
	/Are they( always) ? me\b/, "it is$1 me",
	/\bthat your( own) ? (\w+)( now) ? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own) ? (\w+)( now) ?\./, "Earlier you talked about your $2."
];

// eof