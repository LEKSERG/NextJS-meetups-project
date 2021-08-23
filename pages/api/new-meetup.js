import meetups from '../../meetups';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = {
      id: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      ...req.body,
    };

    meetups.push(data);

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
