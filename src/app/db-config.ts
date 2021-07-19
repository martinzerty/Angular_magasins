import { DBConfig} from "ngx-indexed-db";

export const dbConfig : DBConfig = {
    name : 'BuisDB',
    version : 1,
    objectStoresMeta : [{
        store: 'cartDB',
        storeConfig : { keyPath : 'index', autoIncrement : true },
        storeSchema : [
            { name: 'id', keypath : 'id', options : {unique: false} },
            { name : 'name', keypath : 'name', options : { unique : false } },
            { name : 'shopId', keypath : 'shopId', options : { unique : false }},
            { name : 'quantity', keypath : 'quantity', options : { unique: false}}
        ]
    },
    {
        store: 'avis',
        storeConfig : { keyPath : 'index', autoIncrement : true },
        storeSchema : [
            { name: 'avis', keypath : 'avis', options : {unique: false} },
        ]
    },

    ]
}