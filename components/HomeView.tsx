import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { SparklesIcon } from './icons/SparklesIcon';
import { ClipboardListIcon } from './icons/ClipboardListIcon';
import { BulbIcon } from './icons/BulbIcon';
import { UsersIcon } from './icons/UsersIcon';
import { LinkIcon } from './icons/LinkIcon';
import { MagnetIcon } from './icons/MagnetIcon';
import { BrandProfileIcon } from './icons/BrandProfileIcon';
import { ImageIcon } from './icons/ImageIcon';
import { GenerateIcon } from './icons/GenerateIcon';
import { CompassIcon } from './icons/CompassIcon';
import { HashtagIcon } from './icons/HashtagIcon';
import { FilmIcon } from './icons/FilmIcon';
import { motion, Variants } from 'framer-motion';
import { CalendarIcon } from './icons/CalendarIcon';
import { announcementService } from '../services/announcementService';
import { Announcement, User } from '../types';
import AnnouncementModal from './AnnouncementModal';
import { SearchTrendingIcon } from './icons/SearchTrendingIcon';
import AccountStatus from './AccountStatus';
import { ImageEditIcon } from './icons/ImageEditIcon';

interface HomeViewProps {
  currentUser: User | null;
  onNavigateToGenerator: () => void;
  onNavigateToLinkGenerator: () => void;
  onNavigateToHookGenerator: () => void;
  onNavigateToAngleGenerator: () => void;
  onNavigateToContentPlanner: () => void;
}

// FIX: Explicitly typed variants with 'Variants' from framer-motion
// to ensure correct type inference for transition properties.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// FIX: Explicitly typed variants with 'Variants' from framer-motion
// to ensure correct type inference for transition properties like 'type'.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};


const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; className?: string }> = ({ icon, title, children, className = '' }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ y: -5, scale: 1.02, boxShadow: 'var(--shadow-lg)' }}
    className={`bg-card rounded-lg p-6 shadow-custom-md flex flex-col ${className}`}>
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary/20 text-primary rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
    <p className="text-text-secondary flex-grow">{children}</p>
  </motion.div>
);

export const HomeView: React.FC<HomeViewProps> = ({ currentUser, onNavigateToGenerator, onNavigateToLinkGenerator, onNavigateToHookGenerator, onNavigateToAngleGenerator, onNavigateToContentPlanner }) => {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);

  useEffect(() => {
    // FIX: `getAnnouncement` is async. It must be awaited inside an async function.
    const fetchAnnouncement = async () => {
      const currentAnnouncement = await announcementService.getAnnouncement();
      if (currentAnnouncement && !announcementService.hasSeenCurrentAnnouncement(currentAnnouncement.id)) {
        setAnnouncement(currentAnnouncement);
      }
    };
    fetchAnnouncement();
  }, []);

  const handleCloseAnnouncement = () => {
    if (announcement) {
      announcementService.markAsSeen(announcement.id);
      setAnnouncement(null);
    }
  };


  return (
    <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
      {announcement && <AnnouncementModal announcement={announcement} onClose={handleCloseAnnouncement} />}
      
      {currentUser && <AccountStatus user={currentUser} />}

      {/* Hero Section */}
      <motion.section 
        className="text-center pt-8 sm:pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary mb-4">
          Stop Menebak,
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Mulai Konversi.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-text-secondary mb-4">
          Ubah ide jadi skrip video viral untuk TikTok Shop & Shopee Affiliate. Dirancang untuk FYP dan memaksimalkan konversi.
        </p>
        <p className="max-w-2xl mx-auto text-md text-accent font-bold mb-8">
          Pastikan setting Personal Brand agar hasil skrip sesuai gaya Anda.
        </p>
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap items-center justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>
                <Button onClick={onNavigateToGenerator} size="lg" variant="secondary" className="w-full sm:w-auto">
                <GenerateIcon className="mr-2" />
                Buat Skrip Konten
                </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Button onClick={onNavigateToContentPlanner} size="lg" variant="primary" className="w-full sm:w-auto shadow-lg shadow-primary/30">
                    <CalendarIcon className="mr-2" />
                    Perencana Konten AI
                </Button>
            </motion.div>
             <motion.div variants={itemVariants}>
                <Button onClick={onNavigateToLinkGenerator} size="lg" variant="secondary" className="w-full sm:w-auto">
                    <LinkIcon className="mr-2" />
                    Skrip Link Produk
                </Button>
             </motion.div>
             <motion.div variants={itemVariants}>
                <Button onClick={onNavigateToHookGenerator} size="lg" variant="secondary" className="w-full sm:w-auto">
                    <MagnetIcon className="mr-2" />
                    Hook Generator
                </Button>
             </motion.div>
             <motion.div variants={itemVariants}>
                <Button onClick={onNavigateToAngleGenerator} size="lg" variant="secondary" className="w-full sm:w-auto">
                    <CompassIcon className="mr-2" />
                    Angle Generator
                </Button>
             </motion.div>
        </motion.div>
        </motion.section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Semua yang Anda Butuhkan untuk Viral</h2>
          <p className="max-w-xl mx-auto mt-4 text-text-secondary">
            Dari hook pertama hingga call-to-action terakhir, SkripGen 3.0 menyediakan semua yang Anda butuhkan untuk konten video yang meyakinkan.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={<SparklesIcon />} title="Generator Skrip AI" className="lg:col-span-2">
            Bikin skrip kamu terdengar seperti *real human*, bukan robot. Dapatkan 3 variasi skrip mendalam dengan formula copywriting, hook, dan CTA yang terbukti. Dijamin anti-cringe dan disukai algoritma TikTok.
          </FeatureCard>
           <FeatureCard icon={<CalendarIcon className="w-6 h-6" />} title="Perencana Konten AI">
            Stop pusing mikirin ide. Masukkan produk, dan AI akan membuatkan jadwal konten strategis untuk beberapa hari ke depan.
          </FeatureCard>
          <FeatureCard icon={<MagnetIcon className="w-6 h-6" />} title="Generator Hook">
             Jangan pernah kehilangan penonton di 3 detik pertama. Dapatkan 10+ variasi hook kreatif untuk menemukan pembuka yang paling viral.
          </FeatureCard>
           <FeatureCard icon={<CompassIcon className="w-6 h-6" />} title="Generator Angle Review">
            Buntu mau review dari sisi mana? Dapatkan 5+ sudut pandang unik untuk membahas produkmu agar tidak monoton.
          </FeatureCard>
           <FeatureCard icon={<LinkIcon className="w-6 h-6" />} title="Skrip dari Link Produk">
            Hanya butuh link produk? Tempel link-nya dan dapatkan skrip jadi dalam sekejap. Cepat, praktis, dan siap konversi.
          </FeatureCard>
           <FeatureCard icon={<BrandProfileIcon className="w-6 h-6" />} title="Personal Brand AI">
            Definisikan persona brand-mu sekali, dan AI akan selalu mengingatnya. Skrip yang dihasilkan akan selalu konsisten dengan gayamu.
          </FeatureCard>
          <FeatureCard icon={<ClipboardListIcon />} title="Formula Copywriting Teruji">
            Manfaatkan formula legendaris seperti AIDA & PAS untuk menyusun skrip yang tidak hanya menarik perhatian, tapi juga mendorong penonton untuk checkout.
          </FeatureCard>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="bg-card rounded-lg p-8 sm:p-12 text-center shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Siap Mendominasi FYP?</h2>
          <p className="max-w-xl mx-auto text-text-secondary mb-8">
              Atasi kebuntuan ide dan mulai buat konten yang menghasilkan *views*, *engagement*, dan komisi hari ini juga.
          </p>
          <Button onClick={onNavigateToGenerator} size="lg" className="shadow-lg shadow-primary/30">
              Buat Skrip Pertamamu
          </Button>
      </motion.section>
    </div>
  );
};