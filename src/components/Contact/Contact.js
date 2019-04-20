import React, { Component } from 'react'
import './Contact.scss'
import FormErrors from '../FormErrors/FormErrors'

class Contact extends Component {
  state = {
    nome: '',
    replyto: '',
    subject: '',
    comentarios: '',
    formErrors: {nome: '', replyto: '', subject: '', comentarios: ''},
    nomeValid: false,
    replytoValid: false,
    subjectValid: false,
    comantariosValid: false,
    formValid: false
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nomeValid = this.state.nomeValid;
    let replytoValid = this.state.replytoValid;
    let subjectValid = this.state.subjectValid;
    let comentariosValid = this.state.comentariosValid;
  
    switch(fieldName) {
      case 'nome':
        nomeValid = value.length >= 4;
        fieldValidationErrors.nome = nomeValid ? '' : ' is too short';
        break;
      case 'replyto':
        replytoValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.replyto = replytoValid ? '' : ' is invalid';
        break;
      case 'subject':
        subjectValid = value.length >= 3;
        fieldValidationErrors.subject = subjectValid ? '': ' is too short';
        break;
        case 'comentarios':
        comentariosValid = value.length >= 5;
        fieldValidationErrors.comentarios = comentariosValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nomeValid: nomeValid,
                    replytoValid: replytoValid,
                    subjectValid: subjectValid,
                    comentariosValid: comentariosValid,
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid:
      this.state.nomeValid &&
      this.state.replytoValid &&
      this.state.subjectValid &&
      this.state.comentariosValid
    });
  }

  render() {
    return (
      <div className='contact'>
        <div className='contact__header'>
          to receive your quotation<br></br><span>contact us</span>
        </div>
        <div className='contact__container'>
          <div className='contact__container__form'>
          <div className='panel panel-default'>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
            <form className='col s12' action="http://formmail.kinghost.net/formmail.cgi" method="POST">
              <div className='row'>
                <input type="hidden" name="recipient" value="trichcontact@gmail.com" />
                <input type="hidden" name="redirect" value='http://localhost:3000/contact/success' />
                <input type="hidden" name="subject" value="subject" />
                <input type="hidden" name="email" value="trichcontact@gmail.com" />
                <input type="text" name="_gotcha" className='gotcha' />
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    type="text"
                    size="30"
                    name="nome"
                    value={this.state.name}
                    onChange={(event) => this.handleUserInput(event)}
                  />
                  <label>name</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    type="text"
                    size="30"
                    name="replyto"
                    value={this.state.email}
                    onChange={(event) => this.handleUserInput(event)}
                  />
                  <label>email</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    type="text"
                    name="subject"
                    value={this.state.subject}
                    onChange={(event) => this.handleUserInput(event)}
                  />
                  <label>subject</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <textarea
                    className='materialize-textarea'
                    type="text"
                    size="35"
                    name="comentarios"
                    value={this.state.message}
                    onChange={(event) => this.handleUserInput(event)}>
                  </textarea>
                  <labe>message</labe>
                </div>
              </div>
              <div className='row'>
                <div class="col s12">
                  <div className='input-field inline'>
                    <input
                      id="email_inline"
                      className='btn contact__container__form__btn'
                      type="submit"
                      name="BTEnvia"
                      value="Send"
                      disabled={!this.state.formValid}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default Contact