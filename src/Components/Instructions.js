import React from 'react';

const Instructions = () => (
  <section>
    <div className="center">
      <button type="button" class="btn btn-lg btn-dark" data-toggle="modal" data-target="#exampleModal">
        Instructions
      </button>
    </div>
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Instructions</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul>* Paste your twitter profile pic url</ul>
            <ul>* Write your name</ul>
            <ul>* Yaaas Kween! - Ta daaa! 💅</ul>
          </div>
          <div className="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Instructions;
