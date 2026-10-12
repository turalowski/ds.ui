import React, { useState } from 'react';
import { Accordion, Badge, Button, Input, Margin, Switch, Tabs, Typography } from '@ds.ui/react';
import Section, { Subsection } from './Section';

const ButtonsDemo = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <Subsection title="Button">
      <div className="showcase-row">
        <Button onClick={() => setClicks(count => count + 1)}>Primary</Button>
        <Button variant="secondary" onClick={() => setClicks(count => count + 1)}>Secondary</Button>
        <Button variant="danger" onClick={() => setClicks(count => count + 1)}>Danger</Button>
        <Button disabled>Disabled</Button>
      </div>
      <Typography variant="caption" className="showcase-muted">Clicked {clicks} times</Typography>
    </Subsection>
  );
};

const InputsDemo = () => {
  const [email, setEmail] = useState('');
  const emailError = email && !email.includes('@') ? 'Please enter a valid email address' : undefined;

  return (
    <Subsection title="Input">
      <div className="showcase-grid showcase-grid-inputs">
        <Input label="Name" placeholder="Jane Doe" />
        <Input
          label="Email"
          type="email"
          placeholder="Type to validate"
          value={email}
          onChange={event => setEmail(event.target.value)}
          error={emailError}
        />
        <Input label="With error" defaultValue="not-an-email" error="Please enter a valid email address" />
        <Input label="Disabled" placeholder="Not editable" disabled />
      </div>
    </Subsection>
  );
};

const BadgesDemo = () => (
  <Subsection title="Badge">
    <div className="showcase-row">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="success" count={12}>Inbox</Badge>
    </div>
  </Subsection>
);

const SwitchDemo = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <Subsection title="Switch">
      <div className="showcase-row">
        <Switch label="Uncontrolled" />
        <Switch
          label={`Notifications ${notifications ? 'on' : 'off'}`}
          checked={notifications}
          onChange={setNotifications}
        />
        <Switch label="Disabled" disabled />
        <Switch label="Disabled on" defaultChecked disabled />
      </div>
    </Subsection>
  );
};

const TabsDemo = () => (
  <Subsection title="Tabs">
    <Tabs
      items={[
        { label: 'Overview', content: <Typography>Use the arrow keys, Home and End to move between tabs.</Typography> },
        { label: 'Details', content: <Typography>Tabs can hold any React content.</Typography> },
        { label: 'Disabled', content: <Typography>Not reachable.</Typography>, disabled: true },
        { label: 'Settings', content: <Typography>Disabled tabs are skipped by the keyboard.</Typography> },
      ]}
    />
  </Subsection>
);

const AccordionDemo = () => (
  <Subsection title="Accordion">
    <Accordion
      allowMultiple
      defaultExpanded={[0]}
      items={[
        { title: 'What is ds.ui?', content: 'A design system built with React, TypeScript and SCSS.' },
        { title: 'Can several sections be open?', content: 'Yes, when allowMultiple is set, as in this example.' },
        { title: 'Is it keyboard accessible?', content: 'Headers are buttons, so Tab, Enter and Space work.' },
      ]}
    />
  </Subsection>
);

const MarginDemo = () => (
  <Subsection title="Margin">
    <div className="showcase-row">
      {(['xs', 'md', 'xl'] as const).map(space => (
        <div key={space} className="showcase-margin-demo">
          <Margin space={space}>
            <div className="showcase-margin-content">space="{space}"</div>
          </Margin>
        </div>
      ))}
    </div>
  </Subsection>
);

const Components = () => (
  <Section id="components" title="Components" description="Every component exported by @ds.ui/react, live.">
    <ButtonsDemo />
    <InputsDemo />
    <BadgesDemo />
    <SwitchDemo />
    <TabsDemo />
    <AccordionDemo />
    <MarginDemo />
  </Section>
);

export default Components;
