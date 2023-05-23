export const register = async (req, res) => {
  try {
    const newUser = new User({
      username: 'test',
      email: 'test@gmail.com',
      password: '12345',
      country: 'testorydesh',
    });

    await newUser.save();

    res.status(201).send('user created!');
  } catch (error) {
    res.status(500).send('user not creted!');
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send('something went wrong!');
  }
};

export const logout = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send('something went wrong!');
  }
};
