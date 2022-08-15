import styled from 'styled-components';

const AvatarImg = styled.img`
    width: 40px;
    border-radius: 100%;

    :hover {
      cursor: pointer;
    }
`;

export default function Avatar({ src, onClick }) {
  const diceBearSeed = 'niceness' + Date.now;
  // Dicebear: https://avatars.dicebear.com/
  const source = src || `https://avatars.dicebear.com/api/open-peeps/:${diceBearSeed}.svg`;

  return (
    // The referrerPolicy attribute helps solve intermittent 403 permission problems when getting the 
    //  user's Google avatar pic. See: https://stackoverflow.com/questions/40570117/http403-forbidden-error-when-trying-to-load-img-src-with-google-profile-pic
    //  Note: camelCase the attribute name here in React.
    <AvatarImg src={source} alt="Avatar" onClick={onClick} referrerPolicy="no-referrer"></AvatarImg>
  );
}
