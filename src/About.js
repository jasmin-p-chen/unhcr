import { useState } from "react";

function About () {
  
  const [openDiv, setOpenDiv] = useState(null);

  const handleClick = (paragraphId) => {
    setOpenDiv(
      paragraphs.id === openDiv 
      ?
      null
      :
      openDiv)
  }

  const paragraphs = [
    {
      id: 1, 
      name: "refugees",
      title: "People seeking international protection: refugees, asylum seekers and others in refugee-like situations",
      description: "Persons in need of international protection comprises prospective asylum-seekers, asylum-seekers, recognized refugees and persons with complementary, subsidiary and temporary forms of protection, and others in refugee-like situations. This category also includes children of refugees or asylum-seekers who may have been born in the country of asylum but did not acquire citizenship of that country and are therefore in need of international protection. These groups, normally excluding prospective asylum-seekers, are counted in UNHCR's asylum-seeker and refugee statistics, and they are counted under the numbers of forcibly displaced persons.",
    },
    {
      id: 2, 
      name: "others",
      title: "Other people in need of international protection",
      description: "Persons in need of international protection comprises prospective asylum-seekers, asylum-seekers, recognized refugees and persons with complementary, subsidiary and temporary forms of protection, and others in refugee-like situations. This category also includes children of refugees or asylum-seekers who may have been born in the country of asylum but did not acquire citizenship of that country and are therefore in need of international protection. These groups, normally excluding prospective asylum-seekers, are counted in UNHCR's asylum-seeker and refugee statistics, and they are counted under the numbers of forcibly displaced persons.",
    },
    {
      id: 3, 
      name: "internal",
      title: "Internally displaced persons",
      description: "IDPs are people who have been forced to leave or abandon their homes, and who have not crossed an internationally recognized border. People flee within their own countries for example to avoid the effects of armed conflict, situations of generalized violence, violations of human rights or natural- and human-made disasters. UNHCR compiles data only on conflict-generated IDPs to whom the organization extends protection and/or assistance. As such, UNHCR statistics do not provide a complete overview of global internal displacement.",
    },    
    {
      id: 4, 
      name: "stateless",
      title: "Stateless People",
      description: "There is no formal definition of a person who is not considered to be a national of any state, or to be or undetermined nationality, however, UNHCR uses the working definition of a person who lacks proof of possession of any nationality and who at the same time has or is perceived as having links to a State other than the one they are living in. Persons with undetermined nationality have in many cases a migratory history that leads to an unresolved nationality status, and Statelessness can often, but not necessarily, overlap with forced displacement, which makes data collection complicated and sometimes inconsistent.,"
    }
  ];

  return (

    <div id="about">
      <h1>About this App</h1>

      <p>This app has been developed using data collected and shared by the United Nations Refugee Agency (UNHCR).</p> 
      
      <p>UNHCR has provides free public access to their datasets, which includes:</p>
      
      <ul>
        <li>global resettlement statistics</li>
        <li>population data on populatins of concern, and </li>
        <li>refugee statistics.</li>
      </ul>

      <p>This app has been developed out of an interest to understand the datasets available on the UNHCR API. UNHCR has access to multiple datasets, so while this App is still in development, please consult the <a href="https://www.unhcr.org/refugee-statistics/">UNHCR Refugee Data Finder</a> for more detailed information and statistics, or to access the API yourself.</p>

      <h1>Terms and definitions used in this App</h1>

      <p>This data is sourced directly from the UNHCR datasets, so categories and data collection methodologies adhere to UNHCR policies. Some of the most relevant definitions are included below, but for detailed information, please consult the <a href="https://www.unhcr.org/refugee-statistics/methodology/">Methodology</a> section of the UNHCR Refugee Data Finder. Data on this page has been sourced from the UNHCR website.</p>

      <h2>What is forced displacement?</h2>
      Anyone fleeing persecution, conflict, or human rights abuses has a right to seek protection in another country is considered to be forcibly displaced.

      <h2>Populations included as forcibly displaced in this data.</h2>

      <div>
        {paragraphs.map(paragraph => 
          <div
            key={paragraph.id}
            onclick={ () => handleClick(paragraph.id) }
            className={ openDiv === paragraph.id
            ?
            '' 
            : 
            paragraph.id}>
              {paragraph.title}
              </div>
            )}
      </div>
   </div>
  )     
}; // About()
export default About;