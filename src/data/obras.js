//São informações detalhadas sobre obras de arte, incluindo nome da obra, imagem, artista, data de produção, tipo de obra e idade do artista. 
//Estes dados estão organizados em um array chamado obras e são utilizados para exibir ou trabalhar com informações sobre as obras de arte em um programa ou sistema.

const obras =[
    {
        nomeObra: "Noite estrelada",
        url:"  https://static.todamateria.com.br/upload/an/oi/anoiteestrelada-cke.jpg",
        artista: "Van Vogh",
        dataProducao: "1889",
        tipo: "Oleo sobre tela",
        idadeArtista: "falecido com 37 anos",


    },

    {
        nomeObra: "O Nascimento de Vênus",
        url:"https://www.infoescola.com/wp-content/uploads/2012/04/nascimento-de-venus-scaled.jpg",
        artista: "Sandro Botticelli",
        dataProducao: "1485",
        tipo: "Pintura histórica",
        idadeArtista: "falecido com 37 anos",
    },
 

    {
        nomeObra: "O grito.",
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg/1200px-Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg",
        artista: "Edvard Munch",
        dataProducao: "1893",
        tipo: "Óleo sobre tela",
        idadeArtista: "falecido com 37 anos",

    },
    {
        nomeObra: "Ivan, o Terrível",
        url:"https://aventurasnahistoria.uol.com.br/media/_versions/capa_ivan_o_terrivel_pintura_filho_morto_historia_widelg.jpeg",
        artista: "Ilia Repin",
        dataProducao: " 1883",
        tipo: " Pintura histórica",
        idadeArtista: "falecido com 86 anos",
    },

       

    {
        nomeObra: "A persistência da memória",
        url:"https://cdn.culturagenial.com/imagens/persistencia-da-memoria-salvador-dali.jpg",
        artista: "Salvador Dali.",
        dataProducao: "1931",
        tipo: "Alegoria",
        idadeArtista: "falecido com 84 anos",
    },

    {
        nomeObra: "Abaporu",
        url:"https://4.bp.blogspot.com/-DCRiGpFta4Y/WLMetsefC8I/AAAAAAAABHw/f7NYMWnFok8aV_JDssTw2rpanKe1sOOQACLcB/s1600/abaporu%2B-%2Bronperlim.com.br.jpg",
        artista: "Tarsila do Amaral",
        dataProducao: "1928",
        tipo: "óleo sobre tela",
        idadeArtista: "falecido com 86 anos",
    },

    {
        nomeObra: "Britto Garden",
        url:"https://www.mirabiledecor.com.br/media/catalog/product/cache/1/image/770x540/040ec09b1e35df139433887a97daa66f/0/0/00006pqd.jpg",
        artista: "Romero Britt",
        dataProducao: " 2000",
        tipo: " Pintura histórica",
        idadeArtista: "60 anos",
    },

    {
        nomeObra: "Impressão, nascer do sol",
        url:"https://arteeartistas.com.br/wp-content/uploads/2017/01/Impress%C3%A3o-Sol-Nascente.-Claude-Monet.jpg",
        artista: "Claude Monet",
        dataProducao: "1872",
        tipo: "Tinta a óleo ",
        idadeArtista: "falecido com 86 anos",
    }, 

    {
        nomeObra: "Amendoeira em Flor",
        url:"https://i.pinimg.com/736x/85/96/08/859608c82b2c97a614607a259b77facf.jpg",
        artista: "Van gogh",
        dataProducao: " 1890",
        tipo: "Tinta a óleo ",
        idadeArtista: "falecido com 37 anos",
    },

    {
        nomeObra: "Mona lisa",
        url:"https://www.otempo.com.br/image/contentid/policy:1.2010717:1559857715/Capturar-JPG.JPG?f=3x2&w=1224",
        artista: "Leonardo da vinci",
        dataProducao: " 1890",
        tipo: "Tinta a óleo ",
        idadeArtista: "falecido com 67 anos",
    }, 
/////////////////////
    {
        nomeObra: "Operários”",
        url:"https://blog.grafittiartes.com.br/wp-content/uploads/2020/02/operarios.jpg",
        artista: "Tarsila do Amaral",
        dataProducao: "1933",
        tipo: "óleo sobre tela",
        idadeArtista: "falecido com 86 anos",
    },

    {
        nomeObra: "O Lavrador de Café",
        url:"https://blog.grafittiartes.com.br/wp-content/uploads/2020/10/O-Lavrador-de-Caf%C3%A9.jpg",
        artista: "Candido Portinari",
        dataProducao: "1934",
        tipo: " óleo sobre tela",
        idadeArtista: "falecido com 58 anos",
    },

    {
        nomeObra: "As Meninas",
        url:"https://juorosco.files.wordpress.com/2019/02/90392779_o.jpg?w=736",
        artista: "Diego Velázquez ",
        dataProducao: "1656",
        tipo: "Barroco ",
        idadeArtista: "falecido com 61 anos",
    },

    {
        nomeObra: "Samba",
        url:"https://www.spescoladeteatro.org.br/wp-content/uploads/2022/01/pilula_samba_di_cavalcanti_destaque.jpg",
        artista: "Di Cavalcanti",
        dataProducao: " 1925 ",
        tipo: " modernismo no Brasil",
        idadeArtista: " falecido com 79 anos",
    },

    {
        nomeObra: "Carregador de Flores",
        url:"https://www.historiadasartes.com/wp-content/uploads/2016/04/m_carregador.jpg",
        artista: "Diego Rivera",
        dataProducao: "  1935",
        tipo: "Tinta a óleo ",
        idadeArtista: "falecido com 70 anos",
    },

    {
        nomeObra: "A face da guerra",
        url:"https://static.todamateria.com.br/upload/ob/ra/obras-de-salvador-dali-og.jpg",
        artista: "Salvador Dalí",
        dataProducao: " 1940 ",
        tipo: " óleo sobre tela",
        idadeArtista: "falecido com 84 anos",
        
    },


];
export default obras;