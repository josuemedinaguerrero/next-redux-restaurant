import dbConnect from "../../../util/mongo";
import ProductPizza from "../../../models/Product";

const handler = async (req, res) => {
   const { method, query } = req;
   const { id } = query;

   dbConnect();

   if (method === "GET") {
      try {
         const product = await ProductPizza.findById(id);
         res.json(product);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   if (method === "PUT") {
      try {
         const newProduct = await ProductPizza.create(req.body);
         res.status(201).json(newProduct);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   if (method === "DELETE") {
      try {
         await ProductPizza.findByIdAndDelete(id);
         res.json("The product has been deleted");
      } catch (error) {
         res.status(500).json(error);
      }
   }
};

export default handler;
