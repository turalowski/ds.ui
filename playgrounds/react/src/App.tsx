import React, { useState } from 'react';
import { Typography, Input, Button, Margin } from '@ds.ui/react';

const App = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="ds-margin-md ds-width-xl">
      <Margin top bottom space="lg">
        <Typography>Welcome to Design System</Typography>
      </Margin>

      <form onSubmit={handleSubmit}>
        <Margin bottom space="md">
          <Input
            label="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Margin>

        <Button title="Subscribe">Subscribe</Button>

        {submitted && (
          <Margin top space="sm">
            <Typography>Thanks for subscribing!</Typography>
          </Margin>
        )}
      </form>
    </div>
  );
};

export default App;
