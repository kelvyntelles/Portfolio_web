import { BotaoContato } from '@/components/BotaoContato';
import styles from './home.module.scss'
import { 
  AiFillLinkedin, 
  AiFillGithub, 
  AiOutlineWhatsApp,
  AiFillHtml5,
  AiOutlineArrowDown,
  AiOutlineMail
} from 'react-icons/ai';

import { 
  BiLogoReact, 
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
  BiUserCircle
} from 'react-icons/bi'

import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'
import { LiaSass } from 'react-icons/lia'
import { SiStyledcomponents, SiPrisma } from 'react-icons/si'
import { Educacao } from '@/components/Educacao';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.home}>
          <header>
            <AiFillHtml5 color='#ed9121' className={styles.home_icon} />
            <BiLogoCss3 color='#264de4' className={styles.home_icon} />
            <BiLogoJavascript color='#ff0' className={styles.home_icon} />
            <BiLogoReact color='#61DBFB' className={styles.home_icon} />
            <TbBrandNextjs color='#000000' className={styles.home_icon} />
            <BiLogoTypescript color='#007acc' className={styles.home_icon} />
          </header>
          <main>
            <div className={styles.home_lado_esquerdo}>
              <div>
                <a href='https://github.com/kelvyntelles' target='_blank'><AiFillGithub size={24} /></a>
                <a href='https://www.linkedin.com/in/kelvyn-telles-35775920b/' target='_blank'><AiFillLinkedin size={24} color='#0e76a8' /></a>
                <a href='https://wa.me/24992281699' target='_blank'><AiOutlineWhatsApp size={24} color='#25D366' /></a>
              </div>
              <h1>Olá, sou Kelvyn Telles</h1>
              <p>{'<Desenvolvedor Front-End />'}</p>
            </div>

            <div>
              <BiLogoReact size={200} color='#61DBFB' />
            </div>
          </main>
          <footer>
            <button onClick={() => (
              window.scroll({top: 700, left: 0, behavior: 'smooth' })
            )} ><AiOutlineArrowDown size={32} color='#ffffff' /></button>
          </footer>
        </div>

        <div className={styles.sobre}>
          <div className={styles.contato}>
            <h2>Sobre</h2>
            <p>
              Sou desenvolvedor Front-end, e nos últimos meses 
              tenho desenvolvido websites e sistemas utilizando 
              as melhores práticas e frameworks do mercado.
            </p>
            <div className={styles.contato_info}>
              <div>
                <span>Nome:</span>
                Kelvyn Telles
              </div>
              <div>
                <span>Email:</span>
                kelvyn.telles@gmail.com 
              </div>
              <div>
                <span>Telefone:</span>
                (24) 99228-1699
              </div>
              <div>
                <span>Status:</span>
                Engenheiro de Software
              </div>
            </div>
            <hr />
            <div className={styles.contato_area_botao}>
              <BotaoContato />
              <a 
                href='https://drive.google.com/file/d/1ugy7XVK8bB8zoMDWKmG08bRlN9A00mYR/view?usp=sharing' 
                target='_blank' 
                className={styles.botao_baixar_cv}
              >
                BAIXAR CV
              </a>
            </div>
          </div>

          <div className={styles.tecnologias}>
              <h2>Tecnologias</h2>

              <div>
                <span>
                  <AiFillHtml5 size={20} color='#ed9121' />
                  HTML
                </span>
                <span>
                  <BiLogoCss3 size={20} color='#264de4' />
                  CSS
                </span>
                <span>
                  <BiLogoJavascript size={20} color='#ff0' />
                  Javascript
                </span>
                <span>
                  <BiLogoReact size={20} color='#61DBFB' />
                  React.js
                </span>
                <span>
                  <TbBrandNextjs size={20} color='#000000' />
                  Next.js
                </span>
                <span>
                  <BiLogoTypescript size={20} color='#007acc' />
                  Typescript.js
                </span>
                <span>
                  <TbBrandReactNative size={20} color='#61DBFB' />
                  React native
                </span>
                <span>
                  <BiLogoNodejs size={20} color='#68A063' />
                  Node.js
                </span>
                <span>
                  <SiPrisma size={20} color='#120a8f' />
                  Prisma
                </span>
                <span>
                  <SiStyledcomponents size={20} color='#ffc0cb' />
                  Styled-components
                </span>
                <span>
                  <LiaSass size={20} color='#ff6f9c' />
                  SASS
                </span>
              </div>
          </div>
        </div>

        <div className={styles.proximo_projeto}>
          <div>
            <p>Vamos trabalhar juntos em seu próximo projeto!</p>
          </div>
          <BotaoContato />
        </div>

        <div className={styles.container_educacao_eskills}>
          <h1>Educação e Skills</h1>

          <div className={styles.main_educacao_skills}>
              <Educacao 
                imgUrl='/logo-rocktseat.png'
                instituicao='Rocktseat'
                curso='Formação Full Stack Javascript'
              />
              <Educacao 
                imgUrl='/logo-uv.png'
                instituicao='Universidade de Vassouras'
                curso='Engenharia de Software'
              />
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div>
          <div>
            <BiUserCircle size={20} />
            <strong>Nome:</strong>
            <span>Kelvyn Telles</span>
          </div>
          <div>
            <AiOutlineWhatsApp size={20} color='#25D366' />
            <strong>Telefone:</strong>
            <span>(24) 99228-1699</span>
          </div>
          <div>
            <AiOutlineMail size={20} color='#A52A2A' />
            <strong>Email:</strong>
            <span>kelvyn.telles@gmail.com</span>
          </div>
          <div>
            <AiFillGithub size={20} />
            <strong>GitHub:</strong>
            <span>github.com/kelvyntelles</span>
          </div>
          <div>
            <AiFillLinkedin size={20} color='#0e76a8' />
            <strong>Linkedin:</strong>
            <span>linkedin.com/in/kelvyn-telles-35775920b/</span>
          </div>
        </div>
              
        <p>Desenvolvido por Kelvyn Telles.</p>
      </div>

    </div>
  )
}
