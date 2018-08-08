import React, { Component, Fragment } from 'react'

class TheSistas extends Component {
  state = {
    sistas: [],
    newSis: {},
    sending: false
  }

  AdoptedSistasName = name =>
    this.setState(state => ({
      newSis: {
        ...state.newSis,
        name
      }
    }))

  AdoptedSistasPhoto = photo =>
    this.setState(state => ({
      newSis: {
        ...state.newSis,
        photo
      }
    }))

  addSis = e => {
    e.preventDefault()
    this.setState(() => ({
      sending: true
    }))
    setTimeout(() => {
      this.setState(state => ({
        newSis: { name: '', photo: '' },
        sistas: state.sistas.concat(state.newSis),
        sending: false
      }))
    }, 3000)
  }

  render() {
    const { sistas, newSis, sending } = this.state
    let progress
    if (sending) {
      progress = <section>
                  <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </section>
    }
    return (
      <Fragment>
        <AdoptASis
          onChangeName={this.AdoptedSistasName}
          onChangePhoto={this.AdoptedSistasPhoto}
          nameValue={newSis.name}
          photoValue={newSis.photo}
          Submit={this.addSis}
        />
        <hr/>
        {progress}
        <ListofSistas sistas={sistas} />
      </Fragment>
    )
  }
}

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
            onChange={e =>
              onChangePhoto(e.target.value)
            }
            placeholder="Sista's photo URL"
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-lg btn-success">YAAS KWEEN!</button>
      </form>
  </section>
)

const ListofSistas = ({ sistas }) => (
  <div className="row">
  {sistas.map(sis => (
    <div key={sis.name} className="col col-md-4">
      <div className="card">
        <img 
          className="card-img-top" 
          src={sis.photo} 
          alt={sis.name} 
        />
        <div className="card-body">
        <p className="card-text"><strong>Name</strong>: {sis.name}</p>
      </div>
      </div>
    </div>
  ))}
  </div>
)

export default TheSistas
