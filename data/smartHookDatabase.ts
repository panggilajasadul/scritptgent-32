// Database cerdas untuk hook afiliasi TikTok dengan AI scoring dan optimization
export interface SmartHookTemplate {
  id: string;
  template: string;
  category: string;
  aiScore: number;
  conversionRate: number;
  viralPotential: number;
  audienceResonance: Record<string, number>;
  nicheOptimization: Record<string, number>;
  contextualTriggers: string[];
  emotionalHooks: string[];
  trendingElements: string[];
}

export interface HookPerformanceData {
  templateId: string;
  views: number;
  engagement: number;
  conversions: number;
  shares: number;
  comments: number;
  timeOnVideo: number;
  clickThroughRate: number;
}

// Database hook dengan AI scoring untuk performa maksimal
export const SMART_HOOK_DATABASE: SmartHookTemplate[] = [
  {
    id: "ai_hook_001",
    template: "Gila! {product} cuma {price} tapi hasilnya kayak {expensive_alternative}!",
    category: "price_shock_value",
    aiScore: 9.2,
    conversionRate: 0.85,
    viralPotential: 0.78,
    audienceResonance: { "gen_z": 9.1, "millennial": 8.7, "gen_x": 7.2 },
    nicheOptimization: { "beauty": 9.5, "gadget": 8.8, "fashion": 8.9, "food": 7.5, "health": 8.2 },
    contextualTriggers: ["price_sensitive", "value_seeking", "comparison_shopping"],
    emotionalHooks: ["surprise", "excitement", "smart_choice"],
    trendingElements: ["gila", "cuma", "kayak"]
  },
  {
    id: "ai_hook_002", 
    template: "Siapa yang {common_problem}? Akhirnya nemu solusi yang beneran work!",
    category: "problem_solution_relatable",
    aiScore: 8.9,
    conversionRate: 0.82,
    viralPotential: 0.75,
    audienceResonance: { "gen_z": 8.8, "millennial": 9.2, "gen_x": 8.5 },
    nicheOptimization: { "beauty": 9.3, "gadget": 8.1, "fashion": 7.8, "food": 7.2, "health": 9.1 },
    contextualTriggers: ["problem_awareness", "solution_seeking", "relatability"],
    emotionalHooks: ["empathy", "relief", "hope"],
    trendingElements: ["siapa yang", "akhirnya", "beneran work"]
  },
  {
    id: "ai_hook_003",
    template: "Plot twist: {product} murah ini lebih bagus dari {premium_brand}!",
    category: "unexpected_quality",
    aiScore: 8.7,
    conversionRate: 0.79,
    viralPotential: 0.83,
    audienceResonance: { "gen_z": 9.0, "millennial": 8.5, "gen_x": 7.8 },
    nicheOptimization: { "beauty": 8.9, "gadget": 9.1, "fashion": 8.7, "food": 8.0, "health": 8.3 },
    contextualTriggers: ["brand_skepticism", "value_hunting", "quality_surprise"],
    emotionalHooks: ["surprise", "vindication", "smart_discovery"],
    trendingElements: ["plot twist", "lebih bagus", "dari"]
  },
  {
    id: "ai_hook_004",
    template: "Jangan scroll! {product} ini viral karena {unique_benefit} dalam {timeframe}",
    category: "urgency_viral_proof",
    aiScore: 8.5,
    conversionRate: 0.76,
    viralPotential: 0.81,
    audienceResonance: { "gen_z": 8.9, "millennial": 8.3, "gen_x": 7.9 },
    nicheOptimization: { "beauty": 8.8, "gadget": 8.2, "fashion": 8.5, "food": 7.8, "health": 8.4 },
    contextualTriggers: ["attention_retention", "viral_validation", "time_pressure"],
    emotionalHooks: ["urgency", "curiosity", "FOMO"],
    trendingElements: ["jangan scroll", "viral karena", "dalam"]
  },
  {
    id: "ai_hook_005",
    template: "Real talk: {product} ini worth it atau cuma hype? Aku udah test!",
    category: "honest_review_credibility",
    aiScore: 8.8,
    conversionRate: 0.81,
    viralPotential: 0.72,
    audienceResonance: { "gen_z": 8.7, "millennial": 9.0, "gen_x": 8.6 },
    nicheOptimization: { "beauty": 9.0, "gadget": 8.9, "fashion": 8.4, "food": 8.1, "health": 8.7 },
    contextualTriggers: ["authenticity_seeking", "review_validation", "trust_building"],
    emotionalHooks: ["trust", "curiosity", "validation"],
    trendingElements: ["real talk", "worth it", "udah test"]
  },
  {
    id: "ai_hook_006",
    template: "Kenapa {target_group} pada obsessed sama {product} ini? Ternyata...",
    category: "social_proof_mystery",
    aiScore: 8.6,
    conversionRate: 0.77,
    viralPotential: 0.79,
    audienceResonance: { "gen_z": 8.8, "millennial": 8.5, "gen_x": 8.1 },
    nicheOptimization: { "beauty": 9.2, "gadget": 8.0, "fashion": 8.8, "food": 7.6, "health": 8.2 },
    contextualTriggers: ["social_validation", "group_belonging", "mystery_revelation"],
    emotionalHooks: ["curiosity", "belonging", "discovery"],
    trendingElements: ["kenapa", "obsessed", "ternyata"]
  },
  {
    id: "ai_hook_007",
    template: "From {before_state} to {after_state} cuma gara-gara {product} {price}!",
    category: "transformation_proof",
    aiScore: 9.0,
    conversionRate: 0.84,
    viralPotential: 0.76,
    audienceResonance: { "gen_z": 8.9, "millennial": 9.1, "gen_x": 8.8 },
    nicheOptimization: { "beauty": 9.6, "gadget": 8.2, "fashion": 8.9, "food": 7.4, "health": 9.3 },
    contextualTriggers: ["transformation_desire", "before_after_proof", "affordable_solution"],
    emotionalHooks: ["aspiration", "hope", "achievement"],
    trendingElements: ["from", "to", "cuma gara-gara"]
  },
  {
    id: "ai_hook_008",
    template: "Unpopular opinion: {product} {price} ini lebih {benefit} dari yang {expensive_price}!",
    category: "controversial_value",
    aiScore: 8.4,
    conversionRate: 0.73,
    viralPotential: 0.86,
    audienceResonance: { "gen_z": 8.9, "millennial": 8.2, "gen_x": 7.7 },
    nicheOptimization: { "beauty": 8.6, "gadget": 8.8, "fashion": 8.5, "food": 7.9, "health": 8.1 },
    contextualTriggers: ["contrarian_thinking", "value_discovery", "price_disruption"],
    emotionalHooks: ["controversy", "vindication", "smart_choice"],
    trendingElements: ["unpopular opinion", "lebih", "dari yang"]
  },
  {
    id: "ai_hook_009",
    template: "Nggak nyangka {product} murah bisa {surprising_benefit}! Auto repurchase!",
    category: "surprise_loyalty",
    aiScore: 8.7,
    conversionRate: 0.80,
    viralPotential: 0.74,
    audienceResonance: { "gen_z": 9.1, "millennial": 8.6, "gen_x": 7.9 },
    nicheOptimization: { "beauty": 9.1, "gadget": 8.5, "fashion": 8.3, "food": 8.2, "health": 8.6 },
    contextualTriggers: ["expectation_exceeded", "loyalty_indication", "value_surprise"],
    emotionalHooks: ["surprise", "satisfaction", "loyalty"],
    trendingElements: ["nggak nyangka", "bisa", "auto repurchase"]
  },
  {
    id: "ai_hook_010",
    template: "Challenge pakai {product} selama {duration}: hasilnya bikin {emotional_reaction}!",
    category: "challenge_proof",
    aiScore: 8.3,
    conversionRate: 0.75,
    viralPotential: 0.82,
    audienceResonance: { "gen_z": 8.8, "millennial": 8.1, "gen_x": 7.6 },
    nicheOptimization: { "beauty": 8.9, "gadget": 7.8, "fashion": 8.2, "food": 7.5, "health": 8.7 },
    contextualTriggers: ["challenge_participation", "proof_seeking", "result_anticipation"],
    emotionalHooks: ["anticipation", "excitement", "validation"],
    trendingElements: ["challenge", "selama", "hasilnya bikin"]
  }
];

// AI-powered hook optimization berdasarkan real-time trends
export const HOOK_AI_OPTIMIZER = {
  // Real-time trend analysis
  trendAnalysis: {
    currentHotPhrases: [
      { phrase: "beneran work", weight: 0.9, context: "validation" },
      { phrase: "worth it banget", weight: 0.85, context: "value" },
      { phrase: "auto repurchase", weight: 0.8, context: "loyalty" },
      { phrase: "gila sih", weight: 0.88, context: "amazement" },
      { phrase: "nggak boong", weight: 0.82, context: "honesty" }
    ],
    
    fadingPhrases: [
      { phrase: "must have", weight: 0.3, context: "overused" },
      { phrase: "recommended", weight: 0.25, context: "generic" },
      { phrase: "bagus banget", weight: 0.4, context: "vague" }
    ]
  },
  
  // Audience behavior patterns
  audienceBehavior: {
    gen_z: {
      attentionSpan: 2.1, // seconds
      preferredIntensity: "high",
      skipTriggers: ["formal_language", "long_setup", "boring_start"],
      engagementTriggers: ["shock_value", "relatable_problem", "trending_reference"]
    },
    millennial: {
      attentionSpan: 3.2,
      preferredIntensity: "medium",
      skipTriggers: ["too_casual", "immature_language", "unrealistic_claims"],
      engagementTriggers: ["practical_value", "honest_review", "life_improvement"]
    },
    gen_x: {
      attentionSpan: 4.1,
      preferredIntensity: "low",
      skipTriggers: ["slang_heavy", "trend_chasing", "overly_energetic"],
      engagementTriggers: ["quality_focus", "detailed_explanation", "trustworthy_source"]
    }
  },
  
  // Conversion optimization rules
  conversionOptimization: {
    highConvertingElements: [
      { element: "specific_price", impact: 0.23 },
      { element: "time_limited_offer", impact: 0.19 },
      { element: "social_proof_numbers", impact: 0.17 },
      { element: "before_after_visual", impact: 0.21 },
      { element: "personal_testimony", impact: 0.18 }
    ],
    
    lowConvertingElements: [
      { element: "generic_benefits", impact: -0.15 },
      { element: "overused_phrases", impact: -0.12 },
      { element: "vague_claims", impact: -0.18 },
      { element: "formal_language", impact: -0.10 }
    ]
  }
};

// Advanced hook personalization berdasarkan user behavior
export const PERSONALIZED_HOOK_SYSTEM = {
  // User journey stage hooks
  journeyStageHooks: {
    awareness: {
      primary: "Tau nggak {product} yang lagi viral di TikTok?",
      variations: [
        "Lagi trending nih: {product} yang bikin {benefit}",
        "Viral alert! {product} yang {unique_feature}",
        "Kenalan sama {product} yang lagi hits di FYP"
      ]
    },
    interest: {
      primary: "Penasaran kenapa {product} bisa {benefit}? Ini rahasianya",
      variations: [
        "Deep dive: kenapa {product} worth the hype?",
        "Breakdown {product}: apa yang bikin special?",
        "Science behind {product} yang bikin {benefit}"
      ]
    },
    consideration: {
      primary: "{product} vs {competitor}: honest comparison!",
      variations: [
        "Should you buy {product}? Ini pertimbangannya",
        "Worth it nggak {product} {price}? Real review",
        "{product} pros and cons: jujur dari aku"
      ]
    },
    action: {
      primary: "Jangan sampai nyesel! {product} limited stock nih",
      variations: [
        "Last chance: {product} diskon {percentage} hari ini aja",
        "Checkout sekarang: {product} lagi promo terbatas",
        "Link di bio sebelum kehabisan: {product} viral"
      ]
    }
  },
  
  // Emotional state targeting
  emotionalTargeting: {
    frustrated: [
      "Capek {problem}? {product} ini solusinya!",
      "Udah bosen {problem}? Coba {product} ini",
      "Fed up sama {problem}? {product} game changer"
    ],
    curious: [
      "Penasaran kenapa {product} viral? Ternyata...",
      "Apa sih yang bikin {product} special?",
      "Mystery solved: rahasia {product} yang {benefit}"
    ],
    skeptical: [
      "Skeptis sama {product}? Aku juga dulu",
      "Doubt {product} work? Ini buktinya",
      "Nggak percaya {product} bagus? Check this out"
    ],
    excited: [
      "OMG! {product} ini bikin {benefit}!",
      "Gila! Nemu {product} yang {amazing_feature}",
      "Excited banget! {product} exceed expectation"
    ]
  },
  
  // Time-sensitive hooks
  timeSensitiveHooks: {
    morning: [
      "Morning routine game changer: {product}",
      "Start your day right dengan {product}",
      "Pagi-pagi udah glowing pakai {product}"
    ],
    afternoon: [
      "Lunch break discovery: {product} yang viral",
      "Siang-siang ngomongin {product} hits",
      "Afternoon pick-me-up: {product} review"
    ],
    evening: [
      "Night routine essential: {product}",
      "Malam-malam review {product} viral",
      "Evening wind down dengan {product}"
    ],
    weekend: [
      "Weekend vibes dengan {product}",
      "Saturday self-care featuring {product}",
      "Sunday reset pakai {product}"
    ]
  }
};

// Machine learning patterns untuk hook optimization
export const ML_HOOK_PATTERNS = {
  // Pattern yang terbukti viral
  viralPatterns: [
    {
      structure: "shock_opener + product + benefit + price_anchor",
      example: "Gila! {product} bikin {benefit} cuma {price}!",
      viralScore: 0.89,
      bestNiches: ["beauty", "gadget"]
    },
    {
      structure: "question + relatability + solution_tease",
      example: "Siapa yang {problem}? Aku nemu solusinya!",
      viralScore: 0.82,
      bestNiches: ["beauty", "health"]
    },
    {
      structure: "controversy + comparison + personal_validation",
      example: "Unpopular opinion: {product} lebih bagus dari {competitor}!",
      viralScore: 0.85,
      bestNiches: ["gadget", "fashion"]
    }
  ],
  
  // Conversion-optimized patterns
  conversionPatterns: [
    {
      structure: "urgency + scarcity + clear_benefit",
      example: "Jangan sampai kehabisan! {product} yang {benefit}",
      conversionRate: 0.91,
      bestFor: "action_stage"
    },
    {
      structure: "social_proof + specific_result + timeframe",
      example: "{number} orang udah buktiin: {product} bikin {result} dalam {time}",
      conversionRate: 0.87,
      bestFor: "consideration_stage"
    }
  ],
  
  // Engagement-maximizing patterns
  engagementPatterns: [
    {
      structure: "challenge + anticipation + result_tease",
      example: "Challenge {product} {duration}: hasilnya...",
      engagementRate: 0.94,
      bestFor: "series_content"
    },
    {
      structure: "myth_busting + personal_experience + revelation",
      example: "Mitos atau fakta: {claim}? Aku udah coba!",
      engagementRate: 0.88,
      bestFor: "educational_content"
    }
  ]
};

// Context-aware hook suggestions
export const CONTEXTUAL_HOOK_ENGINE = {
  // Seasonal optimization
  seasonalHooks: {
    rainy_season: {
      beauty: "Musim hujan tetap glowing dengan {product}",
      fashion: "Rainy day outfit perfect dengan {product}",
      health: "Cuaca lembab? {product} jaga kesehatan"
    },
    hot_season: {
      beauty: "Panas-panas tetap fresh dengan {product}",
      fashion: "Summer essential: {product} yang {benefit}",
      gadget: "Gadget anti overheat: {product}"
    },
    back_to_school: {
      beauty: "Back to school glow up dengan {product}",
      gadget: "Student essential: {product} untuk {benefit}",
      fashion: "School outfit upgrade dengan {product}"
    }
  },
  
  // Event-based hooks
  eventHooks: {
    payday: [
      "Gajian? Saatnya treat yourself dengan {product}",
      "Payday haul: {product} yang worth every rupiah",
      "Salary well spent: {product} investment terbaik"
    ],
    sale_season: [
      "Sale alert! {product} diskon gila-gilaan",
      "Harbolnas must-buy: {product} harga terbaik",
      "Flash sale: {product} limited time offer"
    ],
    new_year: [
      "New year, new {benefit} dengan {product}",
      "2024 glow up starts dengan {product}",
      "Resolution keeper: {product} untuk {goal}"
    ]
  },
  
  // Competitor analysis hooks
  competitorHooks: {
    direct_comparison: [
      "{product} vs {competitor}: mana yang menang?",
      "Honest comparison: {product} atau {competitor}?",
      "Battle of the {category}: {product} vs {competitor}"
    ],
    value_proposition: [
      "Kenapa pilih {product} daripada {competitor}?",
      "{product}: alternative terbaik untuk {competitor}",
      "Upgrade from {competitor} ke {product}"
    ]
  }
};

// Advanced analytics untuk hook performance
export const HOOK_ANALYTICS_ENGINE = {
  // Performance metrics tracking
  performanceMetrics: [
    "view_duration",
    "engagement_rate", 
    "click_through_rate",
    "conversion_rate",
    "share_rate",
    "comment_sentiment",
    "save_rate"
  ],
  
  // A/B testing framework
  abTestingFramework: {
    testVariables: [
      "hook_intensity",
      "emotional_trigger",
      "price_mention_timing",
      "benefit_specificity",
      "social_proof_type"
    ],
    
    successCriteria: {
      primary: "conversion_rate",
      secondary: ["engagement_rate", "view_completion"],
      tertiary: ["share_rate", "comment_positive_sentiment"]
    }
  },
  
  // Predictive modeling
  predictiveModel: {
    viralProbability: {
      factors: [
        { name: "trending_phrase_usage", weight: 0.25 },
        { name: "emotional_intensity", weight: 0.20 },
        { name: "timing_relevance", weight: 0.15 },
        { name: "audience_match", weight: 0.18 },
        { name: "niche_optimization", weight: 0.22 }
      ]
    },
    
    conversionProbability: {
      factors: [
        { name: "clear_value_prop", weight: 0.30 },
        { name: "urgency_elements", weight: 0.25 },
        { name: "social_proof", weight: 0.20 },
        { name: "price_positioning", weight: 0.25 }
      ]
    }
  }
};
