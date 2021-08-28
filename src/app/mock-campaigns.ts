import { Campaign } from './campaing';

export const CAMPAIGNS: Campaign[] = [
    { id: 1,
        name: 'Colecta Pupis en Adopcion',
        brief: 'Estamos organizando una rifa para ayudar al rescate de animales callejeros.',
        story: 'Los invitamos a ver mas en @pupis_en_adopcion en instagram en donde nos unimos a @hilosdecati para ayudar a recaudar dinero para las organizaciones que se dedican al rescate, transito y curar animales sin casa o en situación de maltrato',
        category: 'Otro',
        img: '../../../assets/images/placeholder/pupis_adopcion.png',
        btn_mp:'https://mpago.la/2GsP1B7',
        user: 'Catalina Scarone',
        monto: '$8.000',
        ig: 'https://instagram.com/pupis_en_adopcion',
        location: 'San Isidro, Buenos Aires'
    },
    { id: 2,
        name: 'Olla Popular - Ritmo Xeneize',
        brief: 'Comedor popular y cultural del barrio de La Boca. Se encuentran recolectando donaciones para hacer un regalito a lxs chicxs del barrio',
        story: 'Cocinamos para el barrio junto a la bateria de Ritmo Xeneize. Haciendo beneficencia y llevando cultura al barrio.',
        category: 'Comunidad',
        img: '../../../assets/images/placeholder/ritmo_xeneize.png',
        btn_mp:'',
        user: 'Cristina Mabel Soto',
        monto: '$500.000',
        ig: '@daleeeee_boooocaaaa',
        location: 'Ciudad Autonoma de Buenos Aires'
    }, {
        id: 3,
        name: 'Vaquita',
        brief: 'Somos una plataforma colaborativa para causas sociales, en la cual podras realizar pequeñas donaciones en las causas que quieras. Esta donación es para ayudarnos a nosotros a mantener el sitio online.',
        story: 'Nacimos en 2021 como una forma de colaborar con miles de causas a las cuales se les complicaba su difusión y, por ende, la recolección de donativos para sus causas. Vaquita ofrece una plataforma simple y rápida para realizar pequeñas donaciones. Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, pueden cambiar el mundo',
        category: 'Comunidad',
        img: '../../../assets/images/placeholder/vaquita_cambio.png',
        btn_mp:'https://mpago.la/2vM2VVo',
        user: 'Vaquita App',
        monto: '$100.000',
        ig: 'https://www.instagram.com/vaquita.app',
        location: 'Ciudad Autonoma de Buenos Aires'
    }, {
        id: 4,
        name: 'Lucho Paz',
        brief: 'Me llamo Luis y necesito ayuda para realizarme una cirugía 🙏',
        story: 'Tengo que realizarme una cirugía maxilofacial por hiperplasia condilar, la patologia me afecta el maxilar y el nervio causando mareos y migrañas. No tengo cobertura y cuesta $1.800.000 les pido ayuda',
        category: 'Salud',
        img: '../../../assets/images/placeholder/luispaz.png',
        btn_mp:'https://mpago.li/1VQQdTi',
        user: 'Luis Alfredo Paz',
        monto: '$1.800.000',
        ig: '#',
        location: 'Ciudad Autonoma de Buenos Aires'
    },
    {
        id: 5,
        name: 'Ayuda económica para gatito 🐈‍⬛ ',
        brief: 'Necesito ayuda económica para este pequeño gatito',
        story: 'Fue encontrado con un tumor por falta de castracion, además de eso tiene una patita quebrada, necesitamos costear los gastos ya que estoy sin trabajo, necesita medicación, estudios, etc.',
        category: 'Otro',
        img: '../../../assets/images/placeholder/gatito.png',
        btn_mp:'https://mpago.la/1UN8G5R',
        user: 'Dana Moros',
        monto: '$15.000',
        ig: '#',
        location: 'Córdoba'
    },
    {
        id: 6,
        name: '#TodosPorMelo ',
        brief: 'Hola a todos, necesitamos de su ayuda para llegar a conseguir el dinero necesario  para que Melo y su familia puedan tener *UNA CASA DIGNA Y EN CONDICIONES PARA SUS NECESIDADES Y SU BIENESTAR* sabemos que es mucho, pero con un graniti de arena que  pongamos cada uno lo podemos lograr, desde ya muchas gracias ♥️',
        story: 'Melody tiene 2 años. Tiene un síndrome llamado Dandy Walker,  polidactilia, orofacio digital 10 y depende las 24 horas de ARM (ASISTENCIA, RESPIRATORIA MECÁNICA). Estuvo 7 meses internada desde que nació en el hospital materno infantil San Roque de Paraná, 1 mes en el hospital de origen de la ciudad de Gualeguaychú, Entre Ríos. Hasta lograr conseguir todos los aparatos necesarios para la internación domiciliaria y una casa en condiciones (cerca del hospital, las calles asfaltadas, sin humedad y una habitación acondicionada para ella). Se lograron conseguir los aparatos, pero la casa la alquilan y en la situación en la que está su familia se les complica cada vez más seguir alquilando. A su vez, ya sufrieron robos dónde alquilan y no obtiene respuesta de parte del estado. Su lucha es constante  y necesitan lo más importante para Melo, *UNA CASA CON TODAS LAS MEDIDAS QUE MELODY NECESITA PARA SU MEJORÍA*',
        category: 'Salud',
        img: '../../../assets/images/placeholder/todosxmelo.jpg',
        btn_mp:'https://mpago.la/1ANXPcX',
        user: 'Luana Micaela  González',
        monto: '$15.000',
        ig: '#',
        location: 'Villa Paranacito, Entre Rios'
    }
];