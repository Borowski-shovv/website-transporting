import React, {useState} from 'react';
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import wozek from '../../assets/images/contact-right.png';
import './SendParcel.css';


const title = {
  paczka: 'przewóz paczki',
  paleta: 'transport paletowy',
  samochody: 'transport auta',
  przeprowadzka: 'przeprowadzkę',
  ponadgabarytowy: 'transport ponadgabarytowy',
}

const descriptions = {
  paczka: 'paczka',
  paleta: 'paleta',
  samochody: 'samochody',
  ponadgabarytowy: 'ponadgabarytowy',
  przeprowadzka: 'przeprowadzka'
}

const SendParcel = () => {
    const [activeOption, setActiveOption] = useState(descriptions.paczka)
    const [mailSent, setmailSent] = useState(false);
    const [error, setError] = useState(null);
    const [inputName, setInputName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMsg, setInputMsg] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [ulicaZaladunek, setUlicaZaladunek] = useState('');
    const [miastoZaladunek, setMiastoZaladunek] = useState('');
    const [kodPocztowyZaladunek, setKodPocztowyZaladunek] = useState('');
    const [ulicaRozladunek, setUlicaRozladunek] = useState('');
    const [miastoRozladunek, setMiastoRozladunek] = useState('');
    const [kodPocztowyRozladunek, setKodPocztowyRozladunek] = useState('');
    const [radioBtn, setRadioBtn] = useState('');
    const [formData, setFormData] = useState({});

    const handleRadioButtonChange = (e) => {
      setActiveOption(e.target.value)
    }

    const handleFormSubmit = e => { 
        e.preventDefault();
        axios({
          method: "post",
          url: `${process.env.REACT_APP_API2}`,
          headers: { "content-type": "application/json" },
          data: formData
        })
          .then(result => {
            if (result.data.sent) {
              setmailSent(result.data.sent)
              setError(false)
            } else {
              setError(true)
            }
          })
          .catch(error => setError( error.message ));
          setInputName('');
          setInputLastName('');
          setInputPhone('');
          setInputMsg('');
          setInputEmail('');
          setFormData({});
          setUlicaZaladunek('');
          setMiastoZaladunek('');
          setKodPocztowyZaladunek('');
          setUlicaRozladunek('');
          setMiastoRozladunek('');
          setKodPocztowyRozladunek('');
          setRadioBtn('');

      };

      const handleChange = (e, field) => {
        let value = e.target.value;
        switch(field) {
          case 'name':
            setInputName(e.target.value)
          break;
          case 'lastname':
            setInputLastName(e.target.value)
          break;
          case 'email':
            setInputEmail(e.target.value)
          break;
          case 'phone':
            setInputPhone(e.target.value)
          break;
          case 'msg':  
            setInputMsg(e.target.value)
          break;
          case 'radiobtn':
            setRadioBtn(e.target.value)
            break;
          case 'ulicazaladunek':
            setUlicaZaladunek(e.target.value)
            break;
          case 'miastozaladunek':
            setMiastoZaladunek(e.target.value)
            break;
          case 'kodpocztowyzaladunek':
            setKodPocztowyZaladunek(e.target.value)
            break;
          case 'ulicarozladunek':
            setUlicaRozladunek(e.target.value)
            break;
          case 'miastorozladunek':
            setMiastoRozladunek(e.target.value)
            break;
          case 'kodpocztowyrozladunek':
            setKodPocztowyRozladunek(e.target.value)
            break;

          default:
            break;
        }
        setFormData({
          ...formData,
          [field]: value,
          
        }); 
      };


    return ( 
        <Container>
        <Row>
            <Col lg={12} className="prices-form-wrapper">
                <div className="section-title ">
                    <h2 className="text-primary order-form">Złóż zamówienie na <span>{title[activeOption]}</span></h2>
                  
                </div>
            </Col>
            <div className="col-lg-12">                                        
                <form action="#">
                  <Row>
                 
                  <label className="radio" style={activeOption === descriptions.paczka ? {background: '#eee'} : {background: 'none'}} htmlFor="paczka">
                    <input id="paczka" checked={activeOption === descriptions.paczka} value={descriptions.paczka} onChange={(e) => handleRadioButtonChange(e)} type="radio"/>
                    
                    <div className="radioButton" />
                    Paczki
                  </label>
                  
                  <label className="radio" style={activeOption === descriptions.paleta ? {background: '#eee'} : {background: 'none'}} htmlFor="paleta">
                    <input id="paleta" checked={activeOption === descriptions.paleta} value={descriptions.paleta} onChange={(e) => handleRadioButtonChange(e)} type="radio"/>
                    <div className="radioButton" />
                    Paleta
                  </label>

                  <label className="radio" style={activeOption === descriptions.samochody ? {background: '#eee'} : {background: 'none'}} htmlFor="auta">
                    <input id="auta" checked={activeOption === descriptions.samochody} value={descriptions.samochody} onChange={(e) => handleRadioButtonChange(e)} type="radio"/>
                    <div className="radioButton" />                    
                    Transport auta
                  </label>                  
                  <label className="radio" style={activeOption === descriptions.przeprowadzka ? {background: '#eee'} : {background: 'none'}} htmlFor={descriptions.przeprowadzka}>
                  <input id={descriptions.przeprowadzka} checked={activeOption === descriptions.przeprowadzka} value={descriptions.przeprowadzka} onChange={(e) => handleRadioButtonChange(e)} type="radio"/>
                    <div className="radioButton" />                    
                    Przeprowadzka
                  </label> 
                  <label className="radio" style={activeOption === descriptions.ponadgabarytowy ? {background: '#eee'} : {background: 'none'}} htmlFor={descriptions.ponadgabarytowy}>
                  <input id={descriptions.ponadgabarytowy} checked={activeOption === descriptions.ponadgabarytowy} value={descriptions.ponadgabarytowy} onChange={(e) => handleRadioButtonChange(e)} type="radio"/>
                  <div className="radioButton" />                    
                    Transport Ponadgabarytowy              
                  </label> 
                  </Row>
                    <Row  className="order-wrapper" >    
                     <h5 className="text-center col-sm-12">Dane kontaktowe</h5>                      
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control valid"
                                        placeholder= "Twoje imię"
                                        name="name"
                                        id="1"                                
                                        value={inputName}                                
                                        onChange={e => handleChange(e, 'name')}
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control valid"
                                        placeholder= "Twoje nazwisko"
                                        name="lastname"
                                        id="2"                                
                                        value={inputLastName}                                
                                        onChange={e => handleChange(e, 'lastname')}
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control valid"
                                        placeholder= "Email"
                                        name="email"
                                        id="3"                                
                                        value={inputEmail}                                
                                        onChange={e => handleChange(e, 'email')}
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <input
                                        type="number"
                                        className="form-control valid"
                                        placeholder= "Telefon kontaktowy"
                                        name="phone"
                                        id="4"                                
                                        value={inputPhone}                                
                                        onChange={e => handleChange(e, 'phone')}
                                        required
                                    />
                                    </div>
                                </div>
                                <h5 className="text-center col-sm-12">Miejsce załadunku</h5>  
                                <div className="col-sm-12">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control valid"
                                        placeholder= "Ulica i nr budynku załadunku"
                                        name="ulicazaladunek"
                                        id="5"                                
                                        value={ulicaZaladunek}                                
                                        onChange={e => handleChange(e, 'ulicazaladunek')}
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control valid"
                                        placeholder= "Miasto załadunku"
                                        name="miastozaladunek"
                                        id="6"                                
                                        value={miastoZaladunek}                                
                                        onChange={e => handleChange(e, 'miastozaladunek')}
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control valid"
                                        placeholder= "Kod pocztowy załadunku"
                                        name="kodpocztowyzaladunek"
                                        id="7"                                
                                        value={kodPocztowyZaladunek}                                
                                        onChange={e => handleChange(e, 'kodpocztowyzaladunek')}
                                        required
                                    />
                                    </div>
                                </div>
                                <h5 className="text-center col-sm-12">Miejsce rozładunku</h5>  
                                <div className="col-sm-12">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control valid"
                                        placeholder= "Ulica i nr budynku rozładunku"
                                        name="ulicarozladunek"
                                        id="8"                                
                                        value={ulicaRozladunek}                                
                                        onChange={e => handleChange(e, 'ulicarozladunek')}
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control valid"
                                        placeholder= "Miasto rozładunku"
                                        name="miastorozladunek"
                                        id="9"                                
                                        value={miastoRozladunek}                                
                                        onChange={e => handleChange(e, 'miastorozladunek')}
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control valid"
                                        placeholder= "Kod pocztowy rozładunku"
                                        name="kodpocztowyrozladunek"
                                        id="10"                                
                                        value={kodPocztowyRozladunek}                                
                                        onChange={e => handleChange(e, 'kodpocztowyrozladunek')}
                                        required
                                    />
                                    </div>
                                </div>
                                <h5 className="text-center col-sm-12">Specyfikacja Twojego ładunku</h5>  
                                { activeOption === descriptions.paczka ? 
                                <div className="col-sm-12">
                                    <label>
                                        <input className="radioInput" type="radio" name="radiobtn" value="do 30 kg" checked={radioBtn === "do 30 kg"} onChange={e => handleChange(e, 'radiobtn')} />
                                        do 30kg
                                    </label>
                                    <label 
                                    >
                                        <input className="radioInput" type="radio" name="radiobtn" value="powyżej 30 kg" checked={radioBtn === "powyżej 30 kg"} onChange={e => handleChange(e, 'radiobtn')} />
                                        powyżej 30kg
                                    </label>
                                    <label >
                                        <input className="radioInput" type="radio" name="radiobtn" value="waga niestandardowa" checked={radioBtn === "waga niestandardowa"} onChange={e => handleChange(e, 'radiobtn')} />
                                        waga niestandardowa
                                    </label>
                                </div> : null}
                                { activeOption === descriptions.paleta ? 
                                <div className="col-sm-12">
                                    <label>
                                        <input className="radioInput" type="radio" name="radiobtn" value="do 30 kg" checked={radioBtn === "do 30 kg"} onChange={e => handleChange(e, 'radiobtn')} />
                                        300kg
                                    </label>
                                    <label 
                                    >
                                        <input className="radioInput" type="radio" name="radiobtn" value="powyżej 30 kg" checked={radioBtn === "powyżej 30 kg"} onChange={e => handleChange(e, 'radiobtn')} />
                                        powyżej 300kg
                                    </label>
                                    <label >
                                        <input className="radioInput" type="radio" name="radiobtn" value="waga niestandardowa" checked={radioBtn === "waga niestandardowa"} onChange={e => handleChange(e, 'radiobtn')} />
                                        waga niestandardowa
                                    </label>
                                </div> : null}
                                
                                <div className="col-12">
                                    <div className="form-group">
                                    <textarea  
                                    cols="30"
                                    rows="9" 
                                    name="msg"
                                    id="11"  
                                    className="form-control w-100" 
                                    placeholder="Twoja wiadmość" 
                                    onChange={e => handleChange(e, "msg")} 
                                    value={inputMsg}
                                    required
                                    />
                                    </div>
                                </div>    
                    </Row>
                    <p>* - pola wymagane</p>
                    <div className="form-group mt-3">
                    <input className="read-more" type="submit" onClick={e => handleFormSubmit(e)} value="Wyślij" />
                    </div>
                    <div>
                    {mailSent && <div className="success">Twoja wiadomość została pomyślnie wysłana</div>}
                    {error && <div className="error">Uzupełnij wszystkie wymagane pola</div>}
                    </div>
                </form>
                </div>
       
            <div className="col-lg-4">
                <img className="imgFluid" src={wozek} alt=""/>
            </div>
    </Row>
</Container>
     );
}
 
export default SendParcel;