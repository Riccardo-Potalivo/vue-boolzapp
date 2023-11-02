
export const getIndex = function(id, array){
    return array.findIndex((el) => el.id === id)
};

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}