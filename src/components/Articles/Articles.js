import React from 'react'
import './Articles.scss'

const articlesItems = [
  {
    key: 1,
    title: 'Big Data Analytics Adoption Soared In The Enterprise In 2018',
    text: 'Big data adoption in enterprises soared from 17% in 2015 to 59% in 2018, reaching a Compound Annual Growth Rate (CAGR) of 36%...',
    img: 'https://blogs-images.forbes.com/louiscolumbus/files/2018/12/Big-Data-Analytics-Adoption-Soared-In-The-Enterprise-In-2018.jpg',
    link: 'https://www.forbes.com/sites/louiscolumbus/2018/12/23/big-data-analytics-adoption-soared-in-the-enterprise-in-2018/#7a8837d4332f'
  },
  {
    key: 2,
    title: 'The kinds of Data Scientist',
    text: 'In 2012, HBR dubbed data scientist “the sexiest job of the 21st century”. It is also, arguably, the vaguest. To hire the right people for the right roles, it’s important to distinguish between different types of data scientist...',
    img: 'https://hbr.org/resources/images/article_assets/2018/11/nov18_7_605375765.jpg',
    link: 'https://hbr.org/2018/11/the-kinds-of-data-scientist'
  },
  {
    key: 3,
    title: 'How to Build Great Data Products',
    text: 'By fostering collaboration between product and business leaders and data scientists, prioritizing investments with an eye to the future, and starting simple...',
    img: 'https://hbr.org/resources/images/article_assets/2018/10/oct18_31_737142397.jpg',
    link: 'https://hbr.org/2018/10/how-to-build-great-data-products?referral=03758&cm_vc=rr_item_page.top_right'
  },
  {
    key: 4,
    title: 'How to Manage a data science team?',
    text: 'Great management means caring about your team members, connecting their work to the business, and designing diverse, resilient, high-performing teams...',
    img: 'https://hbr.org/resources/images/article_assets/2018/10/oct18_23_72665268.jpg',
    link: 'https://hbr.org/2018/10/managing-a-data-science-team?referral=03759&cm_vc=rr_item_page.bottom'
  },
  {
    key: 5,
    title: 'Data Science A-Z from Zero to Kaggle Kernels Master',
    text: 'A brief story of my last year learning Data Science...',
    img: 'https://cdn-images-1.medium.com/max/1000/0*RjrZU9nai_QsGDIr',
    link: 'https://towardsdatascience.com/data-science-from-zero-to-kaggle-kernels-master-f9115eadbb3'
  }
]

const Articles = () => (
  <div className='articles'>
        <div className='articles__header'>
          interesting articles
        </div>
        <div className="articles__cards row">
          {articlesItems.map(item => 
            <div className="col s12 m4" key={item.key}>
              <div className="articles__cards__item card large">
                <div className="articles__cards__item__img card-image">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="articles__cards__item__text card-content">
                  <span className="articles__cards__item__title">{item.title}</span>
                  <p>{item.text}</p>
                </div>
                <div className="card-action articles__cards__item__link">
                  <a className="articles__cards__item__link__a" href={item.link} target="_blank" rel='noopener noreferrer'>go to the arcticle</a>
                </div>      
              </div>
            </div>
          )}
        </div>    
      </div>
)

export default Articles