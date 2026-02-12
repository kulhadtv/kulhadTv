import CardSlider from '../../../components/CardSlider';
import ComingSoonOverlay from '../../../components/ComingSoonOverlay';
import Navigation from '../../../components/Navigation';
import HeroSection from '../components/HeroSection'
import { continueWatching, liveStreaming, movieData } from '../data/cardContent';


const KulhadHome = () => {

  const sections = [
    {
      title: "Continue Watching",
      data: movieData,
    },
    {
      title: "Live Streaming",
      data: liveStreaming,
    },

    {
      title: "Continue Watching",
      data: continueWatching,
    }
  ];

  return (
    <div>
      <ComingSoonOverlay/>
      <Navigation />
      <HeroSection />
      <div className="py-6">
        {sections.map((section) => (
          <CardSlider
            key={section.title}
            title={section.title}
            data={section.data}
          />
        ))}

      </div>
    </div>
  )
}

export default KulhadHome
