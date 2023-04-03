import './portfolio.css'; // CSS FILE FOR COMPONENT
import { cardData } from '../../utils/data'; // DATA FILE FOR COMPONENT
import { useState, useEffect, useRef } from "react"; // REACT HOOKS
import { useTranslation } from 'react-i18next'; // TRANSLATION FILE

const Portfolio = () => {
  const { t } = useTranslation(); // FUNCTION TRANSLATION PAGE
// START FUNCTION FOR LOAD MORE BUTTON AND FILTER BUTTONS
  const [ showMore, setShowMore ] = useState(3); 
  const [ data, setData ] = useState([]);
  const [ buttons, setButtons ] = useState([]);
  const portfolioRef = useRef(null);
  const slice = data.slice(0, showMore);
  const loadMore = () => {
    setShowMore(showMore + 3);
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  useEffect(()=>{
    setData(cardData);
    setButtons(['All', ...new Set(cardData.map((item)=> item.category))])
  },[]) 


  const filter = (itemData) =>{
  if(itemData === 'All'){
    setData(cardData);
    return;
  }
  const filterData = cardData.filter((item)=> item.category === itemData);
  setData(filterData);
}
// END FUNCTION FOR LOAD MORE BUTTON AND FILTER BUTTONS
  return (
    <section id="portfolio">
      {/* ============== Start Portfolio Section ============== */}
        <h2>{t('portfolio-h2')}</h2> {/* ============== Portfolio H2 ============== */}
        <div className="container portfolio__container">
        {/* ============== Start Portfolio Card ============== */}
        {/* ============== Start Portfolio Filter Buttons ============== */}
          <div className="filter__btn animation-center">
              {
                buttons.map((item, i)=> <button key={`button-${i}`} className="btn" onClick={()=>{filter(item)}}><span>{item}</span></button>)
              }
          </div>
        {/* ============== End Portfolio Filter Buttons ============== */}
          <div className="portfolio__cards">
            { // PORTFOLIO CARD DATA MAP
              slice.map(item => <article className="portfolio__item scale-up-center" key={item.id}>
                                {/* ============== Start Card Image ============== */} 
                                  <div className="portfolio__item-image">
                                    <img src={require('../../assets/project/' + item.img_name + '.png')} alt="Project Img" />
                                  </div>
                                {/* ============== Start Card Image ============== */}
                                  <h3>{t(item.title)}</h3> {/* ============== Card H3 ============== */}
                                {/* ============== Start Card Buttons ============== */}
                                  <div className="portfolio__item-links">
                                      <a href={item.link_git} className="btn" target={item.target}><span>GitHub</span></a>
                                      <a href={item.link_vercel} className="btn" target={item.target}><span>{t('portfolio-btn.1')}</span></a> 
                                  </div>
                                {/* ============== End Card Buttons ============== */}
                                </article>)
          }
          </div>
        {/* ============== End Portfolio Card ============== */}
          {/* ============== Start Load More Button ============== */}
            {showMore && <button ref={portfolioRef} onClick={loadMore} className="btn btn-load animation-center"><span>{t('portfolio-btn.2')}</span></button>}
          {/* ============== End Load More Button ============== */}
        </div>
      {/* ============== Start Portfolio Section ============== */}
    </section>
  )
}

export default Portfolio