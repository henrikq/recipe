import db from "../../db";

export function get(req, res) {
    const { id } = req.params;

    const recipe = db.get('recipes').get(id).value()

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(recipe));
}