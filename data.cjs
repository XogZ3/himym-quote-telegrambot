const characters = [
  "Barney Stinson",
  "Ted Mosby",
  "Robin Scherbatsky",
  "Lily Aldrin",
  "Marshall Eriksen",
  "Random",
];

const quotes = [
  {
    name: characters[0],
    quote: "Suit up!",
    mood: ["happy"],
  },
  {
    name: characters[0],
    quote: "Wait for it...",
    mood: ["happy"],
  },
  {
    name: characters[0],
    quote: "Condolences High Five!",
    mood: ["sad", "funny"],
  },
  {
    name: characters[0],
    quote: "It's gonna be legend-... wait for it... -dary!",
    mood: ["happy", "funny"],
  },
  {
    name: characters[0],
    quote:
      "Please. I'm the guy who slept with the bartender on the night that Lily thinks I proposed to Robin.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote: "Nothing suits me like a suit.",
    mood: ["happy"],
  },
  {
    name: characters[0],
    quote: "A lie is just a great story that someone ruined with the truth.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "God, it's me, Barney. What up? I know we don't talk much, but I know a lot of girls call out your name because of me.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "Ted, I believe in destiny. I believe that life is just a series of accidents waiting to happen.",
    mood: ["philosophical"],
  },
  {
    name: characters[0],
    quote:
      "Think of me like Yoda, but instead of being little and green, I wear suits and I'm awesome. I'm your bro—I'm Broda!",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "In my body, where the shame gland should be, there is a second awesome gland. True story.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "Ted, the only reason to wait a month for sex is if she's 17 years, 11 months old.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "I'm not saying you have to take a bullet for someone. But, I am saying you have to be willing to. You gotta do what you gotta do.",
    mood: ["philosophical"],
  },
  {
    name: characters[0],
    quote:
      "When I get sad, I stop being sad and be awesome instead. True story.",
    mood: ["inspirational"],
  },
  {
    name: characters[0],
    quote:
      "I'm surrounded by a lot of women in this bar because I'm very good at getting women to go away.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "I don't ask for much, just... good looking, rich, confident, great personality, and a surgeon. Boom! Still single? Explain that!",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote: "I'm not a hero. I'm a high-functioning sociopath. Merry Christmas!",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "The only reason to wait a month for sex is if she's 17 years, 11 months old.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "Do you have any idea what it's like to be in a relationship with someone who's always quoting Barney Stinson?",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "Ted, the only reason to wait three days to call a girl is if she's 17 years, 11 months old.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "Suits are full of joy. They're the sartorial equivalent of a baby's smile.",
    mood: ["happy"],
  },
  {
    name: characters[0],
    quote: "When I'm sad, I stop being sad and be awesome instead. True story.",
    mood: ["inspirational"],
  },
  {
    name: characters[0],
    quote:
      "I'm not a Barney, I'm a Barnacle. Because once I attach myself to someone, I just don't let go.",
    mood: ["romantic"],
  },
  {
    name: characters[0],
    quote: "Lying is wrong, unless the truth hurts someone's feelings.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote: "I'm awesome and I know it, bro!",
    mood: ["confident"],
  },
  {
    name: characters[0],
    quote:
      "When I'm old and wrinkly, I want to be surrounded by gorgeous women. So, I'm going to start turning them all into gold diggers.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "I don't know how much time I have left. I need to make every second count. Starting right now.",
    mood: ["inspirational"],
  },
  {
    name: characters[0],
    quote:
      "A bro is always entitled to do something stupid, as long as the rest of his bros are all doing it.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "I'm not just a guy. I'm the guy. And if you mess with me, I'll light you up like a Christmas tree.",
    mood: ["confident"],
  },
  {
    name: characters[0],
    quote:
      "Accept the challenges, so that you can feel the exhilaration of victory.",
    mood: ["motivational"],
  },
  {
    name: characters[0],
    quote: "A lie is just a great story that someone ruined with the truth.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "Every Halloween, I bring a spare costume, in case I strike out with the hottest girl at the party. That way, I have a second chance to make a first impression.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote: "I've been known to locate certain things from time to time.",
    mood: ["playful"],
  },
  {
    name: characters[0],
    quote:
      "Here's the mini-cherry on top of the regular cherry on top of the sundae of awesomeness that is my life.",
    mood: ["happy"],
  },
  {
    name: characters[0],
    quote: "A wingman's job is never done.",
    mood: ["dedicated"],
  },
  {
    name: characters[0],
    quote: "Love is the only sport that doesn't have a halftime show.",
    mood: ["philosophical"],
  },
  {
    name: characters[0],
    quote: "I've got a lot of game. I'm like the LeBron James of game!",
    mood: ["confident"],
  },
  {
    name: characters[0],
    quote:
      "In my body, where the shame gland should be, there is a second awesome gland.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote: "Think of me like Superman, but without the super and the man.",
    mood: ["funny"],
  },
  {
    name: characters[0],
    quote:
      "I'm done playing this game by the rules. I'm gonna start making up my own. I'm done looking for the right person. I am becoming the right person.",
    mood: ["determined"],
  },
  {
    name: characters[0],
    quote:
      "Life is too short to not have fun; we are only here for a short time compared to the sun and the moon and all that.",
    mood: ["optimistic"],
  },
  {
    name: characters[0],
    quote:
      "I'm not just a guy. I'm a guy with a lot of relationships that haven't failed yet.",
    mood: ["confident"],
  },
  {
    name: characters[0],
    quote:
      "Sometimes, even when you know something's a mistake, you just gotta make it.",
    mood: ["reckless"],
  },
  {
    name: characters[0],
    quote:
      "I don't ask for much, just... good looking, rich, confident, great personality, and a surgeon. Boom! Still single? Explain that!",
    mood: ["funny"],
  },
  {
    name: characters[1],
    quote:
      "Kids, I'm gonna tell you an incredible story—the story of how I met your mother.",
    mood: ["nostalgic"],
  },
  {
    name: characters[1],
    quote: "Love is the best thing we do.",
    mood: ["romantic"],
  },
  {
    name: characters[1],
    quote: "Sometimes things have to fall apart to make way for better things.",
    mood: ["optimistic"],
  },
  {
    name: characters[1],
    quote:
      "Architecture is about understanding the world and making it a little bit better.",
    mood: ["inspirational"],
  },
  {
    name: characters[1],
    quote:
      "You can't cling to the past because no matter how tightly you hold on, it's already gone.",
    mood: ["philosophical"],
  },
  {
    name: characters[1],
    quote:
      "You can ask the universe for signs all you want, but ultimately, we see what we want to see when we're ready to see it.",
    mood: ["introspective"],
  },
  {
    name: characters[1],
    quote:
      "Sometimes, even if you know how something's gonna end, that doesn't mean you can't enjoy the ride.",
    mood: ["optimistic"],
  },
  {
    name: characters[1],
    quote:
      "In the end, we can't always choose the ending to our stories. But we can always choose to start over.",
    mood: ["hopeful"],
  },
  {
    name: characters[1],
    quote:
      "The great moments of your life won't necessarily be the things you do; they'll also be the things that happen to you.",
    mood: ["reflective"],
  },
  {
    name: characters[1],
    quote: "Nothing good happens after 2 a.m.",
    mood: ["cautionary"],
  },
  {
    name: characters[1],
    quote:
      "It's the oldest story in the world. One day, you're 17 and planning for someday, and then quietly, without you ever really noticing, someday is today, and that someday is yesterday, and this is your life.",
    mood: ["reflective"],
  },
  {
    name: characters[1],
    quote:
      "The future is scary, but you can't just run back to the past because it's familiar. Yes, it's tempting, but it's a mistake.",
    mood: ["inspirational"],
  },
  {
    name: characters[1],
    quote:
      "Love doesn't make sense. You can't logic your way into or out of it. Love is totally nonsensical. But we have to keep doing it, or else we're lost and love is dead, and humanity should just pack it in.",
    mood: ["romantic"],
  },
  {
    name: characters[1],
    quote:
      "The truth is, you're gonna fall down, you're gonna get hurt, but you're gonna get up and keep going.",
    mood: ["motivational"],
  },
  {
    name: characters[1],
    quote:
      "I'm not a hero. I'm a guy who gets drunk, falls in love, and makes a lot of mistakes.",
    mood: ["self-reflective"],
  },
  {
    name: characters[1],
    quote:
      "You don't always have to have a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
    mood: ["inspirational"],
  },
  {
    name: characters[1],
    quote: "Life only moves forward.",
    mood: ["philosophical"],
  },
  {
    name: characters[1],
    quote:
      "The future is scary, but you can't just run back to the past because it's familiar. Yes, it's tempting, but it's a mistake.",
    mood: ["introspective"],
  },
  {
    name: characters[1],
    quote: "Every mistake I've made has led to the best decision of my life.",
    mood: ["reflective"],
  },
  {
    name: characters[1],
    quote:
      "Life is full of change, but sometimes that change is the best thing that ever happened to you.",
    mood: ["optimistic"],
  },
  {
    name: characters[1],
    quote:
      "The future is scary, but you can't just run back to the past because it's familiar. Yes, it's tempting, but it's a mistake.",
    mood: ["introspective"],
  },
  {
    name: characters[1],
    quote:
      "Sometimes, it's not about finding the one. It's about finding yourself.",
    mood: ["self-discovery"],
  },
  {
    name: characters[1],
    quote:
      "Life isn't about how many breaths you take, but it's about the moments that take your breath away.",
    mood: ["philosophical"],
  },
  {
    name: characters[1],
    quote:
      "The longer you wait for something, the more you appreciate it when you get it.",
    mood: ["patient"],
  },
  {
    name: characters[1],
    quote:
      "Sometimes the littlest things can become the biggest things in your life.",
    mood: ["appreciative"],
  },
  {
    name: characters[1],
    quote:
      "There are two big days in any love story: the day you meet the girl of your dreams and the day you marry her.",
    mood: ["romantic"],
  },
  {
    name: characters[1],
    quote:
      "The only way to really know what love is, is to experience it for yourself.",
    mood: ["insightful"],
  },
  {
    name: characters[1],
    quote:
      "No matter where you go or what you do, you'll always end up right back where you started.",
    mood: ["circular"],
  },
  {
    name: characters[1],
    quote:
      "Life is full of unexpected twists and turns, but that's what makes it worth living.",
    mood: ["adventurous"],
  },
  {
    name: characters[4],
    quote:
      "I'm not a big fan of thinking before I speak. I like being just as surprised as everyone else by what comes out of my mouth.",
    mood: ["funny"],
  },
  {
    name: characters[4],
    quote:
      "I'm not a vegetarian because I love animals. I'm a vegetarian because I hate plants.",
    mood: ["funny"],
  },
  {
    name: characters[4],
    quote: "I'll fight anyone, anytime, anywhere... except a bear in the wild.",
    mood: ["playful"],
  },
  {
    name: characters[4],
    quote:
      "I will never be tired of cheese. That's like saying you're tired of breathing.",
    mood: ["food lover"],
  },
  {
    name: characters[4],
    quote: "Sometimes things have to get really bad before they can get good.",
    mood: ["optimistic"],
  },
  {
    name: characters[4],
    quote:
      "It's a scientific fact that couples who cuddle on the couch while watching TV are 75% happier than couples who don't.",
    mood: ["romantic"],
  },
  {
    name: characters[4],
    quote:
      "I believe when life gives you lemons, you should make lemonade... and try to find someone whose life has given them vodka, and have a party.",
    mood: ["funny"],
  },
  {
    name: characters[4],
    quote: "Life's too short to be boring.",
    mood: ["adventurous"],
  },
  {
    name: characters[4],
    quote: "You can't just skip ahead to where you think your life should be.",
    mood: ["wise"],
  },
  {
    name: characters[4],
    quote:
      "The key to eating a black truffle is to pretend you're a 17th-century Swedish king and you're eating a black truffle.",
    mood: ["food lover"],
  },
  {
    name: characters[4],
    quote:
      "You can't keep blaming yourself. Just blame yourself once, and move on.",
    mood: ["funny"],
  },
  {
    name: characters[4],
    quote: "Love doesn't have to be perfect. It just needs to be true.",
    mood: ["romantic"],
  },
  {
    name: characters[4],
    quote: "The best things in life are silly.",
    mood: ["fun-loving"],
  },
  {
    name: characters[4],
    quote:
      "I'm not afraid to cry. I cried when I got my first pubic hair. You know why? Because it means my pubes are coming in nicely.",
    mood: ["funny"],
  },
  {
    name: characters[4],
    quote: "It's the journey that counts, not the destination.",
    mood: ["philosophical"],
  },
  {
    name: characters[4],
    quote: "I believe in miracles. It's part of my job description as a dad.",
    mood: ["optimistic"],
  },
  {
    name: characters[4],
    quote:
      "You can't put a price tag on love. But if you could, I'd wait for it to go on sale.",
    mood: ["funny"],
  },
  {
    name: characters[4],
    quote:
      "Sometimes, the only way to move forward is to revisit the things in your past that were holding you back.",
    mood: ["reflective"],
  },
  {
    name: characters[4],
    quote: "I'm not crazy. My reality is just different from yours.",
    mood: ["playful"],
  },
  {
    name: characters[4],
    quote:
      "True love is like seeing ghosts. We all talk about it, but few of us have ever seen one.",
    mood: ["romantic"],
  },
  {
    name: characters[4],
    quote: "It's not about what you do in life; it's about who you do it with.",
    mood: ["philosophical"],
  },
  {
    name: characters[4],
    quote:
      "The key to a good marriage is accepting that you're gonna annoy each other.",
    mood: ["relationship advice"],
  },
  {
    name: characters[4],
    quote:
      "Life is a series of choices. And sometimes, the best move is not to move at all.",
    mood: ["wise"],
  },
  {
    name: characters[4],
    quote:
      "Every day is an opportunity to be a better person than you were yesterday.",
    mood: ["self-improvement"],
  },
  {
    name: characters[4],
    quote:
      "Being a good friend means being there for someone even when they're making questionable life choices.",
    mood: ["loyalty"],
  },
  {
    name: characters[4],
    quote:
      "Never underestimate the power of a good song to brighten someone's day.",
    mood: ["music lover"],
  },
  {
    name: characters[4],
    quote:
      "Sometimes the greatest adventures are the ones that lead you back home.",
    mood: ["nostalgic"],
  },
  {
    name: characters[4],
    quote:
      "Life is like an onion: you peel it off one layer at a time, and sometimes you weep.",
    mood: ["philosophical"],
  },
  {
    name: characters[4],
    quote:
      "The best love is the kind that awakens the soul and makes us reach for more.",
    mood: ["romantic"],
  },
  {
    name: characters[4],
    quote:
      "Sometimes you have to be apart from the people you love, but that doesn't make you love them any less.",
    mood: ["longing"],
  },
  {
    name: characters[3],
    quote:
      "Life is full of surprises, and sometimes the unexpected can turn out to be the best thing that ever happened to you.",
    mood: ["optimistic"],
  },
  {
    name: characters[3],
    quote: "Being a good listener is just as important as being a good talker.",
    mood: ["wise"],
  },
  {
    name: characters[3],
    quote:
      "Sometimes you have to make a choice between what's right for you and what's right for everyone else.",
    mood: ["introspective"],
  },
  {
    name: characters[3],
    quote:
      "Laughter is the best medicine, especially when it's shared with the ones you love.",
    mood: ["fun-loving"],
  },
  {
    name: characters[3],
    quote: "Life is too short to hold grudges. Forgive, forget, and move on.",
    mood: ["forgiving"],
  },
  {
    name: characters[3],
    quote:
      "Being happy doesn't mean everything is perfect. It means you've decided to look beyond the imperfections.",
    mood: ["positive"],
  },
  {
    name: characters[3],
    quote:
      "The best way to appreciate someone is to imagine your life without them.",
    mood: ["appreciative"],
  },
  {
    name: characters[3],
    quote: "Sometimes you have to create your own happy ending.",
    mood: ["inspirational"],
  },
  {
    name: characters[3],
    quote:
      "Life is like a game of poker. You have to play the hand you're dealt and make the most of it.",
    mood: ["metaphorical"],
  },
  {
    name: characters[3],
    quote:
      "True friendship is standing by each other's side even when you're miles apart.",
    mood: ["loyal"],
  },
  {
    name: characters[3],
    quote:
      "Love is like a garden. It requires nurturing, patience, and a little bit of magic.",
    mood: ["romantic"],
  },
  {
    name: characters[3],
    quote: "Life is a series of moments. It's up to us to make them count.",
    mood: ["philosophical"],
  },
  {
    name: characters[3],
    quote: "Happiness is not a destination; it's a state of mind.",
    mood: ["positive"],
  },
  {
    name: characters[3],
    quote: "The best way to predict the future is to create it.",
    mood: ["empowering"],
  },
  {
    name: characters[3],
    quote: "Sometimes the smallest gestures can make the biggest impact.",
    mood: ["thoughtful"],
  },
  {
    name: characters[3],
    quote:
      "Life is too short to waste on regrets. Embrace the present and cherish the memories.",
    mood: ["living in the moment"],
  },
  {
    name: characters[3],
    quote:
      "Love is not about finding someone perfect; it's about finding someone who makes you perfectly happy.",
    mood: ["romantic"],
  },
  {
    name: characters[3],
    quote: "Life is a journey, not a destination. Enjoy the ride.",
    mood: ["adventurous"],
  },
  {
    name: characters[3],
    quote:
      "Family is not just about blood relations. It's about the people who love and support you unconditionally.",
    mood: ["family-oriented"],
  },
  {
    name: characters[3],
    quote:
      "A smile is the best accessory you can wear. It goes with any outfit.",
    mood: ["cheerful"],
  },
  {
    name: characters[3],
    quote:
      "Don't be afraid to take risks. Sometimes the biggest rewards come from the boldest decisions.",
    mood: ["courageous"],
  },
  {
    name: characters[3],
    quote:
      "Life is too short to hold on to grudges. Let go, forgive, and set yourself free.",
    mood: ["forgiving"],
  },
  {
    name: characters[3],
    quote:
      "The best way to find yourself is to lose yourself in the service of others.",
    mood: ["selfless"],
  },
  {
    name: characters[3],
    quote:
      "Dream big, work hard, and surround yourself with people who believe in you.",
    mood: ["inspirational"],
  },
  {
    name: characters[3],
    quote:
      "Life is like a puzzle. Sometimes you have to step back and look at the bigger picture to find the missing piece.",
    mood: ["thoughtful"],
  },
  {
    name: characters[3],
    quote:
      "Love is not about grand gestures; it's about the little things that make your heart skip a beat.",
    mood: ["romantic"],
  },
  {
    name: characters[3],
    quote:
      "Being true to yourself is the most attractive quality you can possess.",
    mood: ["authentic"],
  },
  {
    name: characters[3],
    quote:
      "Life is a beautiful mess. Embrace the chaos and find the beauty within it.",
    mood: ["optimistic"],
  },
  {
    name: characters[3],
    quote:
      "The best way to make a difference in the world is to start by making a difference in your own life.",
    mood: ["empowering"],
  },
  {
    name: characters[3],
    quote:
      "Don't wait for the perfect moment; take the moment and make it perfect.",
    mood: ["seize the day"],
  },
  {
    name: characters[3],
    quote:
      "Life is too short to worry about the opinions of others. Be true to yourself and live your own truth.",
    mood: ["self-acceptance"],
  },
  {
    name: characters[2],
    quote:
      "Life is full of surprises, and sometimes the best moments are the ones you never saw coming.",
    mood: ["unexpected"],
  },
  {
    name: characters[2],
    quote:
      "Don't be afraid to take risks. The biggest regrets in life are often the chances we didn't take.",
    mood: ["adventurous"],
  },
  {
    name: characters[2],
    quote:
      "True strength is not about physical power; it's about resilience and the ability to keep going even when life gets tough.",
    mood: ["resilient"],
  },
  {
    name: characters[2],
    quote:
      "Life is too short to waste on regrets. Learn from the past and move forward with no regrets.",
    mood: ["regretless"],
  },
  {
    name: characters[2],
    quote:
      "The greatest adventures are the ones that scare you, challenge you, and push you out of your comfort zone.",
    mood: ["adventurous"],
  },
  {
    name: characters[2],
    quote:
      "Sometimes the best way to find yourself is to get lost in the world and discover who you truly are.",
    mood: ["self-discovery"],
  },
  {
    name: characters[2],
    quote:
      "Life is a journey, and sometimes the best paths are the ones that lead you to unexpected destinations.",
    mood: ["journey"],
  },
  {
    name: characters[2],
    quote:
      "You are capable of more than you think. Believe in yourself and you'll be amazed at what you can achieve.",
    mood: ["self-belief"],
  },
  {
    name: characters[2],
    quote:
      "Love is a risk worth taking, even if it means getting hurt along the way.",
    mood: ["romantic"],
  },
  {
    name: characters[2],
    quote:
      "Life is a series of choices. Choose to be happy, choose to be kind, and choose to be true to yourself.",
    mood: ["choice"],
  },
  {
    name: characters[2],
    quote:
      "Never underestimate the power of following your passion. It can lead you to incredible places.",
    mood: ["passionate"],
  },
  {
    name: characters[2],
    quote:
      "The best relationships are the ones where you can be yourself and still be loved for who you are.",
    mood: ["relationship"],
  },
  {
    name: characters[2],
    quote:
      "Life is too short to waste on negativity. Surround yourself with positive people and positive vibes.",
    mood: ["positive"],
  },
  {
    name: characters[2],
    quote:
      "Embrace your independence and live life on your own terms. You are capable of amazing things.",
    mood: ["independent"],
  },
  {
    name: characters[2],
    quote:
      "Sometimes you have to let go of the life you planned and embrace the life that's waiting for you.",
    mood: ["letting go"],
  },
  {
    name: characters[2],
    quote:
      "Life is a puzzle, and sometimes you have to trust that all the pieces will come together in the end.",
    mood: ["trust"],
  },
  {
    name: characters[2],
    quote:
      "Life is too short to waste on people who don't appreciate you. Surround yourself with those who value and uplift you.",
    mood: ["self-worth"],
  },
  {
    name: characters[2],
    quote:
      "Success is not defined by others' opinions; it's about achieving personal fulfillment and happiness.",
    mood: ["success"],
  },
  {
    name: characters[2],
    quote:
      "Sometimes the best way to find clarity is to disconnect from the noise and listen to your own inner voice.",
    mood: ["clarity"],
  },
  {
    name: characters[2],
    quote:
      "Life is a constant balancing act. Find the right mix of work, play, and self-care to create a fulfilling life.",
    mood: ["balance"],
  },
  {
    name: characters[2],
    quote:
      "Change is inevitable, and embracing it allows us to grow and discover new opportunities.",
    mood: ["change"],
  },
  {
    name: characters[2],
    quote:
      "The best way to overcome fear is to face it head-on. Step outside your comfort zone and watch yourself soar.",
    mood: ["fearless"],
  },
  {
    name: characters[2],
    quote:
      "Life is a story waiting to be written. Grab the pen, take risks, and create a narrative worth telling.",
    mood: ["storytelling"],
  },
  {
    name: characters[2],
    quote:
      "Trust your instincts. Sometimes your gut feeling knows what your mind is still trying to figure out.",
    mood: ["intuition"],
  },
  {
    name: characters[2],
    quote:
      "Life is too short for regrets. Make mistakes, learn from them, and let them shape you into a stronger person.",
    mood: ["growth"],
  },
  {
    name: characters[2],
    quote:
      "Dream big, but don't forget to take action. Your dreams won't become reality unless you work for them.",
    mood: ["dreams"],
  },
  {
    name: characters[2],
    quote:
      "Love is not always easy, but it's worth fighting for. Fight for the love that sets your heart on fire.",
    mood: ["love"],
  },
  {
    name: characters[2],
    quote:
      "Your past doesn't define you. You have the power to shape your future and create a new narrative.",
    mood: ["resilience"],
  },
  {
    name: characters[2],
    quote:
      "Life is too short to dwell on what could have been. Embrace what is and make the most of every opportunity.",
    mood: ["living in the present"],
  },
  {
    name: characters[2],
    quote:
      "Believe in yourself, even when others doubt you. Your belief and determination can move mountains.",
    mood: ["self-belief"],
  },
  {
    name: characters[2],
    quote:
      "Cherish the friendships that stand the test of time. True friends are there for you through thick and thin.",
    mood: ["friendship"],
  },
];

function getRandomQuote(character) {
  const filteredQuotes = quotes.filter((quote) => quote.name === character);
  const randomQuote =
    filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
  return randomQuote;
}

const buttons = [
  {
    button: "Next Quote",
  },
  {
    button: "Change Character",
  },
  {
    button: "Random Quote",
  },
  {
    button: "Select Character",
  },
];

module.exports = { buttons, characters, quotes, getRandomQuote };
