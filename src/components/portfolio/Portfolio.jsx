import './portfolio.css';
import { cardData } from '../../utils/data';
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const [showMore,setShowMore] = useState(3);
  const loadMore = () =>{ setShowMore(showMore + 3);}
  const slice = cardData.slice(0, showMore);

  return (
    <section id="portfolio">
        <h2>{t('portfolio-h2')}</h2>
        <div className="container portfolio_container">
          <div className="portfolio_cards">
            {
            slice.map(item => <article className="portfolio_item scale-in-center" key={item.id}>
                                  <div className="portfolio_item-image">
                                    <img src={require('../../assets/project/' + item.img_name + '.png')} alt="Project Img" />
                                  </div>
                                  <h3>{t(item.title)}</h3>
                                  <div className="portfolio_item-links">
                                      <a href={item.link_git} className="btn" target={item.target}>GitHub</a>
                                      <a href={item.link_dribb} className="btn" target={item.target}>{t('portfolio-btn.1')}</a> 
                                </div>  
                             </article>)
          }
          </div>
         {showMore && <button onClick={loadMore} className="btn btn-load">{t('portfolio-btn.2')}</button>}
        </div>
    </section>
  )
}

export default Portfolio