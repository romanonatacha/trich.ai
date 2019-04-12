import React from 'react'
import './Contact.scss'

const Contact = () => (
  <div className='contact'>
    <div className='contact__header'>
      contact blablabla
    </div>
    <div className='contact__container'>
      <div className='contact__container__form'>
        <form className='col s12' action="http://formmail.kinghost.net/formmail.cgi" method="POST">
          <div className='row'>
            <input type="hidden" name="recipient" value="trichcontact@gmail.com"/>
            <input type="hidden" name="redirect" value="http://localhost:3000"/>
            <input type="hidden" name="subject" value="assunstoooo"/>
            <input type="hidden" name="email" value="trichcontact@gmail.com"/>  
          </div>
          <div className='row'>
            <div className='input-field col s6'> 
              <input type="text" size="30" name="nome"/> 
              <label>name</label>
            </div>   
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input type="text" size="30" name="replyto"/>
              <label>email</label>
            </div>
          </div>
          <div className='input-field col s6'>
            <input type="text" name="subject"/>
            <label>subject</label>
          </div>
          <div className='row'>
            <div className='input-field col s6'> 
              <input type="text" size="35" name="Comentarios"/>
              <labe>message</labe>
            </div>
          </div>
          <div className='row'>
            <div class="col s12">
              <div className='input-field inline'> 
                <input id="email_inline" type="submit" name="BTEnvia" value="Enviar"/> 
              </div> 
            </div>
          </div>
        </form>
      </div>
    </div>
  </div> 
)

export default Contact