import dbConnect from "../../../util/mongo";
import ProductPizza from "../../../models/Product";

const handler = async (req, res) => {
   const { method } = req;

   dbConnect();

   if (method === "GET") {
      try {
         const products = await ProductPizza.find();
         res.json(products);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   if (method === "POST") {
      try {
         const newProduct = await ProductPizza.create(req.body);
         res.status(201).json(newProduct);
      } catch (error) {
         res.status(500).json(error);
      }
   }
};

export default handler;
