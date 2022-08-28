import dbConnect from "../../../util/mongo";
import OrderPizza from "../../../models/Order";

const handler = async (req, res) => {
   const {
      method,
      query: { id },
   } = req;

   await dbConnect();

   if (method === "GET") {
      try {
         const order = await OrderPizza.findById(id);
         res.json(order);
      } catch (err) {
         res.status(500).json(err);
      }
   }

   if (method === "PUT") {
      try {
         const orderUpdated = await OrderPizza.findByIdAndUpdate(id, req.body, {
            new: true,
         });
         res.json(orderUpdated);
      } catch (err) {
         res.status(500).json(err);
      }
   }

   if (method === "DELETE") {
   }
};

export default handler;
