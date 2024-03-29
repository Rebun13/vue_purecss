import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    menu: {
      me: 'Me',
      educationAndExperience: 'Education and experience',
      myProjects: 'My Projects',
      myLinks: 'My Links'
    },
    header: {
      title: 'Hey, thank you for coming!',
      subtitle: 'Let me introduce myself'
    },
    section1: {
      title: 'And who I am?',
      paragraph1: 'I am Rubén, a computer engineer from Galicia.',
      paragraph2:
        'I graduated from the University of Vigo, and since then I have \
            worked as a web application developer, both frontend and backend.'
    },
    educationAndExperience: {
      section1: {
        paragraph1:
          'En cuanto a aplicaciones web, tengo experiencia principalemente con Python \
                  (y especialmente con Django), pero también me manejo con JavaScript, y se \
                  utilizar Vue.js y React, y también he hecho alguna aplicación básica con \
                  PHP y Laravel. Además, para el estilo, normalmente utilizo CSS en crudo, \
                  pero he trabajado también con TailWind, BootStrap y PureCSS. Por último, he \
                  tomado por costumbre dockerizar todas mis aplicaciones, de modo que me manejo \
                  bien con Docker y Docker Compose.',
        paragraph2:
          "I often use relational databases such as PostgreSQL, TimescaleDB, SQLite or MySQL, \
                  and I have even used MongoDB in some projects. I'd mention that I have worked \
                  with REST APIs (Django, FastAPI, Axios) and MQTT, and I have handled data in \
                  formats such as JSON and XML.",
        paragraph3:
          "In addition to this, I am fluent in C++ programming, as I have studied a master's \
                  degree in Game Development mainly focused on Unreal Engine 5 (UE5), and C++ is my \
                  preferred programming language for this use. In this master I also learned how to use \
                  3D modelling tools, such as 3DS MAX, Substance 3D Painter, Blender and ZBrush, and I \
                  also learned about Unity and UE5 engines."
      }
    }
  },
  es: {
    menu: {
      me: 'Yo',
      educationAndExperience: 'Educación y experiencia',
      myProjects: 'Mis proyectos',
      myLinks: 'Mis Enlaces'
    },
    me: {
      section1: {
        title: '¿Y quién soy yo?',
        paragraph1: 'Soy Rubén, vengo de Galicia y me dedico a la ingeniería informática.',
        paragraph2:
          'Me saqué la carrera en la Universidade de Vigo, y desde entonces he \
            trabajado como desarrollador de aplicaciones web, tanto en frontend como \
            en backend.'
      }
    },
    educationAndExperience: {
      section1: {
        paragraph1:
          'En cuanto a aplicaciones web, tengo experiencia principalemente con Python \
                (y especialmente con Django), pero también me manejo con JavaScript, y se \
                utilizar Vue.js y React, y también he hecho alguna aplicación básica con \
                PHP y Laravel. Además, para el estilo, normalmente utilizo CSS en crudo, \
                pero he trabajado también con TailWind, BootStrap y PureCSS. Por último, he \
                tomado por costumbre dockerizar todas mis aplicaciones, de modo que me manejo \
                bien con Docker y Docker Compose.',
        paragraph2:
          'También utilizo a menudo bases de datos relacionales como PostgreSQL, \
                TimescaleDB, SQLite o MySQL, e incluso he utilizado MongoDB en algún proyecto. \
                A esto puedo añadir que he trabajado con APIs REST (Django, FastAPI, Axios) y MQTT, \
                y he manejado datos en formatos como JSON y XML.',
        paragraph3:
          'Además de esto, tengo fluidez programando en C++, ya que he estudiado un \
                máster en Desarrollo de Videojuegos centrado principalmente en Unreal Engine 5 (UE5), \
                y C++ es mi lenguage de programación preferente para este uso. En este máster \
                también aprendí a utilizar herramientas para modelado 3D, tal que 3DS MAX, Substance \
                3D Painter, Blender y ZBrush, y también he aprendido sobre los motores Unity y UE5.'
      }
    }
  }
}

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages
})
