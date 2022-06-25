import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <NotFoundStyle className="section">
      <section className="overlay"></section>
      <div className="container">
        <button className="btn btn-outline" onClick={goBack}>
          Goto Back
        </button>
        <p className="h5">Comming soon..</p>
      </div>
    </NotFoundStyle>
  );
};

export const NotFoundStyle = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  section {
    background: rgb(128, 194, 189);
    background: -moz-linear-gradient(
      90deg,
      rgba(128, 194, 189, 0.5130427170868348) 0%,
      rgba(245, 245, 245, 1) 20%,
      rgba(245, 245, 245, 1) 80%,
      rgba(128, 194, 189, 0.5074404761904762) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(128, 194, 189, 0.5130427170868348) 0%,
      rgba(245, 245, 245, 1) 20%,
      rgba(245, 245, 245, 1) 80%,
      rgba(128, 194, 189, 0.5074404761904762) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(128, 194, 189, 0.5130427170868348) 0%,
      rgba(245, 245, 245, 1) 20%,
      rgba(245, 245, 245, 1) 80%,
      rgba(128, 194, 189, 0.5074404761904762) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#80c2bd",endColorstr="#80c2bd",GradientType=1);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    text-align: center;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      /* display: block; */
    }
    p {
      padding-block: var(--fs-10);
      align-self: center;
    }
  }
`;
