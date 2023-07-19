import Ticket from "../models/ticket.js";
import User from "../models/users.js";
import { generateTambulaTickets } from "../helper/ticketGenerate.js";

export const createTicket = async (req, res) => {
  try {
    const { numberOfTicketSet, userId } = req.body;

    if (numberOfTicketSet <= 0) {
      return res
        .status(400)
        .json({ error: "Number of tickets should be greater than 0" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    for (let i = 0; i < numberOfTicketSet; i++) {
      const tickets = generateTambulaTickets();

    for (let [ticketId, data] of Object.entries(tickets)) {
        const ticketList = new Ticket({
          ticketData: data,
          user: user._id,
        });
        await ticketList.save();
      }
    }
    res.status(201).json({ message: "Ticket created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create ticket" });
  }
};

export const fetchTickets = async (req, res) => {
  const userId = req.params.userId;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;

  try {
    const totalCount = await Ticket.countDocuments({ user: userId });

    const totalPages = Math.ceil(totalCount / limit);
    const skip = (page - 1) * limit;

    const tickets = await Ticket.find({ user: userId }).skip(skip).limit(limit);
    res.json({
      totalCount,
      totalPages,
      currentPage: page,
      tickets,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


  
