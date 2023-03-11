import fs from "fs";


export const writeToFile = (path, data) => {
    fs.writeFileSync(path, data);
};

export const readFromFile = (path) => {
    const content = JSON.parse(fs.readFileSync(path, {encoding: "utf-8"}));
    
    return content
};

export const appendToFile = (path, data) => {
    fs.appendFileSync(path, data)
};


