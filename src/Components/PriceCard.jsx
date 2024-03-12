import React from 'react';

export const PriceCard = ({ value }) => {
  return (
    <div id="root">
      <div className="container col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{value.plan}</h5>
            <h1 className="card-price text-center">{value.price}/month</h1>
            <hr />
            <ul className="tick-list">
              <li className='content'>
                <span className={`tick-mark ${value.user && value.highlight ? "fw-bold" : "text-muted"}`}></span>
                <span className='verify'>{value.userEnabler ? "✓" : "✗"}</span>
                <span className="tick-text">{value.user}</span>
              </li>
              <li className='content'>
                <span className={`tick-mark ${value.storage ? "" : "text-muted"}`}></span>
                <span className='verify'>{value.storageEnabler ? "✓" : "✗"}</span>
                <span className="tick-text">{value.storage}</span>
              </li> 
              <li className='content'>
                <span className={`tick-mark ${value.publicProjectsEnabler ? "" : "text-muted"}`}></span>
                <span className='verify'>{value.publicProjectsEnabler ? "✓" : "✗"}</span>
                <span className="tick-text">{value.publicProjects}</span>
              </li>
              <li className='content'>
                <span className={`tick-mark ${value.communityAccessEnabler ? "" : "text-muted"}`}></span>
                <span className='verify'>{value.communityAccessEnabler ? "✓" : "✗"}</span>
                <span className="tick-text">{value.communityAccess}</span>
              </li>
              <li className='content'>
                <span className={`tick-mark ${value.privateProjectsEnabler ? "" : "text-muted"}`}></span>
                <span className='verify'>{value.privateProjectsEnabler ? "✓" : "✗"}</span>
                <span className="tick-text">{value.privateProjects}</span>
              </li>
              <li className='content'>
                <span className={`tick-mark ${value.phoneSupportEnabler ? "" : "text-muted"}`}></span>
                <span className='verify'>{value.phoneSupportEnabler ? "✓" : "✗"}</span>
                <span className="tick-text">{value.phoneSupport}</span>
              </li>
              <li className='content'>
              <span className={`tick-mark ${value.subDomainEnabler ? "" : "text-muted"}`}></span>
                <span className='verify'>{value.subDomainEnabler ? "✓" : "✗"}</span>
                <span className="tick-text">{value.subDomain}</span>
              </li>
              <li className='content'>
                <span className={`tick-mark ${value.statusPlanEnabler ? "fw-bold" : "text-muted"}`}></span>
                <span className='verify'>{value.statusPlanEnabler ? "✓" : "✗"}</span>
                <span className="tick-text">{value.statusPlan}</span>
              </li>
            </ul>
            <div>
              <a href="#" onClick={() => window.location.reload()} className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
