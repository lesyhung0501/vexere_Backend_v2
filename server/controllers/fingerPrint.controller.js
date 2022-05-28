
const fingerPrint =  (req, res) => {
    
    // console.log(req.fingerprint);
    try {
        res.status(200).send(req.fingerprint);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    fingerPrint,
}