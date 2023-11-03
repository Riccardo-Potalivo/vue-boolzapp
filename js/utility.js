
export const getIndex = function(id, array){
    if(array !== -1){
        return array.findIndex((el) => el.id === id)
    }
};

export const getRndNumber = function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}