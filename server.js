let express = require('express');
let path = require('path');
let router = express.Router();
let upload = require('./utils/upload');

let port = process.env.PORT || 8888;
let app = express();

app.use(express.static('./frontend'));

app.use(router);

router.post('/upload', upload.single('file'), function(req, res, next) {
	res.json({code: 200, msg: '上传成功！'});
});

app.listen(port, () => {
    console.log(`服务已成功启动，端口: ${port}`);
});