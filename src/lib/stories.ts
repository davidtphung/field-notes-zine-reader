import { getAuthorOrThrow } from "./authors";
import { photos } from "./photos";
import { readMinutes } from "./reading";
import { getTopicOrThrow } from "./topics";
import type { Story } from "./types";

export const stories: Story[] = [
  {
    slug: "leave-before-the-tide-turns",
    title: "Leave Before the Tide Turns",
    dek: "Range is not a mood. It is a clock you can hear if you stand still long enough on a wet beach.",
    format: "essay",
    topicSlugs: ["range", "water", "autonomy"],
    authorSlug: "mira-chen",
    publishedAt: "2026-04-12",
    featured: true,
    lead: true,
    hero: {
      ...photos.shoreGold,
      caption:
        "Low light on a wide shelf. The usable water is already leaving.",
    },
    body: [
      {
        type: "p",
        text: "The first useful thing I learned on the lower Columbia was not a knot. It was a habit of leaving while the leaving was still easy. A falling tide looks generous from a warm car. From a loaded skiff it is a timer. Sandbars rise in places the chart still calls water. The channel you used at breakfast becomes a rumor.",
      },
      {
        type: "p",
        text: "People talk about freedom as if it were a wide horizon. In practice it is a set of early decisions. You fill bottles before you are thirsty. You check the bar crossing while the radio is still bored. You eat the perishable food on day one because pride is a poor preservative. None of this photographs well. All of it buys you the afternoon.",
      },
      {
        type: "quote",
        text: "The tide does not care that you found a better sentence for your plan.",
      },
      {
        type: "p",
        text: "Open Water, for this journal, is not a brand of courage. It is the condition of being away from a tap, a marina fuel dock, and a person who will bail you out without making a story of it. That condition is older than any product. Fishermen, survey crews, and people who still pick their own berries have been managing it with paper and patience.",
      },
      {
        type: "h2",
        text: "A ledger, not a slogan",
      },
      {
        type: "p",
        text: "On assignment last March I walked a stretch of coast south of Seaside with a borrowed notebook and a cheap kitchen scale. I wanted to know what a day of self-carried water actually weighed if you stopped approximating. Three liters is six and a half pounds before the bottle. Add a stove, a dry bag that has already failed once, and the jacket you swore you would not need. The number is not romantic. It is why people invent caches, partners, and excuses.",
      },
      {
        type: "figure",
        photo: {
          ...photos.reefAerial,
          caption:
            "Color is not the same as access. Pale water can still be a long carry from camp.",
        },
      },
      {
        type: "p",
        text: "The Shore Ledger in this issue is our invented field log, not a gadget. Station, liters, weather window, next cache. We use it because a beautiful photograph will not tell you whether you can walk fourteen kilometers on what you collected at first light. A grid will. We drew ours on the back of a tide table and copied it into the magazine so you can steal the structure and ignore our numbers.",
      },
      {
        type: "ledger",
        title: "Shore Ledger · Station 14 · Netarts, 12 Apr",
        rows: [
          { label: "Collected", value: "3.1 L seepage, first light" },
          { label: "Cache interval", value: "14 km south, marked cedar" },
          { label: "Weather window", value: "5.5 hours, wind backing west" },
          { label: "Tide remaining", value: "0.4 m, falling" },
          { label: "Turnaround", value: "13:40 if the bar is noisy" },
        ],
      },
      {
        type: "p",
        text: "Autonomy gets sold as independence from systems. I do not believe that. The more remote the camp, the more you depend on a good forecast, a honest chart, and the person who last restocked the cache. What you can own is the timing. Leave before the tide turns. Write down what you used. Do not dress the log after the fact to make yourself look calm.",
      },
      {
        type: "p",
        text: "I keep a cheap watch on the dash even when the phone has a tide app. The watch does not argue. It does not dim when the pocket is wet. It also does not flatter me with a later departure because a calendar invite moved. If that sounds severe, try missing a bar once. Severity is cheaper than a tow.",
      },
      {
        type: "p",
        text: "This issue collects writers who treat water as work. Ellis on hose discipline. Jonah on night watch. Samira on a week without a municipal tap. Lena on a kitchen that does not punish the cook. If you came for a manifesto, here is the short one. Range is a practice of leaving early, measuring what you carry, and keeping the story smaller than the weather.",
      },
    ],
  },
  {
    slug: "how-to-read-a-harbor-at-dusk",
    title: "How to Read a Harbor at Dusk",
    dek: "Lights lie. Water does not. A short method for arriving when the chart is already in shadow.",
    format: "how-to",
    topicSlugs: ["navigation", "water", "field-craft"],
    authorSlug: "ellis-ward",
    publishedAt: "2026-04-19",
    featured: true,
    lead: false,
    hero: {
      ...photos.lakeBoat,
      caption: "Last usable light. The entrance is narrower than it looks from here.",
    },
    body: [
      {
        type: "p",
        text: "Dusk is when harbors become flattering. Every mast light looks like a fairway. Every dark patch looks like a slip. If you arrive tired, you will dock wherever the water is quiet and call it skill. I have done this. I have also walked a keel across a mud bank that the chart had been warning me about since lunch.",
      },
      {
        type: "p",
        text: "Reading a harbor at dusk is not mysticism. It is a sequence you run before you commit the bow. Do it the same way every time so fatigue has fewer places to hide.",
      },
      {
        type: "h2",
        text: "Work from the paper out",
      },
      {
        type: "ol",
        items: [
          "Before you lose the horizon, mark three things on the chart or a phone screenshot you already downloaded: the entrance bearing, the first light you should see, and the first light you should not follow.",
          "Say the depths out loud. A number you only look at is a number you will round in your favor.",
          "Identify the false door. Most small harbors have a pretty gap that is not the channel. Find it while you can still see the color change in the water.",
          "Pick an abort. A beach, a buoy, a wide patch of ten-foot water. If the entrance feels wrong, you need a place that is boring, not brave.",
        ],
      },
      {
        type: "figure",
        photo: {
          ...photos.handsMap,
          caption:
            "A chart you can hold in wind is worth more than a brighter screen.",
        },
      },
      {
        type: "h2",
        text: "What the lights are doing",
      },
      {
        type: "p",
        text: "Range lights are a conversation. If they stack, you are on the line. If they drift, you are not, even if the harbor still looks centered in the windshield. Shore lights will try to recruit you. A restaurant window has wrecked more arrivals than fog. Keep your eyes on the pair you named before sunset.",
      },
      {
        type: "p",
        text: "Listen for the bar. A harbor mouth that has gone quiet is not always kind. It can mean the swell is standing up just outside the frame. If the boat starts to feel taller than it should, you are late. That is information, not failure. Turn to the abort you already chose.",
      },
      {
        type: "quote",
        text: "A pretty gap is not a channel. Name the false door while you can still see color in the water.",
      },
      {
        type: "p",
        text: "Once you are inside, slow down more than pride allows. Walk the last hundred yards. Count slips. Confirm the finger you reserved is not a shadow. Tie the boat as if a night wind has a personal interest in your bowline. Then, and only then, look for dinner.",
      },
      {
        type: "ledger",
        title: "Dusk arrival card · copy into the log",
        rows: [
          { label: "Entrance bearing", value: "Written before 18:00" },
          { label: "First true light", value: "Named, not guessed" },
          { label: "False door", value: "Circled on the chart" },
          { label: "Abort", value: "Depth and holding, not a vibe" },
        ],
      },
    ],
  },
  {
    slug: "seven-days-off-the-tap",
    title: "Seven Days Off the Tap",
    dek: "A coastal week with no municipal water, and the arithmetic that keeps it from becoming a performance.",
    format: "field-note",
    topicSlugs: ["water", "autonomy", "camp"],
    authorSlug: "samira-okonkwo",
    publishedAt: "2026-05-03",
    featured: true,
    lead: false,
    hero: {
      ...photos.forestDock,
      caption: "The dock is pretty. The drinking water is a walk behind the trees.",
    },
    body: [
      {
        type: "p",
        text: "I did not go to the coast to prove I could live without a tap. I went because a friend had a closed cabin for the week and the well was offline. The county said a part was coming. The part did not come. We had a creek, a filter I trusted, and a rain barrel that tasted like cedar and last November.",
      },
      {
        type: "p",
        text: "The first morning I treated the creek like a novelty. By the third I treated it like a job with hours. Collection at first light, when the water was clearer and the raccoons were off shift. A second run before dinner. No dishes in the dark. That rule saved more goodwill than any speech about simplicity.",
      },
      {
        type: "figure",
        photo: {
          ...photos.clearWater,
          caption:
            "Clear is not the same as finished. Fine silt will still find a pot.",
        },
      },
      {
        type: "h2",
        text: "What the week actually used",
      },
      {
        type: "p",
        text: "Two adults, one polite dog, cooking twice a day. We averaged just under eight liters for drinking and cooking, plus another six for washing if we were careful with a basin. Showers became a cup and a decision. Hair got interesting. Nobody suffered. We did get tired of being strategic about pasta water.",
      },
      {
        type: "p",
        text: "The surprising ration was not drinking. It was rinsing. Coffee grounds, oatmeal pots, sandy greens. If you let rinse water become ambient, you will empty a barrel by Thursday and call the landscape ungenerous. A scrape, a small splash, a wipe. The creek does not owe you a restaurant kitchen.",
      },
      {
        type: "quote",
        text: "The creek does not owe you a restaurant kitchen.",
      },
      {
        type: "p",
        text: "I kept a card on the table: date, liters in, liters guessed out, weather, mood. Mood matters because people waste water when they are performing ease. On day five a neighbor stopped by with store ice. We used it. Autonomy that refuses help is just another costume. The point was to know our numbers, not to win a private contest.",
      },
      {
        type: "p",
        text: "When the well part finally arrived, I was glad. I also kept the card. A municipal tap is a miracle with a bill and a pipe you never see. A week off it will not make you holy. It will make you slower at the sink, which is a better souvenir than a story about hardship.",
      },
    ],
  },
  {
    slug: "what-fits-in-one-dry-bag",
    title: "What Fits in One Dry Bag",
    dek: "A packing method for shore days when the boat, the pack, and the weather all want different things.",
    format: "how-to",
    topicSlugs: ["field-craft", "range", "camp"],
    authorSlug: "ellis-ward",
    publishedAt: "2026-05-11",
    featured: true,
    lead: false,
    hero: {
      ...photos.rockCoast,
      caption: "If it cannot survive a wet rock and a short swim, it does not belong in the bag.",
    },
    body: [
      {
        type: "p",
        text: "A dry bag is not a suitcase that happens to be yellow. It is a budget. Once the roll is closed, you have admitted that everything else can get wet or get left. Most people fail the bag by treating it as overflow. They stuff a jacket, then a second jacket, then the book they will not read, then they wonder why the seal never quite bites.",
      },
      {
        type: "p",
        text: "I pack one twenty-liter bag for a shore day off a small boat. The test is simple. If the bag goes overboard and I recover it in two minutes, I should still have a warm layer, a way to start a stove, and a chart I can read. If I recover a camera cube and a feeling of injustice, I packed for a different hobby.",
      },
      {
        type: "h2",
        text: "The stack, bottom to top",
      },
      {
        type: "ol",
        items: [
          "Sleep and warmth: a compressed puffy or wool layer in a light sack. This is the item you will resent leaving on the boat.",
          "Fire and food: stove, fuel that cannot puncture the bag, one pot, a lighter in a vial plus matches in a second place.",
          "Water work: empty bottle, treatment drops or filter, a small cup. Do not carry a full day's water if the landing has a known source. Do carry the means.",
          "Paper: chart photocopy in a zipper bag, pencil, a page of tide times. Phones fail in a way that feels personal.",
          "Repair: ten feet of cord, a needle, tape, a spare bag buckle. This kit is smaller than your fear.",
        ],
      },
      {
        type: "figure",
        photo: {
          ...photos.ridgeTent,
          caption:
            "Shelter can be simple. The bag still has to keep the warm layer dry until you need it.",
        },
      },
      {
        type: "p",
        text: "Clothes you are wearing do not count as packed. Clothes you might want for a photograph do not count as essential. If you need a second bag, you are no longer doing a shore day. You are moving camp and should admit it so the boat can be loaded like a boat.",
      },
      {
        type: "quote",
        text: "If the bag comes back from a swim and you still cannot get warm, you packed for a different hobby.",
      },
      {
        type: "p",
        text: "Close the bag with three honest rolls and clip it to something that is not your optimism. On the landing, open it once. Do not graze. Take what the next hour needs, close it, and go do the work. A dry bag that spends the day unrolled is just a slow way to do laundry.",
      },
    ],
  },
  {
    slug: "fog-on-the-columbia",
    title: "Fog on the Columbia",
    dek: "A morning run from Astoria when the river erased itself, and the radio became the horizon.",
    format: "dispatch",
    topicSlugs: ["navigation", "water", "range"],
    authorSlug: "jonah-hale",
    publishedAt: "2026-05-24",
    featured: false,
    lead: false,
    hero: {
      ...photos.ridgeFog,
      caption: "When the banks disappear, you navigate by sound and by what you wrote down yesterday.",
    },
    body: [
      {
        type: "p",
        text: "We left the slip at 5:40 because the forecast said the fog would lift by seven. Forecasts are literature. The river had its own draft. By the time we cleared the last piling I could see the bow, a smear of current, and then a wall the color of wet wool. The bridge was a rumor with a foghorn.",
      },
      {
        type: "p",
        text: "Mira likes to say that range is a clock. On the Columbia that morning the clock was a radar echo and a man on channel 13 who had been doing this since before I could drive. We ran slow. We called our position like people who wanted to be found, not like people performing competence.",
      },
      {
        type: "figure",
        photo: {
          ...photos.openSwell,
          caption: "Outside the mouth the swell does not wait for visibility to improve.",
        },
      },
      {
        type: "p",
        text: "There is a particular quiet that is not peace. The engine note gets loud because the world has no competing edges. You start inventing shapes. A log becomes a boat. A boat becomes a pier. I kept my eyes moving and my hands boring. The skipper had us on a heading that would look timid on a clear day. I liked him for that.",
      },
      {
        type: "h2",
        text: "What we did not do",
      },
      {
        type: "ul",
        items: [
          "We did not go looking for the bar to see how it felt.",
          "We did not stack extra jobs onto a morning that already had one job.",
          "We did not joke the fog away. Humor is fine. Denial has a wake.",
        ],
      },
      {
        type: "p",
        text: "At 8:10 the bank appeared the way a sentence appears when you stop forcing it. Trees, then a cannery roof, then the ordinary industrial beauty of a working river. We tied up and drank coffee that tasted like the thermos. Nobody clapped. The useful souvenir was a note in the log: fog held, ran slow, asked for help on the radio, arrived with the same boat we left with.",
      },
      {
        type: "quote",
        text: "Call your position like someone who wants to be found.",
        attribution: "From the morning log, 24 May",
      },
    ],
  },
  {
    slug: "the-kitchen-that-travels",
    title: "The Kitchen That Travels",
    dek: "How to cook on a rock without turning dinner into a test of character.",
    format: "how-to",
    topicSlugs: ["camp", "field-craft", "range"],
    authorSlug: "lena-voss",
    publishedAt: "2026-06-02",
    featured: false,
    lead: false,
    hero: {
      ...photos.campTable,
      caption: "A table is a luxury. A plan for the pot is not.",
    },
    body: [
      {
        type: "p",
        text: "I have eaten a lot of meals that were trying to prove a thesis. The thesis is usually that the cook is hardy. The food is usually late, scorched, and accompanied by an apology that lasts longer than dessert. A traveling kitchen should do the opposite. It should make the day feel finished.",
      },
      {
        type: "p",
        text: "Start with one pot and one job. If you cannot name the job, you are packing a restaurant. My job is: hot food in twenty-five minutes, dishes that fit in a basin, leftovers that will not punish breakfast. Everything else is optional garnish.",
      },
      {
        type: "h2",
        text: "A kit that stays small",
      },
      {
        type: "ul",
        items: [
          "A stove you have lit in wind, not only on a patio.",
          "One pot with a lid that can also be a pan.",
          "A hard spoon, a small knife, a cutting surface the size of a postcard.",
          "Oil in a bottle that will not paint the dry bag.",
          "Salt, chili, and one acid. Lemon powder is undignified and effective.",
          "A basin and a rag. If you skip these you will wash in the creek and feel modern about it.",
        ],
      },
      {
        type: "figure",
        photo: {
          ...photos.campFire,
          caption:
            "Fire is company. The stove is how dinner arrives on time.",
        },
      },
      {
        type: "p",
        text: "Food that travels well is food that forgives a late landing. Lentils already cooked and oiled. Tortillas. Cheese that can take a warm afternoon. Greens you will eat the first night. I do not bring a spice library. I bring the three things that make a tired person say the sentence, this is a meal.",
      },
      {
        type: "quote",
        text: "If dinner needs a speech, the kitchen is too ambitious.",
      },
      {
        type: "p",
        text: "Cook before you are empty. Hunger makes people inventive in the wrong direction. Set the stove on a level stone, turn your back to the wind, and keep a hand on the pot when the burner is high. Eat sitting down. Wash in the basin, not the stream. Pack the kitchen as if morning-you is a guest you respect.",
      },
      {
        type: "p",
        text: "The last test is quiet. If the kitchen can disappear into one bag and still produce soup after a wet hike, you are done shopping. More gear will only give you more to rinse.",
      },
    ],
  },
  {
    slug: "a-cache-is-a-promise",
    title: "A Cache Is a Promise",
    dek: "On hidden water, marked trees, and the ethics of leaving something for a person you may never meet.",
    format: "essay",
    topicSlugs: ["range", "autonomy", "water"],
    authorSlug: "mira-chen",
    publishedAt: "2026-06-15",
    featured: true,
    lead: false,
    hero: {
      ...photos.tallPines,
      caption: "The mark is small on purpose. The promise is not.",
    },
    body: [
      {
        type: "p",
        text: "A cache is a conversation with a future body. Sometimes that body is you, two days south, louder and thirstier. Sometimes it is a stranger who trusted a note on a forum more than they should have. Either way, the plastic jug under the cedar is not a secret. It is a promise, and promises have weather.",
      },
      {
        type: "p",
        text: "I learned this the unfancy way. We left eight liters in a draw above a beach that looks empty on postcards and busy on holiday weekends. We marked a cedar with a discreet notch, wrote the bearing in a book, and told two friends. A month later the jugs were there, the water was still sealed, and a third jug I did not recognize sat beside them with a piece of tape that said thanks, used 2L, replaced 2L. That tape was better literature than most trip reports.",
      },
      {
        type: "figure",
        photo: {
          ...photos.pinePath,
          caption: "If you cannot find it twice, it is not a cache. It is litter you hid.",
        },
      },
      {
        type: "h2",
        text: "Rules we keep",
      },
      {
        type: "ol",
        items: [
          "If you cannot find it in the rain, do not call it marked.",
          "Write dates. Water is not wine. Old caches become folklore and then a mess.",
          "Do not cache where a family will picnic. Hidden gear in a public pretty place is how rumors start.",
          "Replace what you drink, or leave a note that tells the next person the truth.",
          "Carry out what fails. A cracked jug is your problem even if you did not crack it.",
        ],
      },
      {
        type: "p",
        text: "Autonomy talk often skips this part. A solo crossing that depends on a cache depends on a commons. The commons is fragile. One person treats it like a vending machine and the next person walks an extra six miles. I am not interested in policing the woods. I am interested in adults who can leave a place slightly more reliable than they found it.",
      },
      {
        type: "quote",
        text: "Replace what you drink, or leave a note that tells the next person the truth.",
      },
      {
        type: "p",
        text: "If you do not want the responsibility, do not lay a cache. Carry what you need. Turn around sooner. That is also range. The heroic version of self-reliance is often just a longer list of people you have quietly borrowed from, including the ones who stacked wood, published the tide, and left a jug under a tree.",
      },
    ],
  },
  {
    slug: "night-watch-on-a-small-boat",
    title: "Night Watch on a Small Boat",
    dek: "Four hours of looking at black water, and the chores that keep a crew from inventing ghosts.",
    format: "field-note",
    topicSlugs: ["camp", "navigation", "water"],
    authorSlug: "jonah-hale",
    publishedAt: "2026-06-28",
    featured: false,
    lead: false,
    hero: {
      ...photos.nightSky,
      caption: "The sky is busy. The job is still the waterline and the rode.",
    },
    body: [
      {
        type: "p",
        text: "Night watch on a twenty-eight-foot boat is not a spiritual retreat. It is a paid-attention interval. You are there so the others can sleep without the anchor announcing a new zip code. You are also there so your own mind does not write a horror story out of ordinary current.",
      },
      {
        type: "p",
        text: "I take the twelve-to-four because I am already a poor sleeper and because the coffee tastes honest at 1:15. The checklist is short on purpose. If the list is long you will perform it once and then drift. Short lists get repeated.",
      },
      {
        type: "h2",
        text: "The loop",
      },
      {
        type: "ol",
        items: [
          "Look at the rode. Is it where you left it, or has the boat walked?",
          "Look at the lights you named at dusk. Still the same neighbors?",
          "Listen for a new slap, a new grind, a pump that should be quiet.",
          "Write the time and one sentence. If you cannot write a sentence, you are too cold or too proud.",
          "Walk the deck once. Hands on rails. No hero posture at the bow.",
        ],
      },
      {
        type: "figure",
        photo: {
          ...photos.blueWater,
          caption:
            "Day water is a different country. At night you trust the loop, not the color.",
        },
      },
      {
        type: "p",
        text: "People want the watch to feel like a movie. It feels like checking a parking brake in the dark. That is the point. When something real happens, a dragging hook, a ferry that did not see you, you want a body that has been doing small true things for two hours, not a body that has been composing a caption.",
      },
      {
        type: "quote",
        text: "If you cannot write one sentence in the log, you are too cold or too proud.",
      },
      {
        type: "p",
        text: "Wake the next person the way you want to be woken. A hand on the shoulder, a status in one breath, a mug if the stove is allowed. Do not dump a novel of anxieties. If the boat is fine, say the boat is fine. Then get in the bunk and let the river be someone else's interval.",
      },
    ],
  },
  {
    slug: "rinse-coil-stow",
    title: "Rinse, Coil, Stow",
    dek: "A ten-minute close-out that keeps hoses, lines, and filters from becoming next week's problem.",
    format: "how-to",
    topicSlugs: ["field-craft", "water", "camp"],
    authorSlug: "ellis-ward",
    publishedAt: "2026-07-09",
    featured: false,
    lead: false,
    hero: {
      ...photos.forestLight,
      caption: "The pretty light is for later. First the hose, then the coil, then the bag.",
    },
    body: [
      {
        type: "p",
        text: "Most gear fails in storage, not on the rock. A hose put away with creek grit in the threads will cut a hand next month. A line coiled in anger will kink in the one moment you needed it kind. Filters left wet grow a biology you did not invite. The fix is not a new purchase. The fix is ten minutes you already have.",
      },
      {
        type: "p",
        text: "I close a water day the same way I close a shop. Rinse what touched silt. Coil what has a length. Stow what has a home. If you skip a step, skip stow last, never rinse. Dirty gear in a labeled bin is still dirty gear.",
      },
      {
        type: "h2",
        text: "The close-out",
      },
      {
        type: "ol",
        items: [
          "Rinse fittings in clear water, then a drop of vinegar if you were in a mineral-heavy creek. Dry the threads. Sand is a cutting tool.",
          "Run the filter until the output looks like the input you would drink. Then open it to air. A sealed wet filter is a terrarium.",
          "Coil lines with the same diameter every time, over the hand or a knee, and finish with a tie you can undo in gloves.",
          "Hang what can drip. Bag what must stay clean. Do not mix those categories because the hatch is small.",
          "Write one line: what failed, what is wet, what needs a part. Future-you cannot smell the hose from here.",
        ],
      },
      {
        type: "figure",
        photo: {
          ...photos.alpineLake,
          caption:
            "Pretty water still leaves grit. Rinse as if the next user is a friend.",
        },
      },
      {
        type: "quote",
        text: "A sealed wet filter is a terrarium.",
      },
      {
        type: "p",
        text: "This is not a ritual for its own sake. It is how you keep a cheap kit honest. I would rather see a faded hose that has been rinsed a hundred times than a new one that spent the winter in a trunk with last August still inside it. Field craft is mostly the refusal to kick the can into next weekend.",
      },
    ],
  },
  {
    slug: "when-the-wind-changes-first",
    title: "When the Wind Changes First",
    dek: "A Point Reyes crossing that ended early, and why the turnaround was the best decision on the log.",
    format: "dispatch",
    topicSlugs: ["navigation", "range", "autonomy"],
    authorSlug: "samira-okonkwo",
    publishedAt: "2026-07-20",
    featured: false,
    lead: false,
    hero: {
      ...photos.highRidge,
      caption: "The land stays. The wind does not. Plan for the one that moves.",
    },
    body: [
      {
        type: "p",
        text: "We had a window. That sentence has wrecked more Saturdays than rain. The window was real at 6 a.m.: a light northwesterly, a swell you could live with, two competent friends, a radio that worked. By 9:40 the wind had gone ahead of the forecast the way a friend goes ahead of you in a crowded station. Not malicious. Just gone.",
      },
      {
        type: "p",
        text: "I wanted the crossing. I had already written the first paragraph in my head, which is a bad sign. Ellis, who was not even on the trip, had made me write a turnaround time on a card. The card said 10:15 if the whitecaps fill in. At 10:02 the water started to look like it had opinions. We turned.",
      },
      {
        type: "figure",
        photo: {
          ...photos.switchback,
          caption:
            "Turning around is also a route. It just photographs like a smaller day.",
        },
      },
      {
        type: "p",
        text: "Nobody was elegant about it. One of us cursed. One of us got efficient and quiet, which is his fear language. I ate a dry apricot and hated the card for being right. Then the usual gift arrived: a harbor that was still ordinary, a lunch that was still possible, a boat that did not become a story for the wrong page of the newspaper.",
      },
      {
        type: "h2",
        text: "What the log got",
      },
      {
        type: "p",
        text: "Wind backed and built 40 minutes early. Whitecaps filled the middle third. Turned at 10:07. No gear lost. Pride lightly damaged. The sentence I did not get to write is not a cost. The sentence I would have written from a rescue is.",
      },
      {
        type: "quote",
        text: "A turnaround time you wrote while fed is worth more than courage you invent when the water gets tall.",
      },
      {
        type: "p",
        text: "Autonomy includes the right to have a smaller day than the one you advertised. Tell the people waiting on shore the truth. Do not dress the turnaround as a scenic choice if it was a safety choice. The wind changed first. You listened. That is the dispatch.",
      },
    ],
  },
  {
    slug: "walking-the-last-fresh-mile",
    title: "Walking the Last Fresh Mile",
    dek: "Trail water, plant signs, and the slow skill of not trusting the pretty creek nearest camp.",
    format: "essay",
    topicSlugs: ["water", "camp", "field-craft"],
    authorSlug: "lena-voss",
    publishedAt: "2026-08-04",
    featured: false,
    lead: false,
    hero: {
      ...photos.trailDusk,
      caption: "The last mile is where people get casual. The water does not.",
    },
    body: [
      {
        type: "p",
        text: "There is a creek twenty yards from a popular Olympic shelter that I will not drink from even after treatment if I have another option. Not because I enjoy being difficult. Because I have watched the drainage. Tents sit uphill. Dogs have opinions. The pretty water is a gutter with good lighting.",
      },
      {
        type: "p",
        text: "The last fresh mile is the walk to a better intake. It is boring, which is why people skip it. They filter the gutter and then write a mysterious stomach into the trip report. I would rather walk. The body likes a job with a clear finish, and a known spring is a finish.",
      },
      {
        type: "figure",
        photo: {
          ...photos.sunForest,
          caption:
            "Under the canopy the water can look cleaner than it is. Walk the drainage, not the postcard.",
        },
      },
      {
        type: "h2",
        text: "What I look for",
      },
      {
        type: "p",
        text: "I am a botanist by training, not a mystic. Skunk cabbage tells you the ground is wet and often slow. Alder likes disturbed edges. If the plants around a pool look like a rest stop, treat the pool like a rest stop. Higher, colder, moving water with a short catchment is the boring jackpot. Even then I treat it. Treatment is not distrust of the mountain. It is respect for the mammals you cannot see.",
      },
      {
        type: "p",
        text: "Carry an empty if the map shows a marked spring. Fill close to camp on the way back so you are not heroic with six liters on the climb. Share the location like an adult: enough detail to be useful, not enough to turn a quiet intake into a weekend attraction. Some places can handle a sentence in a journal. Some can only handle a whisper between friends.",
      },
      {
        type: "quote",
        text: "Treatment is not distrust of the mountain. It is respect for the mammals you cannot see.",
      },
      {
        type: "p",
        text: "The last mile also resets the day. You leave the chatter of camp and you come back with a full bottle and a cooler head. That is not a metaphor I am trying to sell. It is just what happens when you walk away from the dishes for twenty minutes and do one necessary thing well.",
      },
    ],
  },
  {
    slug: "letters-from-a-temporary-harbor",
    title: "Letters from a Temporary Harbor",
    dek: "A week on a borrowed mooring, the social contract of a shared dinghy, and what you keep when you leave.",
    format: "field-note",
    topicSlugs: ["autonomy", "camp", "water"],
    authorSlug: "jonah-hale",
    publishedAt: "2026-08-18",
    featured: false,
    lead: false,
    hero: {
      ...photos.alpineLake,
      caption: "Borrowed water. The rules still belong to the people who live here.",
    },
    body: [
      {
        type: "p",
        text: "A temporary harbor is a place that lets you stay without letting you pretend you belong. We had a borrowed mooring for seven nights in a cove that still had working boats in it. That last part matters. Vacation harbors forgive you. Working harbors remember you if you block the hoist.",
      },
      {
        type: "p",
        text: "The dinghy was communal in the informal way that causes trouble. Two families, one skiff, a dock that went dry at minus tides. We made a paper schedule and clipped it to the thwart. It looked fussy. It prevented the kind of politeness that turns into resentment at 6 a.m. when somebody's ice is melting.",
      },
      {
        type: "figure",
        photo: {
          ...photos.lakeBoat,
          caption:
            "A borrowed mooring is not a deed. Leave the water as you found it, plus one kindness.",
        },
      },
      {
        type: "h2",
        text: "What we kept, what we left",
      },
      {
        type: "p",
        text: "We kept a list of depths at the landing, because the chart was optimistic at low water. We kept the name of the woman who sold us cabbage and told us when the grocer closed on Sundays. We left a full jerry of dinghy fuel, a note about a sticky choke, and the paper schedule in case the next borrowers were also allergic to mind reading.",
      },
      {
        type: "p",
        text: "Autonomy in a harbor is a strange phrase. You are free to cook your own beans. You are not free to treat the quiet hours as a suggestion. Kids go down. Fishermen rise. Your speaker is not a personality. I say this as someone who has been the problem. The correction was a look from a man splicing on the next ball, which is a review you cannot appeal.",
      },
      {
        type: "quote",
        text: "A working harbor remembers you if you block the hoist.",
      },
      {
        type: "p",
        text: "On the last morning the cove was ordinary again. That is the success condition. No story, no incident, no new rule named after us. I wrote the depths into my book and untied the painter. Temporary means you were a guest. Guests who understand that get invited back, or at least not discussed.",
      },
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getLeadStory() {
  return stories.find((story) => story.lead) ?? stories[0];
}

export function getFeaturedStories() {
  return stories.filter((story) => story.featured && !story.lead);
}

export function storiesByAuthor(authorSlug: string) {
  return stories.filter((story) => story.authorSlug === authorSlug);
}

export function storiesByTopic(topicSlug: string) {
  return stories.filter((story) => story.topicSlugs.includes(topicSlug));
}

export function relatedStories(story: Story, limit = 3) {
  const scored = stories
    .filter((candidate) => candidate.slug !== story.slug)
    .map((candidate) => {
      const topicScore = candidate.topicSlugs.filter((topic) =>
        story.topicSlugs.includes(topic),
      ).length;
      const authorScore = candidate.authorSlug === story.authorSlug ? 1 : 0;
      const formatScore = candidate.format === story.format ? 1 : 0;
      return {
        candidate,
        score: topicScore * 2 + authorScore + formatScore,
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.candidate.publishedAt.localeCompare(a.candidate.publishedAt);
    });

  return scored.slice(0, limit).map((entry) => entry.candidate);
}

export function enrichStory(story: Story) {
  return {
    ...story,
    author: getAuthorOrThrow(story.authorSlug),
    topics: story.topicSlugs.map(getTopicOrThrow),
    minutes: readMinutes(story),
  };
}

export type EnrichedStory = ReturnType<typeof enrichStory>;

export function allEnrichedStories() {
  return [...stories]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(enrichStory);
}
