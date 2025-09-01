import React, { useState, useCallback } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { CopyIcon } from './icons/CopyIcon';
import { RefreshCwIcon } from './icons/RefreshCwIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { useToast } from '../hooks/useToast';
import { 
  HOOK_3_DETIK_PATTERNS, 
  TRENDING_PHRASES, 
  CREATOR_STYLES,
  Hook3DetikPattern,
  CreatorStyle,
  TrendingPhrase 
} from '../data/hook3detikData';
import { hook3DetikService } from '../services/hook3DetikService';

interface Hook3DetikFormData {
  productName: string;
  niche: string;
  targetEmotion: string;
  creatorStyle: string;
  videoDuration: string;
  includePrice: boolean;
  priceRange: string;
  targetAudience: string;
  uniqueBenefit: string;
}

interface GeneratedHook {
  hook: string;
  explanation: string;
  emotion: string;
  effectiveness: number;
  trendingScore: number;
  creatorStyle: string;
}

interface Hook3DetikGeneratorProps {
  onGenerateSuccess?: (count: number) => void;
}

const Hook3DetikGenerator: React.FC<Hook3DetikGeneratorProps> = ({ onGenerateSuccess }) => {
  const [formData, setFormData] = useState<Hook3DetikFormData>({
    productName: '',
    niche: 'beauty',
    targetEmotion: 'surprise',
    creatorStyle: 'Beauty Guru Natural',
    videoDuration: '15_detik',
    includePrice: false,
    priceRange: '',
    targetAudience: 'Gen Z',
    uniqueBenefit: ''
  });

  const [generatedHooks, setGeneratedHooks] = useState<GeneratedHook[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { addToast } = useToast();


  const handleGenerate = useCallback(async () => {
    if (!formData.productName.trim()) {
      addToast('Nama produk harus diisi!');
      return;
    }

    setIsGenerating(true);
    
    try {
      // Gunakan service untuk generate hooks yang lebih cerdas
      const smartHooks = await hook3DetikService.generateSmartHooks({
        productName: formData.productName,
        niche: formData.niche,
        targetEmotion: formData.targetEmotion,
        creatorStyle: formData.creatorStyle,
        videoDuration: formData.videoDuration,
        targetAudience: formData.targetAudience,
        uniqueBenefit: formData.uniqueBenefit,
        priceRange: formData.priceRange,
        includePrice: formData.includePrice
      });

      const hooks: GeneratedHook[] = smartHooks.map(result => ({
        hook: result.hook,
        explanation: result.explanation,
        emotion: formData.targetEmotion,
        effectiveness: result.effectiveness,
        trendingScore: result.trendingScore,
        creatorStyle: formData.creatorStyle
      }));

      setGeneratedHooks(hooks);
      onGenerateSuccess?.(1);
      addToast('Hook 3 detik berhasil digenerate!');
    } catch (error) {
      addToast('Gagal generate hook. Coba lagi!');
    } finally {
      setIsGenerating(false);
    }
  }, [formData, addToast, onGenerateSuccess]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    addToast('Hook berhasil dicopy!');
  }, [addToast]);

  const handleInputChange = useCallback((field: keyof Hook3DetikFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-text-primary flex items-center justify-center gap-2">
          <SparklesIcon className="w-8 h-8 text-accent" />
          Hook 3 Detik Generator
        </h1>
        <p className="text-text-secondary">
          Generate hook 3 detik pertama yang natural ala kreator Indonesia untuk konten afiliasi TikTok
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Input */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-text-primary">Input Produk & Preferensi</h2>
          
          <div className="space-y-4">
            {/* Nama Produk */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Nama Produk *
              </label>
              <input
                type="text"
                value={formData.productName}
                onChange={(e) => handleInputChange('productName', e.target.value)}
                placeholder="Contoh: Serum Vitamin C, TWS Bluetooth, Kemeja Linen"
                className="w-full p-3 border border-border rounded-lg bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Niche */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Niche Produk
              </label>
              <select
                value={formData.niche}
                onChange={(e) => handleInputChange('niche', e.target.value)}
                className="w-full p-3 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="beauty">Beauty & Skincare</option>
                <option value="gadget">Gadget & Tech</option>
                <option value="fashion">Fashion & Style</option>
                <option value="food">Food & Beverage</option>
                <option value="health">Health & Wellness</option>
              </select>
            </div>

            {/* Target Emosi */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Target Emosi Hook
              </label>
              <select
                value={formData.targetEmotion}
                onChange={(e) => handleInputChange('targetEmotion', e.target.value)}
                className="w-full p-3 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="surprise">Surprise (Kaget/Wow)</option>
                <option value="curiosity">Curiosity (Penasaran)</option>
                <option value="urgency">Urgency (Takut Ketinggalan)</option>
                <option value="empathy">Empathy (Relate/Paham)</option>
                <option value="excitement">Excitement (Semangat)</option>
              </select>
            </div>

            {/* Gaya Kreator */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Gaya Kreator
              </label>
              <select
                value={formData.creatorStyle}
                onChange={(e) => handleInputChange('creatorStyle', e.target.value)}
                className="w-full p-3 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {CREATOR_STYLES.map(style => (
                  <option key={style.name} value={style.name}>
                    {style.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Durasi Video */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Durasi Video
              </label>
              <select
                value={formData.videoDuration}
                onChange={(e) => handleInputChange('videoDuration', e.target.value)}
                className="w-full p-3 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="15_detik">15 Detik (Hook Singkat)</option>
                <option value="30_detik">30 Detik (Hook + Penjelasan)</option>
                <option value="60_detik">60 Detik (Hook + Story)</option>
              </select>
            </div>

            {/* Unique Benefit */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Keunggulan Unik Produk
              </label>
              <input
                type="text"
                value={formData.uniqueBenefit}
                onChange={(e) => handleInputChange('uniqueBenefit', e.target.value)}
                placeholder="Contoh: bikin glowing instant, suara jernih, bahan premium"
                className="w-full p-3 border border-border rounded-lg bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Include Price */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="includePrice"
                checked={formData.includePrice}
                onChange={(e) => handleInputChange('includePrice', e.target.checked)}
                className="w-4 h-4 text-accent border-border rounded focus:ring-accent"
              />
              <label htmlFor="includePrice" className="text-sm text-text-primary">
                Sertakan harga dalam hook
              </label>
            </div>

            {/* Price Range (conditional) */}
            {formData.includePrice && (
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Range Harga
                </label>
                <input
                  type="text"
                  value={formData.priceRange}
                  onChange={(e) => handleInputChange('priceRange', e.target.value)}
                  placeholder="Contoh: 50rb, 100rb, under 200rb"
                  className="w-full p-3 border border-border rounded-lg bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            )}

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !formData.productName.trim()}
              className="w-full"
            >
              {isGenerating ? (
                <div className="flex items-center justify-center gap-2">
                  <RefreshCwIcon className="w-4 h-4 animate-spin" />
                  Generating Hook Cerdas...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <SparklesIcon className="w-4 h-4" />
                  Generate Hook 3 Detik
                </div>
              )}
            </Button>
          </div>
        </Card>

        {/* Results */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-text-primary">Hook Results</h2>
          
          {generatedHooks.length === 0 ? (
            <div className="text-center py-8 text-text-secondary">
              <SparklesIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Generate hook untuk melihat hasil</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {generatedHooks.map((hookData, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-border rounded-lg p-4 bg-card"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-medium text-text-primary text-lg leading-relaxed">
                        "{hookData.hook}"
                      </p>
                    </div>
                    <Button
                      onClick={() => copyToClipboard(hookData.hook)}
                      variant="ghost"
                      size="sm"
                      className="ml-2 flex-shrink-0"
                    >
                      <CopyIcon className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Metrics */}
                  <div className="flex gap-4 mb-2 text-xs">
                    <span className="bg-accent/20 text-accent px-2 py-1 rounded">
                      Effectiveness: {hookData.effectiveness}/10
                    </span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                      Trending: {hookData.trendingScore}/10
                    </span>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">
                      {hookData.emotion}
                    </span>
                  </div>
                  
                  <p className="text-sm text-text-secondary">
                    {hookData.explanation}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Tips Section */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3 text-text-primary">💡 Tips Hook 3 Detik Efektif</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h4 className="font-medium text-accent">Timing Perfect</h4>
            <ul className="text-text-secondary space-y-1">
              <li>• Detik 1: Shock/surprise</li>
              <li>• Detik 2: Benefit utama</li>
              <li>• Detik 3: Hook lanjutan</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-accent">Bahasa Natural</h4>
            <ul className="text-text-secondary space-y-1">
              <li>• Pakai bahasa sehari-hari</li>
              <li>• Hindari bahasa formal</li>
              <li>• Sesuaikan dengan target audiens</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-accent">Trending Elements</h4>
            <ul className="text-text-secondary space-y-1">
              <li>• Gunakan phrase viral</li>
              <li>• Reference trending topics</li>
              <li>• Adaptasi gaya kreator populer</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hook3DetikGenerator;
