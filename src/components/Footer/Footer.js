import React from 'react'
import './Footer.scss'

const Footer = () => (
    <footer class="footer page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Footer Content</h5>
                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div class="nav social-icons justify-content-end">
                    <a class="nav-link" href="https://www.kaggle.com/kabure/kernels" target="_blank" title="Kaggle">
                        <i class="fab fa-kaggle"></i>
                    </a>
                    <a class="nav-link" href="https://github.com/kaburelabs" target="_blank" title="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a class="nav-link" href="https://www.linkedin.com/in/leonardo-ferreira-70212028/" target="_blank" title="Linkedin">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                © 2014 Copyright Text
                <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
        </div>
    </footer>
)

export default Footer