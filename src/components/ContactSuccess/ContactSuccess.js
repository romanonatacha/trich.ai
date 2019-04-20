import React, { Component } from 'react'
import './ContactSuccess.scss'
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom';

class Modal extends Component {
      render() {
          return (
            <>
            <Contact />
            <div className='modal-success'>
              <section className="modal-main">
                We have received your message and we will get back to you as soon as possible.<span>Thanks!</span>
                <Link to='/contact' className='close-btn'>
                  <i class="fas fa-times"></i>
                </Link>
              </section>
            </div>
            </>
          )
      }
}

export default Modal