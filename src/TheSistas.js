import React, { Component, Fragment } from 'react';
import AdoptASis from './Components/AdoptASis';
import ListofSistas from './Components/ListofSistas';
import Progress from './Components/Progress';
<<<<<<< HEAD
=======

>>>>>>> Instructions

class TheSistas extends Component {
  state = {
    sistas: [],
    newSis: {},
    sending: false
  };

  AdoptedSistasName = name =>
    this.setState(({ newSis }) => ({
      newSis: {
        ...newSis,
        name
      }
    }));

  AdoptedSistasPhoto = photo =>
    this.setState(({ newSis }) => ({
      newSis: {
        ...newSis,
        photo
      }
    }));

  addSis = e => {
    e.preventDefault();
    this.setState({
      sending: true
    });

    setTimeout(() => {
      this.setState(({ sistas, newSis }) => ({
        newSis: { name: '', photo: '' },
        sistas: sistas.concat(newSis),
        sending: false
      }));
    }, 3000);
  };

  render() {
    const { sistas, newSis: { photo, name }, sending } = this.state;
    return (
      <Fragment>
        <div id="container" class="container-fluid">

        </div>
        <AdoptASis
          onChangeName={this.AdoptedSistasName}
          onChangePhoto={this.AdoptedSistasPhoto}
          nameValue={name}
          photoValue={photo}
          Submit={this.addSis}
        />
        <hr />
        {sending ? <Progress /> : null}
        <ListofSistas sistas={sistas} />
      </Fragment>
    );
  }
}

export default TheSistas;
