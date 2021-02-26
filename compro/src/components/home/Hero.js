import '../../assets/css/Home.css'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import playvideo from '../../assets/images/playvideo.png'

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="row ml-3">
          <div className="col-md-6">
            <div className="row pl-3">
              <h1 className="hero-title">DIGITALLY TRANSFORM YOUR TRAVEL AND TOURISM BUSINESS</h1>
            </div>
            <div className="row">
              <div className="col-md-9 pl-3">
                <p className="hero-subtitle">
                  Traveli is a digital tourism platformaTraveli is a digital asdf asd tourism platforma Traveli is a digital tourism platforma 
                  Traveli is a digital tourism platforma Tr
                </p>
              </div>
            </div>
            <div className="row mt-5 pl-0">
              <div className="col-3 pl-0 mb-5">
                <button type="button" className="btn btn-traveli btn-v3-hero">
                  <div className="row">
                    <div className="col-3 ml-0 pl-0">
                      <a className="arrow"> <ArrowForwardIosOutlinedIcon/> </a> 
                    </div>
                    <div className="col btn-font">
                      Try it for Free
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="row">
              {/* <img src={playvideo} data-toggle="modal" data-target="#exampleModal"/> */}
              {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
              </button> */}
              <div className="modal-body">
                <iframe width="120" height="115"
                // src="https://www.youtube.com/embed/YuAya0hRjwU?autoplay=1&mute=1">
                src="https://www.youtube.com/embed/YuAya0hRjwU">
                </iframe>
              </div>

              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Traveli</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <iframe width="420" height="315"
                      src="https://www.youtube.com/embed/YuAya0hRjwU">
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

