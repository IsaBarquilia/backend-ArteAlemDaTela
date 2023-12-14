//São informações detalhadas sobre obras de arte, incluindo nome da obra, imagem, artista, data de produção, tipo de obra e idade do artista. 
//Estes dados estão organizados em um array chamado obras e são utilizados para exibir ou trabalhar com informações sobre as obras de arte em um programa ou sistema.

const obras = [
    {
        nomeObra: "Noite estrelada",
        url: "  https://static.todamateria.com.br/upload/an/oi/anoiteestrelada-cke.jpg",
        artista: "Van Vogh",
        idadeArtista: "falecido com 37 anos",
        dataProducao: "1889",
        tipo: "Óleo sobre tela"
    },

    {
        nomeObra: "O Nascimento de Vênus",
        url: "https://www.infoescola.com/wp-content/uploads/2012/04/nascimento-de-venus-scaled.jpg",
        artista: "Sandro Botticelli",
        idadeArtista: "falecido com 37 anos",
        dataProducao: "1485",
        tipo: "Pintura histórica", 
        idadeArtista: "falecido com 37 anos"

    },


    {
        nomeObra: "O grito.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg/1200px-Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg",
        artista: "Edvard Munch",
        idadeArtista: "falecido com 37 anos",
        dataProducao: "1893",
        tipo: "Óleo sobre tela",
        idadeArtista: "falecido com 37 anos"

    },
    {
        nomeObra: "Ivan, o Terrível",
        url: "https://aventurasnahistoria.uol.com.br/media/_versions/capa_ivan_o_terrivel_pintura_filho_morto_historia_widelg.jpeg",
        artista: "Ilia Repin",
        idadeArtista: "falecido com 86 anos",
        dataProducao: " 1883",
        tipo: " Pintura histórica",

        idadeArtista: "falecido com 86 anos"


    },



    {
        nomeObra: "A persistência da memória",
        url: "https://cdn.culturagenial.com/imagens/persistencia-da-memoria-salvador-dali.jpg",
        artista: "Salvador Dali.",
        idadeArtista: "falecido com 84 anos",
        dataProducao: "1931",
        tipo: "Alegoria",

        idadeArtista: "falecido com 84 anos"

    },

    {
        nomeObra: "Abaporu",
        url: "https://4.bp.blogspot.com/-DCRiGpFta4Y/WLMetsefC8I/AAAAAAAABHw/f7NYMWnFok8aV_JDssTw2rpanKe1sOOQACLcB/s1600/abaporu%2B-%2Bronperlim.com.br.jpg",
        artista: "Tarsila do Amaral",
        idadeArtista: "falecido com 86 anos",
        dataProducao: "1928",
        tipo: "Óleo sobre tela"


    },

    {
        nomeObra: "Britto Garden",
        url: "https://www.arteprints.com.br/wp-content/uploads/2014/09/Britto-Garden.jpg",
        artista: "Romero Britt",
        dataProducao: " 2000",
        tipo: " Pintura histórica",
        artista: "Romero Britt",
        idadeArtista: "60 anos",
        tipo: " Pintura histórica"

    },

    {
        nomeObra: "Impressão, nascer do sol",
        url: "https://arteeartistas.com.br/wp-content/uploads/2017/01/Impress%C3%A3o-Sol-Nascente.-Claude-Monet.jpg",
        artista: "Claude Monet",
        idadeArtista: "falecido com 86 anos",
        dataProducao: "1872",
        tipo: "Tinta a óleo ",
        idadeArtista: "falecido com 86 anos"



    },

    {
        nomeObra: "Amendoeira em Flor",
        url: "https://i.pinimg.com/736x/85/96/08/859608c82b2c97a614607a259b77facf.jpg",
        artista: "Van gogh",
        idadeArtista: "falecido com 37 anos",
        dataProducao: " 1890",
        tipo: "Tinta a óleo ",

        idadeArtista: "falecido com 37 anos"



    },

    {
        nomeObra: "Mona lisa",
        url: "https://www.otempo.com.br/image/contentid/policy:1.2010717:1559857715/Capturar-JPG.JPG?f=3x2&w=1224",
        artista: "Leonardo da vinci",
        idadeArtista: "falecido com 67 anos",
        descricao: "Leonardo da Vinci eternizou a Mona Lisa com sua maestria técnica e habilidade de retratar a expressão humana. A enigmática mulher sorrindo, os detalhes meticulosos e a técnica sfumato contribuem para a aura misteriosa e atemporal desta obra-prima."
    },

    {
        nomeObra: "Operários”",
        url: "https://blog.grafittiartes.com.br/wp-content/uploads/2020/02/operarios.jpg",
        artista: "Tarsila do Amaral",
        dataProducao: " 1890",
        idadeArtista: "falecido com 68 anos",
        tipo: "Tinta a óleo"

    },


    {
        nomeObra: "O Lavrador de Café",

        url: "https://blog.grafittiartes.com.br/wp-content/uploads/2020/10/O-Lavrador-de-Caf%C3%A9.jpg",
        artista: "Candido Portinari",
        idadeArtista: "falecido com 58 anos",
        dataProducao: "1934",
        tipo: "Óleo sobre tela"

    },

    {
        nomeObra: "As Meninas",
        url: "https://juorosco.files.wordpress.com/2019/02/90392779_o.jpg?w=736",
        artista: "Diego Velázquez ",
        idadeArtista: "falecido com 61 anos",
        dataProducao: "1656",
        tipo: "Barroco"


    },

    {
        nomeObra: "Samba",
        url: "https://www.spescoladeteatro.org.br/wp-content/uploads/2022/01/pilula_samba_di_cavalcanti_destaque.jpg",
        artista: "Di Cavalcanti",
        idadeArtista: " falecido com 79 anos",
        dataProducao: " 1925 ",
        tipo: "Modernismo no Brasil"

    },

    {
        nomeObra: "Carregador de Flores",
        url: "https://www.historiadasartes.com/wp-content/uploads/2016/04/m_carregador.jpg",
        artista: "Diego Rivera",
        idadeArtista: "falecido com 70 anos",
        dataProducao: " 1935",
        tipo: "Tinta a óleo "

    },

    {
        nomeObra: "A face da guerra",
        url: "https://static.todamateria.com.br/upload/ob/ra/obras-de-salvador-dali-og.jpg",
        artista: "Salvador Dalí",
        idadeArtista: "falecido com 84 anos",
        dataProducao: " 1940 ",
        tipo: " Óleo sobre tela"


    },
    {
        nomeObra: "Paint in Portugal",
        url: "https://images.squarespace-cdn.com/content/v1/5377840fe4b0e8c9b2adf441/1543589584292-ONRV1KF8M7ELLNEDH9M0/PiP+-+Julia+B+-+Works",
        artista: "Julia Barminova",
        idadeArtista: " 19 anos",
        dataProducao: " 2012 ",
        tipo: "Aquarela",


    },
    {
        nomeObra: "Campos das flores coloridas",
        url: "https://marcelosantosarte.com.br/wp-content/uploads/Produtos/Preview/Pintura/10-27-20-Preview-Campo-Flores-Coloridas.jpg",
        artista: "Marcelo Santos",
        idadeArtista: " 53 anos",
        dataProducao: " 2010 ",
        tipo: "Aquarela"

    },

];
export default obras;