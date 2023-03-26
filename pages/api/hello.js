export default function handler(req, res) {
  res.status(200).json({ 
    name: 'vinCoelho',
    text: 'Hello, my friends.',
    description: 'Just testing the endpoint',
    beautifulArray: ['xablau', 'macacos me mordam']
  });
}
