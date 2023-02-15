import './portfolio.css'; // CSS FILE FOR COMPONENT
import { cardData } from '../../utils/data'; // DATA FILE FOR COMPONENT
import { useState } from "react"; // REACT HOOKS
import { useTranslation } from 'react-i18next'; // TRANSLATION FILE

const Portfolio = () => {
  const { t } = useTranslation(); // FUNCTION TRANSLATION PAGE
// START FUNCTION FOR LOAD MORE BUTTON
  const [showMore,setShowMore] = useState(3); 
  const loadMore = () =>{ setShowMore(showMore + 3);}
  const slice = cardData.slice(0, showMore);
// END FUNCTION FOR LOAD MORE BUTTON
  return (
    <section id="portfolio">
      {/* ============== Start Portfolio Section ============== */}
        <h2>{t('portfolio-h2')}</h2> {/* ============== Portfolio H2 ============== */}
        <div className="container portfolio__container">
        {/* ============== Start Portfolio Card ============== */}
          <div className="portfolio__cards">
            { // PORTFOLIO CARD DATA MAP
              slice.map(item => <article className={item.class} key={item.id}>
                                {/* ============== Start Card Image ============== */} 
                                  <div className="portfolio__item-image">
                                    <img src={require('../../assets/project/' + item.img_name + '.png')} alt="Project Img" />
                                  </div>
                                {/* ============== Start Card Image ============== */}
                                  <h3>{t(item.title)}</h3> {/* ============== Card H3 ============== */}
                                {/* ============== Start Card Buttons ============== */}
                                  <div className="portfolio__item-links">
                                      <a href={item.link_git} className="btn blur" target={item.target}>GitHub</a>
                                      <a href={item.link_dribb} className="btn blur" target={item.target}>{t('portfolio-btn.1')}</a> 
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