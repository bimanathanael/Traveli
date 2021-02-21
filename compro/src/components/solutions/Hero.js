import '../../assets/css/Home.css'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import playvideo from '../../assets/images/playvideo.png'

export const Hero = () => {
  return (
    <>
      <div className="heroSulutions">
        <div className="row ml-3">
          <div className="col-md-8">
            <div className="row">
              <h1 className="hero-title">TRANSFORMASI DIGITAL BISNIS KEPARIWISATAAN</h1>
            </div>
            <div className="row">
              <div className="col-md-7 hero-subtitle">
                <p>
                  Traveli adalah platform digital kepriwisataan yang menampilkan, mendistribusikan, 
                  dan menjual produk-produk wisata yang anda miliki dalam satu sistem yang terintegrasi.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-3">
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
              <div className="col-3">
                <img src={playvideo} data-toggle="modal" data-target="#exampleModal"/>
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Launch demo modal
                </button> */}

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
        </div>
    </>
  )
}

