const express = require('express');
const app = express();

app.use(express.json());

// „udawana baza danych”
let tickets = [];
let nextId = 1;

// GET /tickets – lista zgłoszeń
app.get('/tickets', (req, res) => {
  res.status(200).json(tickets);
});

// POST /tickets – dodanie zgłoszenia
app.post('/tickets', (req, res) => {
  const { title, description } = req.body;

  const newTicket = {
    id: nextId++,
    title,
    description,
    status: 'OPEN'
  };

  tickets.push(newTicket);
  res.status(201).json(newTicket);
});

app.delete('/tickets/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = tickets.findIndex(ticket => ticket.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Ticket not found' });
  }

  tickets.splice(index, 1);
  res.status(204).send();
});

app.put('/tickets/:id/close', (req, res) => {
  const id = parseInt(req.params.id);

  const ticket = tickets.find(ticket => ticket.id === id);

  if (!ticket) {
    return res.status(404).json({ message: 'Ticket not found' });
  }

  ticket.status = 'CLOSED';
  res.status(200).json(ticket);
});


//zmiana

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
