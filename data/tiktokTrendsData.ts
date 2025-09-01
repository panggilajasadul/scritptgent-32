// Database trending TikTok Indonesia untuk hook yang lebih cerdas dan natural
export interface TikTokTrend {
  id: string;
  keyword: string;
  category: string;
  popularity: number;
  ageGroup: string[];
  context: string;
  hookApplication: string[];
}

export interface ViralHookFormula {
  name: string;
  structure: string;
  examples: string[];
  effectiveness: number;
  bestFor: string[];
}

export interface CreatorPersonality {
  type: string;
  traits: string[];
  languageStyle: string[];
  hookPreferences: string[];
  audienceConnection: string;
}

// Trending keywords dan phrase TikTok Indonesia 2024
export const TIKTOK_TRENDS_2024: TikTokTrend[] = [
  {
    id: "trend_1",
    keyword: "beneran work",
    category: "validation",
    popularity: 9,
    ageGroup: ["gen_z", "millennial"],
    context: "Meyakinkan bahwa produk benar-benar efektif",
    hookApplication: [
      "{product} ini beneran work guys!",
      "Nggak boong, {product} beneran work!",
      "Skeptis? Tapi {product} ini beneran work!"
    ]
  },
  {
    id: "trend_2",
    keyword: "auto repurchase",
    category: "loyalty",
    popularity: 8,
    ageGroup: ["gen_z", "millennial"],
    context: "Produk yang langsung dibeli lagi",
    hookApplication: [
      "{product} yang bikin auto repurchase",
      "Pake sekali, auto repurchase {product} ini",
      "Kenapa {product} ini auto repurchase? Karena..."
    ]
  },
  {
    id: "trend_3",
    keyword: "holy grail",
    category: "excellence",
    popularity: 7,
    ageGroup: ["millennial", "gen_x"],
    context: "Produk terbaik dalam kategorinya",
    hookApplication: [
      "Finally! Nemu holy grail {category}",
      "{product} = holy grail {category} ku",
      "Holy grail {category} under {price}!"
    ]
  },
  {
    id: "trend_4",
    keyword: "game changer",
    category: "transformation",
    popularity: 8,
    ageGroup: ["gen_z", "millennial"],
    context: "Produk yang mengubah segalanya",
    hookApplication: [
      "{product} ini game changer banget!",
      "Game changer: {product} yang {benefit}",
      "Nemu game changer {category} nih!"
    ]
  },
  {
    id: "trend_5",
    keyword: "no skip",
    category: "attention",
    popularity: 9,
    ageGroup: ["gen_z"],
    context: "Konten yang tidak boleh dilewatkan",
    hookApplication: [
      "No skip! {product} ini {benefit}",
      "Jangan skip! Info {product} penting",
      "No skip guys, {product} ini viral karena..."
    ]
  },
  {
    id: "trend_6",
    keyword: "real talk",
    category: "honesty",
    popularity: 8,
    ageGroup: ["gen_z", "millennial"],
    context: "Berbicara jujur tanpa basa-basi",
    hookApplication: [
      "Real talk: {product} ini {honest_opinion}",
      "Real talk guys, {product} worth it nggak?",
      "Real talk, {product} overrated atau underrated?"
    ]
  },
  {
    id: "trend_7",
    keyword: "slay",
    category: "confidence",
    popularity: 7,
    ageGroup: ["gen_z"],
    context: "Tampil percaya diri dan menawan",
    hookApplication: [
      "{product} yang bikin kamu slay!",
      "Slay dengan {product} budget {price}",
      "Cara slay pakai {product} murah"
    ]
  },
  {
    id: "trend_8",
    keyword: "periodt",
    category: "emphasis",
    popularity: 6,
    ageGroup: ["gen_z"],
    context: "Menekankan statement dengan kuat",
    hookApplication: [
      "{product} terbaik, periodt!",
      "Worth it banget, periodt!",
      "{product} ini juara, periodt!"
    ]
  }
];

// Formula hook viral yang terbukti efektif
export const VIRAL_HOOK_FORMULAS: ViralHookFormula[] = [
  {
    name: "Shock + Proof",
    structure: "{shock_statement} + {proof_element}",
    examples: [
      "Gila! Serum 50rb ini bikin glowing kayak artis!",
      "Nggak boong! TWS 100rb suaranya kayak headphone 1 juta!",
      "Crazy! Kemeja 75rb ini keliatan mahal banget!"
    ],
    effectiveness: 9,
    bestFor: ["beauty", "gadget", "fashion"]
  },
  {
    name: "Question + Promise",
    structure: "{relatable_question} + {solution_promise}",
    examples: [
      "Siapa yang sering jerawatan? Aku nemu solusinya!",
      "Bosen HP lemot? Ada solusi murah nih!",
      "Pengen glow up tapi budget terbatas? Ini jawabannya!"
    ],
    effectiveness: 8,
    bestFor: ["beauty", "health", "lifestyle"]
  },
  {
    name: "Controversy + Reveal",
    structure: "{controversial_statement} + {reveal_promise}",
    examples: [
      "Unpopular opinion: skincare mahal itu overrated!",
      "Hot take: gadget murah bisa lebih bagus!",
      "Controversial: fashion branded nggak selalu worth it!"
    ],
    effectiveness: 7,
    bestFor: ["beauty", "gadget", "fashion"]
  },
  {
    name: "Story + Transformation",
    structure: "{personal_story_start} + {transformation_result}",
    examples: [
      "Dulu aku kusam banget, sekarang glowing gara-gara ini",
      "From insecure to confident pakai produk 50rb",
      "Journey glow up ku dimulai dari produk murah ini"
    ],
    effectiveness: 8,
    bestFor: ["beauty", "health", "lifestyle"]
  },
  {
    name: "Trend + Validation",
    structure: "{trending_reference} + {personal_validation}",
    examples: [
      "Lagi viral nih, dan aku udah coba!",
      "Trending di FYP, ternyata beneran bagus!",
      "Viral karena emang worth it banget!"
    ],
    effectiveness: 8,
    bestFor: ["beauty", "gadget", "food"]
  }
];

// Personality kreator Indonesia yang populer
export const CREATOR_PERSONALITIES: CreatorPersonality[] = [
  {
    type: "Honest Reviewer",
    traits: ["transparent", "detailed", "trustworthy"],
    languageStyle: ["real talk", "jujur aja", "nggak boong", "honest review"],
    hookPreferences: ["real_talk", "honest_opinion", "detailed_review"],
    audienceConnection: "Trust through honesty and detailed explanations"
  },
  {
    type: "Trendy Enthusiast", 
    traits: ["up-to-date", "energetic", "trend-aware"],
    languageStyle: ["viral", "trending", "hits", "lagi ngehits"],
    hookPreferences: ["trending_reference", "viral_mention", "hype_creation"],
    audienceConnection: "Excitement through trending content and FOMO"
  },
  {
    type: "Budget Conscious",
    traits: ["practical", "money-smart", "value-focused"],
    languageStyle: ["worth it", "budget friendly", "hemat", "cost effective"],
    hookPreferences: ["price_comparison", "value_proposition", "budget_solution"],
    audienceConnection: "Relatability through shared financial concerns"
  },
  {
    type: "Lifestyle Aspirational",
    traits: ["inspiring", "aesthetic", "goal-oriented"],
    languageStyle: ["glow up", "upgrade", "level up", "transformation"],
    hookPreferences: ["transformation_story", "lifestyle_upgrade", "aspiration_hook"],
    audienceConnection: "Inspiration through achievable lifestyle goals"
  },
  {
    type: "Funny Entertainer",
    traits: ["humorous", "relatable", "entertaining"],
    languageStyle: ["plot twist", "expectation vs reality", "drama", "lebay"],
    hookPreferences: ["humor_hook", "unexpected_twist", "entertaining_story"],
    audienceConnection: "Engagement through humor and entertainment"
  }
];

// Context-aware hook suggestions berdasarkan waktu dan situasi
export const CONTEXTUAL_HOOKS = {
  time_based: {
    morning: [
      "Morning routine dengan {product}",
      "Start your day dengan {product} ini",
      "Pagi-pagi udah glowing pakai {product}"
    ],
    afternoon: [
      "Lunch break review: {product}",
      "Siang-siang ngomongin {product} viral",
      "Afternoon glow up dengan {product}"
    ],
    evening: [
      "Night routine featuring {product}",
      "Malam-malam review {product}",
      "Evening self-care dengan {product}"
    ]
  },
  seasonal: {
    rainy_season: [
      "Musim hujan, kulit tetap {benefit} pakai {product}",
      "Cuaca lembab? {product} ini solusinya",
      "Anti kusam di musim hujan dengan {product}"
    ],
    hot_season: [
      "Panas-panas gini, {product} jadi penyelamat",
      "Cuaca panas, {product} tetap {benefit}",
      "Summer essential: {product} yang {benefit}"
    ]
  },
  events: {
    payday: [
      "Gajian? Saatnya beli {product} ini!",
      "Payday haul: {product} worth it!",
      "Gajian wajib beli {product} viral ini"
    ],
    sale_season: [
      "Sale alert! {product} diskon {percentage}",
      "Harbolnas wajib beli {product}",
      "Sale season, {product} harga terbaik!"
    ]
  }
};

// Advanced hook personalization berdasarkan audience
export const AUDIENCE_SPECIFIC_HOOKS = {
  gen_z: {
    language_style: ["slay", "periodt", "no cap", "fr fr", "bussin"],
    hook_patterns: [
      "No cap, {product} ini bussin!",
      "{product} yang bikin kamu slay periodt!",
      "Fr fr, {product} ini the moment!"
    ],
    emotional_triggers: ["FOMO", "social_validation", "trend_following"]
  },
  millennial: {
    language_style: ["worth it", "game changer", "holy grail", "adulting"],
    hook_patterns: [
      "Adulting hack: {product} yang {benefit}",
      "Holy grail {category} under {price}",
      "Game changer buat {problem}"
    ],
    emotional_triggers: ["practicality", "value", "life_improvement"]
  },
  working_professional: {
    language_style: ["efficient", "practical", "time-saving", "professional"],
    hook_patterns: [
      "Busy professional? {product} ini solusinya",
      "Time-saving {category}: {product}",
      "Professional look dengan {product} {price}"
    ],
    emotional_triggers: ["time_efficiency", "professional_image", "convenience"]
  }
};

// Smart hook optimization berdasarkan performa
export const HOOK_OPTIMIZATION_RULES = {
  high_performing_elements: [
    "specific_numbers", // "3 hari", "50rb", "10x lebih"
    "emotional_words", // "gila", "amazing", "shocking"
    "social_proof", // "10rb orang", "viral", "trending"
    "urgency_indicators", // "limited", "jangan sampai", "cepetan"
    "benefit_clarity" // "bikin glowing", "suara jernih", "awet seharian"
  ],
  
  low_performing_elements: [
    "generic_claims", // "bagus", "oke", "lumayan"
    "formal_language", // "produk berkualitas", "sangat direkomendasikan"
    "overused_phrases", // "must have", "recommended"
    "vague_benefits" // "bikin cantik", "bagus banget"
  ],
  
  optimization_tips: [
    "Gunakan angka spesifik daripada kata umum",
    "Pilih emosi yang kuat daripada netral",
    "Tambahkan elemen trending untuk boost engagement",
    "Sesuaikan bahasa dengan target audience",
    "Kombinasikan shock value dengan proof"
  ]
};

// Template hook berdasarkan funnel marketing
export const FUNNEL_BASED_HOOKS = {
  awareness: [
    "Tau nggak {product} yang lagi viral?",
    "Kenalan sama {product} yang {benefit}",
    "First impression {product}: {reaction}"
  ],
  interest: [
    "Penasaran kenapa {product} viral? Ini alasannya",
    "Deep dive: {product} yang bikin {benefit}",
    "Breakdown {product}: worth it atau nggak?"
  ],
  consideration: [
    "{product} vs {competitor}: mana yang menang?",
    "Honest comparison: {product} worth the hype?",
    "Should you buy {product}? Ini pertimbangannya"
  ],
  purchase: [
    "Saatnya checkout {product} ini!",
    "Link di bio buat {product} viral ini",
    "Jangan sampai kehabisan {product}!"
  ]
};

// Algoritma AI untuk hook personalization
export const HOOK_AI_ALGORITHM = {
  // Scoring system untuk hook quality
  scoring_factors: {
    emotional_impact: 0.25,
    trending_relevance: 0.20,
    niche_fit: 0.20,
    audience_match: 0.15,
    uniqueness: 0.10,
    clarity: 0.10
  },
  
  // Machine learning patterns dari data kreator sukses
  success_patterns: [
    {
      pattern: "shock_value + specific_benefit",
      success_rate: 0.85,
      example: "Gila! {product} bikin {specific_benefit} dalam {timeframe}!"
    },
    {
      pattern: "question + solution_tease",
      success_rate: 0.78,
      example: "Siapa yang {problem}? Aku nemu solusinya!"
    },
    {
      pattern: "controversy + personal_experience",
      success_rate: 0.72,
      example: "Unpopular opinion: {product} ini {controversial_view}, tapi..."
    },
    {
      pattern: "trending_reference + validation",
      success_rate: 0.80,
      example: "Lagi viral nih, dan aku udah coba!"
    }
  ],
  
  // Dynamic adjustment berdasarkan niche
  niche_multipliers: {
    beauty: {
      transformation_hooks: 1.3,
      price_comparison: 1.2,
      ingredient_focus: 1.1
    },
    gadget: {
      feature_highlight: 1.3,
      comparison_hooks: 1.2,
      value_proposition: 1.1
    },
    fashion: {
      style_transformation: 1.3,
      trend_reference: 1.2,
      budget_fashion: 1.1
    }
  }
};

// Advanced hook variations untuk A/B testing
export const HOOK_VARIATIONS = {
  intensity_levels: {
    subtle: {
      shock_words: ["ternyata", "nemu", "coba"],
      emphasis: ["nih", "loh", "deh"]
    },
    medium: {
      shock_words: ["gila", "amazing", "nggak nyangka"],
      emphasis: ["banget", "abis", "parah"]
    },
    high: {
      shock_words: ["GILA!", "OMG!", "SHOCKING!"],
      emphasis: ["BANGET!", "PARAH!", "VIRAL ABIS!"]
    }
  },
  
  formality_levels: {
    casual: ["aku", "kamu", "gue", "lo"],
    semi_formal: ["saya", "kalian", "kita"],
    slang: ["gw", "lu", "kita", "guys"]
  },
  
  regional_variations: {
    jakarta: ["gila", "keren", "mantap", "juara"],
    bandung: ["euy", "atuh", "pisan", "tea"],
    jogja: ["lah", "kok", "yo", "ta"],
    surabaya: ["cak", "sek", "rek", "pol"]
  }
};

// Smart content calendar untuk hook optimization
export const CONTENT_CALENDAR_HOOKS = {
  monday: {
    theme: "motivation",
    hooks: [
      "Monday motivation: {product} yang bikin semangat",
      "Start the week dengan {product} ini",
      "Monday blues? {product} ini obatnya"
    ]
  },
  tuesday: {
    theme: "tips_and_tricks",
    hooks: [
      "Tuesday tips: cara maksimalin {product}",
      "Life hack Tuesday: {product} yang {benefit}",
      "Tips Tuesday: {product} untuk {problem}"
    ]
  },
  wednesday: {
    theme: "review_honest",
    hooks: [
      "Wednesday review: {product} worth it nggak?",
      "Honest Wednesday: {product} real talk",
      "Review jujur: {product} vs expectation"
    ]
  },
  thursday: {
    theme: "throwback_comparison",
    hooks: [
      "Throwback: dulu vs sekarang pakai {product}",
      "Before after {product}: shocking!",
      "Transformation Thursday dengan {product}"
    ]
  },
  friday: {
    theme: "weekend_prep",
    hooks: [
      "Weekend ready dengan {product}",
      "Friday glow up pakai {product}",
      "Weekend prep: {product} essential"
    ]
  },
  saturday: {
    theme: "lifestyle_content",
    hooks: [
      "Saturday vibe dengan {product}",
      "Weekend lifestyle featuring {product}",
      "Chill Saturday pakai {product}"
    ]
  },
  sunday: {
    theme: "self_care",
    hooks: [
      "Sunday self-care dengan {product}",
      "Me time Sunday pakai {product}",
      "Self-care Sunday featuring {product}"
    ]
  }
};
