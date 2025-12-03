import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  titleKey: string; // Key for translation
}

const BeforeAfterSlider = ({ beforeImage, afterImage, titleKey }: BeforeAfterSliderProps) => {
  const { t } = useLanguage();

  // Custom Handle that looks like your screenshot
  const CustomHandle = () => (
    <div className="relative h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-elegant border-2 border-primary flex items-center justify-center text-primary cursor-col-resize z-20 hover:scale-110 transition-transform">
        <ChevronLeft className="w-4 h-4 -mr-1" />
        <ChevronRight className="w-4 h-4 -ml-1" />
      </div>
      <div className="w-0.5 h-full bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.3)] mx-auto" />
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <Card className="overflow-hidden border-4 border-white shadow-soft rounded-xl w-full">
        <ReactCompareSlider
          handle={<CustomHandle />}
          itemOne={
            <ReactCompareSliderImage 
              src={beforeImage} 
              alt="Before" 
              style={{ objectFit: 'cover', height: '100%' }} 
            />
          }
          itemTwo={
            <ReactCompareSliderImage 
              src={afterImage} 
              alt="After" 
              style={{ objectFit: 'cover', height: '100%' }} 
            />
          }
          className="aspect-[4/3] w-full"
          style={{ height: '100%' }}
        />
      </Card>
      <h3 className="mt-4 text-xl font-heading font-semibold text-foreground">
        {t(titleKey)}
      </h3>
    </div>
  );
};

export default BeforeAfterSlider;