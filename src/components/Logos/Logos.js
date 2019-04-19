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
        alt: 'python'
    },
    {
        key: 2,
        src: dash,
        alt: 'dash'
    },
    {
        key: 3,
        src: tensorflow,
        alt: 'tensorflow'
    },
    {
        key: 4,
        src: keras,
        alt: 'keras'
    },
    {
        key: 5,
        src: pytorch,
        alt: 'pytorch'
    },
    {
        key: 6,
        src: sklearn,
        alt: 'sklearn'
    },
    {
        key: 7,
        src: pandas,
        alt: 'pandas'
    },
    {
        key: 8,
        src: numpy,
        alt: 'numpy'
    },
    {
        key: 9,
        src: plotly,
        alt: 'plotly'
    },
    {
        key: 10,
        src: matplotlib,
        alt: 'matplotlib'
    },
    {
        key: 11,
        src: selenium,
        alt: 'selenium'
    },
    {
        key: 12,
        src: dask,
        alt: 'dask'
    },
    {
        key: 13,
        src: spark,
        alt: 'spark'
    },
    {
        key: 14,
        src: postgresql,
        alt: 'postgresql'
    },
    {
        key: 15,
        src: docker,
        alt: 'docker'
    },
    {
        key: 16,
        src: kubernetes,
        alt: 'kubernetes'
    },
    {
        key: 17,
        src: aws,
        alt: 'aws'
    },
    {
        key: 18,
        src: googleCloud,
        alt: 'google-cloud'
    },
    {
        key: 19,
        src: azure,
        alt: 'azure'
    }
]

const Logos = () => (
    <div className='logos'>
        {logos.map(logo => (
            <div className='logos__item' key={logo.key}>
                <img src={logo.src} alt={logo.alt} />
            </div>
        ))}
    </div>
)

export default Logos