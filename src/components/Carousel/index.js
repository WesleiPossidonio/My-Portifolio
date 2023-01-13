import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs
} from 'react-icons/fa'
import { FiLink, FiGithub } from 'react-icons/fi'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiStyledcomponents } from 'react-icons/si'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import ImgProjectHomePage from '../../assets/Image-ProjectOne.jpg'
import ImgProgectPageVideo from '../../assets/ImageProject-Two.jpg'
import MyFirstProject from '../../assets/MyfirstProject.jpg'
import ImgProjectArtBootstrap from '../../assets/Project-Art-Bootstrap.jpg'
import ImgProjectArtReact from '../../assets/Project-Art.jpg'
import ImgProjectCocaCola from '../../assets/Project-CocaCola.jpg'
import ImgProjectGCB from '../../assets/Project-gcb.jpg'
import ImgProjectHomeYou from '../../assets/Project-HomeYou.jpg'
import { Button } from '../Button'
import {
  Container,
  CardItem,
  Image,
  ContainerText,
  NameProject,
  AboutProject,
  ContainerButton,
  ContainerIcons
} from './Style'

export const IsCarousel = () => {
  return (
    <>
      <Container>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 150
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            820: {
              slidesPerView: 3,
              spaceBetween: 150
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10
            }
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardItem>
              <Image src={ImgProjectHomeYou} alt="imagem-project-HomeYou" />
              <ContainerText>
                <NameProject>Web Site HOMEYOU</NameProject>
                <AboutProject>
                  Esse é um Projeto foi feito através dos desafios do Iuri
                </AboutProject>
                <ContainerButton>
                  <Button
                    href="https://web-site-homeyou.netlify.app/"
                    target="_blank"
                    cardButton
                  >
                    <FiLink />
                    Acessar
                  </Button>
                  <Button
                    href="https://github.com/WesleiPossidonio/Project-HOMEYOU"
                    target="_blank"
                    cardButton
                  >
                    <FiGithub />
                    GitHub
                  </Button>
                </ContainerButton>
                <ContainerIcons>
                  <FaReact />
                  <IoLogoJavascript />
                  <SiStyledcomponents />
                </ContainerIcons>
              </ContainerText>
            </CardItem>
          </SwiperSlide>

          <SwiperSlide>
            <CardItem>
              <Image src={ImgProjectGCB} alt="imagem-project-healthy-food" />
              <ContainerText>
                <NameProject>Teste Empresa GCB</NameProject>
                <AboutProject>
                  Esse foi um teste prático para a empresa GCB
                </AboutProject>
                <ContainerButton>
                  <Button
                    href="https://desafio-healthy-food.netlify.app/"
                    target="_blank"
                    cardButton
                  >
                    <FiLink />
                    Acessar
                  </Button>
                  <Button
                    href="https://github.com/WesleiPossidonio/GCB-Teste"
                    target="_blank"
                    cardButton
                  >
                    <FiGithub />
                    GitHub
                  </Button>
                </ContainerButton>
                <ContainerIcons>
                  <FaReact />
                  <IoLogoJavascript />
                  <SiStyledcomponents />
                </ContainerIcons>
              </ContainerText>
            </CardItem>
          </SwiperSlide>

          <SwiperSlide>
            <CardItem>
              <Image src={ImgProjectArtReact} alt="imagem-project-Art." />
              <ContainerText>
                <NameProject>Web Site Art.</NameProject>
                <AboutProject>
                  Esse é um Projeto foi feito através dos desafios do Iuri
                </AboutProject>
                <ContainerButton>
                  <Button
                    href="https://web-site-art.netlify.app/"
                    target="_blank"
                    cardButton
                  >
                    <FiLink />
                    Acessar
                  </Button>
                  <Button
                    href="https://github.com/WesleiPossidonio/Web-Site-Art."
                    target="_blank"
                    cardButton
                  >
                    <FiGithub />
                    GitHub
                  </Button>
                </ContainerButton>
                <ContainerIcons>
                  <FaReact />
                  <IoLogoJavascript />
                  <SiStyledcomponents />
                </ContainerIcons>
              </ContainerText>
            </CardItem>
          </SwiperSlide>

          <SwiperSlide>
            <CardItem>
              <Image src={MyFirstProject} alt="imagem-MyFirst-Project-React" />
              <ContainerText>
                <NameProject>My First Projetc React</NameProject>
                <AboutProject>
                  Esse foi o meu primeiro projeto com react e node.js
                </AboutProject>
                <ContainerButton>
                  <Button
                    href="https://first-react-users.netlify.app/"
                    target="_blank"
                    cardButton
                  >
                    <FiLink />
                    Acessar
                  </Button>
                  <Button
                    href="https://github.com/WesleiPossidonio/my-first-react-project"
                    target="_blank"
                    cardButton
                  >
                    <FiGithub />
                    GitHub
                  </Button>
                </ContainerButton>
                <ContainerIcons>
                  <FaReact />
                  <FaNodeJs />
                  <FaHtml5 />
                  <IoLogoJavascript />
                  <SiStyledcomponents />
                </ContainerIcons>
              </ContainerText>
            </CardItem>
          </SwiperSlide>

          <SwiperSlide>
            <CardItem>
              <Image src={ImgProjectHomePage} alt="imagem-Project-HomePage" />
              <ContainerText>
                <NameProject>Responsive Home Page</NameProject>
                <AboutProject>
                  Esse é um Projeto onde faço uma Home page com animações e
                  reponsiva,
                </AboutProject>
                <ContainerButton>
                  <Button
                    href="https://mynewhomepage.netlify.app/"
                    target="_blank"
                    cardButton
                  >
                    <FiLink />
                    Acessar
                  </Button>
                  <Button
                    href="https://github.com/WesleiPossidonio/responsive-home-page"
                    target="_blank"
                    cardButton
                  >
                    <FiGithub />
                    GitHub
                  </Button>
                </ContainerButton>
                <ContainerIcons>
                  <FaHtml5 />
                  <FaCss3Alt />
                </ContainerIcons>
              </ContainerText>
            </CardItem>
          </SwiperSlide>

          <SwiperSlide>
            <CardItem>
              <Image src={ImgProgectPageVideo} alt="imagem-Project-PageVideo" />
              <ContainerText>
                <NameProject>Landing-Page-Video</NameProject>
                <AboutProject>
                  Esse é um Projetinho onde brinco com videos dentro da li junto
                  com o data-src.
                </AboutProject>
                <ContainerButton>
                  <Button
                    href="https://wesleipossidonio.github.io/Landing-Page-Video/"
                    target="_blank"
                    cardButton
                  >
                    <FiLink />
                    Acessar
                  </Button>
                  <Button
                    href="https://github.com/WesleiPossidonio/Landing-Page-Video"
                    target="_blank"
                    cardButton
                  >
                    <FiGithub />
                    GitHub
                  </Button>
                </ContainerButton>
                <ContainerIcons>
                  <FaHtml5 />
                  <FaCss3Alt />
                  <IoLogoJavascript />
                </ContainerIcons>
              </ContainerText>
            </CardItem>
          </SwiperSlide>

          <SwiperSlide>
            <CardItem>
              <Image src={ImgProjectCocaCola} alt="imagem-Project-Coca-Cola" />
              <ContainerText>
                <NameProject>Coca-Cola Web Site</NameProject>
                <AboutProject>
                  Esse é um Projeto onde faço uma Home page com animações e
                  reponsiva
                </AboutProject>
                <ContainerButton>
                  <Button
                    href="https://website-cocacola.netlify.app/"
                    target="_blank"
                    cardButton
                  >
                    <FiLink />
                    Acessar
                  </Button>
                  <Button
                    href="https://github.com/WesleiPossidonio/Coca-Cola-WebSite"
                    target="_blank"
                    cardButton
                  >
                    <FiGithub />
                    GitHub
                  </Button>
                </ContainerButton>
                <ContainerIcons>
                  <FaHtml5 />
                  <FaCss3Alt />
                  <IoLogoJavascript />
                </ContainerIcons>
              </ContainerText>
            </CardItem>
          </SwiperSlide>

          <SwiperSlide>
            <CardItem>
              <Image
                src={ImgProjectArtBootstrap}
                alt="imagem-Project-Art-Bootstrap"
              />
              <ContainerText>
                <NameProject>Project Art</NameProject>
                <AboutProject>
                  Esse é um Projeto onde faço uma Home page com animações e
                  reponsiva usando Bootstrap
                </AboutProject>
                <ContainerButton>
                  <Button
                    href="https://project-art.netlify.app/"
                    target="_blank"
                    cardButton
                  >
                    <FiLink />
                    Acessar
                  </Button>
                  <Button
                    href="https://github.com/WesleiPossidonio/Project-art"
                    target="_blank"
                    cardButton
                  >
                    <FiGithub />
                    GitHub
                  </Button>
                </ContainerButton>
                <ContainerIcons>
                  <FaHtml5 />
                  <FaBootstrap />
                  <IoLogoJavascript />
                </ContainerIcons>
              </ContainerText>
            </CardItem>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  )
}
