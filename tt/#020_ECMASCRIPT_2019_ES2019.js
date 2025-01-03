/*
    11:49
    
    ECMASCRIPT 2019/ES2019

    Array.prototype(flat, flatMap): to flatten array
        The flat() method of Array instances creates a new array with all sub-array elements concatenated into it 
        recursively up to the specified depth.

    Flat Method flats one level only by default.

    flat(2) -> 2 levels
    flat(3) -> 3 levels
    flat(infinity)) -> flattens unlimited level

    Object.Entries: The Object.entries() static method returns an array of a given object's own 
                    enumerable string-keyed property key-value pairs.
    Object.fromEntries: The Object.fromEntries() static method transforms a list of key-value pairs into an object.

    Object.fromEntries(): In 2017, object.entries()
    const myNewBioData = {
        name: 'Ajit',
        age: 26,
        education: 'CS'
    }

    const myNewArrBioData = Object.entries(myNewBioData);
    const myNewObjBioData = Object.fromEntries(myNewArrBioData);
    console.log(myNewBioData);
    console.log(myNewArrBioData);
    console.log(myNewObjBioData);

    Learning about flat in detail:
    const myNewBioData = {
    name: 'Ajit',
    age: 26,
    education: 'CS'
}

    const myNewArrBioData = Object.entries(myNewBioData);
    console.log(myNewBioData);
    console.log(myNewArrBioData);

    const myFlattenedArr = myNewArrBioData.flat();
    console.log(myFlattenedArr);

*/