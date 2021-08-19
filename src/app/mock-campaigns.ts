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
        ig: 'https://instagram.com/pupis_en_adopcion'
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
        ig: '@daleeeee_boooocaaaa'
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
        ig: 'https://www.instagram.com/vaquita.app'
    }
];