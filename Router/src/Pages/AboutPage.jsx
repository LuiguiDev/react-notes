import { Link } from "../Components/Link";
import '../Styles/aboutpage.css'

const i18n = {
  es: {
    title: 'Sobre el autor',
    description: 'Luis Rodríguez es un desarrollador web que actualmente está aprendiendo React, node y javascript avanzado, también está aprendiendo algunas librerías como three.js.',
    button: 'Regresar al inicio'
  },
  en: {
    title: 'About the autor',
    description: 'Luis Rodríguez is a frontend developer currently learning react, node and and advanced javascript, also he is learning some libraries such as three.js.',
    button: 'Back to home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  console.log(routeParams)
  const i18n = useI18n(routeParams.lang ?? 'en');

  return (
    <>
      <h2>{i18n.title}</h2>
      <div className="info">
        <img src="https://pbs.twimg.com/profile_images/1627866404698394625/Qf9ZE1vq_400x400.jpg" alt="Luigui's picture" />
        <div className="text">
          <p>{i18n.description}</p>
          <Link to={'/'} >{i18n.button}</Link>
        </div>
      </div>
    </>
  )
}
