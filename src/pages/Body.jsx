import "./body.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import docimage from "../image/doc-img-1.jpg";
import serviceDoc from "../image/sliderimg1.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";

export default function Body() {
  return (
    <div>
      <div className="bodyContainer">
        <div className="leftSession">
          <h2>Best Medical Responsive HTML5 Multipurpose Template</h2>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages..
          </p>

          <div className="scheduleItemsContainer">
            <div className="scheduleItems">
              <div className="items">
                <CheckCircleOutlineIcon className="mark" />
                <h6>EMERGENCY CASE</h6>
              </div>
              <p>
                Excepteur sint occaecat cupidatat non roident,
                <br />
                sunt in culpa qui officia deserunt mollit
              </p>
            </div>
            <div className="scheduleItems">
              <div className="items">
                <CheckCircleOutlineIcon className="mark" />
                <h6>EMERGENCY CASE</h6>
              </div>
              <p>
                Excepteur sint occaecat cupidatat non roident,
                <br />
                sunt in culpa qui officia deserunt mollit
              </p>
            </div>
            <div className="scheduleItems">
              <div className="items">
                <CheckCircleOutlineIcon className="mark" />
                <h6>EMERGENCY CASE</h6>
              </div>
              <p>
                Excepteur sint occaecat cupidatat non roident,
                <br />
                sunt in culpa qui officia deserunt mollit
              </p>
            </div>
            <div className="scheduleItems">
              <div className="items">
                <CheckCircleOutlineIcon className="mark" />
                <h6>EMERGENCY CASE</h6>
              </div>
              <p>
                Excepteur sint occaecat cupidatat non roident,
                <br />
                sunt in culpa qui officia deserunt mollit
              </p>
            </div>
          </div>
        </div>

        <div className="middleSession"></div>

        <div className="rightSession">
          <div className="schedule">
            <div className="scheduleTime">
              <p>monday</p>
              <p>8.00 - 16.00</p>
            </div>

            <div className="scheduleTime">
              <p>tuesday</p>
              <p>8.00 - 16.00</p>
            </div>

            <div className="scheduleTime">
              <p>wednesday</p>
              <p>8.00 - 16.00</p>
            </div>

            <div className="scheduleTime">
              <p>thursday</p>
              <p>8.00 - 16.00</p>
            </div>

            <div className="scheduleTime">
              <p>friday</p>
              <p>8.00 - 16.00</p>
            </div>

            <div className="scheduleTime">
              <p>saturday</p>
              <p>8.00 - 16.00</p>
            </div>

            <div className="scheduleTime">
              <p>sunday</p>
              <p>8.00 - 16.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="middleSessionContainer">
        <h1>We are Team of Young Professionals Passionate in our Work</h1>
        <hr className="demark" />
        <p>
          Duis autem vel eum iriure dolor in hendrerit n vuew lputate velit esse
          molestie conseu vel
          <br /> illum dolore eufe ugiat nulla facilisis at vero.
        </p>
        <div className="middleImage">
          <ArrowForwardIosIcon className="arrowfront" />
          <ArrowBackIosIcon className="arrowback" />
          <img src={docimage} alt="Doctor" />
          <img src={docimage} alt="Doctor" />
          <img src={docimage} alt="Doctor" />
          <img src={docimage} alt="Doctor" />
          <img src={docimage} alt="Doctor" />
          <img src={docimage} alt="Doctor" />
          <img src={docimage} alt="Doctor" />
        </div>
        <h1>service</h1>
        <hr className="demark" />
        <p>
          Duis autem vel eum iriure dolor in hendrerit n vuew lputate velit esse
          molestie conseu vel
          <br /> illum dolore eufe ugiat nulla facilisis at vero.
        </p>
      </div>
      <div className="serviceListContainer">
        <div className="serviceIconList">
          <div className="icon">
            <VisibilityIcon className="serviceIcon" />
          </div>
          <div className="sericeListContent">
            <h1>EYE SPECIALIST</h1>
            <p>
              Excepteur sint occaecat cupidatat non <br /> proident, sunt in
              culpa qui officia <br />
              deserunt mollit random text.
            </p>
          </div>
        </div>
        <div className="serviceIconList">
          <div className="icon">
            <VisibilityIcon className="serviceIcon" />
          </div>
          <div className="sericeListContent">
            <h1>EYE SPECIALIST</h1>
            <p>
              Excepteur sint occaecat cupidatat non <br /> proident, sunt in
              culpa qui officia <br />
              deserunt mollit random text.
            </p>
          </div>
        </div>
        <div className="serviceIconList">
          <div className="icon">
            <VisibilityIcon className="serviceIcon" />
          </div>
          <div className="sericeListContent">
            <h1>EYE SPECIALIST</h1>
            <p>
              Excepteur sint occaecat cupidatat non <br /> proident, sunt in
              culpa qui officia <br />
              deserunt mollit random text.
            </p>
          </div>
        </div>
        <div className="serviceIconList">
          <div className="icon">
            <VisibilityIcon className="serviceIcon" />
          </div>
          <div className="sericeListContent">
            <h1>EYE SPECIALIST</h1>
            <p>
              Excepteur sint occaecat cupidatat non <br /> proident, sunt in
              culpa qui officia <br />
              deserunt mollit random text.
            </p>
          </div>
        </div>
        <div className="serviceIconList">
          <div className="icon">
            <VisibilityIcon className="serviceIcon" />
          </div>
          <div className="sericeListContent">
            <h1>EYE SPECIALIST</h1>
            <p>
              Excepteur sint occaecat cupidatat non <br /> proident, sunt in
              culpa qui officia <br />
              deserunt mollit random text.
            </p>
          </div>
        </div>
        <div className="serviceIconList">
          <div className="icon">
            <VisibilityIcon className="serviceIcon" />
          </div>
          <div className="sericeListContent">
            <h1>EYE SPECIALIST</h1>
            <p>
              Excepteur sint occaecat cupidatat non <br /> proident, sunt in
              culpa qui officia <br />
              deserunt mollit random text.
            </p>
          </div>
        </div>
      </div>
      <div className="testomonialServiceList">
        <img src={serviceDoc} alt="testimonial" className="testimonialImage" />
        <div className="testimonialItems">
          <div className="icon">
            <LocalHotelIcon className="testimonialIcon" />
          </div>
          <div className="c">
            <h1>1750</h1>
            <p>BEDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
