
export const categorias = [
    {
        "userBusca": ["Flor", "Flores", "Floricultura", "Planta", "Semente"],
        "id": 1,
        "categoria": "Florista",
    },
    {
        "userBusca": ["Escola", "Colegio", "Cesarino", "Joao Ometto"],
        "id": 2,
        "categoria": "Escola",
    },
    {
        "userBusca": ["Sorveteria","Sorvete", "Açaí", "Açai","Milk-Shake", "Milk Shake", ],
        "id": 3,
        "categoria": "Sorveteria",
    }
];

export const lojas = [
    {
        "catId": 1,
        "name": "Floricultura Bella Flor",
        "imagem": './img/BellaFlor.jpeg',
        "endereco": 'Rua Lídia Borba',
        "bairro": 'Jardim Iracema',
        "number": '(19) 98273-5371'
    },
    {
        "catId": 2,
        "name": "Escola Cesarino Borba",
        "imagem": './img/Cesarino.png',
        "endereco": 'Rua Cesarino Borba',
        "bairro": 'Centro',
        "number": '(19) 3456-1172'
    },
    {
        "catId": 1,
        "name": 'Floricultura Claudio',
        "imagem": './img/FlorClaudio.jpeg',
        "endereco": 'Rua João de Souza Barreto',
        "bairro": 'Centro',
        "number": '(19) 99636-5117'
    },
    {
        "catId": 3,
        "name": 'Gela Sorvetes',
        "imagem": './img/logoGela.jpeg',
        "endereco": 'Rua Alcides Oliveiro Frasson, 240',
        "bairro": 'Res. Cidade Nova',
        "number": '(19) 99724-9753'
    },
    {
        "catId": 3,
        "name": 'Gral Açaiteria',
        "imagem": './img/logoGral.jpeg',
        "endereco": 'Rua Dom Pedro II, 619',
        "bairro": 'Centro',
        "number": '(19) 99840-3999'
    }
];

export default {categorias, lojas};
