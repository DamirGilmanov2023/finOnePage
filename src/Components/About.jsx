import { Container,Row,Col,Button } from "react-bootstrap"
import leftImg from '../assets/left_img.jpg'
import styled from "styled-components"
import '../assets/font/font.css'
const StyledWrapper = styled.section`
  .about_img {
    transition: margin-left 0.3s ease;
    margin-left:-10dvw;
  }
  .slogan{
    font-weight:bold;
    font-family:'OpenSansBold';
    color:#4a657d;
    font-size:25pt;
  }
  .about_text{
    font-family:'OpenSansBold';
    color:#4a657d;
    font-size:15pt;
  }
  @media (max-width: 1120px) {
    .slogan{
      font-size:20pt;
    }
    .about_text{
      font-size:10pt;
    }
  }
  @media (max-width: 1280px) {
    .about_img{
      margin-left:-15dvw;
    }
  }
  @media (max-width: 1178px) {
    .about_img{
      margin-left:-20dvw;
    }
  }
  @media (max-width: 1070px) {
    .about_img{
      margin-left:-25dvw;
    }
  }
  @media (max-width: 992px) {
    .about_img{
      margin-left:-30dvw;
    }
  }
  @media (max-width: 923px) {
    .about_img{
      margin-left:-35dvw;
    }
  }
  @media (max-width: 885px) {
    .about_img{
      margin-left:-40dvw;
    }
  }
  @media (max-width: 810px) {
    .about_img{
      margin-left:-45dvw;
    }
  }
  @media (max-width: 767px) {
    .about_img{
      margin-left:0dvw;
      width:95dvw;
    }
  }
`
const ContackUs=styled(Button)`
    &:hover{background-color:#12ab12 !important; color:#fff;}
    border-radius:none;
    border:none;
    color:#fff;
    @media (max-width: 842px) {
        font-size:9pt;
    }
`
export default function About({setShowModal}){
return(
<StyledWrapper id='about'>
<Container fluid className='my-5 about' style={{maxWidth:'1536px'}}>
<Row className='align-items-center'>
  <Col md={5} sm={12} className='img_container'><img src={leftImg} alt="Получите кредит для бизнеса без лишних сложностей" className="about_img" /></Col>
  <Col md={7} sm={12} className="px-5">
    <h1 className="slogan">{'Получите кредит для бизнеса без лишних сложностей!'.toUpperCase()}</h1>
    <br/>
    <p className="about_text">
    Если вам нужно финансирование, но вы не хотите разбираться с документами и нюансами
    оформления — мы поможем! Мы с 6-летним опытом работы в сфере кредитования
    возьмём на себя всю работу: подготовим документы, упакуем ваш проект и будем
    сопровождать на каждом этапе до получения кредитных средств. Мы помогаем получить
    кредиты на развитие бизнеса, инвестиции, участие в тендерах и финансирование через
    госпрограммы. У нас прозрачная работа без предоплаты.
    </p>
    <p className="about_text">Что мы вам гарантируем:</p>
    <ul className="about_text">
      <li>Полное сопровождение от сбора документов по получения кредита.</li>
      <li>Отсутствие оплаты до полного исполнения нами работы.</li>
    </ul>
    <p className="about_text"> Запишитесь на бесплатную консультацию. Мы разберём ваш проект и предложим оптимальные условия.
    </p>
    <ContackUs className='btn-info me-5' onClick={()=>setShowModal(true)} >СВЯЖИТЕСЬ С НАМИ</ContackUs>
  </Col>
</Row>
</Container></StyledWrapper>)}