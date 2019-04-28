import React from 'react'
import './Logos.scss'
import python from '../../img/python.png'
import dash from '../../img/dash.png'
import plotly from '../../img/plotly.png'
import tensorflow from '../../img/tensorflow.png'
import keras from '../../img/keras.png'
import pytorch from '../../img/pytorch.png'
import sklearn from '../../img/sklearn.png'
import pandas from '../../img/pandas.png'
import numpy from '../../img/numpy.png'
import matplotlib from '../../img/matplotlib.png'
import selenium from '../../img/selenium.png'
import dask from '../../img/dask.png'
import spark from '../../img/spark.png'
import postgresql from '../../img/postgresql.png'
import docker from '../../img/docker.png'
import kubernetes from '../../img/kubernetes.png'
import aws from '../../img/aws.png'
import googleCloud from '../../img/google-cloud.png'
import azure from '../../img/azure.png'

const logos = [
    {
        key: 1,
        src: python,
        alt: 'python',
        link: 'https://www.python.org/'
    },
    {
        key: 2,
        src: dash,
        alt: 'dash',
        link: 'https://dash.plot.ly/'
    },
    {
        key: 3,
        src: tensorflow,
        alt: 'tensorflow',
        link: 'https://www.tensorflow.org/'
    },
    {
        key: 4,
        src: keras,
        alt: 'keras',
        link: 'https://keras.io/'
    },
    {
        key: 5,
        src: pytorch,
        alt: 'pytorch',
        link: 'https://pytorch.org/'
    },
    {
        key: 6,
        src: sklearn,
        alt: 'sklearn',
        link: 'https://scikit-learn.org/'
    },
    {
        key: 7,
        src: pandas,
        alt: 'pandas',
        link: 'https://pandas.pydata.org/'
    },
    {
        key: 8,
        src: numpy,
        alt: 'numpy',
        link: 'https://www.numpy.org/'
    },
    {
        key: 9,
        src: plotly,
        alt: 'plotly',
        link: 'https://plot.ly/'
    },
    {
        key: 10,
        src: matplotlib,
        alt: 'matplotlib',
        link: 'https://matplotlib.org/'
    },
    {
        key: 11,
        src: selenium,
        alt: 'selenium',
        link: 'https://www.seleniumhq.org/'
    },
    {
        key: 12,
        src: dask,
        alt: 'dask',
        link: 'https://dask.org/'
    },
    {
        key: 13,
        src: spark,
        alt: 'spark',
        link: 'https://spark.apache.org/'
    },
    {
        key: 14,
        src: postgresql,
        alt: 'postgresql',
        link: 'https://www.postgresql.org/'
    },
    {
        key: 15,
        src: docker,
        alt: 'docker',
        link: 'https://www.docker.com/'
    },
    {
        key: 16,
        src: kubernetes,
        alt: 'kubernetes',
        link: 'https://kubernetes.io/pt/'
    },
    {
        key: 17,
        src: aws,
        alt: 'aws',
        link: 'https://aws.amazon.com/'
    },
    {
        key: 18,
        src: googleCloud,
        alt: 'google-cloud',
        link: 'https://cloud.google.com/'
    },
    {
        key: 19,
        src: azure,
        alt: 'azure',
        link: 'https://azure.microsoft.com/'
    }
]

const Logos = () => (
    <div className='logos'>
        {logos.map(logo => (
            <div className='logos__item' key={logo.key}>
                <a href={logo.link} target="_blank" rel='noopener noreferrer'>
                <img src={logo.src} alt={logo.alt} />
                </a>
            </div>
        ))}
    </div>
)

export default Logos