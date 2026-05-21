import { useState, useEffect } from 'react';
import { fetchTabs } from './services/api';

// Icons mapped by index for the exact design look
const ICONS = ['/assets/DL-learning.svg', '/assets/DL-technology.svg', '/assets/DL-communication.svg'];

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
        if (tabsData.length > 0) {
          setActiveTab(tabsData[0]);
        }
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

  if (loading) return <div className="flex items-center justify-center h-screen bg-[#173042] text-white">Loading...</div>;
  if (!tabs.length) return <div className="flex items-center justify-center h-screen bg-[#173042] text-white">No data found.</div>;

  const currentSlides = activeTab?.slides || [];
  const activeSlide = currentSlides[currentSlideIndex];

  return (
    <div className="min-h-screen bg-[#173042] flex flex-col items-center py-12 px-4 md:px-10 font-sans">
      
      {/* Header Section */}
      <div className="text-center text-white mb-10 mt-6">
        <h1 className="text-4xl font-normal mb-3">DelphianLogic in Action</h1>
        <p className="text-gray-300 font-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
      </div>

      <div className="w-full max-w-6xl shadow-2xl flex flex-col md:flex-row h-auto md:h-[450px]">
        
        {/* MOBILE VIEW (Accordion) */}
        <div className="w-full md:hidden flex flex-col gap-4">
          {tabs.map((tab, idx) => (
            <div key={tab.id} className="flex flex-col">
              {/* Accordion Header */}
              <button
                onClick={() => setActiveTab(tab)}
                className="w-full bg-white flex items-center justify-between p-4 shadow-md relative"
              >
                <div className="flex items-center gap-4">
                  <img src={ICONS[idx % ICONS.length]} alt="" className="w-12 h-12" />
                  <span className="text-xl font-semibold text-gray-800">{tab.title}</span>
                </div>
                <div>
                  <img src={activeTab?.id === tab.id ? '/assets/minus-01.svg' : '/assets/plus-01.svg'} alt="toggle" className="w-6 h-6" />
                </div>
                {/* Active triangle pointing down */}
                {activeTab?.id === tab.id && (
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white z-20"></div>
                )}
              </button>
              
              {/* Accordion Content (Slider with Background Overlay) */}
              {activeTab?.id === tab.id && currentSlides.length > 0 && (
                <div className="relative w-full h-[400px] overflow-hidden mt-2 shadow-md bg-[#6cb6c8]">
                  {/* Background Image with teal color blend */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply"
                    style={{ backgroundImage: `url(${activeSlide?.imageUrl})` }}
                  ></div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white text-center">
                    <span className="bg-white/20 px-3 py-1 text-xs font-semibold tracking-wider mb-4 border border-white/30 rounded-sm">
                      {activeTab.title.toUpperCase()}
                    </span>
                    <h2 className="text-3xl font-bold mb-4 leading-tight">{activeSlide.title}</h2>
                    <p className="text-base text-white/90 mb-8">{activeSlide.content}</p>
                    
                    <a href="#" className="flex items-center gap-2 text-white font-medium hover:underline mb-8">
                      Learn More <img src="/assets/arrow-right.svg" className="w-4 h-4 invert" alt="arrow" />
                    </a>

                    {/* Pagination Dots */}
                    <div className="flex gap-2 mt-auto">
                      {currentSlides.map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => setCurrentSlideIndex(i)}
                          className={`w-3 h-3 rounded-full border border-white transition-all ${currentSlideIndex === i ? 'bg-white' : 'bg-transparent hover:bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW (3 Columns) */}
        <div className="hidden md:flex w-full h-full">
          {/* Column 1: Tabs */}
          <div className="flex flex-col w-[30%] bg-white h-full relative">
            <div className="flex flex-col justify-center h-full gap-2 p-6">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className="flex items-center gap-6 p-4 w-full bg-white transition-colors group relative"
                >
                  <img src={ICONS[idx % ICONS.length]} alt="" className="w-16 h-16 object-contain" />
                  <span className="text-2xl text-gray-800 font-semibold">{tab.title}</span>

                  {/* Active triangle pointing right */}
                  {activeTab?.id === tab.id && (
                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[15px] border-l-white z-20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Slider Controls */}
          <div className="w-[40%] bg-[#6cb6c8] p-12 flex flex-col justify-center items-center text-center relative z-10">
            {currentSlides.length > 0 ? (
              <div className="flex flex-col h-full justify-center items-center w-full">
                <div className="mb-auto mt-10">
                  <span className="bg-white/20 px-3 py-1 text-[11px] font-semibold text-white tracking-widest border border-white/30 rounded-sm inline-block mb-6">
                    {activeTab.title.toUpperCase()}
                  </span>
                  <h2 className="text-4xl font-bold text-white mb-6 leading-snug">
                    {activeSlide.title}
                  </h2>
                  <p className="text-lg text-white/90">
                    {activeSlide.content}
                  </p>
                </div>
                
                <div className="mt-8 mb-auto">
                  <a href="#" className="flex items-center gap-2 text-white text-lg font-medium hover:opacity-80 transition-opacity">
                    Learn More <img src="/assets/arrow-right.svg" className="w-5 h-5 invert" alt="arrow" />
                  </a>
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-3 mb-4">
                  {currentSlides.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentSlideIndex(i)}
                      className={`w-3.5 h-3.5 rounded-full border-2 border-white/80 transition-all ${currentSlideIndex === i ? 'bg-white/80' : 'bg-transparent hover:bg-white/40'}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-white">No slides available.</div>
            )}
          </div>

          {/* Column 3: 1:1 Image Display */}
          <div className="w-[30%] bg-[#1a202c] relative">
            {activeSlide?.imageUrl ? (
              <img 
                src={activeSlide.imageUrl} 
                alt={activeSlide.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
