const logger = (req, res, next)=>{
    console.log({
         httpMethod: req.method,
         url: req.url,
         date: new Date().toLocaleString()})
    next();
};

module.exports = {logger};
 