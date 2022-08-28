import dbConnect from "../../../util/mongo";
import OrderPizza from "../../../models/Order";

const handler = async (req, res) => {
   const { method } = req;

   await dbConnect();

   if (method === "GET") {
      try {
         const orders = await OrderPizza.find();
         res.status(200).json(orders);
      } catch (error) {
         res.status(500).json(error);
      }
   }
   if (method === "POST") {
      try {
         const newOrder = await OrderPizza.create(req.body);
         res.status(201).json(newOrder);
      } catch (error) {
         res.status(500).json(error);
      }
   }
};

export default handler;
