import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../service/firebase/config';
import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { actions, user } from '../../../features/user';
import { useAppSelector } from '../../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { Protected } from '../../../types/routes/protected';

export const StyledBox = styled.div`
  cursor: pointer;
  padding: 5px;
  `
export const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const authGoogle = auth;
  const dispatch = useDispatch();
  const currentUser = useAppSelector(user);
  const navigate = useNavigate();

  const googlePopup = async () => {

    if (currentUser) {
      return;
    }
    try {
      const result = await signInWithPopup(authGoogle, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(token);
      const user = result.user;
      const { email } = user;
      console.log(user)
      dispatch(actions.setUser(email!));
      navigate(`${Protected.ROOT_PATH}`)
    } catch (error) {
      console.error(error);
    }

  }



  return (
    <StyledBox>
      <FcGoogle onClick={googlePopup} size={25}/>
    </StyledBox>
  )
}