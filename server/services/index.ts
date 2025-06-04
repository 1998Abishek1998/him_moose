import UserService from "./user.service";

const services = () => {
  const users = new UserService();

  return {
    users,
  };
};

export default services();
