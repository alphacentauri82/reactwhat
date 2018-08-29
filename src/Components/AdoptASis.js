import React from 'react';

const AdoptASis = ({
  onChangeName,
  onChangePhoto,
  Submit,
  nameValue,
  photoValue
}) => (
  <section className="frmContainer">
    <form onSubmit={Submit}>
      <div className="form-group">
        <input
          required
          value={nameValue}
          onChange={e => onChangeName(e.target.value)}
          placeholder="Sista's name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          required
          value={photoValue}
          onChange={e => onChangePhoto(e.target.value)}
          placeholder="Sista's photo URL"
          type="text"
          className="form-control"
        />
      </div>
      <div className="center">
        <button type="submit" className="btn btn-lg btn-dark">
          YAAS KWEEN!
        </button>
      </div>
    </form>
  </section>
);

export default AdoptASis;
