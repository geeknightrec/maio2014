module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Geek Night Recife",
      description: " ",
      date: "27 Maio",
      venue: "ThoughtWorks",
      address: "Av. Governador Agamenon Magalhães, 4779",
      city: "Recife",
      state: "PE"
    },

    // The Call To Action button at the header,
    callToAction: {
        text: "Eu vou!",
        link: "https://docs.google.com/a/thoughtworks.com/forms/d/17uERT0iK3kLzzSSEDVPnXHniI3-9Lc7qrvRSQOjsWiM/viewform"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
    //  'sponsors',
    //  'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      //sponsors: "Sponsors",
      partners: "Partners"
      //contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Eraldo Guerra",
        photo: "themes/yellow-swan/img/eraldo.jpg",
        bio: "CEO and Fundador da LifeUp Brasil",
        presentation: {
          title: "CanGame e outras soluções da LifeUp",
          description: "O Can Game é um software, desenvolvido pela Life Up, que promove por meio de brincadeiras novas experiências educacionais e de tratamento do autismo. Sendo uma ferramenta inovadora e facilitadora para os médicos que tratam do autismo, pois além de facilitar o processo atual, cria motivação da criança em realizar a atividade. O software foi desenvolvido pela LifeUp, uma Fábrica de Software focada em empreendedorismo de alto impacto, oferecendo serviços de desenvolvimento e manutenção de sistemas, consultoria e softwares exclusivos desde junho de 2013,",
          time: "19h30"
        }
      },
      {
        name: "Break",
        time: "20h10"
      },
      {
        name: "Yelken Gonzales",
        photo: "themes/yellow-swan/img/yelken.jpeg",
        bio: "Pós graduando em Segurança da informação; Graduado em Sistemas de informação pela Faculdade Santa Maria; Tecnólogo em Analise e desenvolvimento de sistemas pela UNIBRATEC; Certificações OCJA, OCJP e ITIL V3 Foundation; Analista de Sistemas na Home Center Ferreira Costa; Voluntário da ONU trabalhando atualmente com desenvolvimento de software em alguns projetos sociais;",
        link: {
          href: "https://twitter.com/yelkezin",
          text: "@yelken"
        },
        presentation: {
          title: "VRaptor:  Desenvolvendo aplicações em JAVA de forma rápida e fácil",
          description: "A palestra tem por objetivo mostrar como desenvolver aplicações para WEB com JAVA de forma rápida e fácil utilizando o framework VRaptor.",
          time: "20h20"
        }
      }     
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "ThoughWorks Recife",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
      return this.site.url;
    }
  }
};
