export interface Typage_mag {
    id:number;
    name : string;
    adress : string;
    ville : string;
    zipcode : number;
    rate: number;
    stock : itemStock[];
    ouvert_days : ouvertJours;
}

export interface ouvertJours {
    lundi : [ boolean, number, number ],
    mardi : [ boolean, number, number ],
    mercredi : [ boolean, number, number ],
    jeudi : [ boolean, number, number ],
    vendredi : [ boolean, number, number ],
    samedi : [ boolean, number, number ],
    dimanche : [ boolean, number, number ],
};

// export interface

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
    ], ouvert_days :
        {
            lundi : [true, 8, 8],
            mardi : [true, 8, 8],
            mercredi : [true, 9, 8],
            jeudi : [true, 8, 8],
            vendredi : [true, 8, 7],
            samedi : [true, 9, 6],
            dimanche :  [false, 0, 0]
        }
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
    ], ouvert_days :
        {
            lundi : [true, 8, 8],
            mardi : [true, 8, 8],
            mercredi : [true, 9, 8],
            jeudi : [true, 8, 8],
            vendredi : [true, 8, 7],
            samedi : [true, 9, 6],
            dimanche :  [false, 0, 0]
        }
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
    ] , ouvert_days :
        {
            lundi : [true, 8, 8],
            mardi : [true, 8, 8],
            mercredi : [true, 9, 8],
            jeudi : [true, 8, 8],
            vendredi : [true, 8, 7],
            samedi : [true, 9, 6],
            dimanche :  [false, 0, 0]
        }
  },
  ];