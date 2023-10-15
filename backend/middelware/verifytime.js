module.exports.VerifyTime = (req,res,next) => {
    const currenteDate = new Date ();
    const currentHoure = currenteDate.getHours();
    const currentDay = currenteDate.getDay();
    if(
        currentHoure >= 9 &&
        currentHoure <= 21 &&
        currentDay >= 1 &&
        currentDay <= 7
    ) {
        return res.status(200).json ({msg:"validate"});
    } else{
        return res.status(403).json ({msg:"out of working houres"});
    }
};