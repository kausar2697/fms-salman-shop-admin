import { Link } from "react-router-dom";
import "./sidebar.css";
import { LineStyle } from "@material-ui/icons";
import LockIcon from '@material-ui/icons/Lock';

const SideBar = (props) => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Medicine Settings</h3>
            <ul className="sidebarList">
              <Link to="/addMedicine" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Add Medicine
                </li>
              </Link>

              <Link to="/medicineList" className="link">
                <li className="sidebarListItem">
                  <LineStyle className="sidebarIcon" />
                  My Medicine
                </li>
              </Link>

              {/* <Link to="/" className="link">
                <li className="sidebarListItem">
                  <LineStyle className="sidebarIcon" />
                  Sales
                </li>
              </Link> */}
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Sales Module</h3>
            <ul className="sidebarList">
              <Link to="/sales" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Sales
                </li>
              </Link>

              <Link to="/salesReport" className="link">
                <li className="sidebarListItem">
                  <LineStyle className="sidebarIcon" />
                  Sales Report
                </li>
              </Link>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Purchase Module</h3>
            <ul className="sidebarList">
              <Link to="/purchase" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Purchase
                </li>
              </Link>

              <Link to="/purchaseReport" className="link">
                <li className="sidebarListItem">
                  <LineStyle className="sidebarIcon" />
                  Purchase Report
                </li>
              </Link>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Alarming Medicine</h3>
            <ul className="sidebarList">
              <Link to="/alarmingReport" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Alarming Report
                </li>
              </Link>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Settings</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <LockIcon />
                  Logout
                </li>
              </Link>

              <Link to="/signin" className="link">
                <li className="sidebarListItem">
                  <LockIcon />
                  Login
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
