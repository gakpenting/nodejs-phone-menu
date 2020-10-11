const ltrim=require("ltrim")
const Menu=require('./src/Main')
module.exports = (req, res) => {
  const uri = ltrim(req.url.split("?")[0],"/");
const data = req.body;
const config="https://"+req.headers.host;
switch(uri) {
  case "event":
    console.log(data)
    break;
  
  default:
    
    let ivr = new Menu(config);
        let method = uri.toLowerCase() +'Action';

        ivr[method](data);
        res.json(ivr.getStack())
        break;
    // code block
}
    
  }