/* eslint-disable react/react-in-jsx-scope */
import * as uuid from 'uuid'

import CBOImage from '../../assets/CBOImage.png'
import CarvalhoImage from '../../assets/Image-Carvalho.png'
import ImgProjectHomePage from '../../assets/Image-ProjectOne.png'
import ImageCoffe from '../../assets/ImageCoffe.png'
import ImageIgniteTimer from '../../assets/ImageIgniteTimer.png'
import EscolaEPImage from '../../assets/Imagem-escola-ep.png'
import ImgProgectPageVideo from '../../assets/ImageProject-Two.png'
import MacaeImage from '../../assets/Macae-imagem.png'
import MyFirstProject from '../../assets/MyfirstProject.jpg'
import ImgProjectArtBootstrap from '../../assets/Project-Art-Bootstrap.png'
import ImgProjectArtReact from '../../assets/Project-Art.png'
import ImgProjectCocaCola from '../../assets/Project-CocaCola.png'
import ImgProjectHomeYou from '../../assets/Project-HomeYou.png'
import Qrcode from '../../assets/QrcodeSite.png'
import SMFImage from '../../assets/smf-image.png'
import TdbrImage from '../../assets/Tdbr-Image.png'
import TodoListImage from '../../assets/TodoListImage.png'
export const ListCard = [
  {
    id: `${uuid.v4()}`,
    NameProject: 'Gerador QrCode',
    DescriptionProject:
      'Esse é um projeto em que coloco em prática os conhecimentos em react.js, typeScript e styled-components',
    LinkProject: 'https://qr-code-site-chi.vercel.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/QrCode-Site/tree/master',
    ImageProject: `${Qrcode}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'REACT.JS, TYPESCRIPT, STYLED-COMPONENTS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Site Escola Carvalho',
    DescriptionProject:
      'Atualizei o layout do site todo trocando as cores, texto e afins',
    LinkProject: 'https://www.cecarvalho.com.br/',
    LinkGitHub: '#',
    ImageProject: `${CarvalhoImage}`,
    StudyProject: false,
    WorkProjects: true,
    Tecnologies: 'HTML, JAVASCRPT, BOOTSTRAP, CSS'
  },

  {
    id: `${uuid.v4()}`,
    NameProject: 'Ignite Coffe',
    DescriptionProject:
      'Esse é o segundo desafio da saga React.js do IGNITE, praticando os conceitos aprendidos',
    LinkProject: 'https://ignite-coffee-seven.vercel.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/Ignite-Coffee',
    ImageProject: `${ImageCoffe}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'REACT.JS, TYPESCRIPT, STYLED-COMPONENTS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Ignite Timer',
    DescriptionProject:
      'Este foi um projeto que fizemos no ignite revendo alguns conceitos do React.js',
    LinkProject: 'https://ignite-timer-729f.vercel.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/Ignite-Timer',
    ImageProject: `${ImageIgniteTimer}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'REACT.JS, TYPESCRIPT, STYLED-COMPONENTS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'TodoList',
    DescriptionProject:
      'Este é um Desafio da Rocketseat Ignite, Jornada React.JS',
    LinkProject: 'https://todo-list-4h9k.vercel.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/TodoList',
    ImageProject: `${TodoListImage}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'REACT.JS, TYPESCRIPT, CSS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Site Escola CBO',
    DescriptionProject:
      'Participei do desenvolvimento deste site, Fazendo as paginas adjacentes',
    LinkProject: 'https://www.colegiocbo.com.br/site/',
    LinkGitHub: '#',
    ImageProject: `${CBOImage}`,
    StudyProject: false,
    WorkProjects: true,
    Tecnologies: 'HTML, JAVASCRPT, BOOTSTRAP, CSS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Site Corretora SMF',
    DescriptionProject:
      'Estou desenvolvendo este site completamente do zero criando o layout e colocando-o para funcionar',
    LinkProject: 'https://site-smf-corretora.vercel.app/',
    LinkGitHub: '#',
    ImageProject: `${SMFImage}`,
    StudyProject: false,
    WorkProjects: true,
    Tecnologies: 'HTML, JAVASCRPT, BOOTSTRAP, CSS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Web Site HOMEYOU',
    DescriptionProject:
      'Esse é um Projeto foi feito através dos desafios do Iuri',
    LinkProject: 'https://web-site-homeyou.netlify.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/Project-HOMEYOU',
    ImageProject: `${ImgProjectHomeYou}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'REACT.JS, STYLED-COMPONENTS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Escola EP',
    DescriptionProject:
      'Desenvolvi a Atualização do site, porém esta no aguardo da aprovação do cliente.',
    LinkProject: 'https://escola-ep.vercel.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/Escola-EP',
    ImageProject: `${EscolaEPImage}`,
    StudyProject: false,
    WorkProjects: true,
    Tecnologies: 'HTML, JAVASCRPT, BOOTSTRAP, CSS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Site Macaé em Obras',
    DescriptionProject:
      'Participei do desenvolvimento deste site junto a Prefitura de Macaé-RJ',
    LinkProject: 'https://macae.rj.gov.br/obrapratodolado/',
    LinkGitHub:
      'https://github.com/WesleiPossidonio/site-prefeitura-de-maca--obras',
    ImageProject: `${MacaeImage}`,
    StudyProject: false,
    WorkProjects: true,
    Tecnologies: 'HTML, JAVASCRPT, BOOTSTRAP, CSS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'TDBR Inspections',
    DescriptionProject:
      'Neste site fizemos uma atualização do layout, no css cores dos textos e banners',
    LinkProject: 'http://www.tdbrinspections.com/',
    LinkGitHub: '#',
    ImageProject: `${TdbrImage}`,
    StudyProject: false,
    WorkProjects: true,
    Tecnologies: 'HTML, JAVASCRPT, BOOTSTRAP, CSS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'My First Projetc React',
    DescriptionProject: 'Esse foi o meu primeiro projeto com react e node.js',
    LinkProject: 'https://first-react-users.netlify.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/my-first-react-project',
    ImageProject: `${MyFirstProject}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'REACT.JS, NODE.JS,'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Responsive Home Page',
    DescriptionProject:
      'Esse é um Projeto onde faço uma Home page com animações e reponsiva',
    LinkProject: 'https://mynewhomepage.netlify.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/responsive-home-page',
    ImageProject: `${ImgProjectHomePage}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'HTML, CSS'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Landing-Page-Video',
    DescriptionProject:
      ' Esse é um Projetinho onde brinco com videos dentro da li junto com o data-src.',
    LinkProject: 'https://wesleipossidonio.github.io/Landing-Page-Video/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/Landing-Page-Video',
    ImageProject: `${ImgProgectPageVideo}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'HTML, CSS, JavaScript'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Coca-Cola Web Site',
    DescriptionProject:
      'Esse é um Projeto onde faço uma Home page com animações e reponsiva',
    LinkProject: 'https://website-cocacola.netlify.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/Coca-Cola-WebSite',
    ImageProject: `${ImgProjectCocaCola}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'HTML, CSS, JavaScript'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Project Art',
    DescriptionProject:
      'Esse é um Projeto onde faço uma Home page com animações e reponsiva usando Bootstrap',
    LinkProject: 'https://project-art.netlify.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/Project-art',
    ImageProject: `${ImgProjectArtBootstrap}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'HTML, CSS, JAVASCRIPT, BOOTSTRAP'
  },
  {
    id: `${uuid.v4()}`,
    NameProject: 'Web Site Art.',
    DescriptionProject:
      'Esse é um Projeto foi feito através dos desafios do Iuri',
    LinkProject: 'https://web-site-art.netlify.app/',
    LinkGitHub: 'https://github.com/WesleiPossidonio/Web-Site-Art.',
    ImageProject: `${ImgProjectArtReact}`,
    StudyProject: true,
    WorkProjects: false,
    Tecnologies: 'REACT.JS, JAVASCRPT, STYLED-COMPONENTS'
  }
]
