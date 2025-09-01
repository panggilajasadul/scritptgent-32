// Database hook 3 detik pertama yang natural ala kreator Indonesia untuk konten afiliasi TikTok
export interface Hook3DetikPattern {
  id: string;
  category: string;
  pattern: string;
  variables: string[];
  example: string;
  effectiveness: number; // 1-10 scale
  niche: string[];
  emotion: string;
  trending: boolean;
}

export interface TrendingPhrase {
  phrase: string;
  context: string;
  popularity: number;
  ageGroup: string[];
}

export interface CreatorStyle {
  name: string;
  characteristics: string[];
  hookPatterns: string[];
  vocabulary: string[];
}

// Hook patterns yang natural ala kreator Indonesia
export const HOOK_3_DETIK_PATTERNS: Hook3DetikPattern[] = [
  {
    id: "viral_1",
    category: "Shock Value",
    pattern: "Gila! {product} ini bikin {benefit} dalam {timeframe}!",
    variables: ["product", "benefit", "timeframe"],
    example: "Gila! Serum ini bikin kulit glowing dalam 3 hari!",
    effectiveness: 9,
    niche: ["beauty", "health", "gadget"],
    emotion: "surprise",
    trending: true
  },
  {
    id: "viral_2", 
    category: "FOMO",
    pattern: "Jangan sampai nyesel! {product} ini lagi viral karena {reason}",
    variables: ["product", "reason"],
    example: "Jangan sampai nyesel! TWS ini lagi viral karena suaranya kayak bioskop!",
    effectiveness: 8,
    niche: ["gadget", "fashion", "food"],
    emotion: "urgency",
    trending: true
  },
  {
    id: "relatable_1",
    category: "Relatable Problem",
    pattern: "Siapa yang {problem}? Aku nemu solusinya nih!",
    variables: ["problem"],
    example: "Siapa yang sering jerawatan? Aku nemu solusinya nih!",
    effectiveness: 8,
    niche: ["beauty", "lifestyle", "health"],
    emotion: "empathy",
    trending: false
  },
  {
    id: "curiosity_1",
    category: "Curiosity Gap",
    pattern: "Kenapa {product} ini bisa {benefit}? Ternyata...",
    variables: ["product", "benefit"],
    example: "Kenapa serum ini bisa bikin glowing? Ternyata...",
    effectiveness: 7,
    niche: ["beauty", "health", "gadget"],
    emotion: "curiosity",
    trending: false
  },
  {
    id: "trending_1",
    category: "Trending Topic",
    pattern: "Lagi trending nih! {product} yang bikin {celebrity} cantik",
    variables: ["product", "celebrity"],
    example: "Lagi trending nih! Skincare yang bikin Nagita Slavina cantik",
    effectiveness: 9,
    niche: ["beauty", "fashion"],
    emotion: "aspiration",
    trending: true
  },
  {
    id: "price_shock_1",
    category: "Price Shock",
    pattern: "Cuma {price}?! {product} ini worth it banget!",
    variables: ["price", "product"],
    example: "Cuma 50rb?! Serum ini worth it banget!",
    effectiveness: 8,
    niche: ["beauty", "gadget", "fashion"],
    emotion: "surprise",
    trending: true
  },
  {
    id: "comparison_1",
    category: "Comparison Hook",
    pattern: "Daripada beli {expensive}, mending {product} ini aja!",
    variables: ["expensive", "product"],
    example: "Daripada beli skincare 500rb, mending serum 50rb ini aja!",
    effectiveness: 7,
    niche: ["beauty", "gadget", "fashion"],
    emotion: "smart_choice",
    trending: false
  },
  {
    id: "personal_story_1",
    category: "Personal Story",
    pattern: "Dulu aku {problem}, sekarang {solution} gara-gara {product}",
    variables: ["problem", "solution", "product"],
    example: "Dulu aku kusam, sekarang glowing gara-gara serum ini",
    effectiveness: 8,
    niche: ["beauty", "health", "lifestyle"],
    emotion: "transformation",
    trending: false
  },
  {
    id: "social_proof_1",
    category: "Social Proof",
    pattern: "{number} orang udah buktiin! {product} emang the best!",
    variables: ["number", "product"],
    example: "10rb orang udah buktiin! Serum ini emang the best!",
    effectiveness: 7,
    niche: ["beauty", "gadget", "food"],
    emotion: "trust",
    trending: false
  },
  {
    id: "secret_reveal_1",
    category: "Secret Reveal",
    pattern: "Rahasia {target_group} cantik ternyata pakai {product} ini!",
    variables: ["target_group", "product"],
    example: "Rahasia artis cantik ternyata pakai serum murah ini!",
    effectiveness: 8,
    niche: ["beauty", "fashion"],
    emotion: "exclusivity",
    trending: true
  },
  {
    id: "mistake_1",
    category: "Common Mistake",
    pattern: "Jangan salah pilih! {product} ini beda dari yang lain",
    variables: ["product"],
    example: "Jangan salah pilih! Serum ini beda dari yang lain",
    effectiveness: 6,
    niche: ["beauty", "gadget", "health"],
    emotion: "caution",
    trending: false
  },
  {
    id: "transformation_1",
    category: "Before After",
    pattern: "From {before} to {after} cuma gara-gara {product}!",
    variables: ["before", "after", "product"],
    example: "From kusam to glowing cuma gara-gara serum ini!",
    effectiveness: 9,
    niche: ["beauty", "health", "fitness"],
    emotion: "transformation",
    trending: true
  },
  {
    id: "controversy_1",
    category: "Controversial",
    pattern: "Unpopular opinion: {product} ini overrated atau underrated?",
    variables: ["product"],
    example: "Unpopular opinion: Serum mahal ini overrated atau underrated?",
    effectiveness: 7,
    niche: ["beauty", "gadget", "fashion"],
    emotion: "controversy",
    trending: false
  },
  {
    id: "challenge_1",
    category: "Challenge",
    pattern: "Challenge pakai {product} selama {duration}, hasilnya...",
    variables: ["product", "duration"],
    example: "Challenge pakai serum ini selama 7 hari, hasilnya...",
    effectiveness: 8,
    niche: ["beauty", "health", "fitness"],
    emotion: "anticipation",
    trending: true
  },
  {
    id: "honest_review_1",
    category: "Honest Review",
    pattern: "Honest review {product}: worth it atau zonk?",
    variables: ["product"],
    example: "Honest review serum viral: worth it atau zonk?",
    effectiveness: 8,
    niche: ["beauty", "gadget", "food"],
    emotion: "trust",
    trending: true
  },
  {
    id: "budget_friendly_1",
    category: "Budget Friendly",
    pattern: "Budget {amount} buat {product}? Bisa banget!",
    variables: ["amount", "product"],
    example: "Budget 50rb buat skincare? Bisa banget!",
    effectiveness: 7,
    niche: ["beauty", "fashion", "gadget"],
    emotion: "relief",
    trending: false
  },
  {
    id: "myth_buster_1",
    category: "Myth Buster",
    pattern: "Mitos atau fakta: {product} bisa {claim}?",
    variables: ["product", "claim"],
    example: "Mitos atau fakta: serum murah bisa bikin glowing?",
    effectiveness: 7,
    niche: ["beauty", "health", "gadget"],
    emotion: "curiosity",
    trending: false
  },
  {
    id: "regret_1",
    category: "Regret Prevention",
    pattern: "Kalau nggak beli {product} sekarang, bakal nyesel!",
    variables: ["product"],
    example: "Kalau nggak beli serum ini sekarang, bakal nyesel!",
    effectiveness: 6,
    niche: ["beauty", "gadget", "fashion"],
    emotion: "urgency",
    trending: false
  },
  {
    id: "discovery_1",
    category: "Discovery",
    pattern: "Nemu {product} yang bikin {benefit}, auto kepincut!",
    variables: ["product", "benefit"],
    example: "Nemu serum yang bikin glowing instant, auto kepincut!",
    effectiveness: 8,
    niche: ["beauty", "gadget", "food"],
    emotion: "excitement",
    trending: true
  },
  {
    id: "lifestyle_1",
    category: "Lifestyle Integration",
    pattern: "Sejak pakai {product}, hidup jadi lebih {improvement}",
    variables: ["product", "improvement"],
    example: "Sejak pakai serum ini, hidup jadi lebih percaya diri",
    effectiveness: 7,
    niche: ["beauty", "health", "lifestyle"],
    emotion: "satisfaction",
    trending: false
  }
];

// Trending phrases yang sering dipakai kreator Indonesia
export const TRENDING_PHRASES: TrendingPhrase[] = [
  {
    phrase: "Gila sih ini",
    context: "Expressing amazement",
    popularity: 9,
    ageGroup: ["gen_z", "millennial"]
  },
  {
    phrase: "Auto kepincut",
    context: "Instantly attracted/interested",
    popularity: 8,
    ageGroup: ["gen_z"]
  },
  {
    phrase: "Worth it banget",
    context: "Very worth the price",
    popularity: 9,
    ageGroup: ["gen_z", "millennial"]
  },
  {
    phrase: "Zonk atau jackpot",
    context: "Fail or success",
    popularity: 7,
    ageGroup: ["gen_z", "millennial"]
  },
  {
    phrase: "Nggak boong",
    context: "Not lying/being honest",
    popularity: 8,
    ageGroup: ["gen_z", "millennial"]
  },
  {
    phrase: "Viral abis",
    context: "Very viral/trending",
    popularity: 9,
    ageGroup: ["gen_z"]
  },
  {
    phrase: "Kepoin dong",
    context: "Check it out",
    popularity: 8,
    ageGroup: ["gen_z"]
  },
  {
    phrase: "Racun banget",
    context: "Very tempting",
    popularity: 7,
    ageGroup: ["gen_z"]
  },
  {
    phrase: "Nggak nyangka",
    context: "Didn't expect",
    popularity: 8,
    ageGroup: ["gen_z", "millennial"]
  },
  {
    phrase: "Beneran work",
    context: "Really works",
    popularity: 9,
    ageGroup: ["gen_z", "millennial"]
  }
];

// Gaya kreator Indonesia populer
export const CREATOR_STYLES: CreatorStyle[] = [
  {
    name: "Beauty Guru Natural",
    characteristics: ["honest", "relatable", "educational"],
    hookPatterns: [
      "Honest review {product}: worth it atau zonk?",
      "Skincare {price} vs {expensive_price}, mana yang menang?",
      "Rahasia glowing tanpa mahal-mahal"
    ],
    vocabulary: ["worth it", "glowing", "auto repurchase", "holy grail", "game changer"]
  },
  {
    name: "Lifestyle Influencer",
    characteristics: ["aspirational", "trendy", "lifestyle-focused"],
    hookPatterns: [
      "Day in my life pakai {product}",
      "Upgrade lifestyle dengan budget {amount}",
      "Glow up journey pakai {product}"
    ],
    vocabulary: ["aesthetic", "vibe", "mood", "upgrade", "glow up"]
  },
  {
    name: "Budget Savvy",
    characteristics: ["practical", "money-conscious", "comparison-focused"],
    hookPatterns: [
      "Budget {amount} buat {category}? Bisa!",
      "Hemat {percentage} dengan {product} ini",
      "Murah tapi berkualitas: {product}"
    ],
    vocabulary: ["hemat", "budget", "worth it", "murah meriah", "cost effective"]
  },
  {
    name: "Funny Reviewer",
    characteristics: ["humorous", "entertaining", "sarcastic"],
    hookPatterns: [
      "Plot twist: {product} murah tapi {benefit}",
      "Expectation vs reality pakai {product}",
      "Jangan judge dari harga: {product} ini..."
    ],
    vocabulary: ["plot twist", "expectation vs reality", "jangan judge", "ternyata", "nggak nyangka"]
  },
  {
    name: "Educational Creator",
    characteristics: ["informative", "detailed", "science-based"],
    hookPatterns: [
      "Science behind {product}: kenapa bisa {benefit}?",
      "Ingredient {ingredient} di {product} fungsinya apa?",
      "Cara kerja {product} di kulit/tubuh kita"
    ],
    vocabulary: ["science", "ingredient", "formula", "research", "proven"]
  }
];

// Hook templates berdasarkan emosi dan timing
export const HOOK_EMOTION_TEMPLATES = {
  surprise: [
    "Gila! {product} ini {unexpected_benefit}!",
    "Nggak nyangka {product} {price} bisa {benefit}!",
    "Plot twist: {product} murah tapi {premium_benefit}!"
  ],
  curiosity: [
    "Kenapa {product} ini viral? Ternyata...",
    "Rahasia {target_group} {adjective} ternyata {product}",
    "Apa sih yang bikin {product} beda?"
  ],
  urgency: [
    "Jangan sampai kehabisan! {product} ini {reason}",
    "Last chance buat dapetin {product} {discount}!",
    "Tinggal {quantity} lagi! {product} viral ini"
  ],
  empathy: [
    "Siapa yang {problem}? Aku paham banget!",
    "Dulu aku juga {problem}, tapi sekarang...",
    "Perjuangan {problem} itu real, makanya..."
  ],
  excitement: [
    "OMG! {product} ini bikin {benefit}!",
    "Auto kepincut sama {product} ini!",
    "Racun banget! {product} ini {benefit}!"
  ]
};

// Pattern untuk berbagai niche produk afiliasi
export const NICHE_SPECIFIC_HOOKS = {
  beauty: [
    "Skincare {price} yang bikin {benefit}? Ada!",
    "Glowing natural tanpa {expensive_treatment}",
    "Rahasia kulit {celebrity_type} ternyata {product}",
    "From {skin_problem} to {skin_goal} pakai {product}",
    "Skincare routine {budget} yang {result}"
  ],
  gadget: [
    "Gadget {price} dengan fitur {premium_feature}!",
    "Unboxing {product} yang bikin {benefit}",
    "Tech review: {product} vs {competitor}",
    "Gadget viral yang {unique_feature}",
    "Worth it nggak {product} {price}?"
  ],
  fashion: [
    "OOTD budget {amount} tapi keliatan {expensive_look}",
    "Fashion hack: {product} yang bikin {style_benefit}",
    "Trending fashion {season} yang {affordable}",
    "Style {occasion} dengan {product} {price}",
    "Fashion find: {product} yang {unique_benefit}"
  ],
  food: [
    "Cemilan viral yang {benefit}!",
    "Taste test: {product} vs {competitor}",
    "Makanan {price} rasa {premium_taste}",
    "Food review jujur: {product}",
    "Nemu makanan yang {unique_benefit}"
  ],
  health: [
    "Suplemen {price} yang {health_benefit}",
    "Natural solution buat {health_problem}",
    "Health hack: {product} yang {benefit}",
    "Vitamin yang beneran {effective}",
    "Sehat alami dengan {product}"
  ]
};

// Kata-kata power yang sering dipakai kreator Indonesia
export const POWER_WORDS_INDONESIA = [
  // Positive emotions
  "gila", "amazing", "keren", "mantap", "juara", "the best", "perfect",
  
  // Surprise/Shock
  "nggak nyangka", "ternyata", "plot twist", "shocking", "unexpected",
  
  // Value/Money
  "worth it", "murah meriah", "budget friendly", "cost effective", "hemat",
  
  // Trending/Viral
  "viral", "trending", "hits", "booming", "lagi ngehits",
  
  // Authenticity
  "honest", "jujur", "nggak boong", "real talk", "no fake",
  
  // Urgency
  "limited", "terbatas", "cepetan", "jangan sampai", "last chance",
  
  // Quality
  "premium", "high quality", "berkualitas", "original", "authentic"
];

// Template berdasarkan durasi video
export const DURATION_SPECIFIC_HOOKS = {
  "15_detik": [
    "{power_word}! {product} {benefit}!",
    "{trending_phrase} {product} ini!",
    "{price}? {product} worth it!"
  ],
  "30_detik": [
    "{hook_opener} {product} ini {detailed_benefit}",
    "{personal_story_start} gara-gara {product}",
    "{comparison} vs {product}: mana yang menang?"
  ],
  "60_detik": [
    "{story_hook} tentang {product} yang {transformation}",
    "{educational_hook} kenapa {product} bisa {benefit}",
    "{detailed_review} {product}: dari {aspect1} sampai {aspect2}"
  ]
};

// Algoritma untuk memilih hook berdasarkan konteks
export const HOOK_AI_ALGORITHM = {
  // Faktor-faktor yang mempengaruhi pemilihan hook
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
    }
  ],
  
  // Rules untuk kombinasi yang efektif
  combination_rules: [
    {
      condition: "beauty + budget_conscious",
      preferred_patterns: ["price_shock_1", "comparison_1", "budget_friendly_1"],
      boost_factor: 1.5
    },
    {
      condition: "gadget + tech_savvy",
      preferred_patterns: ["viral_1", "comparison_1", "honest_review_1"],
      boost_factor: 1.3
    },
    {
      condition: "fashion + trendy",
      preferred_patterns: ["trending_1", "lifestyle_1", "viral_2"],
      boost_factor: 1.4
    }
  ]
};
