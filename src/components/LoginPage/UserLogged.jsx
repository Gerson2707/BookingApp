

const userLogged = ({user, setUser}) => {
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser()
  }

  return (
    <div>
      <header>
        <img src={user.gender === 'female' ? '/user_female.jpeg' : '/user_male.jpeg'} alt="" />
      </header>
      <h2>{user.firstName} {user.lastName}</h2>
      <button onClick={handleLogout}>Loggout</button>
    </div>
  );
};
export default userLogged;
