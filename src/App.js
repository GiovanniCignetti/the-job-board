import "./App.css";

// Import composants
import Title from "./Title";
import Job from "./Job";

function App() {
  return (
    <div className="container">
      <div className="header">
        <Title title={`The Job Board`} />
      </div>
      <div className="jobs">
        <Job
          borderColor={`red`}
          title={`Full Time Sales Associate - Sidney boutique`}
          contractType={`CDI`}
          country={`Australie`}
          city={`Sidney`}
        />

        <Job
          borderColor={`green`}
          title={`Agent de Sécurité - Pantin`}
          contractType={`CDI`}
          country={`France`}
          city={`Pantin`}
        />

        <Job
          borderColor={`yellow`}
          title={`Responsable d'Atelier (H/F)`}
          contractType={`CDD`}
          country={`France`}
          city={`Paris`}
        />

        <Job
          borderColor={`blue`}
          title={`Full Time Sales Associate - Sidney boutique`}
          contractType={`CDD`}
          country={`France`}
          city={`Paris`}
        />

        <Job
          borderColor={`pink`}
          title={`Développeur React.js`}
          contractType={`CDI`}
          country={`France`}
          city={`Paris`}
        />

        <Job
          borderColor={`red`}
          title={`Sales Associate Stockholm`}
          contractType={`CDI`}
          country={`Suède`}
          city={`Stockholm`}
        />

        <Job
          borderColor={`green`}
          title={`Vendeur/se - Crans Montana`}
          contractType={`CDI`}
          country={`Suisse`}
          city={`Crans-Montana`}
        />

        <Job
          borderColor={`yellow`}
          title={`CRM & Data Quality Analyst`}
          contractType={`CDI`}
          country={`USA`}
          city={`New York`}
        />

        <Job
          borderColor={`blue`}
          title={`Infirmier (H/F)`}
          contractType={`CDI`}
          country={`France`}
          city={`Pantin`}
        />
      </div>

      <div className="footer">
        Made with&nbsp;<span>React</span>&nbsp;at&nbsp;
        <span>Le Reacteur</span>&nbsp;By&nbsp;<span>gioVanni</span>
      </div>
    </div>
  );
}

export default App;
