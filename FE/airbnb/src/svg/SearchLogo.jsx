import styled from 'styled-components';

const SearchLogo = () => {
  return (
    <SearchLogoStyle>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <g fill="none">
          <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
        </g>
      </svg>
    </SearchLogoStyle>
  );
};

export default SearchLogo;

const SearchLogoStyle = styled.div`
  svg {
    display: block;
    fill: none;
    height: 16px;
    width: 16px;
    stroke: currentcolor;
    stroke-width: 4;
    overflow: visible;
  }
`;
