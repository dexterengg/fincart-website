import React from "react";
import style from "../../assets/styles/Touch.module.css";
const Touchs = () => {
  return (
    <div className={style.maindiv}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-s-12 col-12">
            <div className={style.maindivheading}>
              <h2>get in touch</h2>
              <p>
                If you still need assitance please do not hesitate to contact us
                on
              </p>
            </div>
          </div>
          <div className="col-md-6 col-s-12 col-12">
            <form>
              <div className={style.name}>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="YOUR NAME"
                />
              </div>
              <div className={style.name}>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="EMAIL ID"
                />
              </div>
              <div className={style.name}>
                <input
                  type="mobile"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="MOBILE NUMBER"
                />
              </div>
              <div className={style.submit}>
                <button type="submit" className="buttons buttontwo">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touchs;
