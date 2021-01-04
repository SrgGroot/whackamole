export default signOut = () => {
  Auth.signOut()
    .then(() => this.props.onStateChange('signedOut'))
    .catch(err => console.log('err: ', err))
}