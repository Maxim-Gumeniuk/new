import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { GoMarkGithub } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../../features/user';
import { Protected } from '../../../types/routes/protected';
import { StyledBox } from './google-auth';

export const GitHubAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const provider = new GithubAuthProvider();
  const auth = getAuth();
  const handleGitHubAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      const user = result.user;

      if (user.email) {
        dispatch(actions.setUser(user!.email));
      }


      navigate(`${Protected.ROOT_PATH}`);
    } catch (error) {

      throw new Error(`${error}`)
    }
  }

  return (
    <StyledBox>
      <GoMarkGithub onClick={handleGitHubAuth} size={25}/>
    </StyledBox>
  )
}