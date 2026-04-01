import CardSlider from '../../../components/CardSlider';
import Navigation from '../../../components/Navigation';
import HeroSection from '../components/HeroSection'
import { continueWatching, criming, kidsStreaming, liveStreaming, movieData } from '../data/cardContent';


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
      title: "Popular in Crime",
      data: criming,
    },
    {
      title: "Popular in Reality",
      data: continueWatching,
    },
    {
      title: "Popular in Kids",
      data: kidsStreaming,
    }
  ];

  return (
    <div className="pt-[68px]"> 
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
