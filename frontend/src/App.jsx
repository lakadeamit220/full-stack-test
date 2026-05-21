import { useState, useEffect } from 'react';
import { fetchTabs } from './services/api';

function App() {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const tabsData = await fetchTabs();
        setTabs(tabsData);
        if (tabsData.length > 0) setActiveTab(tabsData[0]);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [activeTab]);

  if (loading) return <div className="flex items-center justify-center h-screen bg-[#1b344a] text-white">Loading...</div>;
  if (!tabs.length) return <div className="flex items-center justify-center h-screen bg-[#1b344a] text-white">No data found.</div>;

  const currentSlides = activeTab?.slides || [];
  const activeSlide = currentSlides[currentSlideIndex];

  // Map Tab Titles to SVG Icons (Dynamic based on seeded title)
  const getIconForTab = (title) => {
    const t = title.toLowerCase();
    if (t.includes('learning')) return '/DL-learning.svg';
    if (t.includes('technology')) return '/DL-technology.svg';
    if (t.includes('communication')) return '/DL-communication.svg';
    return null;
  };

  return (
    <div className="min-h-screen bg-[#1b344a] font-sans flex flex-col items-center py-12 px-4 md:px-8">
      
      {/* Header Section */}
      <div className="text-center text-white mb-10">
        <h1 className="text-3xl md:text-4xl font-normal mb-3 tracking-wide">DelphianLogic in Action</h1>
        <p className="text-gray-300 text-sm md:text-base font-light">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        </p>
      </div>
      
      {/* Main Container */}
      <div className="w-full max-w-[1200px] shadow-2xl flex flex-col md:flex-row">
        
        {/* MOBILE VIEW (Accordion) */}
        <div className="w-full md:hidden flex flex-col gap-2">
          {tabs.map((tab) => (
            <div key={tab.id} className="flex flex-col relative">
              {/* Accordion Button */}
              <button
                onClick={() => setActiveTab(tab)}
                className="w-full bg-white flex items-center justify-between px-6 py-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img src={getIconForTab(tab.title)} alt="icon" className="w-10 h-10 object-contain" />
                  <span className="text-lg text-gray-800 font-medium">{tab.title}</span>
                </div>
                <img 
                  src={activeTab?.id === tab.id ? '/minus-01.svg' : '/plus-01.svg'} 
                  alt="toggle" 
                  className="w-6 h-6" 
                />
              </button>

              {/* Mobile Active State Triangle Indicator */}
              {activeTab?.id === tab.id && (
                <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-transparent border-t-white z-20"></div>
              )}

              {/* Accordion Content (Slider + Background Image overlay) */}
              {activeTab?.id === tab.id && currentSlides.length > 0 && (
                <div className="relative w-full h-[350px] overflow-hidden bg-[#6ab0c5] mt-1 z-10">
                  {/* Background Image with Teal Blend */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply"
                    style={{ backgroundImage: `url(${activeSlide?.imageUrl})` }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white text-center">
                    {/* Badge */}
                    <div className="bg-white/20 px-3 py-1 mb-6 text-xs font-semibold tracking-wider rounded-sm">
                      {activeSlide.content}
                    </div>
                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-8 leading-tight">
                      {activeSlide.title}
                    </h2>
                    {/* Link */}
                    <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-gray-200 transition-colors mb-10">
                      Learn More <img src="/arrow-right.svg" alt="arrow" className="w-4 h-4 filter invert" />
                    </a>
                    
                    {/* Pagination Dots (Mobile) */}
                    {currentSlides.length > 1 && (
                      <div className="flex gap-3">
                        {currentSlides.map((_, idx) => (
                          <button 
                            key={idx}
                            onClick={() => setCurrentSlideIndex(idx)}
                            className={`w-3 h-3 rounded-full border border-white transition-all ${
                              currentSlideIndex === idx ? 'bg-white' : 'bg-transparent'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex w-full h-[450px]">
          
          {/* Left Column (Tabs) */}
          <div className="w-[30%] bg-[#f7f8fa] flex flex-col justify-center py-6">
            {tabs.map((tab) => (
              <div key={tab.id} className="relative w-full px-6 py-2">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full flex items-center gap-6 px-6 py-5 shadow-sm transition-all duration-300 ${
                    activeTab?.id === tab.id ? 'bg-white z-10' : 'bg-white/60 hover:bg-white'
                  }`}
                >
                  <img src={getIconForTab(tab.title)} alt="icon" className="w-12 h-12 object-contain" />
                  <span className="text-lg text-gray-800 font-medium">{tab.title}</span>
                </button>
                {/* Desktop Triangle Indicator */}
                {activeTab?.id === tab.id && (
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[12px] border-transparent border-l-white z-20"></div>
                )}
              </div>
            ))}
          </div>

          {/* Middle Column (Slider Content & Controls) */}
          <div className="w-[40%] bg-[#6ab0c5] relative z-0 flex flex-col items-center justify-center p-12 text-center text-white">
            {currentSlides.length > 0 && (
              <>
                <div className="bg-white/20 px-3 py-1 mb-8 text-xs font-semibold tracking-wider rounded-sm">
                  {activeSlide.content}
                </div>
                <h2 className="text-3xl font-bold mb-10 leading-snug px-4">
                  {activeSlide.title}
                </h2>
                <a href="#" className="flex items-center gap-2 text-base font-medium hover:text-gray-200 transition-colors">
                  Learn More <img src="/arrow-right.svg" alt="arrow" className="w-4 h-4 filter invert" />
                </a>

                {/* Pagination Dots (Desktop) */}
                {currentSlides.length > 1 && (
                  <div className="absolute bottom-8 flex gap-3">
                    {currentSlides.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`w-3 h-3 rounded-full border border-white transition-all ${
                          currentSlideIndex === idx ? 'bg-white' : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right Column (Image) */}
          <div className="w-[30%] bg-gray-900 relative">
            {activeSlide?.imageUrl && (
              <img 
                src={activeSlide.imageUrl} 
                alt="Slide visual" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
