import React from 'react'
import { Link } from 'react-router-dom'
import './ApplicationsCard.scss'

const instustriesItems = [
    {
        key: 1,
        icon: 'fas fa-user-secret',
        title: 'Fraud Detection',
        text: 'Machines are much better than humans at processing large datasets. They are able to detect and recognize thousands of patterns on a user’s purchasing journey instead of the few captured by creating rules.'
    },
    {
        key: 2,
        icon: 'fas fa-file-alt',
        title: 'Text Analysis & Natural Language Understanding',
        text: 'Natural language processing models help you organize and structure knowledge, and sift through exorbitant amounts of text to generate meaning, produce content, or automatically summarize.'
    },
    {
        key: 3,
        icon: 'fas fa-thumbs-up',
        title: 'Recommendation System',
        text: 'A recommender system is an algorithm whose aim is to provide the most relevant information to a user by discovering patterns in a dataset. The algorithm rates the items and shows the user the items that they would rate highly.'
    },
    {
        key: 4,
        icon: 'fas fa-chart-bar',
        title: 'Churn Prediction',
        text: 'Using machine learning algorithms to analyze real time consumer or user behavior for customized customer insight, and applying models that continuously enhance predictions about customer churn.'
    },
    {
        key: 5,
        icon: 'fas fa-search',
        title: 'Data Exploration & Visualizations',
        text: 'Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data. It gives you acess to your data as clear way.'
    },
    {
        key: 6,
        icon: 'fas fa-chart-pie',
        title: 'Data Mining',
        text: 'Data mining is the process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems.'
    },
    {
        key: 7,
        icon: 'fas fa-robot',
        title: 'RPA (Robotic process automation)',
        text: 'This will give you a lot of optimizations in some business process automation technology based on the notion of software robots or artificial intelligence (AI) workers.'
    },
    {
        key: 8,
        icon: 'fas fa-database',
        title: 'Query Optimizations',
        text: 'An inefficient query may pose a burden on the production database’s resources, and cause slow performance or loss of service for other users if the query contains errors. Hence it is important to optimize your queries for minimum impact on the database’s performance.'
    },
    {
        key: 9,
        icon: 'fas fa-chart-area',
        title: 'Large Scale Data Analysis',
        text: 'Large scale data analysis is the process of applying data analysis techniques to a large amount of data, typically in big data repositories. It uses specialized algorithms, systems and processes to review, analyze and present information in a form that is more meaningful for organizations or end users.'
    }
]

const ApplicationsCard = () => (
    <div className='applications'>
        <ul className='solutions__links'>
            <li className='solutions__links__item active'>
                <Link to='/solutions'>applications</Link>
            </li>
            <li className='solutions__links__item'>
                <Link to='/solutions/industries'>industries</Link>
            </li>
        </ul>
        <div className="row applications__list">
            {instustriesItems.map(item =>
                <div key={item.key} className="applications__list__item">
                    {/* <i class="applications__list__item__icon small material-icons">{item.icon}</i> */}
                    <i className={item.icon}></i>
                    <h3 className='applications__list__item__title'>{item.title}</h3>
                    <p className='applications__list__item__text'>{item.text}</p>
                </div>
            )}
        </div>
    </div>
)


export default ApplicationsCard