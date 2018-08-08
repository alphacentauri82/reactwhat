import React from 'react';

const ListofSistas = ({ sistas }) => (
  <div className="row">
    {sistas.map(sis => (
      <div key={sis.name} className="col col-md-4">
        <div className="card">
          <img className="card-img-top" src={sis.photo} alt={sis.name} />
          <div className="card-body">
            <p className="card-text">
              <strong>Name</strong>: {sis.name}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ListofSistas;
