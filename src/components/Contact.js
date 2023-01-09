import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // Send the form submission to Contact Form 7.
    axios.post('https://dev-rbabrand.pantheonsite.io/wp-json/contact-form-7/v1/contact-forms/{63}/feedback', {
      name,
      email,
      message,
    })
    .then(response => {
      setStatus('success');
    })
    .catch(error => {
      setStatus('error');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={event => setName(event.target.value)} />
      <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      <textarea value={message} onChange={event => setMessage(event.target.value)} />
      <button type="submit">Submit</button>
      {status === 'success' && <p>Thanks for your message!</p>}
      {status === 'error' && <p>There was an error sending your message. Please try again.</p>}
    </form>
  );
}

export default Contact;