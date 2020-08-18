import db from "../../db";

export function get(req, res) {
    const recipes = db.get('recipes')
        .entries()
        .map(([id, { title }]) => ({ id, title }))
        .value()
    
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(recipes));
}