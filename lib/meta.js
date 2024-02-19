export function getPages(input){
    return Object.entries(input || {}).map(entry => {
       const key = entry[0];
       const value = entry[1];

       if(typeof value === 'string' || value instanceof String){
        return {
            key,
            title: value
        }
       }

       if(typeof value === 'object'){
        return {
            key,
            title: value.title || key
        }
       }

       return {
        key,
        value: key
       }
    })
} 