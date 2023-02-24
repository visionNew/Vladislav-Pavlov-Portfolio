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
  };

  useEffect(()=>{
    setData(cardData);
    setButtons(['All', ...new Set(cardData.map((item)=> item.category))])
  },[]) 

  useEffect(() => {
    console.log(portfolioRef.current);
    if (portfolioRef.current) {
      window.scrollBy({
        top: portfolioRef.current.getBoundingClientRect().top - 80,
        behavior: 'smooth'
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolioRef.current])

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
          <div className="filter__btn blur">
              {
                buttons.map((item, i)=> <button key={`button-${i}`} className="btn" onClick={()=>{filter(item)}}>{item}</button>)
              }
          </div>
        {/* ============== End Portfolio Filter Buttons ============== */}
          <div className="portfolio__cards blur">
            { // PORTFOLIO CARD DATA MAP
              slice.map((item, index) => <article className="portfolio__item scale-in-center" id={item.id} key={item.id} ref={index === slice.length - 3 ? portfolioRef : null}>
                                {/* ============== Start Card Image ============== */} 
                                  <div className="portfolio__item-image">
                                    <img src={require('../../assets/project/' + item.img_name + '.png')} alt="Project Img" />
                                  </div>
                                {/* ============== Start Card Image ============== */}
                                  <h3>{t(item.title)}</h3> {/* ============== Card H3 ============== */}
                                {/* ============== Start Card Buttons ============== */}
                                  <div className="portfolio__item-links">
                                      <a href={item.link_git} className="btn" target={item.target}>GitHub</a>
                                      <a href={item.link_dribb} className="btn" target={item.target}>{t('portfolio-btn.1')}</a> 
                                  </div>
                                {/* ============== End Card Buttons ============== */}
                             </article>)
          }
          </div>
        {/* ============== End Portfolio Card ============== */}
          {/* ============== Start Load More Button ============== */}
            {showMore && <button onClick={loadMore} className="btn btn-load">{t('portfolio-btn.2')}</button>}
          {/* ============== End Load More Button ============== */}
        </div>
      {/* ============== Start Portfolio Section ============== */}
    </section>
  )
}

export default Portfolio