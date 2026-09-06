// ============================================================================
// PERSONAL CONTENT & CONFIGURATION — EDIT THIS SECTION LATER
// ============================================================================
// This file contains all the personal text, dates, inside sentiments, and
// editable content for Bujjamma's birthday surprise website.
// You can edit any string below without touching any React components.
// ============================================================================

export interface PersonalData {
  her: {
    fullName: string;
    nickname: string;
    petName: string;
    specialTitles: string[];
  };
  relationship: {
    startDate: string; // e.g. "August 12, 2025"
    startDay: string; // "12"
    startMonth: string; // "08"
    startYear: string; // "2025"
    firstMeetingDate: string; // e.g. "May 8, 2026"
    firstMeetingDay: string; // "08"
    firstMeetingMonth: string; // "05"
    firstMeetingYear: string; // "2026"
    milestoneQuote: string;
    distanceNote: string;
  };
  beforeUs: {
    title: string;
    quote: string;
    fragments: string[];
    message: string;
  };
  relationshipStart: {
    title: string;
    subtitle: string;
    memoryNote: string;
  };
  hardTimes: {
    title: string;
    stages: { word: string; subtext: string }[];
    flow: string[];
    summary: string;
    resolution: string;
  };
  morningCalls: {
    callerName: string;
    callsCount: number;
    callList: {
      number: number;
      dialogue: string;
      subtext: string;
      characterReaction: string;
    }[];
    finalRealization: string;
  };
  longDistance: {
    title: string;
    subtitle: string;
    nodes: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      placeholderText: string;
    }[];
  };
  firstMeeting: {
    title: string;
    subtitle: string;
    quote1: string;
    quote2: string;
    memoryNote: string;
  };
  herCare: {
    title: string;
    motherlyQuote: string;
    cards: {
      id: string;
      question: string;
      shortLabel: string;
      response: string;
      iconName: string;
    }[];
  };
  future: {
    title: string;
    subtitle: string;
    city: string;
    staggeredLines: string[];
    bucketList: {
      id: string;
      title: string;
      description: string;
      tag: string;
    }[];
  };
  letter: {
    title: string;
    subtitle: string;
    date: string;
    greeting: string;
    content: string; // multiline letter content
    closing: string;
    signature: string;
  };
  finalReveal: {
    milestones: { date: string; label: string }[];
    birthdayWish: string;
    subWish: string;
    finalHeart: string;
  };
}

export const personalData: PersonalData = {
  her: {
    fullName: "Harshini",
    nickname: "Bujjamma",
    petName: "Bangaram",
    specialTitles: ["My Favorite Notification", "Prettiest Girl in the World", "The One Who Stays", "My Alarm Clock"],
  },

  relationship: {
    startDate: "August 12, 2025",
    startDay: "12",
    startMonth: "08",
    startYear: "2025",
    firstMeetingDate: "May 8, 2026",
    firstMeetingDay: "08",
    firstMeetingMonth: "05",
    firstMeetingYear: "2026",
    milestoneQuote: "THE DAY WE BECAME US",
    distanceNote: "Different cities. Miles apart. But never away from my mind.",
  },

  beforeUs: {
    title: "Before Us",
    quote: "Funny thing... I don't even remember exactly how we became this close.",
    fragments: [
      "random conversations",
      "long calls",
      "stupid jokes",
      "fights",
      "understanding",
    ],
    message: "frnds laaga journey start ayyi friends laage close ayyi iddariki iddaram correct anna moment kosam wait chesi(manam frnds laaga unnappudu kuda manam iddaram chaala close ga unnam like manam anni share chesukuntu)",
  },

  relationshipStart: {
    title: "THE DAY WE BECAME US",
    subtitle: "August 12, 2025",
    memoryNote: "e 1 year journey lo enni struggles face chesina manam iddaram happy ga okariki okaru ardham chesukuntu long distance ni face chestu mana pelli kosam wait chestu unnam.\n\naa photo real kaakapoyina manam eppathikaina aa photo real ayye roju kosam wait chestu unna",
  },

  hardTimes: {
    title: "It wasn't always easy.",
    stages: [
      { word: "Fight.", subtext: "The misunderstandings that caught us off guard." },
      { word: "Misunderstanding.", subtext: "Words said when emotions ran high." },
      { word: "Anger.", subtext: "The heavy silence in between." },
      { word: "Again.", subtext: "Especially around that tough third month." },
      { word: "Still here.", subtext: "Neither of us walked away." },
    ],
    flow: [
      "Misunderstanding",
      "Conversation",
      "Understanding",
      "Stronger Bond",
    ],
    summary: "We didn't become strong because everything was easy.",
    resolution: "We became strong because we stayed. Whenever we fought, she might yell, but she never tried to leave. She stayed.",
  },

  morningCalls: {
    callerName: "BUJJAMMA ❤️",
    callsCount: 3,
    callList: [
      {
        number: 1,
        dialogue: "good morning bangaram! clg ki time avvutundhi tondarga leguvu",
        subtext: "Call #1 • 07:15 AM",
        characterReaction: "oka 5 mins plss",
      },
      {
        number: 2,
        dialogue: "legava ra pandhi 10 mins avvutundhi",
        subtext: "Call #2 • 07:25 AM",
        characterReaction: "ha legustunna!!",
      },
      {
        number: 3,
        dialogue: "naku telusu ra nidra poyaav malli ani. musukoni nidra legvu, tiffin tinesi box kuda pettukoni vellu",
        subtext: "Call #3 • 07:35 AM",
        characterReaction: "ok nenu ready ayyi clg ki velta, byeee.....",
      },
    ],
    finalRealization: "She somehow knows whether I'm actually getting ready... or pretending to be awake so I can sleep again.",
  },

  longDistance: {
    title: "Different Places. Same Little Universe.",
    subtitle: "Across the miles, held together by voices and late-night signals.",
    nodes: [
      {
        id: "phone-calls",
        title: "PHONE CALLS",
        subtitle: "Hours passing like seconds",
        description: "Falling asleep on call, hearing each other breathe, and forgetting the distance.",
        placeholderText: "YOUR CALL LOGS OR AUDIO MEMORY WILL APPEAR HERE",
      },
      {
        id: "video-calls",
        title: "VIDEO CALLS",
        subtitle: "Seeing your smile through a glass screen",
        description: "Studying together, eating together, and looking at the prettiest face in the world.",
        placeholderText: "YOUR VIDEO CALL SCREENSHOT WILL APPEAR HERE",
      },
      {
        id: "late-conversations",
        title: "LATE CONVERSATIONS",
        subtitle: "When the entire world goes quiet",
        description: "Talking about everything and nothing until the sun starts coming up.",
        placeholderText: "YOUR LATE NIGHT MEMORY WILL APPEAR HERE",
      },
      {
        id: "stupid-jokes",
        title: "STUPID JOKES",
        subtitle: "The inside humor nobody else understands",
        description: "Random teases, laughing till our stomachs hurt over the silliest things.",
        placeholderText: "YOUR FUNNIEST SCREENSHOT WILL APPEAR HERE",
      },
      {
        id: "everyday-checkins",
        title: "EVERYDAY CHECK-INS",
        subtitle: "The rhythm of our days",
        description: "Reaching for the phone the moment something happens, because you're the first person I want to tell.",
        placeholderText: "YOUR DAILY CHAT MEMORY WILL APPEAR HERE",
      },
    ],
  },

  firstMeeting: {
    title: "08 • 05 • 2026",
    subtitle: "THE FIRST TIME THE DISTANCE DISAPPEARED",
    quote1: "After all those calls...",
    quote2: "I finally got to see you standing in front of me.",
    memoryNote: "manam aa roju em photos digakapoyina aa moments and memories na life mottam gurtundhi potaai",
  },

  herCare: {
    title: "You probably don't realize how much you take care of me.",
    motherlyQuote: "After my mother, you're probably the person who worries about me the most.",
    cards: [
      {
        id: "eat",
        question: "DID YOU EAT?",
        shortLabel: "Food & Meals",
        response: "rey nuvvu tinakapotae nenu neetho rojantha matlaadanu. musukoni food tinu. edo okathi koncham ayina tinu lekapotae natho matlaadaku",
        iconName: "Utensils",
      },
      {
        id: "money",
        question: "DO YOU HAVE MONEY?",
        shortLabel: "Pocket & Budget",
        response: "neeku money saving asalu raadu. asalu ne money antha ela ayyipotaaio naku ardham kaadu. money kaavali antae nannu adugu nenu kodta naku taruvatha vaddi tho ivvu",
        iconName: "Wallet",
      },
      {
        id: "what-doing",
        question: "WHAT ARE YOU DOING?",
        shortLabel: "Everyday Tracking",
        response: "em chestunnav ra pandi? eppudu chusina bayatha tirugutaane untaav e bangaram undhi ani asalu pattinchukovu",
        iconName: "MapPin",
      },
      {
        id: "wake-up",
        question: "WAKE UP.",
        shortLabel: "College Wake-ups",
        response: "rey legava ra pandi naku netho matlaadalali ani undhi. musukoni matlaadu lekapotae nenu alugutha",
        iconName: "AlarmClock",
      },
      {
        id: "are-you-okay",
        question: "ARE YOU OKAY?",
        shortLabel: "Emotional Radar",
        response: "emaindhi bangaram. naku cheppu nenu solution ivvadaniki try chesta. na bujji bangaram nuvvu neeku em problem raakunda chusukunta",
        iconName: "HeartPulse",
      },
    ],
  },

  future: {
    title: "Our story isn't finished.",
    subtitle: "What lies ahead when the screens finally turn off.",
    city: "Hyderabad",
    staggeredLines: [
      "One day...",
      "No calls.",
      "No screens.",
      "Just us.",
      "And the whole of Hyderabad to roam.",
    ],
    bucketList: [
      {
        id: "b1",
        title: "Roam around Hyderabad together",
        description: "Wandering through old streets, evening lights, and making the city ours.",
        tag: "Dream Trip",
      },
      {
        id: "b2",
        title: "Eat somewhere random",
        description: "No food delivery, no video call dinners — just sitting across the table sharing a plate.",
        tag: "Food Date",
      },
      {
        id: "b3",
        title: "Watch a sunset together",
        description: "Quietly sitting side-by-side without worrying about call battery or bad connection.",
        tag: "Quiet Moment",
      },
      {
        id: "b4",
        title: "Take stupid photos",
        description: "No screenshots. Real goofy selfies that only we will ever see.",
        tag: "Chaos",
      },
      {
        id: "b5",
        title: "Watch a movie together",
        description: "In an actual theater or curled up on a sofa, sharing popcorn and whispering jokes.",
        tag: "Movie Night",
      },
      {
        id: "b6",
        title: "Walk around with no destination",
        description: "Hands held, no destination in mind, just walking until our feet get tired.",
        tag: "Adventures",
      },
      {
        id: "b7",
        title: "Sit somewhere and talk for hours",
        description: "Looking into your eyes the entire time instead of at a front-facing camera.",
        tag: "Deep Talks",
      },
      {
        id: "b8",
        title: "Make memories that aren't through a screen",
        description: "Hugging you whenever I want, without having to say 'I wish you were here.'",
        tag: "Forever",
      },
    ],
  },

  letter: {
    title: "Something I wanted to tell you myself.",
    subtitle: "A private letter kept safe inside this digital envelope.",
    date: "On Your Special Day",
    greeting: "Dear Bujjamma,",
    content: `happy birthday bangaram
love u so much bujji bangaram....
e surprise neeku nacchindhi anukuntunna. bangaram naku nuvvu chaala istam. naku nuvvu untae chaalu evaru akkarledu. ne birthday ni chaala grand ga cheyyali ani anukunna kani nenu akkada lenu kadha anduke nenu ninnu surprise cheyyali ani anukuntunna. manam iddaram eppudu happy gane undaali ani korukuntunna. manam iddaram pelli chesukoni life long happy ga enjoy cheyyali. enni problems vacchina enni kastaalu vacchina manam iddaram kalise undaali.

asalu relation antae idhenemo nenu ne kosam change avvatam nuvvu na kosam change avvatam iddariki iddaram ardham chesukuntu eppudu kalustaam ani wait chestu kalisina roju unna distance antha marchipoyi iddaram kalisi tirugutu anni rojulu face chesindhi oka roju lo antha feel avvatam. malli long distance veltunnappudu oka side aa roju unna memories tho happiness, inko side malli long distance loki veltunnam ane baada mixed emotions tho untunnnam.

neeku teliadu bangaram naku nuvvu antae entha istam anedi. nuvvu na pranam bangaram ne kosam nenu em cheyyadaniki ayina ready. ne kosam nenu saturdays tinatam maanesanu, cigrettes mandu anni aapesanu, kopam chaala tagginchukunnanu. na kosam kuda nuvvu chala change ayyav anuko. ma amma taruvatha nannu evarina ekkuva care chesaaru antae adi nuvve bangaram. aa caring lifelong chupistu manam iddaram happy life lead cheyyali ani anukuntunna bangaram.

once again happy birthday bujjamma
love you so much bujji bangaram`,
    closing: "Always yours,",
    signature: "Kanna ❤️",
  },

  finalReveal: {
    milestones: [
      { date: "12.08.2025", label: "Where it all began" },
      { date: "08.05.2026", label: "When the distance broke" },
      { date: "TODAY", label: "Celebrating you" },
    ],
    birthdayWish: "Happy Birthday, Bangaram.",
    subWish: "My Bujjamma ❤️",
    finalHeart: "To infinity and beyond, in our own little universe.",
  },
};
