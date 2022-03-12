export default {
  login() {},
  async signup(context, payload) {
    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9-OdTv2c9ZzbS9NDak3OnAJN06MbEB4Y',
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    } catch (error) {
      throw new Error(this.responseData.message || 'Failed to authenticate.');
    }
  },
};
