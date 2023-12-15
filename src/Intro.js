import GlobalStats from './GlobalStats';

function Intro (props) {
  return (

    <div id="intro">
      <h2>Who is an asylum seeker?</h2>

      <p>An asylum seeker is a person who has left their country and is seeking protection from persecution and serious human rights violations in another country, but who hasn't yet been legally recognized as a refugee and is waiting to receive a decision on their asylum claim (<a href="https://www.amnesty.org/en/what-we-do/refugees-asylum-seekers-and-migrants/">Amnesty 2023</a>).</p>

      <p>Seeking asylum is a human right and is protected by international law (<a href="https://humanrights.gov.au/our-work/asylum-seekers-and-refugees">AHRC 2023</a>).</p>

      {props.loading === false && props.error === null
      ?
      <p>According to the UN Refugee Agency, there are currently <strong>{new Intl.NumberFormat("en", {notation: "compact", compactDisplay: "long"}).format(props.total)}</strong> asylum seekers globally.</p>
      : 
      null
      }
    </div>

  );
}; // Intro()
export default Intro;