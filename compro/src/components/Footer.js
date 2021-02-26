import '../assets/css/Nav.css';

export const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <div className="row">
          <div className="col-md-4 offset-md-1">
            <div className="row">
              <h1 className="foot-title">SIAP UNTUK MEMASUKI DUNIA DIGITAL?</h1>
            </div>
            <div className="row">
            </div>
            <div className="row">
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <input type="text" className="form-control inputFooter" placeholder="Username"/>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control inputFooter" placeholder="Surname"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input type="text" className="form-control inputFooter" placeholder="Email"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input type="password" className="form-control inputFooter" placeholder="Password"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input type="password" className="form-control inputFooter" placeholder="Repeat Password"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pl-55">
                <input type="checkbox" className="form-check-input checkBoxFooter" id="exampleCheck1" />
                <label className="form-check-label fontCheckFooter" for="exampleCheck1">Subscribe to the newsletter</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pl-3">
                <button className="btn btnSignUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
