import React from 'react';
import { PriceCard } from './Components/PriceCard'; 
import './App.css'

function App() {
  const data = [
    {
      plan: "FREE",
      price: "$0",
      user: "Single User",
      highlight: false,
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler: false,
      subDomainHighlight: false,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: false,
    },
    {
      plan: "PLUS",
      price: "$9",
      user: "5 User",
      highlight: false,
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      subDomainHighlight: true,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: false,
    },
    {
      plan: "PRO",
      price: "$49",
      user: "Unlimited User",
      highlight: false,
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      subDomainHighlight: true,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: true,
    },
  ];

  return (
    <div id='root'>
    <div className="App">
      <h1>Price Card Using React</h1>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((priceData, index) => (
              <PriceCard key={index} value={priceData} />
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}

export default App;
