import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
   const username = useLogin();
   return (
      <div>
         <div>
            <h1>Profile</h1>
            Username: {username}
         </div>
      </div>
   );
};

export default ProfilePage;
