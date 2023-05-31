import Feedback from 'components/Feedback';
import Section from 'components/Section';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <Feedback options={['good', 'neutral', 'bad']} />
      </Section>
    </div>
  );
};
