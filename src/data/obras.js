//São informações detalhadas sobre obras de arte, incluindo nome da obra, imagem, artista, data de produção, tipo de obra e idade do artista. 
//Estes dados estão organizados em um array chamado obras e são utilizados para exibir ou trabalhar com informações sobre as obras de arte em um programa ou sistema.

const obras = [
    {
        nomeObra: "Noite estrelada",
        url: "  https://static.todamateria.com.br/upload/an/oi/anoiteestrelada-cke.jpg",
        artista: "Van Vogh",
        dataProducao: "1889",
        tipo: "Oleo sobre tela",
        idadeArtista: "falecido com 37 anos",
        descricao: "Noite Estrelada é uma icônica obra de Van Gogh que retrata um céu noturno estrelado com um turbilhão de cores e formas. A pintura reflete a intensidade emocional do artista. O Nascimento de Vênus."

    },

    {
        nomeObra: "O Nascimento de Vênus",
        url: "https://www.infoescola.com/wp-content/uploads/2012/04/nascimento-de-venus-scaled.jpg",
        artista: "Sandro Botticelli",
        dataProducao: "1485",
        tipo: "Pintura histórica",
        idadeArtista: "falecido com 37 anos",
        descricao:  "Pintada por Sandro Botticelli durante o Renascimento italiano, O Nascimento de Vênus é uma representação clássica do nascimento mitológico da deusa do amor e da beleza. A figura graciosa de Vênus emergindo do mar é retratada com delicadeza e harmonia, refletindo a influência da mitologia clássica e a busca pela perfeição estética."
    },


    {
        nomeObra: "O grito.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg/1200px-Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg",
        artista: "Edvard Munch",
        dataProducao: "1893",
        tipo: "Óleo sobre tela",
        idadeArtista: "falecido com 37 anos",
        descricao: "O Grito de Edvard Munch é uma obra expressionista que se destaca pela intensidade emocional e pela representação angustiante da condição humana. A figura central, com um rosto distorcido, parece gritar silenciosamente em meio a um cenário surreal. As cores vibrantes e as linhas ondulantes contribuem para a atmosfera perturbadora e visceral da obra."
    },
    {
        nomeObra: "Ivan, o Terrível",
        url: "https://aventurasnahistoria.uol.com.br/media/_versions/capa_ivan_o_terrivel_pintura_filho_morto_historia_widelg.jpeg",
        artista: "Ilia Repin",
        dataProducao: " 1883",
        tipo: " Pintura histórica",
        idadeArtista: "falecido com 86 anos",
        descricao:  "Pintada por Ilia Repin, Ivan, o Terrível é uma obra que retrata o czar russo em um momento de introspecção e poder. A pintura histórica captura a personalidade complexa de Ivan IV, conhecido por seu reinado tumultuado. A expressão no rosto do czar e os detalhes da composição narram uma história rica em simbolismo e significado histórico."
        
    },



    {
        nomeObra: "A persistência da memória",
        url: "https://cdn.culturagenial.com/imagens/persistencia-da-memoria-salvador-dali.jpg",
        artista: "Salvador Dali.",
        dataProducao: "1931",
        tipo: "Alegoria",
        idadeArtista: "falecido com 84 anos",
        descricao:" Salvador Dalí desafia a percepção do tempo em A Persistência da Memória. Os relógios derretidos representam a fluidez do tempo e a relatividade da realidade. Esta obra surrealista é uma representação visual impactante que convida o espectador a refletir sobre a natureza efêmera do tempo."
    },

    {
        nomeObra: "Abaporu",
        url: "https://4.bp.blogspot.com/-DCRiGpFta4Y/WLMetsefC8I/AAAAAAAABHw/f7NYMWnFok8aV_JDssTw2rpanKe1sOOQACLcB/s1600/abaporu%2B-%2Bronperlim.com.br.jpg",
        artista: "Tarsila do Amaral",
        dataProducao: "1928",
        tipo: "óleo sobre tela",
        idadeArtista: "falecido com 86 anos",
        descricao:"Criada por Tarsila do Amaral durante o movimento antropofágico brasileiro, Abaporu apresenta uma figura antropomórfica em um ambiente exótico. A obra reflete a fusão de influências modernistas e indígenas, destacando a identidade cultural única do Brasil."
    },

    {
        nomeObra: "Britto Garden",
        url: "https://www.mirabiledecor.com.br/media/catalog/product/cache/1/image/770x540/040ec09b1e35df139433887a97daa66f/0/0/00006pqd.jpg",
        artista: "Romero Britt",
        dataProducao: " 2000",
        tipo: " Pintura histórica",
        idadeArtista: "60 anos",
        descricao:"Britto Garden de Romero Britto é uma explosão de cores e formas características da pop art contemporânea. A obra, criada em 2000, reflete o estilo vibrante e otimista do artista, com padrões geométricos e cores audaciosas que transmitem uma sensação de alegria e vitalidade."
    },

    {
        nomeObra: "Impressão, nascer do sol",
        url: "https://arteeartistas.com.br/wp-content/uploads/2017/01/Impress%C3%A3o-Sol-Nascente.-Claude-Monet.jpg",
        artista: "Claude Monet",
        dataProducao: "1872",
        tipo: "Tinta a óleo ",
        idadeArtista: "falecido com 86 anos",
        descricao:"Claude Monet, um dos principais artistas impressionistas, captura a atmosfera efêmera de um nascer de sol sobre a água em Impressão, Nascer do Sol. As pinceladas soltas e a paleta de cores suaves caracterizam a obra, que é uma representação emblemática do movimento impressionista"
    },

    {
        nomeObra: "Amendoeira em Flor",
        url: "https://i.pinimg.com/736x/85/96/08/859608c82b2c97a614607a259b77facf.jpg",
        artista: "Van gogh",
        dataProducao: " 1890",
        tipo: "Tinta a óleo ",
        idadeArtista: "falecido com 37 anos",
        descricao:"Van Gogh retrata a natureza com sua característica expressividade em Amendoeira em Flor. A obra, pintada em 1890, apresenta amendoeiras em flor com pinceladas vigorosas e cores vibrantes, refletindo a paixão do artista pela natureza."
    
    },

    {
        nomeObra: "Mona lisa",
        url: "https://www.otempo.com.br/image/contentid/policy:1.2010717:1559857715/Capturar-JPG.JPG?f=3x2&w=1224",
        artista: "Leonardo da vinci",
        dataProducao: " 1890",
        tipo: "Tinta a óleo ",
        idadeArtista: "falecido com 67 anos",
        descricao:"Leonardo da Vinci eternizou a Mona Lisa com sua maestria técnica e habilidade de retratar a expressão humana. A enigmática mulher sorrindo, os detalhes meticulosos e a técnica sfumato contribuem para a aura misteriosa e atemporal desta obra-prima."
    },
    /////////////////////
    {
        nomeObra: "Operários”",
        url: "https://blog.grafittiartes.com.br/wp-content/uploads/2020/02/operarios.jpg",
        artista: "Tarsila do Amaral",
        dataProducao: "1933",
        tipo: "óleo sobre tela",
        idadeArtista: "falecido com 86 anos",
    },

    {
        nomeObra: "O Lavrador de Café",
        url: "https://blog.grafittiartes.com.br/wp-content/uploads/2020/10/O-Lavrador-de-Caf%C3%A9.jpg",
        artista: "Candido Portinari",
        dataProducao: "1934",
        tipo: " óleo sobre tela",
        idadeArtista: "falecido com 58 anos",
    },

    {
        nomeObra: "As Meninas",
        url: "https://juorosco.files.wordpress.com/2019/02/90392779_o.jpg?w=736",
        artista: "Diego Velázquez ",
        dataProducao: "1656",
        tipo: "Barroco ",
        idadeArtista: "falecido com 61 anos",
    },

    {
        nomeObra: "Samba",
        url: "https://www.spescoladeteatro.org.br/wp-content/uploads/2022/01/pilula_samba_di_cavalcanti_destaque.jpg",
        artista: "Di Cavalcanti",
        dataProducao: " 1925 ",
        tipo: " modernismo no Brasil",
        idadeArtista: " falecido com 79 anos",
    },

    {
        nomeObra: "Carregador de Flores",
        url: "https://www.historiadasartes.com/wp-content/uploads/2016/04/m_carregador.jpg",
        artista: "Diego Rivera",
        dataProducao: "  1935",
        tipo: "Tinta a óleo ",
        idadeArtista: "falecido com 70 anos",
    },

    {
        nomeObra: "A face da guerra",
        url: "https://static.todamateria.com.br/upload/ob/ra/obras-de-salvador-dali-og.jpg",
        artista: "Salvador Dalí",
        dataProducao: " 1940 ",
        tipo: " óleo sobre tela",
        idadeArtista: "falecido com 84 anos",

    },


];
export default obras;