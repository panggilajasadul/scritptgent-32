import { 
  HOOK_3_DETIK_PATTERNS, 
  TRENDING_PHRASES, 
  CREATOR_STYLES, 
  HOOK_AI_ALGORITHM,
  Hook3DetikPattern,
  CreatorStyle 
} from '../data/hook3detikData';
import { 
  TIKTOK_TRENDS_2024,
  VIRAL_HOOK_FORMULAS,
  CONTENT_CALENDAR_HOOKS,
  AUDIENCE_SPECIFIC_HOOKS,
  HOOK_VARIATIONS 
} from '../data/tiktokTrendsData';

export interface Hook3DetikRequest {
  productName: string;
  niche: string;
  targetEmotion: string;
  creatorStyle: string;
  videoDuration: string;
  targetAudience: string;
  uniqueBenefit: string;
  priceRange?: string;
  includePrice: boolean;
}

export interface SmartHookResult {
  hook: string;
  explanation: string;
  effectiveness: number;
  trendingScore: number;
  aiScore: number;
  variations: string[];
  optimizationTips: string[];
}

class Hook3DetikService {
  // AI-powered hook generation dengan scoring algorithm
  async generateSmartHooks(request: Hook3DetikRequest): Promise<SmartHookResult[]> {
    const patterns = this.selectOptimalPatterns(request);
    const results: SmartHookResult[] = [];

    for (const pattern of patterns) {
      const hook = this.generateHookFromPattern(pattern, request);
      const variations = this.generateVariations(hook, request);
      const scores = this.calculateAIScores(hook, pattern, request);
      const optimizationTips = this.generateOptimizationTips(hook, pattern, request);

      results.push({
        hook,
        explanation: this.generateDetailedExplanation(pattern, scores, request),
        effectiveness: pattern.effectiveness,
        trendingScore: scores.trendingScore,
        aiScore: scores.aiScore,
        variations,
        optimizationTips
      });
    }

    return results.sort((a, b) => b.aiScore - a.aiScore);
  }

  // Algoritma cerdas untuk memilih pattern optimal
  private selectOptimalPatterns(request: Hook3DetikRequest): Hook3DetikPattern[] {
    const scoredPatterns = HOOK_3_DETIK_PATTERNS.map(pattern => {
      let score = 0;

      // Niche relevance
      if (pattern.niche.includes(request.niche)) {
        score += HOOK_AI_ALGORITHM.scoring_factors.niche_fit * 10;
      }

      // Emotion match
      if (pattern.emotion === request.targetEmotion) {
        score += HOOK_AI_ALGORITHM.scoring_factors.emotional_impact * 10;
      }

      // Trending boost
      if (pattern.trending) {
        score += HOOK_AI_ALGORITHM.scoring_factors.trending_relevance * 10;
      }

      // Creator style compatibility
      const creatorStyle = CREATOR_STYLES.find(style => style.name === request.creatorStyle);
      if (creatorStyle) {
        const styleMatch = creatorStyle.hookPatterns.some(hookPattern => 
          hookPattern.toLowerCase().includes(pattern.category.toLowerCase())
        );
        if (styleMatch) {
          score += HOOK_AI_ALGORITHM.scoring_factors.audience_match * 10;
        }
      }

      // Base effectiveness
      score += pattern.effectiveness * 0.1;

      return { pattern, score };
    });

    return scoredPatterns
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(item => item.pattern);
  }

  // Generate hook dengan AI-enhanced variable replacement
  private generateHookFromPattern(pattern: Hook3DetikPattern, request: Hook3DetikRequest): string {
    let hook = pattern.pattern;
    
    // Smart variable replacement dengan context awareness
    const replacements = this.getSmartReplacements(request);
    
    Object.entries(replacements).forEach(([variable, value]) => {
      const regex = new RegExp(`{${variable}}`, 'g');
      hook = hook.replace(regex, value);
    });

    // Apply trending phrases jika sesuai
    hook = this.enhanceWithTrendingPhrases(hook, request);
    
    // Apply creator style language
    hook = this.applyCreatorStyleLanguage(hook, request.creatorStyle);

    return hook;
  }

  // Smart replacements berdasarkan context
  private getSmartReplacements(request: Hook3DetikRequest): Record<string, string> {
    const nicheContext = this.getNicheContext(request.niche);
    const audienceContext = this.getAudienceContext(request.targetAudience);
    
    return {
      product: request.productName,
      benefit: request.uniqueBenefit || nicheContext.defaultBenefit,
      price: request.priceRange || nicheContext.defaultPrice,
      timeframe: this.getOptimalTimeframe(request.niche),
      reason: request.uniqueBenefit || nicheContext.defaultReason,
      problem: nicheContext.commonProblem,
      celebrity: nicheContext.relevantCelebrity,
      number: this.getContextualNumber(request.niche),
      target_group: audienceContext.groupName,
      amount: request.priceRange || nicheContext.budgetRange,
      duration: this.getOptimalDuration(request.videoDuration),
      claim: request.uniqueBenefit || nicheContext.popularClaim,
      improvement: nicheContext.lifestyleImprovement,
      before: nicheContext.beforeState,
      after: nicheContext.afterState,
      expensive: nicheContext.expensiveAlternative,
      percentage: this.getOptimalDiscount(request.niche),
      quantity: this.getUrgencyQuantity(),
      discount: this.getContextualDiscount(request.niche),
      unexpected_benefit: request.uniqueBenefit || nicheContext.surpriseBenefit,
      premium_benefit: nicheContext.premiumBenefit,
      adjective: audienceContext.aspirationalAdjective,
      celebrity_type: nicheContext.celebrityType,
      expensive_treatment: nicheContext.expensiveTreatment,
      skin_problem: nicheContext.skinProblem,
      skin_goal: nicheContext.skinGoal,
      budget: request.priceRange || 'budget friendly',
      result: nicheContext.expectedResult
    };
  }

  // Context data untuk setiap niche
  private getNicheContext(niche: string) {
    const contexts = {
      beauty: {
        defaultBenefit: 'bikin glowing instant',
        defaultPrice: '50rb',
        defaultReason: 'formulanya juara',
        commonProblem: 'sering jerawatan',
        relevantCelebrity: 'Nagita Slavina',
        budgetRange: 'under 100rb',
        popularClaim: 'bikin glowing',
        lifestyleImprovement: 'percaya diri',
        beforeState: 'kusam',
        afterState: 'glowing',
        expensiveAlternative: 'treatment salon',
        surpriseBenefit: 'glowing dalam 3 hari',
        premiumBenefit: 'hasil salon',
        celebrityType: 'artis',
        expensiveTreatment: 'facial mahal',
        skinProblem: 'kusam dan berjerawat',
        skinGoal: 'glowing natural',
        expectedResult: 'kulit sehat glowing'
      },
      gadget: {
        defaultBenefit: 'performa maksimal',
        defaultPrice: '100rb',
        defaultReason: 'fiturnya lengkap',
        commonProblem: 'HP lemot',
        relevantCelebrity: 'tech reviewer',
        budgetRange: 'under 200rb',
        popularClaim: 'performa kencang',
        lifestyleImprovement: 'produktif',
        beforeState: 'ribet',
        afterState: 'praktis',
        expensiveAlternative: 'gadget branded',
        surpriseBenefit: 'fitur premium',
        premiumBenefit: 'kualitas flagship',
        celebrityType: 'tech influencer',
        expensiveTreatment: 'gadget mahal',
        skinProblem: 'device lemot',
        skinGoal: 'performa optimal',
        expectedResult: 'pengalaman premium'
      },
      fashion: {
        defaultBenefit: 'tampil stylish',
        defaultPrice: '75rb',
        defaultReason: 'designnya keren',
        commonProblem: 'bingung OOTD',
        relevantCelebrity: 'fashion blogger',
        budgetRange: 'under 150rb',
        popularClaim: 'bikin stylish',
        lifestyleImprovement: 'confident',
        beforeState: 'biasa aja',
        afterState: 'stylish',
        expensiveAlternative: 'brand mahal',
        surpriseBenefit: 'keliatan mahal',
        premiumBenefit: 'look expensive',
        celebrityType: 'fashion icon',
        expensiveTreatment: 'shopping branded',
        skinProblem: 'style monoton',
        skinGoal: 'look fashionable',
        expectedResult: 'style upgrade'
      },
      food: {
        defaultBenefit: 'rasa nagih',
        defaultPrice: '25rb',
        defaultReason: 'rasanya enak banget',
        commonProblem: 'bosen cemilan biasa',
        relevantCelebrity: 'food vlogger',
        budgetRange: 'under 50rb',
        popularClaim: 'rasa premium',
        lifestyleImprovement: 'happy',
        beforeState: 'bosen',
        afterState: 'nagih',
        expensiveAlternative: 'makanan restoran',
        surpriseBenefit: 'rasa restaurant',
        premiumBenefit: 'kualitas premium',
        celebrityType: 'chef terkenal',
        expensiveTreatment: 'makan di resto mahal',
        skinProblem: 'bosan makanan',
        skinGoal: 'satisfied',
        expectedResult: 'pengalaman kuliner'
      },
      health: {
        defaultBenefit: 'badan lebih fit',
        defaultPrice: '80rb',
        defaultReason: 'kandungannya natural',
        commonProblem: 'sering capek',
        relevantCelebrity: 'fitness influencer',
        budgetRange: 'under 100rb',
        popularClaim: 'bikin sehat',
        lifestyleImprovement: 'energik',
        beforeState: 'lemes',
        afterState: 'energik',
        expensiveAlternative: 'suplemen import',
        surpriseBenefit: 'energi sepanjang hari',
        premiumBenefit: 'kesehatan optimal',
        celebrityType: 'health expert',
        expensiveTreatment: 'treatment mahal',
        skinProblem: 'mudah capek',
        skinGoal: 'stamina kuat',
        expectedResult: 'hidup lebih sehat'
      }
    };

    return contexts[niche as keyof typeof contexts] || contexts.beauty;
  }

  // Context data untuk audience
  private getAudienceContext(audience: string) {
    const contexts = {
      'Gen Z': {
        groupName: 'anak muda',
        aspirationalAdjective: 'kece'
      },
      'Millennial': {
        groupName: 'working professional',
        aspirationalAdjective: 'sukses'
      },
      'Gen X': {
        groupName: 'orang dewasa',
        aspirationalAdjective: 'berkelas'
      }
    };

    return contexts[audience as keyof typeof contexts] || contexts['Gen Z'];
  }

  // Helper methods untuk dynamic content
  private getOptimalTimeframe(niche: string): string {
    const timeframes = {
      beauty: '3 hari',
      gadget: 'langsung',
      fashion: 'sekali pakai',
      food: 'sekali coba',
      health: '1 minggu'
    };
    return timeframes[niche as keyof typeof timeframes] || '7 hari';
  }

  private getContextualNumber(niche: string): string {
    const numbers = {
      beauty: '10rb orang',
      gadget: '5000 user',
      fashion: '1000 fashionista',
      food: '50rb foodies',
      health: '20rb orang'
    };
    return numbers[niche as keyof typeof numbers] || '1000 orang';
  }

  private getOptimalDuration(videoDuration: string): string {
    const durations = {
      '15_detik': '1 minggu',
      '30_detik': '2 minggu', 
      '60_detik': '1 bulan'
    };
    return durations[videoDuration as keyof typeof durations] || '1 minggu';
  }

  private getOptimalDiscount(niche: string): string {
    const discounts = {
      beauty: '50%',
      gadget: '30%',
      fashion: '40%',
      food: '25%',
      health: '35%'
    };
    return discounts[niche as keyof typeof discounts] || '50%';
  }

  private getUrgencyQuantity(): string {
    const quantities = ['10', '50', '100', '500'];
    return quantities[Math.floor(Math.random() * quantities.length)];
  }

  private getContextualDiscount(niche: string): string {
    return `diskon ${this.getOptimalDiscount(niche)}`;
  }

  // Enhance hook dengan trending phrases
  private enhanceWithTrendingPhrases(hook: string, request: Hook3DetikRequest): string {
    const relevantPhrases = TRENDING_PHRASES.filter(phrase => 
      phrase.ageGroup.includes(this.getAgeGroupFromAudience(request.targetAudience))
    );

    if (relevantPhrases.length > 0 && Math.random() > 0.5) {
      const randomPhrase = relevantPhrases[Math.floor(Math.random() * relevantPhrases.length)];
      // Integrate phrase naturally
      if (hook.includes('!')) {
        hook = hook.replace('!', `, ${randomPhrase.phrase}!`);
      }
    }

    return hook;
  }

  // Apply creator style language patterns
  private applyCreatorStyleLanguage(hook: string, creatorStyleName: string): string {
    const style = CREATOR_STYLES.find(s => s.name === creatorStyleName);
    if (!style) return hook;

    // Apply vocabulary dari creator style
    style.vocabulary.forEach(vocab => {
      if (Math.random() > 0.7) { // 30% chance to apply
        // Smart integration of vocabulary
        if (hook.includes('bagus') && vocab === 'worth it') {
          hook = hook.replace('bagus', 'worth it');
        }
        if (hook.includes('cantik') && vocab === 'glowing') {
          hook = hook.replace('cantik', 'glowing');
        }
      }
    });

    return hook;
  }

  // Generate variations untuk A/B testing
  private generateVariations(originalHook: string, request: Hook3DetikRequest): string[] {
    const variations: string[] = [];
    
    // Intensity variations
    Object.entries(HOOK_VARIATIONS.intensity_levels).forEach(([level, words]) => {
      let variation = originalHook;
      
      // Replace shock words
      words.shock_words.forEach(word => {
        if (Math.random() > 0.6) {
          variation = this.replaceWithSimilarIntensity(variation, word, level);
        }
      });
      
      if (variation !== originalHook) {
        variations.push(variation);
      }
    });

    // Audience-specific variations
    const audienceHooks = AUDIENCE_SPECIFIC_HOOKS[this.getAudienceKey(request.targetAudience)];
    if (audienceHooks) {
      audienceHooks.hook_patterns.forEach(pattern => {
        const variation = pattern.replace('{product}', request.productName);
        variations.push(variation);
      });
    }

    return variations.slice(0, 3); // Return top 3 variations
  }

  // Calculate comprehensive AI scores
  private calculateAIScores(hook: string, pattern: Hook3DetikPattern, request: Hook3DetikRequest) {
    // Trending score berdasarkan phrase popularity
    let trendingScore = 0;
    TRENDING_PHRASES.forEach(phrase => {
      if (hook.toLowerCase().includes(phrase.phrase.toLowerCase())) {
        trendingScore += phrase.popularity * 0.1;
      }
    });

    // AI score berdasarkan multiple factors
    let aiScore = 0;
    
    // Base effectiveness
    aiScore += pattern.effectiveness * HOOK_AI_ALGORITHM.scoring_factors.emotional_impact;
    
    // Trending relevance
    aiScore += trendingScore * HOOK_AI_ALGORITHM.scoring_factors.trending_relevance * 10;
    
    // Niche fit
    if (pattern.niche.includes(request.niche)) {
      aiScore += 10 * HOOK_AI_ALGORITHM.scoring_factors.niche_fit;
    }
    
    // Audience match
    const audienceMatch = this.calculateAudienceMatch(hook, request.targetAudience);
    aiScore += audienceMatch * HOOK_AI_ALGORITHM.scoring_factors.audience_match;
    
    // Uniqueness (berdasarkan variasi kata)
    const uniqueness = this.calculateUniqueness(hook);
    aiScore += uniqueness * HOOK_AI_ALGORITHM.scoring_factors.uniqueness;
    
    // Clarity (berdasarkan panjang dan kompleksitas)
    const clarity = this.calculateClarity(hook);
    aiScore += clarity * HOOK_AI_ALGORITHM.scoring_factors.clarity;

    return {
      trendingScore: Math.min(trendingScore, 10),
      aiScore: Math.min(aiScore, 10)
    };
  }

  // Generate detailed explanation
  private generateDetailedExplanation(pattern: Hook3DetikPattern, scores: any, request: Hook3DetikRequest): string {
    const explanations = [
      `Pattern "${pattern.category}" dipilih karena sangat efektif untuk niche ${request.niche}.`,
      `Target emosi "${pattern.emotion}" cocok untuk menarik perhatian dalam 3 detik pertama.`,
      scores.trendingScore > 5 ? `Hook menggunakan phrase trending yang sedang populer di TikTok Indonesia.` : '',
      `Gaya "${request.creatorStyle}" diterapkan untuk koneksi natural dengan audience.`,
      `AI Score: ${scores.aiScore.toFixed(1)}/10 berdasarkan analisis multi-faktor.`
    ].filter(Boolean);
    
    return explanations.join(' ');
  }

  // Generate optimization tips
  private generateOptimizationTips(hook: string, pattern: Hook3DetikPattern, request: Hook3DetikRequest): string[] {
    const tips: string[] = [];
    
    // Berdasarkan effectiveness score
    if (pattern.effectiveness < 7) {
      tips.push('Coba tambahkan elemen shock value atau angka spesifik');
    }
    
    // Berdasarkan trending elements
    const hasTrendingPhrase = TRENDING_PHRASES.some(phrase => 
      hook.toLowerCase().includes(phrase.phrase.toLowerCase())
    );
    if (!hasTrendingPhrase) {
      tips.push('Pertimbangkan menambahkan phrase trending seperti "beneran work" atau "worth it banget"');
    }
    
    // Berdasarkan panjang hook
    if (hook.length > 60) {
      tips.push('Hook terlalu panjang, coba persingkat untuk impact maksimal dalam 3 detik');
    }
    
    // Berdasarkan niche-specific advice
    if (request.niche === 'beauty' && !hook.includes('glowing')) {
      tips.push('Untuk beauty, kata "glowing" sangat efektif untuk hook');
    }
    
    if (request.includePrice && !hook.includes(request.priceRange || 'rb')) {
      tips.push('Harga bisa dijadikan shock value utama di awal hook');
    }

    return tips.slice(0, 3); // Return top 3 tips
  }

  // Helper methods
  private getAgeGroupFromAudience(audience: string): string {
    const mapping = {
      'Gen Z': 'gen_z',
      'Millennial': 'millennial',
      'Gen X': 'gen_x'
    };
    return mapping[audience as keyof typeof mapping] || 'gen_z';
  }

  private getAudienceKey(audience: string): string {
    const mapping = {
      'Gen Z': 'gen_z',
      'Millennial': 'millennial',
      'Working Professional': 'working_professional'
    };
    return mapping[audience as keyof typeof mapping] || 'gen_z';
  }

  private replaceWithSimilarIntensity(hook: string, word: string, intensity: string): string {
    // Logic untuk replace kata dengan intensitas yang sesuai
    const intensityMap = {
      subtle: { 'gila': 'ternyata', 'amazing': 'bagus', 'keren': 'oke' },
      medium: { 'ternyata': 'gila', 'bagus': 'amazing', 'oke': 'keren' },
      high: { 'gila': 'GILA!', 'amazing': 'AMAZING!', 'keren': 'KEREN BANGET!' }
    };
    
    const replacements = intensityMap[intensity as keyof typeof intensityMap];
    if (replacements) {
      Object.entries(replacements).forEach(([from, to]) => {
        hook = hook.replace(new RegExp(from, 'gi'), to);
      });
    }
    
    return hook;
  }

  private calculateAudienceMatch(hook: string, audience: string): number {
    const audienceData = AUDIENCE_SPECIFIC_HOOKS[this.getAudienceKey(audience)];
    if (!audienceData) return 5;

    let score = 0;
    audienceData.language_style.forEach(style => {
      if (hook.toLowerCase().includes(style.toLowerCase())) {
        score += 2;
      }
    });

    return Math.min(score, 10);
  }

  private calculateUniqueness(hook: string): number {
    // Simple uniqueness calculation berdasarkan variasi kata
    const words = hook.split(' ');
    const uniqueWords = new Set(words);
    return (uniqueWords.size / words.length) * 10;
  }

  private calculateClarity(hook: string): number {
    // Clarity berdasarkan panjang dan kompleksitas
    const length = hook.length;
    if (length <= 40) return 10;
    if (length <= 60) return 8;
    if (length <= 80) return 6;
    return 4;
  }

  // Get today's optimal hook berdasarkan content calendar
  getTodaysOptimalHook(request: Hook3DetikRequest): string[] {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const todayHooks = CONTENT_CALENDAR_HOOKS[today as keyof typeof CONTENT_CALENDAR_HOOKS];
    
    if (todayHooks) {
      return todayHooks.hooks.map(hook => 
        hook.replace('{product}', request.productName)
            .replace('{benefit}', request.uniqueBenefit || 'hasil maksimal')
            .replace('{problem}', this.getNicheContext(request.niche).commonProblem)
      );
    }
    
    return [];
  }
}

export const hook3DetikService = new Hook3DetikService();
