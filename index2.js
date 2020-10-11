const ltrim=require("ltrim")
module.exports = (req, res) => {
  const uri = ltrim(req.url.split("?")[0],"/");
const data = req.body;
switch(uri) {
  case "event":
    console.log(data)
    break;
  
  default:
    // code block
}
    res.json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
    })
  }