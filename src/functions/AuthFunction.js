const AuthFunction = (supabase) => {
  return {
    // signs up user, does not sign in user
    async signupUser(email, password, name) {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: { data: { name: name } },
      });
      console.log(data, error);
      return [data, error];
    },

    // signs in user
    async signIn(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log(data);
      return [data, error];
    },

    // get current session, if user is not logged in, this will be null
    async getSession() {
      const { data, error } = await supabase.auth.getSession();
      console.log(data);
      return data;
    },

    async logout() {
      const { error } = await supabase.auth.signOut();
      console.log(error);
    },

    // gets the auth events that occur (not sure if we even need this)
    eventListener() {
      supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session);
      });
    },
  };
};

export default AuthFunction;
