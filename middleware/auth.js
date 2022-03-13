export default ({ redirect }) => {
  const loggedin = false;
  console.log('auth middleware');
  if (!loggedin) {
    return redirect('/')
  }



}
