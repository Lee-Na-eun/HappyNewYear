import { useDispatch, useSelector } from 'react-redux';
import { NavWrap } from '../style/styleNav';
import { navOpen, navBooleanStatus } from '../redux/nav/nav';

function Nav() {
  const aaa = useSelector(navBooleanStatus);
  const dispatch = useDispatch();

  const handleNavOpen = () => {
    dispatch(navOpen());
  };

  console.log(aaa);

  return (
    <NavWrap>
      <ul>
        <li onClick={handleNavOpen}>이거슨 로고</li>
      </ul>
    </NavWrap>
  );
}

export default Nav;
