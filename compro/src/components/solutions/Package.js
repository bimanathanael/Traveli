import '../../assets/css/Home.css'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import playvideo from '../../assets/images/playvideo.png'

export const Package = () => {
  return (
    <>
      <div className="packageContainer">
        <div className="row ml-5 mt-7 sliderHero">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  DAPATKAN KEUNGGULAN KOMPETITIF BAGI BISNIS KEPARIWISATAAN ANDA
                </p>
              </div>
            </div>
            <div className="row sliderSolution mt-4">
              <div className="col-2  offset-md-1 item-hover heroSection-1 text-center pl-5 pr-5">
                <p className="heroSolutionSliderText mb-0">
                  LAYANAN TRAVEL
                </p>
              </div>
              <div className="col-2 item-hover heroSection-2 text-center pl-5 pr-5">
                <p className="heroSolutionSliderText mb-0">
                  LAYANAN TRANSPORTASI
                </p>
              </div>
              <div className="col-2 item-hover heroSection-3 text-center pl-5 pr-5">
                <p className="heroSolutionSliderText mb-0">
                  PENGINAPAN DAN AKOMODASI
                </p>
              </div>
              <div className="col-2 item-hover heroSection-4 text-center pl-5 pr-5">
                <p className="heroSolutionSliderText mb-0">
                  HIBURAN DAN REKREASI
                </p>
              </div>
              <div className="col-2 item-hover heroSection-5 text-center pl-5 pr-5">
                <p className="heroSolutionSliderText mb-0">
                  KULINER DAN CINDERAMATA
                </p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="heroSlider"/>
          </div> */}
        </div>
      </div>
    </>
  )
}

