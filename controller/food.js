const food = require("../model/food");





module.exports.insert = async (req, res) => {
    const body = req.body;
    
    try {
        const results = await food.insert(body);
    } catch(err) {
        
    }

}

module.exports.update = async (req, res) => {
    const body = req.body;
}


module.exports.delete = async (req, res) => {
    const body = req.body;
}

module.exports.review = async (req, res) => {
    const body = req.body;
}