const getAllTransaction = async (req,res)=>{
    try {
        const transections =await transectionmodel.find({});
        res.status(200).json(transections);
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
const addTransection = async (req,res)=>{
    try {
        const newTransection = new transectionmodel(req.body);
        await newTransection.save();
        res.status(201).send("Transection created");
    }
    catch (error){
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports ={getAllTransaction,addTransection}