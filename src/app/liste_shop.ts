export interface Typage_mag {
    id:number;
    name : string;
    adress : string;
    ville : string;
    zipcode : number;
    rate: number;
    stock : itemStock[];
    week : Day[];
}

export interface Day{
    name : string;
    ouvert : boolean;
    heures: Hour;
};

export interface Hour{
    open_hour : number;
    open_min : number;
    close_hour : number;
    close_min : number;
}

export interface itemStock {
    id : number;
    name : string;
    quantity : number;
};




export const Liste_Mag: Typage_mag[] = [
    {id:0, name:"Panama Market", adress:"8 Rue Jean Valjean", 
    ville: "Panam-city", zipcode:75018, rate:4.8,
    stock : [
      {
        id:0,
        name:"Banane",
        quantity: 3
      },
      {
        id: 1,
        name: "Quètche",
        quantity:50
      },
      {
        id:8,
        name: "Pomme",
        quantity: 34
      }
    ], week : [
        {
            name : "Lundi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 30
            }
        },
        {
            name : "Mardi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 30
            }
        },
        {
            name : "Mercredi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 0
            }
        },
        {
            name : "Jeudi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 30
            }
        },
        {
            name : "Vendredi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 18,
                close_min : 30
            }
        },
        {
            name : "Samedi",
            ouvert : true,
            heures : {
                open_hour : 9,
                open_min : 0,
                close_hour : 17,
                close_min : 30
            }
        },
        {
            name : "Dimanche",
            ouvert : false,
            heures : {
                open_hour : 0,
                open_min : 0,
                close_hour : 0,
                close_min : 0
            }
        },
    ]
  },
  {id:1, name:"Street Resto", adress:"521 Avenue Mozar", 
    ville: "Clermont-Ferrand", zipcode:63100, rate:3.9,
    stock : [
      {
        id:3,
        name:"Poire",
        quantity: 39
      },
      {
        id: 2,
        name: "Poivron",
        quantity:7
      },
      {
        id:4,
        name: "Orange",
        quantity: 28
      }
    ], week : [
        {
            name : "Lundi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 0
            }
        },
        {
            name : "Mardi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 0
            }
        },
        {
            name : "Mercredi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 0
            }
        },
        {
            name : "Jeudi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 30
            }
        },
        {
            name : "Vendredi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 18,
                close_min : 0
            }
        },
        {
            name : "Samedi",
            ouvert : true,
            heures : {
                open_hour : 9,
                open_min : 30,
                close_hour : 17,
                close_min : 30
            }
        },
        {
            name : "Dimanche",
            ouvert : false,
            heures : {
                open_hour : 0,
                open_min : 0,
                close_hour : 0,
                close_min : 0
            }
        },
    ]
  },
  {id:2, name:"Matelo Ravitalle", adress:"1 Rue du Port", 
    ville: "Lorient", zipcode:54000, rate:3.2,
    stock : [
      {
        id:0,
        name:"Banane",
        quantity: 6
      },
      {
        id: 5,
        name: "Pèche",
        quantity:74
      },
      {
        id: 6,
        name: "Fraise",
        quantity: 132
      }
    ] ,week : [
        {
            name : "Lundi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 30
            }
        },
        {
            name : "Mardi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 30
            }
        },
        {
            name : "Mercredi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 0
            }
        },
        {
            name : "Jeudi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 20,
                close_min : 30
            }
        },
        {
            name : "Vendredi",
            ouvert : true,
            heures : {
                open_hour : 8,
                open_min : 0,
                close_hour : 18,
                close_min : 30
            }
        },
        {
            name : "Samedi",
            ouvert : true,
            heures : {
                open_hour : 9,
                open_min : 0,
                close_hour : 17,
                close_min : 0
            }
        },
        {
            name : "Dimanche",
            ouvert : true,
            heures : {
                open_hour : 10,
                open_min : 0,
                close_hour : 16,
                close_min : 0
            }
        },
    ]
  },
  ];